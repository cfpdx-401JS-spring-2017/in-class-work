
```javascript
function checkBrackets(code) {
    // magic happens here
}
```

write a function that checks code
for matching brackets:

* `(` and `)`
* `{` and `}`

return `true` if all match, else `false`

code | pass
---|---
`if (true) { callme(); }`| pass
`if (true{) callme(); }`| fail
`if true) { callme(); }`| fail
`if (true) { callme(; })`| fail
`if (true) { callme(); `| fail