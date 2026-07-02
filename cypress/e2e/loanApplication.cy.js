describe("Loan Application", () => {
  it("Successfully submits a loan application", () => {
    cy.visit("http://localhost:5173");

    // Personal Information
    cy.get('[data-testid="fullName"]').type("Sanjana Yadav");
    const email = "sanjana@gmail.com";

cy.get('[data-testid="email"]').type(email);

    
    cy.get('[data-testid="phone"]').type("9876543210");

    cy.get('[data-testid="personal-next"]').click();

    // Verify next page opened
    cy.contains("Address Information").should("exist");

    // Address Information

    cy.get('[data-testid="address1"]').type("Indore");

    // Wait for suggestions to appear
    cy.get('[data-testid="address-suggestion"]').should(
      "have.length.greaterThan",
      0,
    );

    // Click the correct suggestion
    cy.contains(
      '[data-testid="address-suggestion"]',
      "Indore, Madhya Pradesh",
    ).click();

    // Wait for React Hook Form to update the fields
    cy.get('[data-testid="city"]', { timeout: 10000 }).should(
      "not.have.value",
      "",
    );

    cy.get('[data-testid="state"]').should("have.value", "Madhya Pradesh");

    // Pincode should also be filled
    cy.get('[data-testid="pincode"]').should("not.have.value", "");

    // Next page
    cy.get('[data-testid="address-next"]').click();

    // Verify Loan page
    cy.contains("Loan Information").should("exist");

    // Verify Loan page

    cy.contains("Loan Information").should("exist");

    // Select loan type
    cy.get('[data-testid="loanType"]').select("Personal Loan");

    // Loan amount
    cy.get('[data-testid="loanAmount"]').type("500000");

    // Loan purpose
    cy.get('[data-testid="loanPurpose"]').type("Higher Education");

    // Go to Employment page
    cy.get('[data-testid="loan-next"]').click();

    cy.contains("Employment Information").should("exist");

    // Select Employment Type
    cy.get('[data-testid="employmentType"]').select("Salaried");

    // Company Name
    cy.get('[data-testid="companyName"]').type("Google");

    // Job Title
    cy.get('[data-testid="jobTitle"]').type("Software Engineer");

    // Monthly Income
    cy.get('[data-testid="monthlyIncome"]').type("80000");

    // Experience
    cy.get('[data-testid="experience"]').type("3");

    // Next
    cy.get('[data-testid="employment-next"]').click();

    // Verify Documents page
    cy.contains("Upload Documents").should("exist");

    cy.get('[data-testid="pan-upload"]').selectFile(
      "cypress/fixtures/panCard.jpg",
    );

    cy.contains("Selected: panCard.jpg", { timeout: 10000 });

    cy.get('[data-testid="aadhaar-upload"]').selectFile(
      "cypress/fixtures/aadhaar.jpg",
    );

    cy.contains("Selected: aadhaar.jpg", { timeout: 10000 });

    cy.get('[data-testid="salary-upload"]').selectFile(
      "cypress/fixtures/salaryslip.jpg",
    );

    cy.contains("Selected: salaryslip.jpg", { timeout: 10000 });

    cy.get('[data-testid="documents-next"]').click();

    cy.contains("Verification", { timeout: 10000 }).should("be.visible");

    // Continue button should initially be disabled
    cy.get('[data-testid="verification-next"]').should("be.disabled");

    // Verify PAN
    cy.get('[data-testid="verify-pan"]').click();

    // Wait for verification to finish
    cy.contains("✔ PAN Verified", { timeout: 3000 }).should("exist");

    // Verify Aadhaar
    cy.get('[data-testid="verify-aadhaar"]').click();

    // Wait for verification to finish
    cy.contains("✔ Aadhaar Verified", { timeout: 3000 }).should("exist");

    // Continue button should now be enabled
    cy.get('[data-testid="verification-next"]')
      .should("not.be.disabled")
      .click();

    // Verify Signature page
    cy.contains("E-Signature").should("exist");

    // Draw signature
    cy.get('[data-testid="signature-canvas"]')
      .trigger("mousedown", { which: 1, clientX: 100, clientY: 100 })
      .trigger("mousemove", { which: 1, clientX: 150, clientY: 120 })
      .trigger("mousemove", { which: 1, clientX: 200, clientY: 150 })
      .trigger("mousemove", { which: 1, clientX: 250, clientY: 100 })
      .trigger("mouseup", { force: true });

    // Save Signature
    cy.get('[data-testid="save-signature"]').click();

    // Verify Review page
    cy.contains("Review").should("exist");

    cy.contains("Review Application").should("exist");

    cy.contains("Sanjana Yadav").should("exist");

    cy.contains(email).should("exist");

    cy.contains("Personal Loan").should("exist");

    cy.contains("Google").should("exist");

    cy.contains("Eligible for Loan").should("exist");

    cy.get('[data-testid="signature-preview"]')
      .should("exist")
      .should("have.attr", "src")
      .and("include", "data:image");

    cy.intercept("POST", "**/api/applications/apply").as("submitLoan");

    cy.get('[data-testid="submit-application"]').click();

    cy.wait("@submitLoan");

    // Success page
    cy.get('[data-testid="success-heading"]').should(
      "contain",
      "Loan Application Submitted Successfully",
    );

    // Application ID exists
    cy.get('[data-testid="application-id"]')
      .invoke("text")
      .should("match", /^LOAN\d{6}$/);

    // Verify next steps
    cy.contains("Documents Uploaded").should("exist");

    cy.contains("PAN Verification Completed").should("exist");

    cy.contains("Aadhaar Verification Completed").should("exist");

    cy.contains("E-Signature Captured").should("exist");

    cy.contains("Application Received").should("exist");

    // Buttons exist
    cy.get('[data-testid="print-summary"]').should("exist");

    cy.get('[data-testid="apply-again"]').should("exist");
  });
});
