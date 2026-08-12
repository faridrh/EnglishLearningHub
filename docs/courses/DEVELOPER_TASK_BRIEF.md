# Developer task brief — Interactive courses (Danish / German)

**Copy this brief to your Danish or German developer.**  
Reference product: English site courses on **ingilisdili.com** (LeaTalk family).

---

## Goal

Implement an interactive **Courses** section with levels **A0, A1, A2**, each with **~10 lessons**, matching the English UX:

- Practice-first interactive lessons (listen + progress + sentence builder)
- Lesson content after practice
- Speaking tasks
- Level index + course hub
- TTS with correct locale (`da-DK` or `de-DE`)
- Optional CTAs to LeaTalk ecosystem

---

## Deliverables

1. **Course hub** page listing A0 / A1 / A2  
2. **Level index** pages listing all lessons for that level  
3. **Lesson pages** generated from JSON data  
4. **Shared lesson engine** (JS or framework equivalent) for:
   - multi-step listen practice with progress counters  
   - sentence builder with speech  
   - optional article/gender drag-drop  
5. **JSON content files** for A0 (minimum); A1/A2 as scope allows  
6. **Mobile-friendly** UI  

---

## Documentation pack (attached / in repo)

Give the developer these files from `docs/courses/`:

| File | Use |
|------|-----|
| `README.md` | Overview |
| `COURSES_SPEC.md` | Full technical spec |
| `lesson-schema.json` | Validate lesson JSON |
| `lesson-template.example.json` | Starter lesson |
| `LEVEL_CURRICULUM.md` | What each lesson should teach |

Also point them at English source:

- `src/courses/**`
- `src/_data/a0Lessons.json` (etc.)
- `src/js/course-lesson.js`
- CSS classes: `lesson-*` in `src/css/style.css`

---

## Stack notes

- English site: Eleventy + Nunjucks + static JSON.  
- **You may use any stack** (Next.js, Nuxt, Astro, etc.) if:
  - data shape matches the schema  
  - page order is practice → content → speaking → CTA  
  - URLs are consistent and SEO-friendly  

---

## Language-specific requirements

### Danish site
- Content in **Danish** (or bilingual UI + Danish target language)
- TTS: `da-DK`
- Articles exercise: **en / et** (not a/an)
- Alphabet includes **Æ Ø Å**
- Cross-link EasyDanish + LeaTalk app + www.leatalk.com

### German site
- Content in **German** (or bilingual UI + German target language)
- TTS: `de-DE`
- Articles/gender: **der / die / das** or **ein / eine**
- Alphabet includes **Ä Ö Ü ß**
- Cross-link LeaTalk app + www.leatalk.com + English courses if useful

---

## Ecosystem links (keep current)

- Website: https://www.leatalk.com  
- Android app: https://play.google.com/store/apps/details?id=com.leatalk.app  
- EasyDanish: https://www.easydanish.com  
- English: https://ingilisdili.com  
- Instagram: https://www.instagram.com/leatalkofficial/  

CTA wording: **“free lessons”** (not “free video lessons”) unless content is video.

---

## Suggested milestones

| Milestone | Output |
|-----------|--------|
| M1 | Hub + A0 index + empty lesson shell + JS engine |
| M2 | A0 lessons 1–5 with full multi-practice content |
| M3 | A0 lessons 6–10 + nav polish + mobile QA |
| M4 | A1 (10 lessons) |
| M5 | A2 (10 lessons) + ecosystem CTAs |

---

## Definition of done

- [ ] User can open hub → level → lesson and practice immediately without scrolling past long text  
- [ ] Listen items update progress and play TTS in correct language  
- [ ] Sentence builder shows preview and speaks completed sentence  
- [ ] Prev/Next lesson works; last lesson links to next level or test  
- [ ] Content is original target-language teaching material (not raw English translation dump)  
- [ ] JSON validates against `lesson-schema.json`  

---

## Out of scope (unless requested)

- Full user accounts / progress login  
- Native mobile apps (use existing LeaTalk Android app link)  
- Video hosting  

---

## Contact / product owner

[Fill in: product owner name, Slack/email, design Figma if any]

**English reference live:** https://ingilisdili.com/courses/  
**LeaTalk:** https://www.leatalk.com  
