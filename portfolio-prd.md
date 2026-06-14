# Portfolio Redesign PRD
**taishengchen.github.io — June 2026**

---

## 1. Goal

Replace the current dark-themed portfolio with a clean, minimal design that reads as competent and deliberate rather than generic. The site has one job: get a recruiter or hiring manager to send an email or download the CV within 60 seconds of landing.

---

## 2. Visual Direction

**Aesthetic:** Light, typographically-led, developer-minimal. Think Vercel / Linear — white background, monospace accents, lots of breathing room. No gradients, no animations for the sake of it, no decorative elements.

**Palette:**
- Background: `#FFFFFF`
- Surface / card: `#F7F7F5`
- Text primary: `#111111`
- Text secondary: `#6B6B6B`
- Accent: `#2563EB` (a clean blue — used sparingly, links and one CTA only)
- Border: `#E5E5E5`

**Typography:**
- Body / UI: `Inter` (Google Fonts)
- Monospace accent (used for section labels, tags, small metadata): `JetBrains Mono`
- No serif. Keep it technical.

**Signature element:** Section labels rendered in `JetBrains Mono` with a `//` prefix — e.g. `// projects`, `// experience`. Small, muted, consistent. Gives the page a code-comment feel without being gimmicky.

**Motion:** One subtle fade-in on page load for the hero only. Nothing else moves. Keep it fast and clean.

---

## 3. Information Architecture

Remove:
- X-it project (too weak, adds noise)
- HVAC Engineer and KONE entries (irrelevant to IT roles)
- About Me section as a standalone section (fold into footer or hero)
- "More in development" placeholder card

Sections in order:
1. Hero
2. Projects
3. Skills
4. Experience
5. Footer (contact + links)

---

## 4. Section Specs

### 4.1 Hero

**Layout:** Two columns on desktop (text left, photo right), single column on mobile (text above, no photo or photo below).

**Content:**

```
// available for work

Taisheng Chen
Full-stack developer.
I build things end-to-end — from schema design to production deployment.

[Download CV]   [View Projects ↓]
```

- "available for work" in JetBrains Mono, accent blue, small — replaces the current badge
- Name in large weight (700), ~48–56px
- Tagline in regular weight, ~20px, secondary colour
- Two CTAs: CV download (primary button), View Projects (ghost/text link)
- Photo: circular crop, kept small, optional — if it feels off remove it

**Do not include:**
- Location in hero (put in footer)
- List of technologies here
- "Open to frontend, backend, full stack, DevOps and data roles" — too scattered, says nothing

---

### 4.2 Projects

**Layout:** Vertical stack of cards, full width. No grid — the descriptions are long enough that cards need room.

**Card structure per project:**

```
[Project name]                          [date range]
[one-line role descriptor in mono]

[2–3 sentence description]

[tech tag] [tech tag] [tech tag] ...

[Live Site ↗]  [GitHub ↗]   (only show links that exist)
```

**Project 1 — Restaurant Web Platform**

Name: `Restaurant Web Platform`
Role line: `// full-stack developer · sole contributor`
Date: `Mar 2025 – Dec 2025`

Description:
> A local restaurant had no digital system for reservations or orders — everything ran by phone and paper, causing regular double bookings. I designed and built the complete platform from scratch: a REST API across approximately 60 endpoints with booking conflict detection and JWT authentication, two Next.js interfaces (customer-facing in Finnish and English, staff admin panel), Docker containerisation, and CI/CD via GitHub Actions. The system processed over 3,000 reservations with zero conflicts and received 10,200+ visits in its first three months.

Tags: `Next.js` `TypeScript` `Express.js` `PostgreSQL` `Docker` `GitHub Actions` `Oracle Cloud` `Cloudflare`

Links: Live Site → okiniiri.fi (keep the existing links)
Note: label it `NDA — code available on request` instead of showing a GitHub link

---

**Project 2 — Vocabulary Learning App**

Name: `Vocabulary Learning App`
Role line: `// full-stack developer · personal project`
Date: `In development`

Description:
> A personal tool for building vocabulary from real-world text. Point your camera at any text and the app runs OCR entirely in the browser — no image is ever uploaded to a server. Tap words to save them as flashcards. Built with a privacy-first architecture; supports English, Finnish, and Spanish.

Tags: `Next.js` `TypeScript` `Tailwind CSS` `Supabase` `Tesseract.js` `Web Speech API`

Links: GitHub → link when ready. If not ready yet, show `// in development` in mono and omit the button.

---

**Project 3 — [New project you build]**

Leave a slot here. Once you have your new side project, it slots in as the third card. Until then, omit the "More in development" placeholder entirely — empty space is better than filler.

---

### 4.3 Skills

**Layout:** Simple two-column or three-column grid of labelled groups. No icons. No progress bars. No star ratings.

**Groups and contents:**

| Group | Items |
|---|---|
| Languages | TypeScript, JavaScript, Python, SQL |
| Frontend | Next.js, React, React Native, Tailwind CSS |
| Backend | Node.js, Express.js, REST API Design, JWT Auth |
| Database | PostgreSQL, Prisma ORM |
| DevOps & Tools | Docker, GitHub Actions, Linux, Cloudflare, Swagger/OpenAPI |
| Human Languages | English (B2) · Mandarin (native) · Finnish (beginner) |

Remove Flask, Django, MySQL — no project evidence for these.

---

### 4.4 Experience

**Layout:** Simple chronological list, two entries only.

**Entry 1 — Freelance**
```
Freelance Full-Stack Developer
Self-employed (404found)
Mar 2025 – Dec 2025
```
One or two bullet points max — the Projects section already covers this in depth, so keep this brief:
- Built and shipped a production web platform for a hospitality client in Oulu, handling the full delivery cycle independently.
- System active since July 2025; processed 3,000+ reservations with zero conflicts.

**Entry 2 — Education**
```
BEng Information Technology (Web Development)
Oulu University of Applied Sciences (OAMK)
Aug 2023 – Apr 2026 · GPA 4.53 / 5
```
Relevant coursework: Advanced Software Development · Data Structures and Algorithms · Software Testing · Cloud Services · Web Development Frameworks

No HVAC. No KONE. No X-it.

---

### 4.5 Footer

Minimal. One line of links + location + email.

```
Taisheng Chen · Oulu, Finland · Open to relocation
ists.chen@gmail.com   GitHub   LinkedIn   CV PDF
```

---

## 5. Content Rules

- All copy in sentence case. No ALL CAPS section headers.
- Tech tags: styled as small monospace pills with a light border, no colour fill.
- Dates: always right-aligned on the same line as the title.
- Section labels: `// section-name` in JetBrains Mono, 12–13px, `#6B6B6B`, above each section heading.
- Avoid: "passionate about", "detail-oriented", "team player", "fast learner", any buzzword.
- The word "I" is fine. Write like a person.

---

## 6. Technical Notes

- React (existing stack) — no framework change needed.
- Load Inter and JetBrains Mono from Google Fonts.
- Mobile-first. Hero collapses to single column. Cards stack vertically (already natural).
- No dark mode toggle needed — keep it light only for now.
- Keep the existing `/Taisheng-Chen-CV.pdf` path so old links don't break. Update the file to the latest resume version.
- Meta description update: `Taisheng Chen — full-stack developer based in Oulu, Finland. Available for work.`

---

## 7. Out of Scope

- Blog
- Dark mode
- Animations beyond hero fade-in
- Any backend or CMS
- Internationalisation
