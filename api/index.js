//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const apiRes = await getCountriesApi()
        apiRes.forEach(async element => {
            const name = element.name.common
            const imagen = element.flags[0]
            const continente = element.continents[0]
            const capital = element.capital[0]
            const subregion = element.subregion
            const Area = element.area
            const poblacion = element.population
            const apiInfo = await Country.create({
                name,
                imagen,
                continente,
                capital,
                subregion,
                Area,
                poblacion,
        });    
      console.log("Server iniciado");
      })
  });
});
