import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RegisterForm from "@/app/(auth)/_components/register-form";
import { describe, it } from "node:test";

describe("RegisterForm", () => {
  it("should render the form", () => {
    render(<RegisterForm />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
