import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Components", () => {

  test("hello This is Greeting Test", () => {
    /// Arrange
    render(<Greeting />);
    /// Act
    // Nothing
    //Assert
    const test = screen.getByText("Greeting Test", { exact: false });
    expect(test).toBeInTheDocument();
  });

  test("Greeting Button Was Not Cliked", () => {
    /// Arrange
    render(<Greeting />);
    //Assert
    const output = screen.getByText("Greeting ", { exact: false });
    expect(output).toBeInTheDocument();
  });

  test("Greeting Changed Button Was  Cliked", () => {
    /// Arrange
    render(<Greeting />);
    //Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const outputbutton = screen.getByText("Changed");
    expect(outputbutton).toBeInTheDocument();
  });

  test("dose`t render Greeting To see", () => {
    /// Arrange
    render(<Greeting />);
    //Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const outputEl = screen.queryByText(" Greeting ", { exact: false });
    expect(outputEl).toBeNull()
  });
  
});
