define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSignUp **/
    AS_Button_e9330617d622497ea4b20306f1b452c6: function AS_Button_e9330617d622497ea4b20306f1b452c6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for btnLogin **/
    AS_Button_g0e00ef5b0cd43e28ca816d95b68bfc5: function AS_Button_g0e00ef5b0cd43e28ca816d95b68bfc5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** init defined for frmCreateAccount **/
    AS_Form_a771337a6f4c4b17b56cb4875dc24257: function AS_Form_a771337a6f4c4b17b56cb4875dc24257(eventobject) {
        var self = this;
        self.changeDateFormat.call(this);
        self.disableFutureDates.call(this);
    }
});