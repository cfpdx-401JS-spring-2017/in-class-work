## Whiteboard challenge 2:

Write a function for determining if a string has matching parentheses.

(Hint: use a stack)

input | output
---|---
`( this is matched )` | true
`( this is not matched (` | false
`( this ( is ) ( matched ))` | true
`( this ( is word ))` | true
`) this ( is word )(` | false
`( this ( is( matched )))` | true
`this ( is ( matched ))` | true
`( this ( is not matched )))` | false
`)` | false
`(` | false