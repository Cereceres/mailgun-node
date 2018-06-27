const { promisify } = require('util');
const request = require('request');
const get = promisify(request.get.bind(request));
const deleteCall = promisify(request.delete.bind(request));
const post = promisify(request.post.bind(request));
const put = promisify(request.put.bind(request));

module.exports = {
    get, post, put, delete: deleteCall
};
