import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders select without crashing", () => {
  render(<App />);
  const selectTag = screen.getByText(/Shooter/i);
  expect(selectTag).toBeInTheDocument();
});

test("renders search input without crashing", () => {
  render(<App />);
  const inputPlaceholder = screen.getByPlaceholderText(/Game title/i);
  expect(inputPlaceholder).toBeInTheDocument();
});

test("render img", async () => {
  render(<App />);
  const imgAlt = await screen.findByAltText(/Rumbleverse/i);
  expect(imgAlt).toBeInTheDocument();
});
