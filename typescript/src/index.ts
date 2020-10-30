import expres from 'express';
import { HelloWord } from './routes';


const app = expres()

app.get('/',HelloWord)

app.listen(3333);