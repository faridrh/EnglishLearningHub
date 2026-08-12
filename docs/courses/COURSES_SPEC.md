# Courses technical specification

Target audience: developers building **Danish** or **German** course sections that mirror ingilisdili.com `/courses`.

---

## 1. Information architecture

```
/courses/                          → Hub: pick level A0 / A1 / A2
/courses/a0/                       → Level index: list of 10 lessons
/courses/a0/lesson-1/ … lesson-10/ → Individual interactive lessons
/courses/a1/ …                     → same
/courses/a2/ …                     → same
```

**Localize URLs if needed** (examples):

| English | Danish (example) | German (example) |
|---------|------------------|------------------|
| `/courses/` | `/kurser/` | `/kurse/` |
| `/courses/a0/` | `/kurser/a0/` | `/kurse/a0/` |
| `/courses/a0/lesson-1/` | `/kurser/a0/lektion-1/` | `/kurse/a0/lektion-1/` |

Keep level codes **A0 / A1 / A2** (CEFR-style) for consistency across LeaTalk products.

---

## 2. File map (reference repo)

```
src/_data/
  a0Lessons.json          # array of lesson objects
  a1Lessons.json
  a2Lessons.json

src/courses/
  index.njk               # hub + free-lessons CTA
  a0/
    index.njk             # loops over a0Lessons
    lesson.11tydata.js    # exposes lessonItems for pagination
    lesson.njk            # one template → many pages via pagination
  a1/ … same pattern
  a2/ … same pattern

src/js/course-lesson.js   # multi-practice, alphabet, sentence builder, drag-drop
src/css/style.css         # .lesson-* classes
```

### Eleventy pagination pattern

`lesson.11tydata.js`:

```js
const a0Lessons = require("../../_data/a0Lessons.json");
module.exports = { lessonItems: a0Lessons };
```

`lesson.njk` front matter:

```yaml
pagination:
  data: lessonItems
  size: 1
  alias: lesson
permalink: "/courses/a0/lesson-{{ lesson.number }}/"
```

If the stack is **not** Eleventy: load JSON, generate one route per lesson (`lesson.number`).

---

## 3. Lesson page layout (required order)

Every lesson page must follow this order for engagement / time-on-site:

```
1. Header
   - Eyebrow: "A0 Course · Lesson N"
   - Title, pageDescription, Goal
   - Jump nav: Start Practice | Review Lesson | Speaking Tasks

2. Practice first  (#practice-now)
   - Badge: "Practice first"
   - Interactive exercise (multi-practice / alphabet / sentence / dragdrop)

3. Learn content   (#learn-content)
   - Topic cards from lesson.content
   - Button: "Back to Practice"

4. Speaking tasks  (#practice-tasks)
   - Cards from lesson.practice

5. Partner / free-lessons CTA (optional but recommended)

6. Lesson complete CTA
   - Prev / Next lesson
   - Back to level index
   - Next level when last lesson
```

---

## 4. Lesson data model

Each level file is a **JSON array** of lesson objects.

### Core fields (required)

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | 1–10 (or more); used in URL |
| `title` | string | Full lesson title (H1) |
| `indexTitle` | string | Shorter title for level index cards |
| `indexDescription` | string | Card blurb on level index |
| `pageDescription` | string | Subtitle under H1 |
| `goal` | string | Learning goal |
| `content` | array | Review cards (after practice) |
| `practice` | array | Speaking tasks |
| `exercise` | object | Interactive block (top of page) |
| `ctaDescription` | string | Text on “Lesson complete” section |

### `content[]` item

```json
{
  "title": "1) Topic heading",
  "text": "HTML allowed via | safe (e.g. <br>)",
  "speakLabel": "Listen",
  "speakText": "Text for speechSynthesis"
}
```

`speakLabel` / `speakText` optional.

### `practice[]` item

```json
{
  "icon": "fas fa-comments",
  "title": "Task title",
  "text": "What the learner should say aloud",
  "speakLabel": "optional",
  "speakText": "optional",
  "linkLabel": "optional CTA label",
  "linkUrl": "/optional/path/"
}
```

### `exercise` types

#### A) `multi-practice` (default for most lessons)

Preferred type for A1–A2 and most A0 lessons.

```json
{
  "type": "multi-practice",
  "sectionTitle": "Practice Now",
  "title": "Short exercise title",
  "instruction": "Start practicing right away…",
  "sentence": {
    "displayTemplate": "I {verb} {object}.",
    "speakTemplate": "I {verb} {object}.",
    "emptyMessage": "Please complete all fields.",
    "feedbackPrefix": "Built sentence:",
    "example": "Example: I like tea."
  },
  "steps": [
    {
      "type": "listen-phrases",
      "title": "1. Learn words",
      "hint": "Click each item, listen, repeat.",
      "progressLabel": "Words practiced",
      "items": [
        { "label": "word", "speakText": "word", "sublabel": "optional" }
      ]
    },
    {
      "type": "listen-grid",
      "title": "2. Click numbers / letters / days",
      "hint": "Tap each cell.",
      "progressLabel": "Items practiced",
      "items": [
        { "label": "1", "speakText": "one" }
      ]
    },
    {
      "type": "sentence",
      "title": "3. Build your sentence",
      "hint": "Fill the fields and hear the sentence.",
      "fields": [
        {
          "name": "verb",
          "label": "Verb",
          "inputType": "text",
          "placeholder": "like"
        },
        {
          "name": "answer",
          "label": "Answer",
          "inputType": "select",
          "options": ["Yes, I do.", "No, I don't."]
        }
      ],
      "example": "Example: …"
    },
    {
      "type": "dragdrop-articles",
      "title": "Optional: a / an style sort",
      "hint": "Drag words into correct boxes.",
      "words": [
        { "word": "apple", "article": "an" },
        { "word": "book", "article": "a" }
      ]
    }
  ]
}
```

