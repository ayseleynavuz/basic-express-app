const express = require("express");
const userRouter = require("./routers/usersRouter.js");
const logger = require("./middlewares/logger.js");
const errorHandling = require("./middlewares/errorHandling");

const server = express();
server.use(express.json());
server.use(logger);

server.use("/users", userRouter);

server.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
server.use(errorHandling);

server.listen(5000, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor...");
});