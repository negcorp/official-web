# AGENTS.md

## Purpose
This file is the single source of truth for how AI agents operate in this repository.
If `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, and `README.md` disagree, follow this file first.

## Project Snapshot
- Project: NINE20 official web
- Stack: Next.js 16, React 19, TypeScript 5, Tailwind v4, Vitest
- i18n: path-based locales + dictionary loading
- Supported locales: `ko`, `en`, `ja`, `zh-CN`, `zh-TW`, `es`, `fr`
- Alias paths: `zh` should resolve to `zh-CN`

## Core Principles For Every Task
1. Evidence before claims: run verification commands before saying work is done.
2. Keep behavior and docs in sync in the same task.
3. Prefer small, reviewable edits and explicit file references.
4. Avoid hidden assumptions; record decisions in `MEMORY.md`.
5. Never leave partial state without a clear note to the user.

## Mandatory Task Lifecycle
Follow this sequence for every implementation task.

### 1) Understand
- Confirm the request and constraints.
- Identify affected files before editing.

### 2) Plan
- For non-trivial changes, add a short plan in `docs/plans/YYYY-MM-DD-<topic>.md`.
- Include scope, impacted files, and verification commands.

### 3) Implement
- Apply minimal code changes that satisfy requirements.
- Keep i18n strings in dictionaries only.
- Preserve existing design system patterns.

### 4) Verify
- Minimum checks:
  - `npm test`
  - `npm run build` for routing/i18n/layout changes
- If a command fails, report exact failure and next action.

### 5) Update Docs And Memory (required)
Per task, update the relevant files below:
- `README.md`: user-facing behavior, setup, route, locale, env, workflow changes
- `CLAUDE.md`: Codex/agent implementation conventions
- `.cursorrules`: Cursor-specific concise execution rules
- `MEMORY.md`: append one log entry for the completed task

### 6) Deliver
- Summarize what changed, what was verified, and what remains.
- Provide exact paths for key file changes.

## Required `MEMORY.md` Entry Format
Append one item per completed task:

```md
## YYYY-MM-DD
- Task: <short title>
- Decision: <key decision or constraint>
- Changed: <file1>, <file2>, ...
- Verification: <commands and result>
- Follow-up: <optional next action>
```

## Definition Of Done (DoD)
A task is done only when all are true:
- Requirement implemented
- Tests/build verified for impacted scope
- Docs updated (`README.md` or reason noted)
- `MEMORY.md` appended
- User-facing summary provided

## Guardrails
- Do not rewrite large generated outputs unless requested.
- Do not silently remove existing behavior.
- Do not hardcode translated UI text in components.
- Do not commit failing tests unless explicitly requested.
