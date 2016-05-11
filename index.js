var options = function (content) {
    var index = content.lastIndexOf("module.exports");
    return index == -1 ? content : content.substr(0, index);
};

module.exports = options;
