Happy Number
===
    
A number is called happy number if it leads to 1 after a sequence of
steps where in each step number is replaced by sum of squares of its digit.
That is if we start with Happy Number and keep replacing it with digits square sum, we reach 1.

Write a function that takes a number and return `true` if it is happy, otherwise return `false`.

(If, in the process of calculating the happy number, you come across a previous number, you will never
reach a happy number and should return false)

## Examples

Input | Output
---|---
**19** | `true`
**20** | `false`

`n=19`:
* 1^2 + 9^2 = 82
* 8^2 + 2^2 = 68
* 6^2 + 8^2 = 100
* 1^2 + 0^2 + 0^2 = **1**

`n=20`:
* 2^2 + 0^2 = 4
* 4^2 = 16
* 1^2 + 6^2 = 37
* 3^2 + 7^2 = 58
* 5^2 + 8^2 = 89
* 8^2 + 9^2 = 145
* 1^2 + 4^2 + 5^2 = 42
* 4^2 + 2^2 = **20** <== repeats

