const PORT = process.env.PORT || 3001;

const app = require('./app');

app.listen(PORT, () => console.log(`API listening on port: ${PORT}`));