**Template placeholders:** `{fieldName}` in `displayTemplate` / `speakTemplate` must match `fields[].name`.

#### B) `alphabet-practice` (A0 lesson 1 style)

Letters grid + word buttons + nested sentence. See `a0Lessons.json` lesson 1.

#### C) `sentence` (simple single builder)

Only one form — use when multi-step is not needed.

#### D) `dragdrop-articles` (standalone)

Sort nouns into article boxes. For German, adapt zones (e.g. **der / die / das**). For Danish, e.g. **en / et**.

---

## 5. Interactive JS requirements

File reference: `src/js/course-lesson.js`

### Features

| Feature | Behavior |
|---------|----------|
| TTS | `speechSynthesis` + `SpeechSynthesisUtterance` |
| Locale | English uses `en-US`. **Danish → `da-DK`. German → `de-DE`.** |
| Progress | Track clicked `listen-phrases` / grid items; show `N / total` and ✓ when done |
| Sentence builder | Live preview with blanks; Build & Hear; Enter key submits |
| Drag-drop | Drag or tap-word-then-tap-zone; Check / Reset |

### Implementation notes for other stacks

- Prefer **data attributes** on the exercise root:
  - `data-exercise-type="multi-practice"`
  - `data-display-template`, `data-speak-template`, etc.
- Buttons for listen items: class `practice-track-btn` + `data-speak` + `data-track-id`
- Do not double-bind TTS on progress-tracked buttons

---

## 6. CSS hooks (copy or reimplement)

Search English `style.css` for:

- `.lesson-page-header`, `.lesson-jump-nav`
- `.lesson-practice-section`, `.lesson-exercise-card`, `.lesson-step`
- `.alphabet-grid`, `.alphabet-key`, `.practice-word-btn`
- `.lesson-progress`, `.lesson-progress-done`
- `.sentence-builder-fields`, `.lesson-field-input`
- `.lesson-drop-zone`, `.lesson-word-bank`
- `.cta-section`, `.button`, `.button-primary`, `.button-secondary`

Mobile: full-width inputs under ~600px.

---

## 7. Level index page

Each `/courses/a0/` (etc.) should:

1. List all lessons from the JSON array.
2. Card: `indexTitle`, `indexDescription`, link to lesson.
3. Optional footer buttons for every lesson.
4. CTA: free practice / sister site / next level.

Hub `/courses/`:

- Three level cards (A0, A1, A2)
- Header line: “Looking for free lessons?” + external CTA if applicable
- Tips section optional

---

## 8. CTAs & LeaTalk ecosystem

Recommended external links (localize labels):

| Product | URL |
|---------|-----|
| LeaTalk website | https://www.leatalk.com |
| LeaTalk Android app | https://play.google.com/store/apps/details?id=com.leatalk.app |
| EasyDanish | https://www.easydanish.com |
| İngilisdili (English) | https://ingilisdili.com |
| Instagram | https://www.instagram.com/leatalkofficial/ |

On Danish site, emphasize EasyDanish + app.  
On German site, emphasize LeaTalk German paths + app.  
Cross-link English courses where useful.

Wording: use **“free lessons”** (not “free video lessons”) unless content is actually video.

---

## 9. Content production workflow

1. Curriculum owner fills `a0Lessons.json` / `a1` / `a2` (target language).
2. Validate against `lesson-schema.json`.
3. Developer wires templates once; new lessons = JSON only.
4. QA checklist per lesson:
   - [ ] Practice appears above content
   - [ ] TTS speaks correct language
   - [ ] All listen items track progress
   - [ ] Sentence builder templates match fields
   - [ ] Prev/Next navigation works
   - [ ] Mobile usable (tap targets ≥ 44px)

### How many lessons?

English reference: **10 lessons per level × 3 levels = 30**.  
Start with **A0 (10)** if resources are limited, then A1, then A2.

---

## 10. German / Danish adaptations

### German

| English pattern | German adaptation |
|-----------------|-------------------|
| a / an drag-drop | **der / die / das** (or ein/eine) |
| Alphabet | German alphabet + umlauts Ä Ö Ü ß |
| Numbers | 1–20 German spoken forms in `speakText` |
| Sentence templates | e.g. `Ich heiße {name}.` / `Ich komme aus {country}.` |
| TTS | `utterance.lang = "de-DE"` |

### Danish

| English pattern | Danish adaptation |
|-----------------|-------------------|
| a / an | **en / et** |
| Alphabet | Danish letters + Æ Ø Å |
| Numbers | Danish spoken forms |
| Sentence templates | e.g. `Jeg hedder {name}.` / `Jeg er fra {country}.` |
| TTS | `utterance.lang = "da-DK"` |

**Do not translate English lesson JSON blindly** — rewrite examples so they teach real Danish/German grammar and high-frequency words.

---

## 11. Acceptance criteria (for PRs)

A course feature is “done” when:

1. Hub + 3 level indexes exist and list lessons from data.
2. Every lesson URL renders practice-first multi-step UI.
3. Listen + sentence builder work with correct TTS locale.
4. At least A0 has 10 complete lessons (or agreed count).
5. Mobile layout works without horizontal scroll.
6. External LeaTalk / app / sister-site CTAs present where product owner requests.
7. Schema validation passes on all lesson JSON files.
