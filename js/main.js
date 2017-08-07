function addComment() {
	var name = document.getElementById("name").value
	var nameText = document.createTextNode(name)
	var comment = document.getElementById("comment").value
	var commentText = document.createTextNode(comment)
	var newName = document.createElement("h1")
	newName.className = "username"
	newName.className = "animated slideInUp"
	var newComment = document.createElement("p")
	newComment.className = "usercomment"
	newComment.className = "animated slideInUp"
	newName.appendChild(nameText)
	newComment.appendChild(commentText)
	document.getElementById("body").appendChild(newName)
	document.getElementById("body").appendChild(newComment)
	document.getElementById("name").value = ""
	document.getElementById("comment").value = ""
};