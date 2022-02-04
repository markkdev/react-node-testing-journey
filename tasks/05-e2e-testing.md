# 05-e2e-testing

## What are we testing?

In an end 2 end test we are the user in the real world.

1. We interact with our entire application
2. We load real pages
3. We send & receive real requests (mostly)

We are building a helper robot that behaves like a user to click around the app and verify that it functions correctly.

## What are we NOT testing?

What we want to avoid is re writing the same tests we wrote in our integration tests.

Here we're walking through our application like a real user would.

- We're not asserting that a `GET` request is populating our header with the proper text content.
- We're not checking to see that a button is present, we're clicking it
- We're not checking to see that an input is present, we're filling it
- We're looking to see if we navigate to other pages after a certain action occurs.
- We're trying to get as close as possible to a real world scenario.

## Cypress & RTL contradict each other

cypress advocates using data-test in your markup while RTL recommends accessing elements by aria-roles.

Which one should we use and why?

IMO RTL because it always reminds us to build with accessibility in mind.

How can we make our life easier?

[@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/)

This library adds commands to cypress that allow us to use the same conventions when writing e2e tests as we do when we write unit/integration tests.

    cy.findByRole
    cy.findByLabel
    cy.[etc..]

Other reasons to lean more towards RTL.

1. Tests run faster
2. Tests are less complex
3. It's cheaper because we don't waste real world resources on CI **$$$**

# Tasks

1. Write an end 2 end test for filling out the form
2. Write an end 2 end test confirming the form contents

### Thank you

For sticking through to the end. I hope you learned something and that your review of this workshop is higher than your Uber passenger rating on a saturday night...

##### To return to the beginning

    git checkout main
