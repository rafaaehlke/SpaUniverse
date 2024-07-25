const routes = {
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
  404: "/pages/404.html",
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)
  handle()
}

function handle() {
  const { pathname } = window.location

  const route = routes[pathname] || routes[home]

  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })

}

window.onpopstate = () => handle()