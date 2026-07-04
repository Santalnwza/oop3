export {};

enum BookGenre {
    Action = "Action",
    Comedy = "Comedy",
    Drama = "Drama",
    SciFi = "SciFi"
}


interface Book {
    title: string;
    author: string;
    genre: BookGenre;
}


type LibraryInventory = Book[];

function printSciFiBooks(inventory: LibraryInventory): void {
    const sciFiBooks = inventory.filter(book => book.genre === BookGenre.SciFi);
    
    if (sciFiBooks.length === 0) {
        console.log("No Sci-Fi books found in the inventory.");
        return;
    }

    console.log("--- Sci-Fi Books ---");
    sciFiBooks.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}`);
    });
}

const myInventory: LibraryInventory = [
    { title: "Dune", author: "Frank Herbert", genre: BookGenre.SciFi },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Drama }, 
    { title: "Neuromancer", author: "William Gibson", genre: BookGenre.SciFi },
    { title: "Die Hard", author: "Roderick Thorp", genre: BookGenre.Action }
];


printSciFiBooks(myInventory);