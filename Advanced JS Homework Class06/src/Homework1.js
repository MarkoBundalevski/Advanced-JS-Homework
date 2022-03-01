class Product{
    constructor(name, category, hasDiscount, price){
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }
}
let products =
[
    new Product("Bread", "Food", false, 10),
    new Product("Chocolate", "Food", true, 7.5),
    new Product("Milk", "Drink", false, 8),
    new Product("Coca Cola", "Drink", true, 9),
    new Product("Chips", "Food", false, 11),
    new Product("Banana", "Food", false, 4.5),
    new Product("Beer", "Drink", true, 6.5),
    new Product("Beef", "Food", false, 14),
    new Product("Orange Juice", "Drink", false, 8),
    new Product("Chewing Gum", "Food", false, 3),
    new Product("Cooking Oil", "Food", true, 6),
    new Product("BMW", "Car", false, 50000),
    new Product("Mercedes", "Car", true, 80000),
    new Product("Ford", "Car", true, 25000),
    new Product("Tesla", "Car", false, 60000)
];

console.log("Products greater than 20 dollars:");
let productsGreaterThanTwenty = products.filter(p => p.price > 20);
console.log(productsGreaterThanTwenty);

console.log("Products of category Food that are on discount:");
let foodProductsThatHaveDiscount = products.filter(f => f.category == "Food" && f.hasDiscount);
console.log(foodProductsThatHaveDiscount);

console.log("Average of all products that are on discount:");
let averageOfProductsThatHaveDiscount = products.filter(f => f.hasDiscount);
console.log(averageOfProductsThatHaveDiscount);
let sum = 0;
averageOfProductsThatHaveDiscount.forEach(a => sum+=a.price);
console.log(`Average is: ${sum / averageOfProductsThatHaveDiscount.length}`);

console.log("Name and price of all the products starting with a vowel, not on discount:");
let productsStartingWithAVowel = products.filter(v => !v.hasDiscount && (v.name.startsWith("A") || v.name.startsWith("E") || v.name.startsWith("I") || v.name.startsWith("O") || v.name.startsWith("U")));
console.log(productsStartingWithAVowel);

console.log("Products sorted by price - ascending:");
let productsSorted = [...products];
productsSorted.sort((a, b) => { return a.price-b.price });
console.log(productsSorted);