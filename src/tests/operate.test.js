import operate from "../logic/operate";
import "@testing-library/jest-dom";

describe("operate function check", () => {
  test("sum", () => {
    const sum = operate(10, 5, "+");
    expect(sum).toBe("15");
  });

  test("divide by 0", () => {
    const sum = operate(10, 0, "%");
    expect(sum).toBe("Can't find modulo as can't divide by 0.");
  });
});
