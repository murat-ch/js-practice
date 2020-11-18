/*

Create a function which returns the number of true values there are in an array.

Return 0 if given an empty array.
All array items are of the type bool (true or false).

countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
 */

function countTrue(arr) {
    let counter = 0;
 let reducer = arr.reduce((acc, cur) => {
        if (cur) {
            counter++;
        }
    }, counter);
    return counter;
}

// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])

function joinDigits(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let strArr = `${i}`.split('');
        arr.push(...strArr);
    }
    return arr.join('-');
}

// console.log(joinDigits(15));

/**
 * Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little
 * knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate),
 * he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
   Given an array of wine objects, write a function that returns the name of the wine he will buy for the party.
   If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
 * @param wines [{name: 'Wine A', price: 8}, ]
 */
function chosenWine(wines) {
    if (wines.length === 0) return null;
    if (wines.length === 1) return wines[0].name;
    wines.sort((a, b) => {
        return a.price - b.price;
    });
    return wines[1].name;

}
/*
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null
 */
