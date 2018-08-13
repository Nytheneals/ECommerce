// Please use vanilla javascript - no jQuery!

const cart = [
  { name: 'blender', price: 55.12 },
  { name: 'lamp', price: 33.34 },
  { name: 'bowl', price: 12.5 },
  { name: 'item bed', price: 52 },
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
const totalWithoutShipping = cart.reduce((prev, next) => prev + next.price, 0);
renderPrice(totalWithoutShipping);
/*
 * 2) When you select one of the 'shipping options',
 * add the shipping cost to every item OVER $50.
 * Expected values: $172.96, $182.96
 */

let selectedShippingPrice = null;
// I PUT THIS IN AVRIABLE BECAUSE IT COULD BE CHANGED BY ADMINISTRATOR
const shippingMark = 50;
// ABOVE SHIPPING_MARK ARRAY
// This will return true if we find any values more than the selected shipping price
const isAbove50 = cart.filter(item => item.price > shippingMark);
// BELOW SHIPPING_MARK ARRAY
// This will return values(prices) if we find any values less than the selected shipping price
const isBelowShippingMark = cart.filter(item => item.price < shippingMark).map(item => item.price);

// Getting the select element
const shippingCost = document.querySelector('select');
shippingCost.addEventListener('change', e => {
  //  (e.returnValue) couldn't work with mozilla firefox, according to my tests, that's why i used (e.isTrusted) because it worked for safari, mozilla firefox  and chrome
  // This will check if we actually have any change in the value, and if so it will run the code in the "if" block
  if (e.isTrusted) {
    selectedShippingPrice = parseInt(shippingCost.value);
    // we add the shipping selected
    const above50 = isAbove50.map(item => item.price + selectedShippingPrice);
    const newCart = [...above50, ...isBelowShippingMark];
    // getting the total of the shipping
    const totalWithShipping = newCart.reduce((prev, next) => prev + next, 0);
    // then finally we call the render function
    renderPrice(totalWithShipping);
  }
});
