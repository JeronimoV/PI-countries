const {Activity, Country} = require("../db")


const getCountriesApi = async () => {
    const apiRes = await Country.findAll()
    return apiRes
}

const getCountriesID = async (id) => {
    const apiRes = await Country.findAll()
    const filtered = apiRes.find(value => value.ID)
    return filtered
}

const getCountriesQuery = async (query) => {
    const apiRes = await Country.findAll()
    const filtered = apiRes.find(value => value.query)
    return filtered
}

export.modules = {
    getCountriesApi,
    getCountriesID,
    getCountriesQuery
}