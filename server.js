import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5001;

app.use(cookieParser());
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: 'secret'
	})
);

app.get('/test', (req, res) => {
	res.send('this is an endpoint test-11');
});

app.listen(PORT, (req, res) => {
	console.log(`API listening on port http://localhost:${PORT}`);
});
