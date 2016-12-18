function booksGalore(){
		document.getElementById("myBack").background = "Images/bookback.jpg";
		document.getElementById("topBar").style.backgroundColor = "pink";
		document.getElementById("topBar").style.color = "black";
	
		document.getElementById("color1").style.color = "black";
		document.getElementById("color2").style.color = "black";
		document.getElementById("color3").style.color = "black";
		document.getElementById("color4").style.color = "black";
		
		document.getElementById("themes").style.backgroundColor = "white";
		document.getElementById("themes").style.color = "black";
		document.getElementById("exploreBooks").style.backgroundColor = "pink";
		
		document.getElementById("select").style.color = "black";
		document.getElementById("select").style.backgroundColor = "white";
		document.getElementById("sectionback").style.backgroundColor = "white";
		
		document.getElementById("banner").style.backgroundImage = "url('Images/waterflowers.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/waterflowers.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/waterflowers.jpg')";
}

function spaceCats(){
		document.getElementById("myBack").background = "Images/catback.jpg";
		document.getElementById("topBar").style.backgroundColor = "#B284BE";
		document.getElementById("topBar").style.color = "black";
		
		document.getElementById("color1").style.color = "white";
		document.getElementById("color2").style.color = "white";
		document.getElementById("color3").style.color = "white";
		document.getElementById("color4").style.color = "white";
		
		document.getElementById("themes").style.backgroundColor = "black";
		document.getElementById("themes").style.color = "white";
		document.getElementById("exploreBooks").style.backgroundColor = "#B284BE";
		
		
		document.getElementById("select").style.backgroundColor = "black";
		document.getElementById("select").style.color = "white";
		document.getElementById("sectionback").style.backgroundColor = "black";
		
		
		document.getElementById("banner").style.backgroundImage = "url('Images/galaxy.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/galaxy.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/galaxy.jpg')";
}

function ancientHistory(){
		document.getElementById("myBack").background = "images/history.jpg";
		document.getElementById("topBar").style.backgroundColor = "#960018";
		document.getElementById("topBar").style.color = "black";
		
		document.getElementById("color1").style.color = "white";
		document.getElementById("color2").style.color = "white";
		document.getElementById("color3").style.color = "white";
		document.getElementById("color4").style.color = "white";
		
		document.getElementById("themes").style.backgroundColor = "black";
		document.getElementById("themes").style.color = "white";
		document.getElementById("exploreBooks").style.backgroundColor = "#960018";
		
		document.getElementById("select").style.backgroundColor = "black";
		document.getElementById("select").style.color = "white";
		document.getElementById("sectionback").style.backgroundColor = "black";
		
		
		document.getElementById("banner").style.backgroundImage = "url('Images/histbanner.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/histbanner.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/histbanner.jpg')";
}

function sailorsWake(){
		document.getElementById("myBack").background = "images/ship3.jpg";
		document.getElementById("topBar").style.backgroundColor = "#232B2B";
		document.getElementById("topBar").style.color = "black";
		
		document.getElementById("color1").style.color = "white";
		document.getElementById("color2").style.color = "white";
		document.getElementById("color3").style.color = "white";
		document.getElementById("color4").style.color = "white";
		
		document.getElementById("themes").style.backgroundColor = "black";
		document.getElementById("themes").style.color = "white";
		document.getElementById("exploreBooks").style.backgroundColor = "#232B2B";
		
		document.getElementById("select").style.backgroundColor = "black";
		document.getElementById("select").style.color = "white";
		document.getElementById("sectionback").style.backgroundColor = "black";
		
		
		document.getElementById("banner").style.backgroundImage = "url('Images/darkocean.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/darkocean.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/darkocean.jpg')";
}

function Fantasy(){
		document.getElementById("myBack").background = "images/scienceback.jpg";
		document.getElementById("topBar").style.backgroundColor = "#A9A9A9";
		document.getElementById("topBar").style.color = "black";
		
		document.getElementById("color1").style.color = "white";
		document.getElementById("color2").style.color = "white";
		document.getElementById("color3").style.color = "white";
		document.getElementById("color4").style.color = "white";
		
		document.getElementById("themes").style.backgroundColor = "black";
		document.getElementById("themes").style.color = "white";
		document.getElementById("exploreBooks").style.backgroundColor = "#A9A9A9";
		
		document.getElementById("select").style.backgroundColor = "black";
		document.getElementById("select").style.color = "white";
		document.getElementById("sectionback").style.backgroundColor = "black";
		
		
		document.getElementById("banner").style.backgroundImage = "url('Images/scifiban.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/scifiban.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/scifiban.jpg')";
}

function matrix(){
		document.getElementById("myBack").background = "images/matrix.jpg";
		document.getElementById("topBar").style.backgroundColor = "#232B2B";
		document.getElementById("topBar").style.color = "black";
		
		document.getElementById("color1").style.color = "white";
		document.getElementById("color2").style.color = "white";
		document.getElementById("color3").style.color = "white";
		document.getElementById("color4").style.color = "white";
		
		document.getElementById("themes").style.backgroundColor = "black";
		document.getElementById("themes").style.color = "white";
		document.getElementById("exploreBooks").style.backgroundColor = "#232B2B";
		
		document.getElementById("select").style.backgroundColor = "black";
		document.getElementById("select").style.color = "white";
		document.getElementById("sectionback").style.backgroundColor = "black";
		
		
		document.getElementById("banner").style.backgroundImage = "url('Images/matrixbanner.jpg')";
		document.getElementById("nav").style.backgroundImage = "url('Images/matrixbanner.jpg')";
		document.getElementById("foot").style.backgroundImage = "url('Images/matrixbanner.jpg')";
}

// For XML To Load up diferent books
			var xmlDoc;

			// For XML
			function load(url) { 
				var xmlHTTP;
				if (window.XMLHttpRequest) {
					xmlHTTP = new XMLHttpRequest();
				}
				else {
					xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlHTTP.open("GET", url, false);
				xmlHTTP.send(null);
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(xmlHTTP.responseText, "application/xml");
			}

			// For XML
			function getSimpleText(path) {
				if (window.ActiveXObject) { 
					var node = xmlDoc.selectSingleNode(path);
					return node.childNodes[0].nodeValue;
				}
				else {
					var snapshot = xmlDoc.evaluate(path, xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
					return snapshot.snapshotItem(0).textContent;
				}
			}