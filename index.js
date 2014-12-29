'use strict';
module.exports = function () {
  return /(\W|^)width(\s?)=(\s?)device-width(\W|$)(\W|$)initial-scale(\s?)=(\s?)1(\W|$)/g;
};
