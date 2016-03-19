/*
 *  ns: namespace methods
 *
 */
//ns = {};
//
//ns.createNS = function (namespace) {
//
//  var main = ns,
//    nsParts = namespace.split('.'),
//    i = 0;
//
//  nsParts[0] === main ? nsParts.slice(1) : '';
//
//  for (i; i < nsParts.length; i++) {
//    var partName = nsParts[i];
//
//    typeof main[partName] === 'undefined' ?
//      main[partName] = {} : '';
//
//    main = main[partName];
//  }
//
//  return parent;
//};