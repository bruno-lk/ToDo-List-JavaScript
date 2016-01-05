function updateItemStatus(){
	var cb = this.id.replace("cb_","");
	var itemText = document.getElementById("item_"+cb);

	if(this.checked){
		itemText.className = "checked";
	}else{
		itemText.className = "";
	}
}

function renameItem(){
	var newText = prompt("Novo nome:");

	if(!newText || newText === "" || newText === " "){
		return false;
	}
	this.innerText = newText;

}

function removeItem(){
	this.style.display = "none";

}

function addNewItem(list,itemText){
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var span = document.createElement("span");
	
	//creates a random ID for the item
	var date = new Date();
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

	//checkbox proprieties
	checkBox.onclick = updateItemStatus;
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + id;
	
	//span/text propieties
	span.innerText = itemText;
	span.id = "item_" + id;
	span.onclick = renameItem;

	//item propieties
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	listItem.id = "li_"+id;//ID of the item
	listItem.ondblclick = removeItem;

	list.appendChild(listItem);
}

var inItemText = document.getElementById("inItemText");
inItemText.focus();

inItemText.onkeyup = function(event){//click event

	if(event.which == 13){//when hit ENTER KEY on keyboard, saves the item
		var itemText = inItemText.value;

		if(!itemText || itemText === "" || itemText === " "){
			return false;
		}

		addNewItem(document.getElementById("todolist"),itemText);
		inItemText.focus();
		inItemText.select();
	}
}