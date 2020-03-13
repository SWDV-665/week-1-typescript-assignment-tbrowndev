class Grocery{
    totalPrice: number;
    constructor(public name: string, public quantity: number, public unitPrice: number, public sku: string){
        this.totalPrice = unitPrice * quantity;
    }
}

let groceries = [];
groceries.push(new Grocery("Milk", 2, 1.99, "M2312"))
groceries.push(new Grocery("Bread", 1, 1.46, "B6KTE"))
groceries.push(new Grocery("Eggs", 1, 2.00, "E54BG"))
groceries.push(new Grocery("Chips", 5, 1.00, "CK832"))
groceries.push(new Grocery("Cereal", 2, 2.89, "CH74W"))

function GetGroceryList(groceryList: Array<Grocery>){
    groceryList.forEach(item => {
        document.write(item.name+ " | " +item.quantity+ " | $" +item.unitPrice+ " | $" +item.totalPrice+ " | " +item.sku)
        document.write("<br><br>")
    });
}
document.write("Name | Quantity | Price/Unit | Total Price | SKU<br>")
GetGroceryList(groceries)