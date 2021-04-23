context("Counter", () => {
  it("should increment and decrement the counter", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="counter"]').should("have.text", 0);
    cy.get('[data-test-id="incrementButton"]').click();
    cy.get('[data-test-id="counter"]').should("have.text", 1);
    cy.get('[data-test-id="decrementButton"]').click();
    cy.get('[data-test-id="counter"]').should("have.text", 0);
  });
});
