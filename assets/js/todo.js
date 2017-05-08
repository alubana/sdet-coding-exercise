/*global $*/

$(".todo_list_item").on("click", function() {
	$(this).toggleClass("completed");
	var uid = $(this).attr("id");
	console.log("todo item clicked");
	var isComplete = $(this).hasClass("completed")
	
	//update db 
	$.ajax({
		url: '/api/todo/' + uid,
		type: 'PUT',
		dataType: 'json',
		data: (isComplete) ? {
			'isDone': 'true'
		} : {
			'isDone': 'false'
		},
		success: function(data, status, jqXHR) {
			console.log("Updated");
		}
	});

});

$(".todo_list_item").on("click", "span", function(event) {
	console.log("trash clicked");
	var target = $(event.target);

	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	var uid = $(this).parent().attr("id");
	console.log("Uid: " + uid);
	$.ajax({
		url: '/api/todo/' + uid,
		type: 'DELETE',
		success: function(result) {
			console.log("Deleted");
		}
	});
	console.log("Delete: " + $(this).parent().text());

	//This will prevent the put request to update to be executed, as the span is inside li
	event.stopPropagation();
	event.preventDefault();

});

//Add entries
$("input[type='text']").keypress(function(event) {

	//Enter Key 13
	if (event.which === 13) {
		var todoItem = $(this).val();
		$("form").submit();
//		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoItem + "</li>")
	}
	
});

//Toggle input field display
$(".fa-calendar-plus-o").click(function() {
	$("input[type='text']").fadeToggle();
})
