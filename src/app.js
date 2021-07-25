import express from "express";
import morgan from "morgan";

const apiRouter = require('./routes/api');
const providers = require('./libs/index');

const app = express();
providers.libs.createRoles();
providers.libs.createCitiesAndDepartments();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev"));

app.use('/api', apiRouter);

export default app;
