# Level curriculum outlines (adapt per language)

These are the **topic structures** used on the English site.  
For Danish / German: **keep the progression**, rewrite all words, phrases, and grammar for the target language.

---

## A0 — Absolute beginner (10 lessons)

| # | English topic | What to adapt |
|---|----------------|---------------|
| 1 | Alphabet & basic sounds | Target alphabet + special letters (DE: ÄÖÜß · DA: ÆØÅ) |
| 2 | Greetings & introductions | Hello / name / nice to meet you |
| 3 | Numbers & age | 1–20 + “I am X years old” |
| 4 | Countries, nationalities, to be | am/is/are or language equivalent |
| 5 | Family & people | mother, father, brother… |
| 6 | Everyday objects & articles | DE: der/die/das or ein/eine · DA: en/et |
| 7 | Basic verbs & daily actions | eat, drink, go, like, have |
| 8 | Colors, shapes, descriptions | It is a red book → local pattern |
| 9 | Time, days, simple routines | days of week + morning/afternoon/evening |
| 10 | Simple questions & short answers | yes/no + basic wh- if ready |

**Exercise style:** multi-practice (listen → phrases → sentence builder).  
Lesson 1 may use alphabet grid. Lesson 6 may use article drag-drop.

---

## A1 — Elementary (10 lessons)

| # | English topic | Focus |
|---|---------------|--------|
| 1 | Daily routines & present simple | I/you/we/they habits |
| 2 | He/she present simple | 3rd person agreement / endings |
| 3 | Questions & negatives (do/does) | Local question particles / verb 2nd |
| 4 | Family & people vocabulary | Expand A0 family + adjectives |
| 5 | Home & rooms | There is/are · rooms · furniture |
| 6 | Work & jobs | job names + workplaces |
| 7 | Food & meals | like / don’t like · meals |
| 8 | Free time & hobbies | free-time verbs |
| 9 | Wh- questions | who/what/where/when/how |
| 10 | Can (ability & requests) | modal for ability |

**Exercise style:** multi-practice with 3–4 steps + speaking tasks.

---

## A2 — Pre-intermediate (10 lessons)

| # | English topic | Focus |
|---|---------------|--------|
| 1 | Past simple (regular/irregular) | finished actions |
| 2 | Past questions & negatives | did / local past question form |
| 3 | Present continuous | now + arrangements |
| 4 | Going to (plans) | future plans |
| 5 | Will (predictions & offers) | will / local future |
| 6 | Comparatives & superlatives | bigger / the best |
| 7 | Must / should / have to | advice & obligation |
| 8 | Some / any / much / many | quantity |
| 9 | Connectors | because, so, but, although |
| 10 | Opinions & conversation | I think…, agree/disagree |

**Exercise style:** multi-practice; longer sentences; more authentic dialogues.

---

## Content rules for authors

1. **Target language in examples** — not English glosses only (glosses optional in UI).
2. **High frequency words** first.
3. **6–10 listen items** per step (enough for engagement, not overwhelming).
4. **Sentence builder** must produce a **grammatical** target-language sentence.
5. **speakText** = what TTS should say (can differ from on-screen label, e.g. numbers).
6. **3 speaking tasks** per lesson when possible.
7. Keep `number` sequential with no gaps.

---

## Suggested JSON file names (per site)

```
data/
  a0Lessons.json
  a1Lessons.json
  a2Lessons.json
```

Or monorepo:

```
content/courses/da/a0.json
content/courses/de/a0.json
```

---

## Full English reference

Open the live English JSON in this repo:

- `src/_data/a0Lessons.json`
- `src/_data/a1Lessons.json`
- `src/_data/a2Lessons.json`

Use them as **structure samples**, not as text to machine-translate.
