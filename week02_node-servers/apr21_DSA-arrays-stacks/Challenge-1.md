## Whiteboard challenge 1:

Write a function to determine if a string is a palindrome

*do not use array.reverse!!!*

Assume no punctuation. Case and space insensitive. 

(You can normalize via)

```js
const normalized = str.toLowerCase().replace(' ', '');
```

Can you use a stack?


input | output
---|---
racecar | true
what | false
noon | true
not a palindrome | false
taco cat | true