"use strict";

const removeOneElementArrays = require("../lib");

console.log(removeOneElementArrays({
    myArray: [
        "foo",
        ["bar", "baz"],
        ["foo"]
    ],
    name: ["Alice"]
}));
