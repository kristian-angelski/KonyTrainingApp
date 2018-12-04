define({ 

	//Type your controller code here 
	addNewItems() {
		let items = kony.store.getItem('items');
		//     alert(items);
		if (!items instanceof Array || items === null) {
			items = [];
			return;
		}

		this.view.flxSegment.removeAll();
		for(let i = 0; i < items.length; i++) {

			let item = items[i];
			let row = new com.softserveinc.ExpandableRow({
				'id': item.id,
				'isVisible': true,
				'top': '1dp'
			}, {}, {});

			row.itemName = item.name;
			row.itemDesc = item.desc;
			row.setImage(item.imgSrc);

			this.view.flxSegment.add(row);  


		}
	},
	clearKey() {
		kony.store.removeItem('elementToEditId');
		kony.store.setItem('type', 'add');
	},
});