function modifyURL() {
        if(window.location.href.endsWith("/index.html"))
                window.location.href = window.location.href.replace("/index.html", "");
        else if(window.location.hostname === "github.com")
        window.location.href = window.location.href.replace(".html", "");
}

// I don't wanna wait for this ik it's bad practice
modifyURL();