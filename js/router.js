const route = (e) =>{
    e = e || window.e;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href)
    handleLocation();
};

const routes= {
    404:"../pages/404.html",
    "/wedding":"../pages/wedding.html",
    "/social":"../pages/social.html",
    "/corporate":"../pages/corporate.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes [404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();