const nav = document.getElementById('nav');

{/* <ul class="nav">
	<li class="navHome"> <a href="PATH_TO_ROOT/index.html"> <img src="PATH_TO_ROOT/images/logo.png" alt="Site logo"> </a> </li>
    <li class="navItem centered">
            <a class="navItem centered" href="PATH_TO_ROOT/portfolio/index.html">
                Portfolio
            </a>
    </li>
</ul> */}

function createListItem(pathToRoot, href, text) {
	const li = document.createElement("li");
	li.className = "navItem centered";
	
	const a = document.createElement("a");
	a.href = pathToRoot + href;
	a.innerText = text;
	li.appendChild(a);

	return li;
}

function loadHTML(pathToRoot) {
	// append a / to our path if needed
	if(pathToRoot != "" && pathToRoot.charAt(pathToRoot.length - 1) != "/")
		pathToRoot += "/";
	
	// create our unordered list
	const ul = document.createElement("ul");
	ul.className = "nav";

	// create our home list item
	const liHome = document.createElement("li");
	liHome.href = pathToRoot + "index.html";
	liHome.className = "navHome"; // give it navHome as a class

	const aIndex = document.createElement("a");
	aIndex.href = pathToRoot + "index.html"; // create the link to the index
	liHome.appendChild(aIndex); // append the link to the index

	const imgLogo = document.createElement("img");
	imgLogo.id = "logo";
	imgLogo.src = pathToRoot + "images/logo.png";
	imgLogo.alt = "Site Logo";
	aIndex.appendChild(imgLogo);
	
	ul.appendChild(liHome);

	const listItems = [createListItem(pathToRoot, "portfolio.html", "Portfolio")];
	for(let i = 0; i < listItems.length; i++) {
		ul.appendChild(listItems[i]);
	}

	nav.appendChild(ul);
}