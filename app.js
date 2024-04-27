import express from "express";
import productManager from "./data/managers/productManager.js;
import router from "./data/fs/routes/products.routes.js";
import router from "./data/fs/routes/carts.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


//configurar puerto
app.listen(8080, () => {
    console.log("server ready on port 8080");
});


