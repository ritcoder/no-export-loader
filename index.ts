var options = function(content: string){
  var index = content.lastIndexOf("module.exports");
  return index == -1 ? content : content.substr(0, index);
};

export = options;