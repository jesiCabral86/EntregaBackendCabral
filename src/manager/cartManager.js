import fs from "fs";

let carts = [];
const pathFile = "./carts.json"

const getCarts = async () => {
    const cartsJson = await fs.promises.readFile(pathFile);
    carts = JSON.parse(cartsJson) || [];

return carts; 
}

const createCart = async () => {
    await getCarts();

    const newCart ={
        id: carts.length + 1,
        products: []
    };

    carts.push(newCart);

    await fs.promises.writeFile(pathFile, JSON.stringify(carts));

    return newCart;

    };

    const getCartById = async (cid) => {
        await getCarts();
    
        const cart = carts.find(c => c.id === cid);
            
            if(!cart) return `No se encuentra el carrito con el id ${cid}`

            return carts.products;

        };
    
        export default {
        getCarts,
        createCart,
        getCartById
    }
