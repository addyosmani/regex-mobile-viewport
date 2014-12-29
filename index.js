'use strict';
module.exports = function () {
  return /<meta.*?name=("|\')viewport("|\').*?content.*?=("|\')*width.*?=.*?device-width.*?initial-scale.*?=*.?1*.?("|\')[^>]*>/g;
};
