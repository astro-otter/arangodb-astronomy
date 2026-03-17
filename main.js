'use strict';
const createRouter = require('@arangodb/foxx/router');
const router = createRouter();
module.context.use(router);

// Optionally expose a health check endpoint
router.get('/functions', function(req, res) {
  const aqlfunctions = require('@arangodb/aql/functions');
  res.json(aqlfunctions.toArray('ASTRO::'));
}).summary('List all registered Astronomy specific AQL UDFs');
