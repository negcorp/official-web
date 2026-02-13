export interface SajuPreviewRequest {
  birth_year: number;
  birth_month: number;
  birth_day: number;
  gender: "M" | "F";
  timezone: string;
  is_lunar?: boolean;
  is_leap_month?: boolean;
  birth_hour?: number | null;
  birth_minute?: number | null;
}

interface PillarValue {
  name: string;
  hanja: string;
}

export interface SajuPreviewResponse {
  animal: string;
  gender: string;
  pillars: {
    year: PillarValue | null;
    month: PillarValue | null;
    day: PillarValue | null;
    hour: PillarValue | null;
  };
  birth_info?: {
    solar?: {
      year: number;
      month: number;
      day: number;
    };
  };
  ohaeng_summary?: {
    mok?: number;
    hwa?: number;
    to?: number;
    geum?: number;
    su?: number;
  };
}

export class SajuPreviewApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly type: "network" | "http" | "invalid_response" = "http"
  ) {
    super(message);
  }
}

export function isSajuPreviewServiceUnavailableError(
  error: SajuPreviewApiError
): boolean {
  if (error.type !== "http") {
    return true;
  }
  if (error.status === 429) {
    return true;
  }
  return (error.status ?? 0) >= 500;
}

function buildUrl(baseUrl: string, path: string) {
  const normalized = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  return `${normalized}${path}`;
}

export async function checkSajuPreviewAvailability(
  baseUrl: string
): Promise<boolean> {
  let response: Response;
  try {
    response = await fetch(buildUrl(baseUrl, "/openapi.json"), {
      method: "GET",
      cache: "no-store",
    });
  } catch {
    return false;
  }

  if (!response.ok) {
    return false;
  }

  let data: { paths?: Record<string, unknown> };
  try {
    data = (await response.json()) as {
      paths?: Record<string, unknown>;
    };
  } catch {
    return false;
  }

  return Boolean(data.paths?.["/api/v1/saju/preview"]);
}

export async function requestSajuPreview(
  baseUrl: string,
  payload: SajuPreviewRequest,
  language: string
): Promise<SajuPreviewResponse> {
  let response: Response;

  try {
    response = await fetch(buildUrl(baseUrl, "/api/v1/saju/preview"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": language,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new SajuPreviewApiError(
      "Network error while requesting saju preview.",
      undefined,
      "network"
    );
  }

  if (!response.ok) {
    let message = `Request failed with status ${response.status}.`;
    try {
      const errorBody = (await response.json()) as { detail?: string };
      if (errorBody?.detail) {
        message = errorBody.detail;
      }
    } catch {
      // Keep fallback message when body is not JSON.
    }

    throw new SajuPreviewApiError(message, response.status, "http");
  }

  try {
    return (await response.json()) as SajuPreviewResponse;
  } catch {
    throw new SajuPreviewApiError(
      "Invalid response payload.",
      response.status,
      "invalid_response"
    );
  }
}
