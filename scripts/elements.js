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

// TODO: Make this more expandable with listitems as args?
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