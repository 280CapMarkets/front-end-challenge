Front-End Challenge
---

The purpose of this challenge is to assess your ability to create a
front-end application that is interactive, stateful and can
communicate with an API.

What you will be building is a game of
[Simon Says](http://labs.uxmonk.com/simon-says/) with four inputs, one for
each of the included sound files. Please create the project using
React and Redux. We are particularly looking for clean,
well commented and test covered production quality code.

## Requirements
You require the following to run the project:

```sh
node 6.11 (lts/boron) or above
yarn / npm
```

The finished project should have the following:

1) Use the designs included to create a user interface that has two views, a
leaderboard / start view and an in-game view.
- The first view should display a list of high scores, an input to set
  the players name and a button to start the game.
- The in-game view should have at least four color-coded buttons that the
  user uses to follow along.

2) When the user visits the page, your game should fetch the high scores and
render them to the leaderboard / start view.

3) When the user completes the game you should be able to write a new
entry to the high scores and update the leaderboard.

4) The game should randomly choose a pattern for the user to follow
along with and it should get faster as the game progresses.

5) When the computer or the player clicks a button it should make a sound play.
There are some sound files that are located in `lib/assets/`.

6) Implement a streak bonus modifier with a level counter. The level counter
should reflect the number of tones played. The streak bonus should
appear in the UI, for example `2x` or `3x` points being awarded. There
should be at least 3 streak bonuses categories, how they are awarded is
up to you.

## Getting Started
We've included a pretty dumb node server to use as an API, you can start
it up using `npm run start` after which it will be available at
`http://localhost:3000`. It has the following endpoints:

```js
GET /high-scores/
/*
 * returns a list of high scores in the following
 * {
 *   name: 'Jean-Luc Picard',
 *   id: 1,
 *   score: 10
 * }
 */

POST /high-scores/
/*
 * creates a single highscore and returns the created object if
 * successful
 */
```

There are two folders `src` and `lib` which you can use to build your
project in. Feel free to create whatever directory structure you
require, but keep in mind what community standards are out there for
your chosen implementation method.

## Submission
When you are done, tar up your work and send it to
[pnasser@280cap.com](mailto:pnasser@280cap.com).
