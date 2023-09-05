const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const someNumber = 1242.0005;
const moneyString = formatter.format(someNumber)

console.log(moneyString)