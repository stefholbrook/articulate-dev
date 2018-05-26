const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Looking good! 👸'))

app.listen(3000, (err) => {
  if (err) console.log(err)

  console.log('Holla at yo girl on port 3000')
})
