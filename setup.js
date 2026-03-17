'use strict';
const db = require('@arangodb').db;
const aqlfunctions = require('@arangodb/aql/functions');
const udfs = [
  require('./udf/cone_search'),
  // just add more require() lines here as you add UDFs
];

for (const udf of udfs) {
  aqlfunctions.register(udf.name, udf.code, udf.isDeterministic);
}
