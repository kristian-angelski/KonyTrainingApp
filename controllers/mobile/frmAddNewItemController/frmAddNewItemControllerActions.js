define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FormHeader **/
    AS_UWI_g08c335a6fee4ccd85a79e4212785013: function AS_UWI_g08c335a6fee4ccd85a79e4212785013(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmListing");
        ntf.navigate();
    },
    /** onCapture defined for cameraWidget **/
    AS_Camera_d956cecc7e07462bbfc1f3b1879a3f06: function AS_Camera_d956cecc7e07462bbfc1f3b1879a3f06(eventobject) {
        var self = this;
        return self.capture.call(this, eventobject);
    },
    /** onClick defined for btnSave **/
    AS_Button_bcbbf1271cd84d1285e96d84065df039: function AS_Button_bcbbf1271cd84d1285e96d84065df039(eventobject) {
        var self = this;
        return self.storeInfo.call(this);
    },
    /** postShow defined for frmAddNewItem **/
    AS_Form_c89d4488f99d492cad6bed5b0393162b: function AS_Form_c89d4488f99d492cad6bed5b0393162b(eventobject) {
        var self = this;
        return self.editItem.call(this);
    }
});