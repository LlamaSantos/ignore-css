'use strict';

var installed = false;

module.exports.install = function install() {
  if (installed){
    return;
  }

  require.extensions['.css'] = function (module, filename){
    // Do nothing.
  };

  installed = true;
};
