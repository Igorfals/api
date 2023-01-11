import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(routes)


app.listen(3000, () => {
    console.log('executando na porta 3000');

})
