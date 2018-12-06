const express = require('express')
const app = express()
const port = 8080

app.use('/media', express.static('/srv/static/'))
app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
