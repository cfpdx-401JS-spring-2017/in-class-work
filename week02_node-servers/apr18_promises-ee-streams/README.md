<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Promises
===

## Questions and Issues?

* ?
* TDD Parsing url

## Today's Learning Objectives

1. Subscribe to an EventEmitter (event publisher) via function handlers.
1. Read and write from/to a stream
1. Use Promises in lieu of callbacks
1. Know how to handle:
	* sequential tasks
	* parallel tasks
	* error propagation


## Agenda

* [Promises](https://github.com/martypdx/workshop-promises-fat-arrows)

* Event Emitter pattern
	* Subscribe and use an event emitter
	* DEMO/QUESION How would we implement a publisher?
    * Streams as event emitters
        * Demo `fs.createReadStream()`
* Streams
    * as event emitters:
        * `on`: `data` and `close`
    * `write`