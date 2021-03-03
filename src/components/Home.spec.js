import React from "react";
import { mount } from "cypress-react-unit-test";
import Home from "./Home";
describe("Progress Bar", () => {
 const mockSteps = ["Step 1", "Step 2", "Step 3", "Step 4"];
 it("renders steps", () => {
  mount(
   <Home steps={mockSteps}></Home>
  );
  cy.get("h1").should("have.text", "Home")
  // .next().should("have.text", "Step 2")
  // .next().should("have.text", "Step 3")
  // .next().should("have.text", "Step 4");
 });
//  it("renders active steps", () => {
//   mount(
//    <ProgressBar steps={mockSteps} current={3}>
//     <GlobalStyle />
//    </ProgressBar>
//   );
//   cy.get("ul li:nth-child(2)").find("span")
//   .and("have.css", "background-color", "rgb(0, 182, 237)")
//   .and("have.css", "border-color", "rgb(0, 0, 0)");
//   cy.get("ul li:nth-child(3)").find("span")
//   .and("have.css", "background-color", "rgb(255, 255, 255)")
//   .and("have.css", "border-color", "rgb(0, 182, 237)");
//   cy.get("ul li:nth-child(4)").find("span")
//   .and("have.css", "border", "3px solid rgb(198, 198, 198)");
//  });
});