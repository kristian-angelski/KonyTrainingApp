define({ 
	validateForm: function() {
		var date = new Date();	
		var hours = date.getHours();
		var greeting = '';

		if ( hours >= 6 && hours <= 12 ) {
			greeting = 'morning!';   
		} else if ( hours >= 13 && hours <= 17 ) {
			greeting = 'afternoon!';
		} else {
			greeting = 'evening!';
		}

		if ( !this.validateField(this.view.txtEmail) ) {
			this.view.lblRequiredEmail.isVisible = true;
			this.view.txtEmail.skin = 'skinInvalid';
			this.view.txtEmail.focusSkin = 'skinInvalid';
		} else {
			if ( !kony.string.isValidEmail(this.view.txtEmail.text) ) {
				//         this.view.lblRequiredEmail.text = 'Invalid mail.';
				this.view.lblRequiredEmail.isVisible = true;
				this.view.txtEmail.skin = 'skinInvalid';      
				this.view.txtEmail.focusSkin = 'skinInvalid';   
			} else {
				this.view.lblRequiredEmail.isVisible = false;
				this.view.txtEmail.skin = 'skinValid';      
				this.view.txtEmail.focusSkin = 'skinValid';    
			}   
		}

		if ( !this.validateField(this.view.txtPassword) ) {
			this.view.lblRequiredPassword.isVisible = true;
			this.view.txtPassword.skin = 'skinInvalid';
			this.view.txtPassword.focusSkin = 'skinInvalid';
		} else {
			this.view.lblRequiredPassword.isVisible = false;
			this.view.txtPassword.skin = 'skinValid';
			this.view.txtPassword.focusSkin = 'skinValid';
		}

		if ( this.validateField(this.view.txtEmail) && this.validateField(this.view.txtPassword) ) {
			if ( kony.string.isValidEmail(this.view.txtEmail.text) ) {
				this.saveLogin();
				var someForm = new kony.mvc.Navigation('frmListing');
				someForm.navigate();
				//         this.view.flxLogged.isVisible = true;
				//         this.view.flxLogged.flxLoggedBanner.flxGreeting.rtHello.text = `Hello user ${this.view.txtEmail.text.bold()},`;
				//         this.view.flxLogged.flxLoggedBanner.flxGreeting.lblGreeting.text = `Good ${greeting}`;
			} else {
				//         alert('Invalid email');
				//         this.view.lblRequiredEmail.text = 'Invalid email.';
				this.view.txtEmail.skin = 'skinInvalid';
				this.view.txtEmail.focusSkin = 'skinInvalid';
				this.view.lblRequiredEmail.isVisible = true;
			}        
		} else {
			//       this.view.flxUpper.isVisible = true;
			this.view.flxLogged.isVisible = false;
		}

		if ( this.view.txtEmail.text === null || this.view.txtEmail.text === '' ) {
			this.view.lblRequiredEmail.text = 'This field is required.';
		} else {
			if ( !kony.string.isValidEmail(this.view.txtEmail.text) ) {
				this.view.lblRequiredEmail.text = 'Invalid e-mail address';
			}
		}

		this.view.forceLayout();

	},
	validateField: function(field) {
		return field.text !== null && field.text !== '';
	},
	logOut: function() {
		this.view.flxLogged.isVisible = false;
		this.view.flxUpper.isVisible = true;
		this.view.txtEmail.text = '';
		this.view.txtPassword.text = '';
		// 		this.view.lblRequiredPassword.text = 'This field is required.';
	},
	clearStorage() {
// 		let currentDate =  new Date();
		
// 		let expirationDate = currentDate.getDate() + 1;
		
// 		alert(expirationDate);
		
		
		try {
			kony.store.clear();
		} catch(error) {
			alert('error occured in storage clear ' + error);
		}
		
	},
	saveLogin() {
		let userName = this.view.txtEmail.text;
		let currentDate = new Date();
		let dateAfter = currentDate.setHours(currentDate.getHours() + 24);
		let expirationDate = new Date(dateAfter);
		
	}
});