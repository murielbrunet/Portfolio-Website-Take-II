var currentImage;

var images = {
	"img01" : "images/textiles/silk painting.png",
	"img02" : "images/textiles/Aizome Computer Case.jpg",
	"img03" : "images/textiles/Woven Mat.jpg",
	"img04" : "images/textiles/Yellow Skirt.jpg",
	"img05" : "images/textiles/Blue Skirt.jpg",
	"img06" : "images/textiles/Yellow Dress.jpg"
};


function openModal(imgID){
	currentImage = imgID; //define the current image as the one that was clicked to open modal window

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal 
	img = document.getElementById(imgID);

	var modalImg = document.getElementById("modalContent");

	//this is what actually displays the content
    modal.style.display = "block";
    modalImg.src = images[imgID];

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
}

function previous(){
	var images = ["img01", "img02", "img03", "img04", "img05", "img06"];
	var index = images.indexOf(currentImage);
	if(index - 1 < 0){
		index = images.length - 1;
	} else {
		index -= 1;
	}

	update(images[index]);
}

function next(){
	var images = ["img01", "img02", "img03", "img04", "img05", "img06"];
	var index = images.indexOf(currentImage);
	if(index + 1 >= images.length){
		index = 0;
	} else {
		index += 1;
	}

	update(images[index]);
}

function update(imgID){
	// Get the modal
	var modal = document.getElementById('myModal');

	var modalImg = document.getElementById("modalContent");
	
    modal.style.display = "block";
    modalImg.src = images[imgID];

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";

	}

	currentImage = imgID; // redefine current image

}



