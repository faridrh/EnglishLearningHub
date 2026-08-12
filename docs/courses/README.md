# Courses system — handoff for Danish & German sites

This folder documents how **interactive language courses** work on [ingilisdili.com](https://ingilisdili.com) so developers can build the **same structure** for:

| Site | Language | Suggested path |
|------|----------|----------------|
| EasyDanish / Danish site | Danish | `/courses/` or `/kurser/` |
| LeaTalk German site | German | `/courses/` or `/kurse/` |

## Documents in this folder

| File | Purpose |
|------|---------|
| [COURSES_SPEC.md](./COURSES_SPEC.md) | Full technical specification (architecture, files, UX, CTAs) |
| [lesson-schema.json](./lesson-schema.json) | JSON Schema for lesson data (validate content) |
| [lesson-template.example.json](./lesson-template.example.json) | Copy-paste example of one multi-practice lesson |
| [LEVEL_CURRICULUM.md](./LEVEL_CURRICULUM.md) | A0 / A1 / A2 topic outlines (adapt per language) |
| [DEVELOPER_TASK_BRIEF.md](./DEVELOPER_TASK_BRIEF.md) | Short task you can send to a developer as-is |

## Reference implementation (English)

Live paths:

- Course hub: `/courses/`
- Levels: `/courses/a0/`, `/courses/a1/`, `/courses/a2/`
- Lessons: `/courses/a0/lesson-1/` … `/courses/a0/lesson-10/` (same for a1, a2)

Source (this repo):

```
src/
  _data/
    a0Lessons.json      # 10 A0 lessons
    a1Lessons.json      # 10 A1 lessons
    a2Lessons.json      # 10 A2 lessons
  courses/
    index.njk           # hub
    a0|a1|a2/
      index.njk         # level index
      lesson.njk        # paginated lesson pages
      lesson.11tydata.js
  js/
    course-lesson.js    # shared interactive engine
  css/
    style.css           # search for "A0 Lesson" / "about-link" / lesson-* classes
```

## Design principles (do not skip)

1. **Practice first** — interactive exercise at the top of every lesson.
2. **Content second** — “Review lesson” below practice.
3. **Speaking tasks** — short offline speaking prompts.
4. **Progress feedback** — counters turn green when items are practiced.
5. **TTS** — click-to-hear via browser `speechSynthesis` (set language locale).
6. **CTAs** — free lessons / sister sites / next lesson / app where relevant.
7. **Data-driven** — lessons live in JSON; templates stay generic.

## Suggested stack match

The English site uses **Eleventy (11ty)** + Nunjucks + static JSON.  
Danish/German sites may use Next.js, Astro, etc. — **keep the data shape and page UX the same**; only the wiring changes.
