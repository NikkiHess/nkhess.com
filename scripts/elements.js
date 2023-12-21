// Helper function that creates list items
function createListItem(pathToRoot, page, label) {
	const li = document.createElement("li");
	li.className = "navItem centered";
	
	const a = document.createElement("a");
	a.href = pathToRoot + page;
	a.innerText = label;
	li.appendChild(a);

	return li;
}

/*
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">

<link rel="stylesheet" type="text/css" href="styles/main.css" /> 
<!-- Preload Mona Sans by GitHub -->
<link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossorigin>
<!-- Load favicon -->
<link rel="icon" href="images/favicon.ico">
*/
function loadCommonHead() {
	const head = document.head;
	
	const metaCharset = document.createElement("meta");
	metaCharset.charset = "UTF-8";
	head.appendChild(metaCharset);

	const metaResponsive = document.createElement("meta");
	metaResponsive.name = "viewport";
	metaResponsive.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"
	head.appendChild(metaResponsive);

	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.type = "text/css";
	style.href = "styles/main.css";
	head.appendChild(style);

	const monaSans = document.createElement("link");
	monaSans.rel = "preload";
	monaSans.href = "fonts/Mona-Sans.woff2"
	monaSans.as = "font";
	monaSans.type = "font/woff2"
	monaSans.crossOrigin = true;
	head.appendChild(monaSans);

	const favIcon = document.createElement("link");
	favIcon.rel = "icon";
	favIcon.href = "images/favicon.ico";
	head.appendChild(favIcon);
}

/* <ul class="nav">
	<li class="navHome"> <a href="PATH_TO_ROOT/index.html"> <img src="PATH_TO_ROOT/images/logo.png" alt="Site logo"> </a> </li>
    <li class="navItem centered">
            <a class="navItem centered" href="PATH_TO_ROOT/portfolio/index.html">
                Portfolio
            </a>
    </li>
</ul> */
// Creates a navigation element with dynamic paths
function loadNav(pathToRoot) {
	// Get the navigation element
	const navElement = document.getElementById("nav");

	// Append a / to our path if needed
	if(pathToRoot && !pathToRoot.endsWith("/"))
		pathToRoot += "/";
	
	// Create our unordered list
	const ul = document.createElement("ul");
	ul.className = "nav";

	// Create our home list item
	const liHome = document.createElement("li");
	liHome.href = pathToRoot + "index.html";
	liHome.className = "navHome"; // give it navHome as a class

	const aIndex = document.createElement("a");
	aIndex.href = `${pathToRoot}index.html`; // create the link to the index
	liHome.appendChild(aIndex); // append the link to the index

	const imgLogo = document.createElement("img");
	imgLogo.id = "logo";
	imgLogo.src = `${pathToRoot}images/logo.png`;
	imgLogo.alt = "Site Logo";
	aIndex.appendChild(imgLogo);
	
	ul.appendChild(liHome);

	const listItems = [createListItem(pathToRoot, "portfolio.html", "Portfolio")];
	listItems.forEach(item => ul.appendChild(item))

	navElement.appendChild(ul);
}