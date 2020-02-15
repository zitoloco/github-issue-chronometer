const parser = require("./lib/parseEvents")

const issueMockEvents = require("./test/mocks/issue-442-events.json")

console.log(parser(issueMockEvents))