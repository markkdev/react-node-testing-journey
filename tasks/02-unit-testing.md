# 02-unit-testing

## Covering the basics

_Most_ large scale applications written with the React library conform to some type of common library.

This library is usually the best place for unit tests.

Why?

### Independent components

This library is what the rest of the application will build on.

It includes our buttons, inputs, containers, the most simple elements we combine are here.

### Utility Functions

Another key folder. Most applications have at least one of these folders if not many spread throughout the application.

These functions are simple and can be independent or composed of several functions.

These functions are also ideal for unit testing.

### Tasks

1. What are the basic testing requirements for our button?
2. What are the basic testing requirements for our input?
3. Is there a basic testing requirement for the stars in the form?

### More Reading

[Read The RTL Docs](https://testing-library.com/docs/react-testing-library/intro)

[Common Mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) **Highly Recommend**

[The Modern Way To Test React Components](https://blog.bitsrc.io/react-testing-library-the-modern-way-to-test-react-components-778ef578d0d9)

[Confident React](https://www.youtube.com/watch?v=qXRPHRgcXJ0&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)

##### To continue run

    git checkout integration-testing-03
