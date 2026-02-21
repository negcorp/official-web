---
name: ai-ops-playbook
description: Use when implementing, reviewing, or finishing tasks in official-web, especially when you must keep code, docs, and memory logs synchronized on every task.
---

# AI Ops Playbook

## Overview
Use this skill to keep implementation quality and project memory consistent.
This skill standardizes the per-task lifecycle: implement, verify, document, and record memory.

## Required Workflow
1. Read `AGENTS.md` and identify required lifecycle steps.
2. Implement the requested change with minimal scope.
3. Run verification commands for impacted scope.
4. Update docs that changed in meaning (`README.md`, or agent guides when process changed).
5. Append one task log in `MEMORY.md`.
6. Report changed files and verification evidence.

## Required Verification
- Base: `npm test`
- Add `npm run build` for route/layout/i18n/metadata/static-export changes

## Task Closure Rules
- Never claim completion without fresh command output.
- If verification fails, report exact failure and next action.
- If behavior changed but docs were not updated, task is not done.
- If task completed but `MEMORY.md` is not updated, task is not done.

## Fast Checklist
See `references/task-close-checklist.md` and complete every item before closing.
