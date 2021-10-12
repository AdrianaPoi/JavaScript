const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
//este o metodă încorporată în express pentru a recunoaște obiectul de solicitare de intrare ca obiect JSON
app.use(express.urlencoded({ extended: true }));
//este o metodă încorporată în expres pentru a recunoaște obiectul de solicitare de intrare ca șiruri sau tablouri .
app.use(express.json());

const employee_routes = require("./routes/employee_routes");
app.use("/api", employee_routes);
const project_routes = require("./routes/project_routes");
app.use("/api", project_routes);
const singUp_routes = require("./routes/singUp_routes");
app.use("/api/signup", singUp_routes);
const singIn_routes = require("./routes/singIn_routes");
app.use("/api/signin", singIn_routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
