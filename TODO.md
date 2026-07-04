# Known Bugs

## 1. Search and filter don't work together
Right now they're mutually exclusive - if I search, it ignores my category filter. If I filter by category, it ignores my search. Need to chain them together so both apply at the same time.

## 2. Duplicate bookmarks when filtering
If a bookmark has multiple tags that match my selected categories, it shows up multiple times. My nested for-loops in the categoryFilter are the culprit. Should probably use `.filter()` with `.some()` instead.

## 3. "All" checkbox stays checked
When I select a specific category like "React", the "All" checkbox stays checked. It should probably auto-uncheck when I select anything specific.