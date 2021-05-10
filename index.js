import express from 'express'
import path from 'path'

const app = express()

app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization')
    next()
})

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/playsound', (req, res)=>{
    setInterval(()=>{
        console.log('success')
    },1000)
    res.json('success')
})

app.listen(7071)