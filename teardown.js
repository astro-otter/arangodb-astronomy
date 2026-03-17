'use strict';
const aqlfunctions = require('@arangodb/aql/functions');
const udfs = [
  require('./udf/cone_search'),
];

for (const udf of udfs) {
  try {
    aqlfunctions.unregister(udf.name);
  } catch(e) {
    // ignore if already gone
  }
}
