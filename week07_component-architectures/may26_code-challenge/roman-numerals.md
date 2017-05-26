Roman Numerals
===
    
Write a function that takes a Roman Numeral and returns a number that
is the decimal equivalent.

Roman | Decimal
:---|---:
I | 1
V | 5
X | 10
L | 50
C | 100
M | 1000

## Rules

* Numerals are ordered most to least significant, _except_:
* Only three of a numeral in a row may be used, then the next biggest
number must be decremented.
* Only one decrementor is ever allowed and is always the next least significant.

## Examples

Roman | Decimal
:---|---:
I | 1
II | 2
III | 3
IV | 4
IX | 9
XXIX | 29
XXXVI | 36
LIV | 54

## Misc

Assume valid input, assume always uppercase