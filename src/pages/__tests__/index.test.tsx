import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/pages/index.page";

describe("Home Page", () => {
  it("should render loading page", async () => {
    // Prepare
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<HomePage />);
    const button = screen.getByRole("button");

    // Execute
    await userEvent.click(button);

    // Validate
    expect(window.alert).toHaveBeenCalledWith("Clicked");
  });
});
