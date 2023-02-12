## TLDR

A shorter to type isNil and imo more pleasant to read ``` not(input) ```. It should encourage to check for the not-happy path first and return early if that makes any sense. 

## What 

Will match null or undefined
It won't match false/y.

## Test

Two test suites, good ol' imperative vs. property based checking with **fast-check**. 

```bash
    
    npm run test

```


