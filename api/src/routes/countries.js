const express = require("express")
const app = express()
const {getCountriesApi, getCountriesID, getCountriesQuery} = require("../controllers/controllers")
const {Country} = require("../db")

app.get("/countries", async (req, res) => {
    const {name} = req.query
    try{
        if(name){
            const resAPI = await getCountriesQuery(name)
            res.status(200).json(resAPI)
        }
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
        res.status(200).json(apiInfo)
        })
    }catch(error){
        res.status(400).send(error.message)
    }

}
)

app.get("/countries/:idPais", async (req,res) => {
    const {idPais} = req.params
    try {
        if(idPais){
            const resAPI = await getCountriesID(idPais)
            res.status(200).json(resAPI)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})