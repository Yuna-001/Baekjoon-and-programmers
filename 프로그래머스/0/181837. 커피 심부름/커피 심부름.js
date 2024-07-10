function solution(order) {
    return order.reduce((total,drink)=>total + (drink.includes("latte")? 5000 : 4500), 0);
}