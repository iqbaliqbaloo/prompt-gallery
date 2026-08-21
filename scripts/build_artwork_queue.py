from pathlib import Path
import json
import re

source = Path('client/src/content/categoryCards.ts').read_text()
block = source.split('const titles = [', 1)[1].split('];', 1)[0]
titles = re.findall(r'"([^"]+)"', block)
queue = []
for index, title in enumerate(titles[5:], start=6):
    slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
    queue.append({
        'categoryNumber': index,
        'title': title,
        'filename': f'category-{index:03d}-{slug}.jpg',
        'brief': f'Premium colorful AI-animation illustration for category card {index:03d}, {title}. Show the exact subject, setting, characters, action, props, and mood implied by this category in a clear cinematic mini-world. Use coral, peach, lilac, and teal accents, expressive animated characters, tactile editorial composition, strong visual storytelling, no text, no watermark.'
    })
Path('category-artwork-generation-queue.json').write_text(json.dumps(queue, indent=2) + '\n')
print(f'queued={len(queue)}')
