const DEFAULT_APP_STORE_URL = "https://apps.apple.com";
const DEFAULT_PLAY_STORE_URL = "https://play.google.com/store/apps";
const DEFAULT_SAJU_API_BASE_URL = "https://api.nine20.net";

export function getAppStoreUrl(): string {
  return process.env.NEXT_PUBLIC_APPSTORE_URL || DEFAULT_APP_STORE_URL;
}

export function getPlayStoreUrl(): string {
  return process.env.NEXT_PUBLIC_PLAYSTORE_URL || DEFAULT_PLAY_STORE_URL;
}

export function getSajuApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_SAJU_API_BASE_URL;
}

export function getPreferredStoreByUserAgent(
  userAgent: string
): "appstore" | "playstore" {
  const ua = userAgent.toLowerCase();
  if (ua.includes("android")) {
    return "playstore";
  }
  return "appstore";
}
