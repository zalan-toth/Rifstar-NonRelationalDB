use ("rifstar");

db.createCollection("currencies")
db.createCollection("nations")
db.createCollection("associations")
db.createCollection("universes")

db.currencies.insertOne({ 
    _id: "currency-forint",
    name: "Forint",
    sign: "Ft",
    code: "HUF",
    value: 1312
 })

db.currencies.insertOne({ 
    _id: "currency-euro",
    name: "Euro",
    sign: "€",
    code: "EUR",
    value: 6.7
 })


db.universes.insertOne({ 
    _id: "universe-m44",
    name: "m44",
    creationTime: 0
})

db.universes.updateOne(
    {
        _id: "universe-m44"
    },
    {
    $set: {
        galaxies: [
            { _id: "galaxy-m44-mw", name: "Milky Way", coordinate: {x: 0, y: 0, z: 0} },
            { _id: "galaxy-m44-am", name: "Andromeda", coordinate: {x: 224, y: 63, z: 234} }
        ]
    }
})


db.universes.updateOne(
    {
        _id: "universe-m44", "galaxies._id": "galaxy-m44-mw"
    },
    {
    $set: {
        "galaxies.$.solarSystems": [
            { _id: "solarsystem-m44-mw-solar", name: "Solar System", coordinate: {x: 0, y: 0, z: 0} }
            ]
    }
})


db.universes.updateOne(
    { _id: "universe-m44" },
    {
        $set: {
        "galaxies.$[galaxy].solarSystems.$[solarSystem].centralCelestial":
            { _id: "celestial-m44-mw-solar-sun", name: "Sun" }
        }
    },
    {
        arrayFilters: [
        { "galaxy._id": "galaxy-m44-mw" },
        { "solarSystem._id": "solarsystem-m44-mw-solar" }
        ]
    }
)


db.universes.updateOne(
    { _id: "universe-m44" },
    {
        $set: {
        "galaxies.$[galaxy].solarSystems.$[solarSystem].centralCelestial.orbitingCelestials": [
            { _id: "celestial-m44-mw-solar-mercury", name: "Mercury" },
            { _id: "celestial-m44-mw-solar-venus", name: "Venus" },
            { _id: "celestial-m44-mw-solar-earth", name: "Earth" },
            { _id: "celestial-m44-mw-solar-mars", name: "Mars" },
            { _id: "celestial-m44-mw-solar-jupiter", name: "Jupiter" },
            { _id: "celestial-m44-mw-solar-uranus", name: "Uranus" },
            { _id: "celestial-m44-mw-solar-neptunus", name: "Neptunus" },
            { _id: "celestial-m44-mw-solar-saturnus", name: "Saturnus" }
        ]
        }
    },
    {
        arrayFilters: [
        { "galaxy._id": "galaxy-m44-mw" },
        { "solarSystem._id": "solarsystem-m44-mw-solar" }
        ]
    }
)


db.universes.updateOne(
    { _id: "universe-m44" },
    {
        $set: {
        "galaxies.$[galaxy].solarSystems.$[solarSystem].centralCelestial.orbitingCelestials.$[celestial].orbitingCelestials": [
            { _id: "celestial-m44-mw-solar-satellite", name: "Satellite" },
            { _id: "celestial-m44-mw-solar-intspace", name: "International Space Station" },
            { _id: "celestial-m44-mw-solar-moon", name: "Moon" }
        ]
        }
    },
    {
        arrayFilters: [
        { "galaxy._id": "galaxy-m44-mw" },
        { "solarSystem._id": "solarsystem-m44-mw-solar" },
        { "celestial._id": "celestial-m44-mw-solar-earth" }
        ]
    }
)


db.universes.updateOne(
    { _id: "universe-m44" },
    {
        $set: {
        "galaxies.$[galaxy].solarSystems.$[solarSystem].centralCelestial.orbitingCelestials.$[celestial].orbitingCelestials.$[celestial2].orbitingCelestials": [
            { _id: "celestial-m44-mw-solar-xsatellite", name: "XSatellite" }
        ]
        }
    },
    {
        arrayFilters: [
        { "galaxy._id": "galaxy-m44-mw" },
        { "solarSystem._id": "solarsystem-m44-mw-solar" },
        { "celestial._id": "celestial-m44-mw-solar-earth" },
        { "celestial2._id": "celestial-m44-mw-solar-moon" }
        ]
    }
)