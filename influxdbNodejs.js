const Influx = require('influxdb-nodejs');
const client = new Influx('http://192.168.77.51:8086/dBase');
//const client = new Influx('http://192.168.77.51:8086/dBase');
const fieldSchema = {
    mem: 'f',
    cpu: 'f',
    //url: 'string',
};
const tagSchema = {
    branch: ['diot', 'dac', 'desd'],
   // method: '*'
 };

//.......................................
   function insert(){client.write('mes1')
        .tag({
            name: 'nakwarsi',
            //method: 'GET',
            //type: '2',
            branch: 'dac'
        })
        .field({
            //url: 'https://github.com/vicanso/influxdb-nodejs',
            mem: 100,
            cpu: 30

        })
        .then(() => console.info('sync write queue success'))
        .catch(err => console.error(`sync write queue fail, err:${err.message}`))}
        setInterval(insert,5000)