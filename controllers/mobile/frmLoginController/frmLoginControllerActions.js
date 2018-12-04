define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLogin **/
    AS_Button_b31871c8ad6f49e4a4f987e06e82a665: function AS_Button_b31871c8ad6f49e4a4f987e06e82a665(eventobject) {
        var self = this;
        return self.validateForm.call(this);
    },
    /** onClick defined for btnCreateAcc **/
    AS_Button_i980a4d5d13a4780910167f5feb11c6d: function AS_Button_i980a4d5d13a4780910167f5feb11c6d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCreateAccount");
        ntf.navigate();
    },
    /** onClick defined for btnLogout **/
    AS_Button_e9ff83b78e734a0d94c206294f0aa099: function AS_Button_e9ff83b78e734a0d94c206294f0aa099(eventobject) {
        var self = this;
        return self.logOut.call(this);
    },
    /** init defined for frmLogin **/
    AS_Form_gd8ed4003a7b44da8dfafe51132c2510: function AS_Form_gd8ed4003a7b44da8dfafe51132c2510(eventobject) {
        var self = this;
        return self.clearStorage.call(this);
    }
});