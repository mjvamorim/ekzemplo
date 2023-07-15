const express = require('express')
const appfaker = require('pegasus-common')
const app = express()
const port = 3010
const apiPath = '/events'
app.get(apiPath, (req, res) => {
    let events = [];
    for (let index = 0; index < 10; index++) {
        const Event = appfaker.event()
        events.push(Event);
}
    res.send(JSON.stringify(events))
})
app.listen(port, () => {
    console.log(`microsoervice events listening at http://localhost:${port}${apiPath}`)
})