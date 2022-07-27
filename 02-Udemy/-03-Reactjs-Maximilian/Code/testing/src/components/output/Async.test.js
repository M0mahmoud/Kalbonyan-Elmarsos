import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Render posts if succeeds", async () => {

    //Don't Send Real Request
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    const listItemEl = await screen.findAllByRole("listitem");
    expect(listItemEl).not.toHaveLength(0);
  });
});

