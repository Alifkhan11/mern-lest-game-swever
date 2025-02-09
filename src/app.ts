import express, { Request, Response } from 'express';
import notFound from './app/middlewere/notFound';
import globlaErrorHendeling from './app/middlewere/globalErrorHandling';
import router from './app/router';


const app = express()
app.use(express.json())

app.use('/api/v1',router)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})



app.use(notFound);

app.use(globlaErrorHendeling)


export default app