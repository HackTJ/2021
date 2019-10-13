# HackTJ 2020

The website for HackTJ 2020, held on March 21st-22nd, 2020.

## Setup

-   `npm install`

## Development

We use ReactJS.

## Deployment

-   `npm run start`: starts a server on [port 3000](localhost:3000) and watches files for changes, compiling them on the fly
-   `npm run build`: compiles all files to the `build/` directory but doesn't watch for changes or start a server
-   `npm run deploy-event`: pushes to the `gh-pages` branch of this repository and deploys the site to hacktj.org/202x
-   `npm run deploy-homepage`: pushes to the [hacktj.github.io repo](https://github.com/HackTJ/hacktj.github.io) and deploys the site to <https://hacktj.org>
-   `npm run deploy-all`: shortcut for both `npm run deploy-event` and `npm run deploy-homepage`

All of the deploy commands involve running the `switch` script in this repository. If you notice that the switch script deletes the content of either `public/index.html` or `src/App.js`, immediately quit the `deploy` script and restore the contents through `git` and retry the command until it works. The `deploy-event` script doesn't commit the source code to the repository's master branch, it only commits the built code. You should commit the source code to the `master` branch each time you deploy. When you commit source code to the `master` branch, always try to make sure you run `npm run switch-event`. If you need to, create a [pre-commit hook](https://git-scm.com/docs/githooks#_pre_commit) to automatically do this.

## Notes for next year

-   click "Use this template" (next to the clone or download dropdown) and name the new repository `[current year + 1]`, under the HackTJ organization - that way it will be displayed on our website at hacktj.org/[current year + 1] while leaving the old website up at hacktj.org/[current year]
-   edit the `switch` script and replace all occurrences of `/[current year]` with `/[current year + 1]`
