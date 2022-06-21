const express = require("express")
const renderer = require("vue-server-renderer").createRenderer()
const {createApp} = require("../dist/main")

const server = express()

server.get("*", (req, res) => {
  const { app, store, App } = createApp()


  App.asyncData(store).then(() => {
    renderer.renderToString(app).then(html => {
      res.end(html)
    })
  })
})

server.listen(8000, () => console.log("Started server on port 8000."))