define({ 

	//Type your controller code here 
	storeInfo() {
		if (!this.validateField(this.view.txtItemName) || !this.validateField(this.view.areaDescription) ) {
			//TODO: show errors
			return;
		}

		let item = {
			id: MD5(new Date().toISOString()),
			name: this.view.txtItemName.text,
			desc: this.view.areaDescription.text,
			imgSrc: this.view.imgSelection.base64
		};

		let itemsArr = this.getRecords();
		let itemId = this.getItemIdForEdit();
		let itemIndex;

		for (let i = 0; i < itemsArr.length; i++) {
			if (itemsArr[i].id === itemId) {
				itemIndex = i;

				item.id = itemId;
				item.name = this.view.txtItemName.text;
				item.desc = this.view.areaDescription.text;
				item.imgSrc = this.view.imgSelection.base64;

				itemsArr.splice(itemIndex, 1, item);
				kony.store.setItem('items', itemsArr);
				kony.store.removeItem('elementToEditId');
				this.clearFields();
				let navBack = new kony.mvc.Navigation('frmListing');
				navBack.navigate();
				return;
			}
		}
		
		itemsArr.push(item);

		kony.store.setItem('items', itemsArr);
		//     alert('itemsArr' + itemsArr);
		let navBack = new kony.mvc.Navigation('frmListing');
		navBack.navigate();
		this.clearFields();
	},

	validateField(field) {
		return field.text !== null & field.text !== '';
	},

	getRecords() {
		let itemsArr = kony.store.getItem('items');

		if ( !itemsArr instanceof Array || itemsArr === null) {
			return [];
		}

		return itemsArr;
	},

	editItem() {
		let items = this.getRecords();
		let itemId = this.getItemIdForEdit();

		for (let i = 0; i < items.length; i++) {
			if (items[i].id === itemId) {
				this.view.areaDescription.text = items[i].desc;
				this.view.txtItemName.text = items[i].name;
				this.view.imgSelection.base64 = items[i].imgSrc;
			}
		}
		
		this.changeTexts();
	},

	getItemIdForEdit() {
		let itemId = kony.store.getItem('elementToEditId');
		// 		alert(itemId);
		if (itemId === null) {
			itemId = '';
		}
		return itemId;
	},

	capture(event) {
		this.view.imgSelection.base64 = event.base64;
		//     return true;
	},

	clearFields() {
		this.view.txtItemName.text = '';
		this.view.areaDescription.text = '';
		this.view.imgSelection.src = 'imagedrag.png';
	},
	
	changeTexts() {
		let type = kony.store.getItem('type');
		if (type === 'add') {
			this.view.FormHeader.text = 'Adding new TODO item';
			this.view.cameraWidget.text = 'Add IMG';
		} else {
			this.view.FormHeader.text = 'Editing new TODO item';
			this.view.cameraWidget.text = 'Edit IMG';
		}
	}

});