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
                String("Huweq"),
                String("Qar")
            ],
            capital: String("interestpoint-x44-milkyway-trappist-aetheria-onyx"),
            claimedTerritories: [
                String("solarsystem-x44-milkyway-trappist")
            ],
            currency: String("currency-fc"),
            description: String("Home of the huweq"),
            markedLocations: null
        },
        {
            _id: String("nation-hunor"),
            name: String("Hunor Republic"),
            category: String("Humanoid"),
            type: String("Republic"),
            languages: [
                String("Rovas")
            ],
            claimedTerritories: [
                String("solarsystem-x44-sombrero-lyra")
            ],
            currency: String("currency-fl"),
            description: String("Home of the Hunor"),
            markedLocations: null
        },
        {
            _id: String("nation-nihon"),
            name: String("Nihon People's Republic"),
            category: String("Humanoid"),
            type: String("Republic"),
            languages: [
                String("Nihonjin")
            ],
            capital: String("interestpoint-x57-zenith-vorath-umbra-nexus"),
            claimedTerritories: [
                String("solarsystem-x57-zenith-vorath")
            ],
            currency: String("currency-as"),
            description: String("Home of the Nihon people"),
            markedLocations: null
        },
        {
            _id: String("nation-auron"),
            name: String("Empire of Auron"),
            category: String("Variable"),
            type: String("Empire"),
            languages: [
                String("Ran"),
                String("Jiir")
            ],
            claimedTerritories: [
                String("galaxy-x57-auron")
            ],
            currency: String("currency-te"),
            description: String("Home of the entities of the Auron galaxy"),
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
        },
        {
            _id: String("association-eca"),
            name: String("Economic Cooperation Axis"),
            category: String("Mixed"),
            type: String("Economic Area"),
            languages: [
                String("Ran"),
                String("Jiir"),
                String("Hunor"),
                String("Nihonjin")
            ],
            capital: String("interestpoint-x57-zenith-vorath-umbra-nexus"),
            nations: [
                String("nation-hunor"),
                String("nation-nihon"),
                String("nation-auron")
            ],
            currency: String("currency-te"),
            description: String("An economic alliance between various nations")
        }
    ]
)