'use strict';

const addMethods = (Terms) => {

  const methods = {
    tag: function (tag, reason) {
      this.terms.forEach((t) => {
        t.tagAs(tag, reason);
      });
    },
    unTag: function (tag, reason) {
      this.terms.forEach((t) => {
        t.unTag(tag, reason);
      });
    },
    canBe: function (tag, reason) {
      this.terms.forEach((t) => {
        t.canBe(tag, reason);
      });
    }
  };
  methods.tagAs = methods.tag;

  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethods;
