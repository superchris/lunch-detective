/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lunch-detective',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      "default-src": "'self'",
      "image-src": "*",
      "connect-src": "*"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['torii'] = {
      providers: {
        'google-token': {
          apiKey: '620208096788-428uk54o24k1a4sk4o1a78279r8tjaq7.apps.googleusercontent.com',
          scope: 'profile email',
          redirectUri: 'http://lunch-detective.herokuapp.com'
        }
      }
    };

  } else {
    ENV['torii'] = {
      providers: {
        'google-token': {
          apiKey: '620208096788-428uk54o24k1a4sk4o1a78279r8tjaq7.apps.googleusercontent.com',
          scope: 'profile email',
          redirectUri: 'http://localhost:4200'
        }
      }
    };

  }

  return ENV;
};
