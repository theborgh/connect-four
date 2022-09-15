# Connect Four

A simple implementation of the popular board game in React.js.
Players can click on a column to place a piece there. The two players take turns. The first player to place four pieces in a row, column, or diagonal is the winner.

A live version of the app is deployed [here](https://connectfourreact.netlify.app/).

## Features

- Players can customize their names and piece color
- New Game button starts a new game without modifying the existing player settings
- Board logic is parametrized, making it easy to change the board dimensions or the length of the line of pieces necessary for a win.
- App layout is responsive

## Running the project

To run the project, run the following commands:

- _git clone https://github.com/theborgh/connect-four.git_
- _cd connect-four_
- _npm i_
- _npm start_

## Dependencies

See package.json

## Todo

- Add piece placing animation (piece falls down the selected column and into the selected place)
- On game end: turn pointer to pointer, change alpha of the entire board
- Save player settings to localstorage
- Add play vs AI
- Refactor to TypeScript?
- Add SASS?
- Add BE with user authentication
- Add testing

## Contributing

If you would like to contribute to this repository, feel free to fork it send a PR. It will usually be reviewed within a few days.
