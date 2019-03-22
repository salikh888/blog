const app = require('./app');
const database = require('./database');
const config = require('./config');


database().then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, function () {
        console.log('Слушаем порт ' + config.PORT);
    });
})
.catch(function (error) {
    console.log(error);
    console.error('Not connection');
    process.exit(1);
});