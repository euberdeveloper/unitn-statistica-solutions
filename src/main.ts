import * as express from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { join } from 'path';

import { redirect } from './utilities/redirect';
import { getSolutions } from './utilities/solutions';

const app = express();
const PORT = process.env.PORT || 8000;
const solutions = getSolutions(join(__dirname, 'public', 'solutions'));

app.use(compression());
if (process.env.NODE_ENV === 'production') {
    app.use(redirect);
}

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { solutions });
});

app.listen(PORT, () => {
    console.log('SERVER LISTENING ON PORT ', PORT);
});