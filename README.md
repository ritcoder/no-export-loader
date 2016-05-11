# no-export-loader
Sometimes a library already handles its exports while hiding everything else. Since nothing is exposed, the last `module.exports = xxx` throws an exception.

This loader simply removes that last line


**Usage**

``
var X = require("no-export?./Main");
``
