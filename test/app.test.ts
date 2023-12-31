import { App } from "../src/app";

jest.mock("../src/app");

describe("should test app", () => {
  test("should test app", async () => {
    await import("../src/app");
    expect(App).toHaveBeenCalledTimes(1);
    expect(App).toHaveBeenCalledWith(4000);
  });
});
