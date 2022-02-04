# 03-integration-testing

> Integration tests strike a great balance on the trade-offs between confidence and speed/expense. This is why it's advisable to spend most (not all, mind you) of your effort there. – Kent C. Dodds (Testing Library Creator)

> Write tests. Not too many. Mostly integration. - Guillermo Rauch (Next.js Creator)

## When does a Unit Test Become an Integration test?

- When you have two isolated units of code working together.
- Most of our tests are actually integration tests.

### But we unit tested everything...

Unit tests are great because they're fast and cheap. They lack in providing confidence.

We want to be confident that component `A` renders correctly but if we don't test is with `B` and `C` our confidence is lacking.

### Integration tests goal

1. We want to test how our components work together while mocking as little as possible

- HTTP requests **(GQL included)**
- Accessing window/dom properties

2. The less we mock, the more confident we can be

- Don't mock redux **(I'll explain more..)**

2. We don't want them to take a lot of time to write

Integration tests give us **balance** between **confidence** and **effort**.

## Task

1. What kind of integration is happening between components in our form?
2. What integration is happening between components on the confirm page?
3. What kind of integration do we expect to happen between the server and client?
