const _ = require("lodash");
let deepArray = [1,[2,[3,4]]]
let flaten = _.flattenDeep(deepArray)
console.log(flaten);