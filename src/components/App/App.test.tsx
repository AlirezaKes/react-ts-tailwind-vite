import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const headingElement = screen.getByText(/App/i); // Looks for "App" text in the document
  expect(headingElement).toBeInTheDocument(); // Asserts that the "App" heading is in the document
});
