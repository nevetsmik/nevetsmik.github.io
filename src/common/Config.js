import crmConfig from './configs/crm.js';
import investmentsConfig from './configs/investments.js';

// Return config based on current URL
export function determineConfig() {
  // If on localhost, use url param
  let app;
  if (window.location.hostname === 'localhost') {
    app = new URLSearchParams(window.location.search).get('app');
  }
  // Else, use subdomain
  else {
    app = window.location.hostname.split('.')[0];
  }

  // If app not defined, return crm config
  if (!configs[app]) {
    return configs['crm'];
  }
  // Else, return config for specified app
  else {
    return configs[app];
  }
}

let configs = {
  crm: crmConfig,
  investments: investmentsConfig,
};
