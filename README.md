# typescript-test
This is just a test project to share with colleagues where we discuss various potential solutions in our future with Typescript :-)

## Initial installation

To use [Yarn](https://yarnpkg.com) package manager run `npm install -g yarn` (_highly recommended_).
Then just run `yarn`.

## Usage

`yarn test` (`npm test`) runs tests and watches for changes

`yarn test:single` (`npm run test:single`) runs tests once (without watching)

`yarn lint` (`npm run lint`) runs linter

(`yarn build` or `npm run build`) creates distribution bundle

## Commiting changes

`yarn commit` (`npm run commit`) runs linter and forces the user to write commit message according to [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)  

`git push` runs tests, linter and then pushes changes to GitHub repository
