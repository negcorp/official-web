export interface SajuPreviewRequest {
  birth_year: number;
  birth_month: number;
  birth_day: number;
  gender: "M" | "F";
  timezone: string;
  latitude?: number | null;
  longitude?: number | null;
  is_lunar?: boolean;
  is_leap_month?: boolean;
  birth_hour?: number | null;
  birth_minute?: number | null;
}

export interface BirthplacePresetItem {
  key: string;
  country_code: string;
  country_name: string;
  city_name: string | null;
  display_name: string;
  preset_level: "country" | "city" | string;
  timezone: string;
  latitude: number;
  longitude: number;
  supported_locales: string[];
  is_recommended: boolean;
}

export interface BirthplacePresetListResponse {
  locale: string;
  supported_languages: string[];
  presets: BirthplacePresetItem[];
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
  try {
    const response = await fetch(buildUrl(baseUrl, "/"), {
      method: "GET",
      cache: "no-store",
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function fetchBirthplacePresets(
  baseUrl: string,
  language: string
): Promise<BirthplacePresetListResponse> {
  let response: Response;

  try {
    const query = new URLSearchParams({ lang: language }).toString();
    response = await fetch(buildUrl(baseUrl, `/api/v1/saju/birthplace-presets?${query}`), {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": language,
      },
    });
  } catch {
    throw new SajuPreviewApiError(
      "Network error while loading birthplace presets.",
      undefined,
      "network"
    );
  }

  if (!response.ok) {
    throw new SajuPreviewApiError(
      `Failed to load birthplace presets (${response.status}).`,
      response.status,
      "http"
    );
  }

  try {
    return (await response.json()) as BirthplacePresetListResponse;
  } catch {
    throw new SajuPreviewApiError(
      "Invalid birthplace presets payload.",
      response.status,
      "invalid_response"
    );
  }
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
