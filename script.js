let toDoList = $('.to-do-list');

// 1 of 4: User can add a new item to a list of items.
function addNewItem() {
    
    let userInput = $('.userInput').val();
    
    if (userInput === '') {
	alert('You must write something!');
	return;
    }

    // Create a new list item element
    let newItem = $('<li></li>').text(userInput);
    
    // Append to  list
    toDoList.append(newItem);

    // 2 of 4: User can cross out an item from the list of items
    // add eventlistener to newItem after it's been appended to the DOM
    newItem.on('click', function () {
	
	newItem.toggleClass('strike-through');
	// console.log(newItem.attr('class'));
    });

    // 3 of 4: User can delete an item from the list of items
    let deleteButton = $('<button class="delete-button">[ x ]</button>');
    deleteButton.on('click', function () {
	newItem.toggleClass('delete');
    });
    newItem.append(deleteButton);
};

// 4 of 4: User can delete an item from the list of items
toDoList.sortable();
