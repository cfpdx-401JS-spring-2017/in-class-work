<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30>White Boarding and Big O
===

## Learning Objectives

1. Get comfortable writing readable code on a whiteboard
1. Learn how-to whiteboard and "why"
1. Understand differences and uses of arrays and dictionaries (hashes)
1. Explain the scaling characteristics (graph shape) and give examples of 
`O(1)`, `O(log n)`, `O(n)`, `O(n^2)`, and `O(2^n)` 
complexity functions.
1. Evaluate existing code to determine Big O in time or space


# Agenda

* White Boarding
    * Have stations
    * Supplies
        * close lid on wipes
        * erasers
        * throw away dead markers
        * let us know if running low
    * Exercise:
        * write a `greet` or `add` function:
        ```
        function greet(salutation, name) {
            return `${salutation} ${name}!`
        }
        ```
    * Review best practices
* Data Structures
    * arrays
    * dictionaries
* Exercises:
    1. Write a function that takes an array and returns
    `true` if there are duplicates, otherwise `false`
    1. Write a function that takes a string sentence and returns
    an object (dictionary) with a property for each unique word, and whose value is the count of that word in the sentence.
* Algorythms
    * Big O
        * [Big O Cheat Sheet](http://bigocheatsheet.com/)
* Exercise:
    * (both partners) rewrite findDups to be more efficient `O(n*logn)`
* Demo:
    * `O-n2.js`
    * `O-n-logn.js`