export
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const myInventory: Product[] = [
    { id: 101, name: "Laptop", price: 25000, quantity: 10 },
    { id: 102, name: "Mouse", price: 800, quantity: 5 },
    { id: 103, name: "Keyboard", price: 1500, quantity: 3 }
];

function updateStock(productId: number, amountSold: number): void {
    const product = myInventory.find(item => item.id === productId);

    if (!product) {
        console.log(`Product with ID ${productId} not found.`);
        return;
    }

    if (amountSold > product.quantity) {
        console.log("Not enough stock");
    } else {
        product.quantity -= amountSold;
        console.log(`Successfully sold ${amountSold} x ${product.name}. Remaining stock: ${product.quantity}`);
    }
}


console.log("--- Initial Inventory ---", myInventory);

console.log("\n--- Test 1: Successful sale ---");
updateStock(102, 2); 

console.log("\n--- Test 2: Over-selling ---");
updateStock(103, 5); 

console.log("\n--- Updated Inventory ---", myInventory);