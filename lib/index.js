"use strict";

const iterateObj = require("iterate-object")

/**
 * removeOneElementArrays
 * Removes the one-element arrays from an object.
 *
 * @name removeOneElementArrays
 * @function
 * @param {Object} input The input object.
 * @returns {Object} The convert object.
 */
function removeOneElementArrays (input) {

    if (typeof input !== "object") {
        return input;
    }

    if (Array.isArray(input) && input.length === 1) {
        return removeOneElementArrays(input[0]);
    }

    iterateObj(input, (val, key) => {
        if (typeof val === "object" && val) {
            input[key] = removeOneElementArrays(val);
        }
    });

    return input;
};

module.exports = removeOneElementArrays;
