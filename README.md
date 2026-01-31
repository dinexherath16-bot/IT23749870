# IT23749870 - Playwright Test Suite

This repository contains a Playwright test suite that validates Sinhala transliteration on the Swift Translator website.

Prerequisites
- Node.js 18+ (or compatible)
- npm (comes with Node.js)

Install dependencies

```bash
npm install
npx playwright install
```

Run tests

- Run the test suite:

```bash
npm test
```

- Run and then open the HTML report:

```bash
npm test
npm run show-report
```

Repository and public link

After creating a public Git repository for this project, add the repository URL to `GIT_REPO_LINK.txt`.

Create & push a GitHub repository (example):

```bash
git init
git add .
git commit -m "Add Playwright tests"
# create a repo on GitHub and replace the URL below
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Once pushed, paste the public repository URL into `GIT_REPO_LINK.txt` so graders can access it.

Files to note
- `playwright.config.ts` — Playwright configuration
- `tests/IT23749870- transliteration.spec.ts` — The test cases
- `package.json` — `test` and `show-report` scripts
- `GIT_REPO_LINK.txt` — Add the public Git repository URL here

If you'd like, I can prepare the local git commit and give the exact commands to create a GitHub repo using the GitHub CLI — let me know and I'll proceed.

