
import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())	// Makes it cross-origin something


const port		= process.env.PORT || 3000


app.get('/get-something', (req, res) => {
    console.log('GOT SOMETHING!!!')
    res.send({ message: 'yes sir man!'})
})


app.listen(port, ()=>{
	console.log(`Listening on port ${port}...`)
})



