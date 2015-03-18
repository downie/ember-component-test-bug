# Component-test-bug

This repo demonstrates a bug in injecting the test helpers into component tests.

## See the bug in action.
* Checkout the `click-undefined` branch.
* Run `ember test`

Expected: The tests pass. They're trivial

Actual:
```
not ok 8 Firefox 36.0 - component:custom-input: trivial test if click is defined
    ---
        actual: >
            null
        message: >
            Died on test #1     at http://localhost:7357/assets/test-support.js:2535
                at test (http://localhost:7357/assets/test-support.js:1693)
                at http://localhost:7357/assets/component-test-bug.js:264
                at http://localhost:7357/assets/vendor.js:150
                at tryFinally (http://localhost:7357/assets/vendor.js:30)
                at http://localhost:7357/assets/vendor.js:156
                at http://localhost:7357/assets/test-loader.js:29
                at http://localhost:7357/assets/test-loader.js:21
                at http://localhost:7357/assets/test-loader.js:40
                at http://localhost:7357/assets/test-support.js:5301: Can't find variable: click
        Log: >
    ...
```

## See the bug hidden by other tests
* Checkout `master`
* Run `ember test`

Notice that all the tests pass now. The only thing different was that I added an acceptance test. This has the side effect of injecting the test helpers into subsequent tests.
