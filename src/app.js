import express from "express";
import morgan from "morgan";

//import * as produtoRoutes from "./routes/products.routes";
const productRoutes = require("./routes/products.routes.js");
const categoryRoutes = require("./routes/categories.routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
