describe('Confirm a review', () => {
  const firstname = 'Mark';
  const reverse = 'kraM';
  const title = 'My Title';
  const review = 'This is a review.\nIt tells you about something.';

  const getButton = name => cy.findByRole('button', { name });
  const getInput = name => cy.findByRole('textbox', { name });
  const getStarButton = num => getButton(`select-rating-${num}`);

  beforeEach(() => {
    cy.visit('http://localhost:3000/review');
  });

  context('Fill out the form and submit on the confirmation page', () => {
    it('allows you to fill out the form', () => {
      getInput('firstname').type(firstname);
      getInput('title').type(title);
      getInput('review').type(review);
      getStarButton(3).click();
      getButton('confirm-review').click();
      cy.location('pathname').should('eq', '/confirm');
      getButton('submit-review').click();
      cy.findByText(`Thank you ${reverse}`).should('exist');
      cy.location('pathname').should('eq', '/thanks');
    });
  });
});
