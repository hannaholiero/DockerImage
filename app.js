const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello, World!</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #fff9c4;
        }
        h1 {
          font-size: 48px;
          font-family: Arial, sans-serif;
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Hello, world!</h1>
    </body>
    </html>
  `)
})

app.listen(3024, function () {
  console.log("Listening on port 3024")
})
