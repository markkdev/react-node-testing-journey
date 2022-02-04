# 04-integration-testing

## The story of redux

> Because most of the Redux code you write are functions, and many of them are pure, they are easy to test without mocking. However, you should consider whether each piece of your Redux code needs its own dedicated tests. In the majority of scenarios, the end-user does not know, and does not care whether Redux is used within the application at all. As such, the Redux code can be treated as an implementation detail of the app, without requiring explicit tests for the Redux code in many circumstances.
>
> \- Redux.js.org Docs

## You heard that right

Redux is an implementation detail, not a feature of the application

#### Caveat

Redux has matured in the last several years.

Adding tests to redux used to be the norm.

It came with tons of boilerplate and logic to wrap around components.

Libraries like `@reduxjs/toolkit`, there's less boilerplate for us to worry about messing up.

The library itself is tested therefore we can rely on our actions, reducers, etc. working properly.

#### Working in an older redux environment

Logic happening in an action or a reducer can almost **ALWAYS** be extracted into a function that can be unit tested.

Our goal is confidence. If you feel like adding a layer of testing to your code will improve your confidence, do it.

### Integration test goals

We are assering that

1. The components we've combined together work together.
2. Our state is what we expect it to be.
3. Our requests are working as expected.

We verify that several units work together in harmony.

## Tasks

1. Create the components and integration tests for the review form
2. Create the components and integration tests for the confirm page

I've left in all of the redux boilerplate to save time.

### More Resources

[Static vs Unit vs Integration vs E2E](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)

##### To continue run

    git checkout e2e-testing-05
