# Manual Test Checklist: Banana Platformer MVP

Use this checklist when automated browser smoke testing is unavailable.

## Test Setup

- Launch game with npm run dev.
- Use keyboard controls only.
- Test on latest two major desktop versions of Chrome, Firefox, and Edge when available.
- Record bugs in playtest-report-template.md as Major or Minor.

## FR and SC Coverage

- [ ] FR-001/FR-017: Entire playable level remains visible with no camera scrolling.
- [ ] FR-003: Left and right movement works via Arrow keys and A/D.
- [ ] FR-003: Jump works via Up arrow, W, and Space.
- [ ] FR-004/FR-005: Gravity, landing, and one-way platforms behave correctly.
- [ ] FR-006: Player cannot pass through left or right wall boundaries.
- [ ] FR-010/FR-022/FR-023: Falling out triggers respawn at 2s with reset behavior and collected pickups preserved.
- [ ] FR-011/FR-020: Mini bananas are spaced and sized correctly and collect once.
- [ ] FR-008/FR-009: Reaching the flag completes the level and changes flag state.
- [ ] FR-012: Intro sequence displays for 3 seconds.
- [ ] FR-013: Completion sequence plays, then player disappears after 1.5 seconds.
- [ ] FR-014: Yellow-on-black framed text is readable during intro and completion.
- [ ] SC-003: Two testers complete level with 0 major bugs and at most 2 minor bugs.

## Performance and Compatibility

- [ ] FR-024: Gameplay feels responsive, with no severe frame drops in normal play.
- [ ] FR-025: Behavior is consistent across supported desktop browsers.
- [ ] SC-005: Both testers confirm sequence readability and clarity.

## Exit Criteria

- [ ] All required items above pass.
- [ ] Major bugs: 0
- [ ] Minor bugs: <= 2
