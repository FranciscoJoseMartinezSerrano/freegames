import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// test("home work as expected", async () => {
//   const { container } = render(<App />);
//   const gamesList = await waitFor(() => container.querySelector(".list-games"));
//   expect(gamesList).toBeInTheDocument();
// });

test("search name form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "valorant" } });
  const title = await screen.findByText(/valorant/i);
  expect(title).toBeVisible();
  const imgAlt = await screen.findByAltText(/valorant/i);
  expect(imgAlt).toBeInTheDocument();
});
