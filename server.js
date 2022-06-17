const { createServer } = require("http");
const next = require("next");

const app = next({
    dev: process.env.NODE_ENV !== "production"
});

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.prepare().then(() => {
    require("dotenv").config();
    createServer(handler).listen(port, (err) => {
        if (err) throw err;
        console.log("Server Ready");
    })
});