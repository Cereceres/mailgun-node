const settings = require('./settings');

const API = require('./lib/api');
const api = module.exports = {};
api.messages = (domain, json = {}) => API.post({
    uri: `${domain}/messages`,
    baseUrl: settings.baseUrl,
    json
});

api.messagesMime = (domain, json = {}) => API.post({
    uri: `${domain || ''}/messages.mime`,
    baseUrl: settings.baseUrl,
    json,
    headers:{
        'Content-Type': 'multipart/form-data'
    }
});

api.domains = (domain) => API.get({
    uri: `/domains/${domain || ''}`,
    baseUrl: settings.baseUrl
});

api.domainsVerify = (domain) => API.put({
    uri: `/domains/${domain || ''}/verify`,
    baseUrl: settings.baseUrl
});

api.domainsCreate = (domain, json) => API.post({
    uri: `/domains/${domain || ''}`,
    baseUrl: settings.baseUrl,
    json
});

api.domainsDelete = (domain) => API.delete({
    uri: `/domains/${domain || ''}`,
    baseUrl: settings.baseUrl
});

api.domainsCredentials = (domain) => API.get({
    uri: `/domains/${domain || ''}/credentials`,
    baseUrl: settings.baseUrl
});
