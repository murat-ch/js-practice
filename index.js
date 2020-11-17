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

countTrue([true, false, false, true, false])
countTrue([false, false, false, false])
countTrue([])