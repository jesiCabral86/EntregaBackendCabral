import { Router } from "express";
import productManager from "../manager/productManager.js";

const router = Router();

router.get("/", async (req, res) =>{

    try{
    const { limit } = req.query;
    const products = await productManager.getProducts(limit);

    res.status(200).json(products);
    } catch (error) {
    console.log(error);
    }
});

//para configurar solicitudes/peticiones
router.get("/:pid", async (req, res) => {
    try{
        const { pid } = req.params;

        const product = await productManager.getProductById(parseInt(pid));

        res.status(200).json(product);
    }catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) =>{

    try{
    const product = req.body;
    const newProduct = await productManager.addProduct(product);

    res.status(201).json(newProduct);
    } catch (error) {
    console.log(error);
    }
});

router.put("/:pid", async (req, res) =>{

    try{
    const { pid } = req.params;
    const product = req.body;

    const updateProduct = await productManager.updateProduct(pid, product);

    res.status(201).json(updateProduct);
    } catch (error) {
    console.log(error);
    }
});

router.delete("/:pid", async (req, res) =>{

    try{
    const { pid } = req.params;

    await productManager.deleteProduct(pid);

    res.status(201).json({message: "Producto Eliminado"});
    } catch (error) {
    console.log(error);
    }
});

export default router;