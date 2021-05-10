class Ingredients {
    constructor(ingredient,ingredientPrice){
        this.ingredient= ingredient,
        this.ingredientPrice = ingredientPrice;
    }
}
const cheese = new Ingredients ("cheese", 2);
const dough = new Ingredients("dough ",2 )
const fries = new Ingredients("fries ",3 )
const lettuce = new Ingredients("lettuce",5 )
const nudels = new Ingredients("nudels ",3 )
const salami = new Ingredients("salami ",3 )
const tomato = new Ingredients("tomato ",1 )
const cucumber = new Ingredients("cucumber",1)
//------------------------------------------------------------
class Dish {
    constructor (dish, dishPrice,ingredient){
        this.dish = dish,
        this.ingredient = ingredient;
        this.dishPrice = dishPrice
    }
    printDish(){
        return console.log(this.dish)
    }
    cost(){
        let totalCost = 10;
        this.ingredient.forEach(val => totalCost+= val.ingredientPrice) ;
        return totalCost
    }
    getProfit(){
        let profit = this.dishPrice - this.cost();
        console.log(profit);
    }
}
const salade = new Dish("Salde",12,[cucumber,lettuce,tomato]);
const pizza = new Dish("Pizza", 27,[dough,cheese,tomato,salami,cheese]);
const frenchFries = new Dish(fries,10,[fries]);
const pasta = new Dish("Pasta", 20,[nudels,tomato,cheese])
//----------------------------------------------------
class Client {
    constructor(name, id){
        this.name = name,
        this.id = id;
    }
}
const goofy = new Client ("Goofy", 1 )
const micky = new Client("Micky",2)
//----------------------------------------------------
class Restaurant {
    constructor(){
        this.order = {}
    };
    orderingDish(dish, client){
        if (!this.order[client.id]){
            this.order[client.id]=[dish]
        }else{this.order[client.id].push(dish)}
    };
    printingOrder(client){
        let clientID = client.name
        console.log(clientID,"your order is:");
        this.order[client.id].forEach(item=>{console.log(item.dish)})
    };
    printCheck(client){
        let clientBalace = 0;
        this.order[client.id].forEach(amount=>{clientBalace +=amount.dishPrice} )
        console.log(clientBalace);
    };
};
//--------istanciating the restaurant---
const myRestaurant = new Restaurant;
//-------- client makes order-----------
myRestaurant.orderingDish(salade,goofy);
myRestaurant.orderingDish(pizza,goofy);
myRestaurant.orderingDish(pasta,micky);
//----------printing orders from each client-------
myRestaurant.printingOrder(micky);
myRestaurant.printingOrder(goofy);
//----------printing checks------------------------
myRestaurant.printCheck(goofy);
//----------Other stuff----------------------------
pizza.printDish()
console.log(pizza.cost())
pizza.getProfit();
pizza.printDish()
pizza.cost()
pizza.getProfit()
console.log(micky)

