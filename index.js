




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

const amount = 100;
const text = "hello world";
const num1 = 10;
const num2 = 20;
const word = "madam";
const palindrome = "madam";
const originalPrice = 50;
const discountPercentage = 20;

function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1, num2) {
        return num1 > num2 ? num1 : num2;
}
function isPalindrome(word) {
    if (word === palindrome) {
        return true;
    } else {
        return false;
    }
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}