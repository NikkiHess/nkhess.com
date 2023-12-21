// TODO: Test on GitHub pages
// TODO: Faster way?
function modifyURL() {
        if(window.location.href.endsWith("/index.html"))
                window.location.href = window.location.href.replace("/index.html", "");
        else if(window.location.hostname === "github.com")
        window.location.href = window.location.href.replace(".html", "");
}

// Only perform after the page has fully loaded
window.onload = modifyURL;