# chat-nextjs-backend

This is the backend code repository for [nextjs-chat](https://github.com/Arpitgoyalgg/chat-nextjs) project.

## Routes

 - `index.js` contains code for basic intro and home page of backend.
 - `users.js` contains code to look for any data related to users or perform several operations on the users details and database.
 - `data.js` contains code to look for any data except users.
 - `socketApi.js` contains code for socket logic(chat).

## Installation and Development

- Clone this repository and `cd` in it.
- `npm install` would install all the dependencies.
- create a `.env` file with the following line in it.

  `CLIENT_URL=http://localhost:3000
  `
 Here `http://localhost:3000` is the client server address. Check that project out [here](https://github.com/Arpitgoyalgg/chat-nextjs).
- `npm start` or `nodemon start`(if you have nodemon installed) would start the server.

