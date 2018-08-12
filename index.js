// Please use vanilla javascript - no jQuery!

const cart = [
  { name: 'blender', price: 55.12 },
  { name: 'lamp', price: 33.34 },
  { name: 'bowl', price: 12.5 },
  { name: 'dog bed', price: 52 },
];

// Think of this as a method from some external library -
// you can call it, but do not edit it
function renderPrice(val = '0.00') {
  document.getElementById('price').innerHTML = val;
}

// This just sets the initial value
renderPrice();

/*
 * 1) Use the provided `renderPrice` method to
 * display the total price of the items in `cart`.
 * Expected value: $152.96
 */
// TOTALS WITHOUT SHIPPING
const total = cart.reduce((prev, next) => prev + next.price, 0);
// console.log(total);
renderPrice(total);
/*
 * 2) When you select one of the 'shipping options',
 * add the shipping cost to every item OVER $50.
 * Expected values: $172.96, $182.96
 */
// VALUE LOGGED
const shippingCost = document.querySelector('select');

let vaj = 0;
shippingCost.addEventListener('change', e => {
  console.log(e.returnValue);
  if (e.returnValue) {
    vaj = parseInt(shippingCost.value);
    console.log(parseInt(shippingCost.value));
    vaj = parseInt(shippingCost.value);
    const ret = cart.filter(item => item.price > 50).map(dog => dog.price + vaj);
    const notAbove50 = cart.filter(item => item.price < 50).map(dog => dog.price);
    const totald = [...ret, ...notAbove50];
    const realTotal = totald.reduce((prev, next) => prev + next, 0);
    console.log(ret);
    console.log(notAbove50);
    console.log(totald);
    console.log(realTotal);
    console.log(total);
    renderPrice(realTotal);
  }
  return total;
});

console.log(vaj);
