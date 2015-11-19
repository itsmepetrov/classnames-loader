var loaderUtils = require("loader-utils");

module.exports = function(source, map) {
    this.callback(null, source, map);
};

module.exports.pitch = function(remainingRequest) {
    return `
        // classnames-loader: automatically bind css-modules to classnames
        var classNames = require(${loaderUtils.stringifyRequest(this, '!' + require.resolve('classnames/bind'))});
        var locals = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
        module.exports = classNames.bind(locals);
    `;
}
