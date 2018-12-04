define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnPlus **/
    AS_Button_ddbf555723384363b4a686e2492c58a6: function AS_Button_ddbf555723384363b4a686e2492c58a6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAddNewItem");
        ntf.navigate();
        self.clearKey.call(this);
    },
    /** init defined for frmListing **/
    AS_Form_e1120ae5095a4a38a116ba60821271b0: function AS_Form_e1120ae5095a4a38a116ba60821271b0(eventobject) {
        var self = this;
    },
    /** postShow defined for frmListing **/
    AS_Form_dfd0f20e62d94663838580c2323cad84: function AS_Form_dfd0f20e62d94663838580c2323cad84(eventobject) {
        var self = this;
        return self.addNewItems.call(this);
    }
});