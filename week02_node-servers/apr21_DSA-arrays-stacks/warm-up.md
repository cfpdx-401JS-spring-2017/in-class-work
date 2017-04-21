## 1. Count words

Write a function that takes a sentence and returns an object 
dictionary that has a property for each unique word whose value
is the count of that word in the sentence.

```
I object to the object
```

```
{
    I: 1,
    object: 2,
    to: 1,
    the: 1
}
```

## 2. Longest word

Write a `function longestWord(sen){...}` that 
returns the longest word in the sentence. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

```
Input: "This is unbelievable"
Output: "unbelievable"

Input:"I love dogs"
Output:"love"
```