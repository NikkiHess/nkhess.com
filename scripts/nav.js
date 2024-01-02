// Helper function that creates nav items with relative links and text
function createRelativeNavTextItem(pathToRoot, page, label) {
	const li = document.createElement("li");
	li.className = "navItem";
	
	const a = document.createElement("a");
	a.href = pathToRoot + page;
	a.innerText = label;
	li.appendChild(a);

	return li;
}

// Helper function that creates social links (image)
function createSocialLink(page, imgUrl, alt) {
	const li = document.createElement("li");
	li.className = "socialItem";

	const a = document.createElement("a");
	a.href = page;
	
	const img = document.createElement("img");
	img.src = imgUrl;
	img.alt = alt;
	img.addEventListener("mouseenter", function() {
		img.src = imgUrl.replace(".png", "-hover.png");
	})
	img.addEventListener("mouseleave", function() {
		img.src = imgUrl.replace("-hover.png", ".png");
	})

	a.appendChild(img);
	li.appendChild(a);

	return li;
}

// TODO: Make this more scalable with listitems as args?
// Creates a navigation element with dynamic paths
function loadNav(pathToRoot) {
	// Get the navigation element
	const navElement = document.getElementById("nav");

	// Append a / to our path if needed
	if(pathToRoot && !pathToRoot.endsWith("/"))
		pathToRoot += "/";
	
	// Create our unordered list
	const navUL = document.createElement("ul");
	navUL.className = "nav";

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
	
	navUL.appendChild(liHome);

	// Create all other navItems
	const navItems = [
		createRelativeNavTextItem(pathToRoot, "portfolio.html", "Portfolio"),
		createRelativeNavTextItem(pathToRoot, "resume.html", "Resume")
	];
	navItems.forEach(item => navUL.appendChild(item));

	const socImgs = "../images/socials";
	const socialItems = [
		createSocialLink("https://github.com/nikkihess", `${socImgs}/GitHub.png`, "GitHub"),
		createSocialLink("https://linkedin.com/in/thenikkihess", `${socImgs}/LinkedIn.png`, "LinkedIn")
	];
	socialItems.forEach(item => navUL.appendChild(item));

	navElement.appendChild(navUL);
}