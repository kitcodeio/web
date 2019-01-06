const Inert = require('inert');
const env = process.env.NODE_ENV || 'beta';

exports.register = async function(plugin, options, next) {
  const config = options.config;
  await plugin.register([Inert]);
  plugin.route([{
    method: 'GET',
    path: '/{path*}',
    config: {
      handler: {
        directory: {
          path: __dirname + "/dist/kitcode-frontend"
        }
      }
    }

  }]);
  return next();
}

exports.register.attributes = {
  pkg: require('./package.json')
}
