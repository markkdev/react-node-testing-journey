describe('Leave a Review', () => {
  const firstname = 'Mark';
  const title = 'My Title';
  const review = 'This is a review.\nIt tells you about something.';

  const getButton = name => cy.findByRole('button', { name });
  const getInput = name => cy.findByRole('textbox', { name });
  const getStarButton = num => getButton(`select-rating-${num}`);

  beforeEach(() => {
    cy.visit('http://localhost:3000/review');
  });

  context('Review Form Happy Path', () => {
    it('allows you to fill out the form', () => {
      getInput('firstname').type(firstname);
      getInput('title').type(title);
      getInput('review').type(review);
      getStarButton(3).click();
      getButton('submit-review').click();
      cy.location('pathname').should('eq', '/thanks');
    });
  });

  context('Review Form Missing Inputs', () => {
    it('fails if the firstname is missing', () => {
      getInput('title').type(title);
      getInput('review').type(review);
      getStarButton(3).click();
      getButton('submit-review').click();
      cy.findByText('Please provide your first name').should('exist');
      cy.location('pathname').should('eq', '/review');
    });

    it('Allows you to continue after failing because an input is missing', () => {
      getInput('title').type(title);
      getInput('review').type(review);
      getStarButton(3).click();
      getButton('submit-review').click();
      cy.findByText('Please provide your first name').should('exist');
      cy.location('pathname').should('eq', '/review');
      getInput('firstname').type(firstname);
      getButton('submit-review').click();
      cy.location('pathname').should('eq', '/thanks');
    });
  });
});
