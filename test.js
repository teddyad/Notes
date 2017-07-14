/*======================================
Create an Array with numbers from 1-255
=======================================*/
function createArray() {
    var arr = [];

    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(createArray());


/* ==================================
Get the sum of all values in an Array
===================================*/
function sumAll(arr) {
    arr = [1, 2, 5, 4, 3];
    sum = 0

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}
console.log(sumAll());


/*=============================
Sum all Even numbers from 1-100
==============================*/
function sumEven() {
    var sum = 0;

    for (var i = 1; i < 101; i++) {
        if (i % 2 === 0) {
            sum = sum + (i);
        }
    }
    return sum;
}
console.log(sumEven());


/*=============================
Sum all Odd numbers from 1-100
==============================*/
function sumEven() {
    var sum = 0;

    for (var i = 1; i < 101; i++) {
        if (i % 2 !== 0) {
            sum = sum + (i);
        }
    }
    return sum;
}
console.log(sumEven());


/* ================================
find the Maximum value of the Array 
=================================*/
function findMax(arr) {
    arr = [3, 7, 4, 6];
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = max + arr[i];
        }
    }
    return max;
}
console.log(findMax());


/*========================================
Get the Average of the vallues in an Array
========================================*/
function getAverage(arr) {
    arr = [3, 7, 4, 6];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(getAverage());


/*=======================================
Create Array of Odd numbers between 1-100
========================================*/
function oddNumArray(arr) {
    arr = [];

    for (var i = 1; i < 101; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddNumArray());


/*========================================
Create Array of Even numbers between 1-100
========================================*/
function evenNumArray(arr) {
    arr = [];

    for (var i = 1; i < 101; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(evenNumArray());


/*========================================
Retrn the value greater than Y (which are 5, 7)
========================================*/
function greaterY(arr, Y) {
    arr = [1, 3, 5, 7];
    Y = 3;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
console.log(greaterY());

Revision One

Revision Two

Revision Three

Revision Four