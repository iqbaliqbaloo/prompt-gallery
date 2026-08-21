from pathlib import Path
import re

text = Path('client/src/content/categoryCards.ts').read_text()
patterns = [
    r'title:\s*["\']([^"\']+)["\']',
    r'"title"\s*:\s*["\']([^"\']+)["\']',
]
titles = []
for pattern in patterns:
    titles.extend(re.findall(pattern, text))
seen = []
for title in titles:
    if title not in seen:
        seen.append(title)
print(f'titles={len(seen)} unique={len(set(seen))}')
for index, title in enumerate(seen, 1):
    print(f'{index:03d}\t{title}')
