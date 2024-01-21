import { describe, it, expect } from "vitest";
import { cy } from "vitest-vue";
import "@cypress/code-coverage/support";

describe("Add New Category", () => {
  it("Successfully adds a new product category", () => {
    // Visit the page containing the form
    cy.visit("/your-form-url");

    // Fill in the form fields
    cy.get("[data-cy=image]").type("https://example.com/image.jpg");
    cy.get("[data-cy=select]").select("YourCategoryName");
    cy.get("[data-cy=checkbox]").check();

    // Submit the form
    cy.get("[data-cy=submit-btn]").click();

    // Check if the navigation to the products page occurred
    cy.url().should("include", "/products");
  });

  it("Handles form validation", () => {
    // Visit the page containing the form
    cy.visit("/your-form-url");

    // Submit the form without filling in the required fields
    cy.get("[data-cy=submit-btn]").click();

    // Check if the error messages are displayed
    cy.get("[data-cy=name-error]").should("be.visible");
    cy.get("[data-cy=image-error]").should("be.visible");
  });
});
