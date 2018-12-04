define(function() {

  return {
    isCollapsed: true,
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    expand() {
      this.view.btnToggle.text = '\uF106';
      this.view.txtDescription.height = kony.flex.USE_PREFERED_SIZE;
    },
    collapse() {
      this.view.btnToggle.text = '\uF107';
      this.view.txtDescription.height = '0dp';
    },
    toggle() {
      if ( this.isCollapsed ) {
        this.expand();
      } else {
        this.collapse();
      }
      this.isCollapsed = !this.isCollapsed;
    },
		setImage(base64) {
			this.view.img.base64 = base64;
		},
		getItem() {
			let id = this.args[0].id;
			kony.store.setItem('elementToEditId', id);
			kony.store.setItem('type', 'edit');
			let nav = new kony.mvc.Navigation('frmAddNewItem');
			nav.navigate();
		}
  };
});