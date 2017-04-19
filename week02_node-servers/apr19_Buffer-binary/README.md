<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Buffer and Binary Data
===

## Questions and Issues?

### Terms
* module - small piece of functionality, in JavaScript, a single module (file)
* library - overall package of functionality (npm)
    * meant to be used by other code
    * toolbox of functionality via API
* framework - overall package of functionality (npm)
    * meant to be a "way" to achieve a certain goal
    * API is way to build things
    * Often depends on using core components or pieces of that framework

## Learning Objectives

* Explain what binary data means
* Read, write, and manipulate encoded binary data using the Buffer class

## Agenda

* Binary Data
	* What is meaning?
	* Bits, Bytes, Words, DWords
	* BE LE "Endianness" byte order
	* signed/unsigned
	* "encoding"
	* "serialization"/"deserialization"
* Meet `Buffer`
    * Data managed outside of JavaScript
    * Binary representation
    * Stored in Heap memory
    * Buffers access this memory
    * I/O methods
    * Beware of the number constructor
    * Binary Data