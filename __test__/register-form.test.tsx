import { render, screen } from "../lib/test-utils";
import RegisterForm from "@/app/(auth)/_components/register-form";

describe("RegisterForm", () => {
  test("Check", () => {
    render(<RegisterForm />);
    const text = screen.getAllByText("Login");
    expect(text).toBeInTheDocument();
  });
});
