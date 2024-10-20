use ("rifstar");


db.currencies.insertMany(
    [
        {
            _id: String("currency-uc"),
            name: String("Universal Currency"),
            sign: String("$"),
            code: String("UC"),
            value: Decimal128('1')
        },
        {
            _id: String("currency-fc"),
            name: String("Federal Currency"),
            sign: String("₤"),
            code: String("FC"),
            value: Decimal128('4987.5672')
        },
        {
            _id: String("currency-as"),
            name: String("Allied Shilling"),
            sign: String("₴"),
            code: String("AS"),
            value: Decimal128('7897.8971')
        },
        {
            _id: String("currency-ca"),
            name: String("Castar"),
            sign: String("₡"),
            code: String("CA"),
            value: Decimal128('456.4452')
        },
        {
            _id: String("currency-ba"),
            name: String("Baw"),
            sign: String("฿"),
            code: String("BA"),
            value: Decimal128('285.1112')
        },
        {
            _id: String("currency-fl"),
            name: String("Florin"),
            sign: String("ƒ"),
            code: String("FL"),
            value: Decimal128('155.3549')
        },
        {
            _id: String("currency-te"),
            name: String("Teper"),
            sign: String("₮"),
            code: String("TE"),
            value: Decimal128('6653.1776')
        }
    ]
)


db.nations.insertMany(
    [
        {
            _id: String("nation-human"),
            name: String("Solar Republic"),
            category: String("Humanoid"),
            type: String("Republic"),
            languages: [
                String("English")
            ],
            capital: String("interestpoint-x44-milkyway-solar-earth-tokyo"),
            claimedTerritories: [
                String("solarsystem-x44-milkyway-solar")
            ],
            currency: String("currency-fc"),
            description: String("Home of the humans"),
            markedLocations: [
                {
                    name: String("Financial Capital"),
                    interestPoint: String("interestpoint-x44-milkyway-solar-earth-zürich"),
                    classification: NumberInt('4'),
                    description: String("Financial capital of humans")
                },
                {
                    name: String("Military Headquarters"),
                    interestPoint: String("interestpoint-x44-milkyway-solar-moon-unbase"),
                    classification: NumberInt('2'),
                    description: String("Defence HQ")
                }
            ]
        },
        {
            _id: String("nation-huweq"),
            name: String("Huweq Protectorate"),
            category: String("Humanoid"),
            type: String("Protectorate"),
            languages: [
                String("Huweq")
            ],
            capital: String("interestpoint-x44-milkyway-trappist-aetheria-onyx"),
            claimedTerritories: [
                String("solarsystem-x44-milkyway-trappist")
            ],
            currency: String("currency-fc"),
            description: String("Home of the huweq"),
            markedLocations: null
        }
    ]
)



db.associations.insertMany(
    [
        {
            _id: String("association-ufp"),
            name: String("United Federation of Planets"),
            category: String("Mixed"),
            type: String("Council"),
            languages: [
                String("English"),
                String("Huweq")
            ],
            capital: String("interestpoint-x44-milkyway-solar-earth-newyork"),
            nations: [
                String("nation-human"),
                String("nation-huweq")
            ],
            currency: String("currency-fc"),
            description: String("A social-democratic alliance between various nations"),
            markedLocations: [
                {
                    name: String("UFP Research Facility"),
                    interestPoint: String("interestpoint-x44-milkyway-solar-earth-beijing"),
                    classification: NumberInt('3'),
                    description: String("Experimental Location")
                }
            ]
        }
    ]
)