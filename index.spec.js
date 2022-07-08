"use strict";

const mocha = require("tap").mocha;
const assert = require("node:assert");

const splitHost = require("./");

const describe = mocha.describe;
const it = mocha.it;

describe("splitHost()", () => {
  it("splits host into hostname and port", () => {
    assert.deepStrictEqual(splitHost("localhost:80"), {
      host: "localhost",
      hostname: "localhost",
      port: 80,
    });
  });

  it("identifies lone hostname", () => {
    assert.deepStrictEqual(splitHost("localhost"), {
      host: "localhost",
      hostname: "localhost",
    });
  });

  it("identifies lone port", () => {
    assert.deepStrictEqual(splitHost("80"), {
      port: 80,
    });
  });

  it("ignores invalid port", () => {
    assert.deepStrictEqual(splitHost("localhost:foo"), {
      host: "localhost:foo",
      hostname: "localhost:foo",
    });
  });

  it("returns undefined if parameter is undefined", () => {
    assert.strictEqual(splitHost(), undefined);
  });

  it("properly handles lone IPv6", () => {
    const hostname = "3ee3:9606:f05d:9624:a995:f68a:05b3:1440";
    assert.deepStrictEqual(splitHost("[" + hostname + "]"), {
      host: hostname,
      hostname,
    });
  });

  it("properly handles IPv6 with port", () => {
    const hostname = "3ee3:9606:f05d:9624:a995:f68a:05b3:1440";
    const port = 80;
    assert.deepStrictEqual(splitHost("[" + hostname + "]:" + port), {
      host: hostname,
      hostname,
      port,
    });
  });
});
