function changeImage() {
var image = document.getElementById('photo');

if (image.src.match("treeofftext")) {
	image.src = "photo/tree.jpg";
	} else {
	image.src = "photo/treeofftext.jpg";
	}
}
