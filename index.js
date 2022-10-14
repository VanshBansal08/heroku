const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const PORT = process.env.PORT || 9999;
app.use(cors());


app.get('/', (req, res) => {
	res.send('Running');
});


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));