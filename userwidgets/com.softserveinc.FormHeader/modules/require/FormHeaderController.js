define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    logOut() {
      var someForm = new kony.mvc.Navigation('frmLogin');
      someForm.navigate();
    }
  };
});