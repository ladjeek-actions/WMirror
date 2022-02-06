addEventListener('fetch', event => {
    event.respondWith(handle(event.request))
})

const handle = (req) => {
    if (req.url.indexOf('/sw.js') > -1) {
        return fetch('https://superdo.cf/sw.js')
    } else {
        return fetch('https://superdo.cf/')
    }
}
