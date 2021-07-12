"use strict";

require("core-js/modules/es.array.reduce.js");

const sum = function sum() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce((prev, curr) => curr + prev);
};