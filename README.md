# Advent 2024

These are my solutions to [Advent of Code 2024](https://adventofcode.com/2024).

- [Local Setup](#local-setup)
- [Running Solutions](#running-solutions)
- [Running Test Suite](#running-test-suite)

## Local Setup

```
$ npm install
```

Create a directory called `inputs` in the base directory.

Add input files in to the `inputs` directory. These should be in the form of `day-[xx].txt`.

## Running Solutions

### Run Solutions for a Single Day

```
$ npm run start:[day]
```

Note that this day does not have leading zeros for single digit days. Ex: `npm run start:1`

### Run All Solutions

```
$ npm run start
```

## Running Test Suite

```
$ npm run test
```