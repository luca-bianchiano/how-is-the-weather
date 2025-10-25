const { exec } = require("child_process");
const path = require("path");

const cliPath = path.join(__dirname, "../index.js");

describe("CLI Tests", () => {
  jest.setTimeout(10000);

  test("--compact outputs one-line JSON", (done) => {
    exec(`node ${cliPath} --compact`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe("");
      // Check if output is a single line
      expect(stdout.trim()).not.toMatch(/\n/);
      // Check if output is valid JSON
      expect(() => JSON.parse(stdout)).not.toThrow();
      done();
    });
  });
});
