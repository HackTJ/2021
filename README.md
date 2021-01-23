# HackTJ 8.0

[![lint](https://github.com/HackTJ/2021/workflows/lint/badge.svg?event=push)](https://github.com/HackTJ/2021/actions?query=workflow%3Alint)

The website for HackTJ 8.0, held on November 21st-22nd, 2020.

## Setup

- `yarn install`

## Development

We use ReactJS.

### What to Change

- update the color scheme in all the CSS files
- [README](README.md)
  - fix years/information
- [`src/MainPage/Landing/MLHTrustBadge`](src/MainPage/Landing/MLHTrustBadge)
  - update the badge to the correct year
- [`src/MainPage/Landing/index.jsx`](src/MainPage/Landing/index.jsx)
  - update the event date, venue, and URLs
  - change "2019 Pictures" to "2020 Pictures" and update its URL
  - update the URL of "Past Projects"
- [`src/MainPage/RegistrationInfo/index.jsx`](src/MainPage/RegistrationInfo/index.jsx)
  - update registration start date
  - update admissions decisions date
- [`src/MainPage/Schedule/index.jsx`](src/MainPage/Schedule/index.jsx)
  - update the schedule
- [`src/MainPage/Sponsors/index.jsx`](src/MainPage/Sponsors/index.jsx) and [`src/images/sponsors`](src/images/sponsors) and [`src/images/partners`](src/images/partners)
  - update the sponsor logos, maintain ordering by donation amount
- [`src/MainPage/Statistics/index.jsx`](src/MainPage/Statistics/index.jsx)
  - update demographic data (`schoolData`, `genderData`, `ethnicityData`, and `graduationData`)
- [`src/MainPage/Team/index.jsx`](src/MainPage/Team/index.jsx) and [`src/images/team`](src/images/team)
  - update team member pictures and descriptions
- [`src/MainPage/VenueMap/index.jsx`](src/MainPage/VenueMap)
  - update the coordinates to match the venue
- [`src/images/bigweblogo.png`](src/images/bigweblogo.png), [`src/images/bkg.png`](src/images/bkg.png), and [`src/images/logo.png`](src/images/logo.png)
  - update branding images' colors

## Deployment

- `yarn run start`: starts a server on [port 3000](localhost:3000) and watches files for changes, compiling them on the fly
- `yarn run build`: compiles all files to the `build/` directory but doesn't watch for changes or start a server
- `yarn run deploy-event`: pushes to the `gh-pages` branch of this repository and deploys the site to hacktj.org/202x
- `yarn run deploy-homepage`: pushes to the [hacktj.github.io repo](https://github.com/HackTJ/hacktj.github.io) and deploys the site to <https://hacktj.org>
- `yarn run deploy-all`: shortcut for both `yarn run deploy-event` and `yarn run deploy-homepage`

In the case that one of the endpoints (/2020 or /) doesn't work but the other does, immediately set up a hardcoded redirect in the nonfunctional repository to redirect to the correct site.

## Notes for next year

- click "Use this template" (next to the clone or download dropdown) and name the new repository `2021`, under the HackTJ organization—that way it will be displayed on our website at <https://hacktj.org/2021> while leaving the old website up at <https://hacktj.org/2020>
- all of the deploy commands involve running the `switch` script in this repository
  - if you notice that this script deletes the content of either [`public/index.html`](public/index.html) or [`src/App.js`](src/App.js), immediately quit the deploy script and restore the contents with `git` and retry the `yarn` script until it works
- the `deploy-event` script doesn't commit the source code to the repository's main branch, it only commits the built website
  - you should commit the source code to the `main` branch each time you deploy
    - before you commit to `main`, always make sure you run `yarn run switch-event`
      - if you need to, create a [pre-commit hook](https://git-scm.com/docs/githooks#_pre_commit) to automatically do this
- don't run `git pull` after `yarn run switch-homepage`
  - only pull when you're set up for the event repository
