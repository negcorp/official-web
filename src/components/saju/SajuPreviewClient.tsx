"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import {
  SajuPreviewApiError,
  checkSajuPreviewAvailability,
  isSajuPreviewServiceUnavailableError,
  requestSajuPreview,
  type SajuPreviewResponse,
} from "@/lib/sajuPreviewApi";

type AvailabilityStatus = "checking" | "available" | "unavailable";

type FormState = {
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: "M" | "F";
  timezone: string;
  isLunar: boolean;
  isLeapMonth: boolean;
  birthHour: string;
  birthMinute: string;
};

const DEFAULT_API_BASE_URL = "https://api.nine20.net";

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL;
}

function formatPillar(name?: string, hanja?: string, fallback?: string) {
  if (!name && !hanja) {
    return fallback ?? "";
  }
  if (name && hanja) {
    return `${name} (${hanja})`;
  }
  return name || hanja || fallback || "";
}

export default function SajuPreviewClient({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [status, setStatus] = useState<AvailabilityStatus>("checking");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>("");
  const [result, setResult] = useState<SajuPreviewResponse | null>(null);
  const [form, setForm] = useState<FormState>(() => ({
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "M",
    timezone:
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Seoul",
    isLunar: false,
    isLeapMonth: false,
    birthHour: "",
    birthMinute: "",
  }));

  const refreshAvailability = useCallback(async () => {
    setStatus("checking");
    const available = await checkSajuPreviewAvailability(getApiBaseUrl());
    setStatus(available ? "available" : "unavailable");
  }, []);

  useEffect(() => {
    void refreshAvailability();
  }, [refreshAvailability]);

  const ohaengEntries = useMemo(() => {
    if (!result?.ohaeng_summary) {
      return [];
    }
    return [
      { key: "mok", label: dict.sajuPreview.result.mok, value: result.ohaeng_summary.mok ?? 0 },
      { key: "hwa", label: dict.sajuPreview.result.hwa, value: result.ohaeng_summary.hwa ?? 0 },
      { key: "to", label: dict.sajuPreview.result.to, value: result.ohaeng_summary.to ?? 0 },
      { key: "geum", label: dict.sajuPreview.result.geum, value: result.ohaeng_summary.geum ?? 0 },
      { key: "su", label: dict.sajuPreview.result.su, value: result.ohaeng_summary.su ?? 0 },
    ];
  }, [dict, result]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.birthYear ||
      !form.birthMonth ||
      !form.birthDay ||
      !form.gender ||
      !form.timezone
    ) {
      setFormError(dict.sajuPreview.errors.required);
      return;
    }

    setFormError("");
    setSubmitting(true);

    try {
      const nextResult = await requestSajuPreview(
        getApiBaseUrl(),
        {
          birth_year: Number(form.birthYear),
          birth_month: Number(form.birthMonth),
          birth_day: Number(form.birthDay),
          gender: form.gender,
          timezone: form.timezone,
          is_lunar: form.isLunar,
          is_leap_month: form.isLeapMonth,
          birth_hour: form.birthHour ? Number(form.birthHour) : null,
          birth_minute: form.birthMinute ? Number(form.birthMinute) : null,
        },
        lang
      );

      setResult(nextResult);
    } catch (error) {
      setResult(null);
      if (
        error instanceof SajuPreviewApiError &&
        isSajuPreviewServiceUnavailableError(error)
      ) {
        setStatus("unavailable");
        return;
      }
      setFormError(dict.sajuPreview.errors.requestFailed);
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "checking") {
    return (
      <div className="rounded-2xl border border-border/60 bg-midnight/50 p-8 text-text-secondary">
        {dict.sajuPreview.status.checking}
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-8 text-amber-100">
        <p>{dict.sajuPreview.status.unavailable}</p>
        <button
          type="button"
          onClick={() => void refreshAvailability()}
          className="mt-4 inline-flex rounded-full border border-amber-200/50 px-4 py-2 text-sm font-medium hover:bg-amber-200/10"
        >
          {dict.sajuPreview.status.retry}
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border/60 bg-midnight/50 p-6"
      >
        <h2 className="text-xl font-semibold text-text-primary">
          {dict.sajuPreview.form.title}
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          {dict.sajuPreview.form.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.birthYear}
            <input
              value={form.birthYear}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birthYear: e.target.value }))
              }
              required
              type="number"
              min={1900}
              max={2100}
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            />
          </label>
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.birthMonth}
            <input
              value={form.birthMonth}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birthMonth: e.target.value }))
              }
              required
              type="number"
              min={1}
              max={12}
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            />
          </label>
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.birthDay}
            <input
              value={form.birthDay}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birthDay: e.target.value }))
              }
              required
              type="number"
              min={1}
              max={31}
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            />
          </label>
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.gender}
            <select
              value={form.gender}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  gender: e.target.value as "M" | "F",
                }))
              }
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            >
              <option value="M">{dict.sajuPreview.form.genderMale}</option>
              <option value="F">{dict.sajuPreview.form.genderFemale}</option>
            </select>
          </label>
        </div>

        <label className="mt-4 block text-sm text-text-secondary">
          {dict.sajuPreview.form.timezone}
          <input
            value={form.timezone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, timezone: e.target.value }))
            }
            required
            className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
          />
          <span className="mt-1 block text-xs text-text-muted">
            {dict.sajuPreview.form.hint}
          </span>
        </label>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.birthHour}
            <input
              value={form.birthHour}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birthHour: e.target.value }))
              }
              type="number"
              min={0}
              max={23}
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            />
          </label>
          <label className="text-sm text-text-secondary">
            {dict.sajuPreview.form.birthMinute}
            <input
              value={form.birthMinute}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birthMinute: e.target.value }))
              }
              type="number"
              min={0}
              max={59}
              className="mt-1 w-full rounded-lg border border-border bg-black/20 px-3 py-2 text-text-primary outline-none focus:border-neon-purple"
            />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-text-secondary">
            <input
              checked={form.isLunar}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, isLunar: e.target.checked }))
              }
              type="checkbox"
            />
            {dict.sajuPreview.form.isLunar}
          </label>
          <label className="flex items-center gap-2 text-sm text-text-secondary">
            <input
              checked={form.isLeapMonth}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, isLeapMonth: e.target.checked }))
              }
              type="checkbox"
            />
            {dict.sajuPreview.form.isLeapMonth}
          </label>
        </div>

        {formError ? (
          <p className="mt-4 text-sm text-red-300">{formError}</p>
        ) : null}

        <button
          disabled={submitting}
          type="submit"
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {submitting
            ? dict.sajuPreview.form.submitting
            : dict.sajuPreview.form.submit}
        </button>
      </form>

      <div className="rounded-2xl border border-border/60 bg-midnight/50 p-6">
        <h2 className="text-xl font-semibold text-text-primary">
          {dict.sajuPreview.result.title}
        </h2>

        {!result ? (
          <p className="mt-4 text-sm text-text-secondary">
            {dict.sajuPreview.form.submit}
          </p>
        ) : (
          <div className="mt-4 space-y-4 text-sm text-text-secondary">
            <p>
              <span className="text-text-muted">{dict.sajuPreview.result.animal}:</span>{" "}
              <span className="text-text-primary">{result.animal}</span>
            </p>
            <p>
              <span className="text-text-muted">{dict.sajuPreview.result.gender}:</span>{" "}
              <span className="text-text-primary">{result.gender}</span>
            </p>
            <p>
              <span className="text-text-muted">{dict.sajuPreview.result.birthInfo}:</span>{" "}
              <span className="text-text-primary">
                {result.birth_info?.solar
                  ? `${result.birth_info.solar.year}-${result.birth_info.solar.month}-${result.birth_info.solar.day}`
                  : dict.sajuPreview.result.none}
              </span>
            </p>

            <div>
              <p className="text-text-muted">{dict.sajuPreview.result.pillars}</p>
              <ul className="mt-2 space-y-1 text-text-primary">
                <li>
                  {dict.sajuPreview.result.year}:{" "}
                  {formatPillar(
                    result.pillars.year?.name,
                    result.pillars.year?.hanja,
                    dict.sajuPreview.result.none
                  )}
                </li>
                <li>
                  {dict.sajuPreview.result.month}:{" "}
                  {formatPillar(
                    result.pillars.month?.name,
                    result.pillars.month?.hanja,
                    dict.sajuPreview.result.none
                  )}
                </li>
                <li>
                  {dict.sajuPreview.result.day}:{" "}
                  {formatPillar(
                    result.pillars.day?.name,
                    result.pillars.day?.hanja,
                    dict.sajuPreview.result.none
                  )}
                </li>
                <li>
                  {dict.sajuPreview.result.hour}:{" "}
                  {formatPillar(
                    result.pillars.hour?.name,
                    result.pillars.hour?.hanja,
                    dict.sajuPreview.result.none
                  )}
                </li>
              </ul>
            </div>

            <div>
              <p className="text-text-muted">{dict.sajuPreview.result.ohaeng}</p>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-text-primary">
                {ohaengEntries.map((entry) => (
                  <li key={entry.key}>
                    {entry.label}: {entry.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
