define({ 

 //Type your controller code here 
	changeDateFormat() {
    this.view.datePicker.dateFormat = 'dd.MM.yyyy';
  },
  disableFutureDates() {
    const date = new Date();
    const currentDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
//     alert(currentDate);
    
    this.view.datePicker.validEndDate = currentDate;
  }

 });