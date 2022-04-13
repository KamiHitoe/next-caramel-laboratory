import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../../pages/index";

describe("Home", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  });
});

