const GAMES_DATA = [];
const COMPANIES_DATA = [
    {
        id: "valve",
        name: "Valve Corporation",
        founded: "1996-08-24",
        headquarters: "Bellevue, Washington, U.S.",
        description: {
            en: "Valve is an American video game developer, publisher, and digital distribution company. It is the developer of the software distribution platform Steam and the franchises Half-Life, Portal, Left 4 Dead, Team Fortress, and Dota 2.",
            es: "Valve es una empresa estadounidense de desarrollo, publicación y distribución digital de videojuegos. Es la desarrolladora de la plataforma Steam y de las franquicias Half-Life, Portal, Left 4 Dead, Team Fortress y Dota 2."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Valve_logo.svg"
    },
    {
        id: "nintendo",
        name: "Nintendo Co., Ltd.",
        founded: "1889-09-23",
        headquarters: "Kyoto, Japan",
        description: {
            en: "Nintendo is a Japanese multinational consumer electronics and video game company. It is one of the world's largest video game companies by market capitalization, creating some of the best-known and top-selling video game franchises.",
            es: "Nintendo es una empresa multinacional japonesa de electrónica de consumo y videojuegos. Es una de las empresas de videojuegos más grandes del mundo, creadora de algunas de las franquicias más conocidas y vendidas."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
    },
    {
        id: "rockstar",
        name: "Rockstar Games",
        founded: "1998-12",
        headquarters: "New York City, New York, U.S.",
        description: {
            en: "Rockstar Games is an American video game publisher based in New York City. The company is best known for its Grand Theft Auto, Red Dead, Midnight Club, Max Payne, and Manhunt series.",
            es: "Rockstar Games es una distribuidora de videojuegos estadounidense con sede en Nueva York. La empresa es conocida por sus series Grand Theft Auto, Red Dead, Midnight Club, Max Payne y Manhunt."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Rockstar_Games_Logo.svg"
    },
    {
        id: "capcom",
        name: "Capcom Co., Ltd.",
        founded: "1979-05-30",
        headquarters: "Osaka, Japan",
        description: {
            en: "Capcom is a Japanese video game developer and publisher. It has created numerous multi-million-selling game franchises, including Resident Evil, Monster Hunter, Street Fighter, Mega Man, Devil May Cry, Dead Rising, and Ace Attorney.",
            es: "Capcom es una desarrolladora y distribuidora de videojuegos japonesa. Ha creado numerosas franquicias con ventas multimillonarias, incluyendo Resident Evil, Monster Hunter, Street Fighter y Mega Man."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Capcom_logo.svg"
    },
    {
        id: "cdprojekt",
        name: "CD Projekt S.A.",
        founded: "1994-05",
        headquarters: "Warsaw, Poland",
        description: {
            en: "CD Projekt is a Polish video game developer, publisher and distributor based in Warsaw. The company is best known for its The Witcher series and Cyberpunk 2077.",
            es: "CD Projekt es una desarrolladora, distribuidora y editora de videojuegos polaca con sede en Varsovia. La empresa es conocida por su serie The Witcher y Cyberpunk 2077."
        },
        image: "https://upload.wikimedia.org/wikipedia/en/6/68/CD_Projekt_logo.svg"
    },
    {
        id: "square",
        name: "Square Enix Holdings Co., Ltd.",
        founded: "2003-04-01",
        headquarters: "Shinjuku, Tokyo, Japan",
        description: {
            en: "Square Enix is a Japanese video game developer, publisher, and distribution company. It is best known for its Final Fantasy, Dragon Quest, and Kingdom Hearts role-playing video game franchises.",
            es: "Square Enix es una empresa japonesa de desarrollo, publicación y distribución de videojuegos. Es conocida por sus franquicias de juegos de rol Final Fantasy, Dragon Quest y Kingdom Hearts."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Square_Enix_logo.svg"
    },
    {
        id: "naughty-dog",
        name: "Naughty Dog, LLC",
        founded: "1984-09-27",
        headquarters: "Santa Monica, California, U.S.",
        description: {
            en: "Naughty Dog is an American first-party video game developer based in Santa Monica, California. It is a subsidiary of Sony Interactive Entertainment and is known for series such as Crash Bandicoot, Jak and Daxter, Uncharted, and The Last of Us.",
            es: "Naughty Dog es una desarrolladora de videojuegos estadounidense con sede en Santa Monica, California. Es una subsidiaria de Sony Interactive Entertainment y es conocida por Crash Bandicoot, Uncharted y The Last of Us."
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Naughty_Dog_logo.svg"
    },
    {
        id: "supergiant",
        name: "Supergiant Games, LLC",
        founded: "2009",
        headquarters: "San Francisco, California, U.S.",
        description: {
            en: "Supergiant Games is an American independent video game developer based in San Francisco. It is known for the critically acclaimed games Bastion, Transistor, Pyre, and Hades.",
            es: "Supergiant Games es una desarrolladora de videojuegos independiente considerada una de las mejores de la industria, conocida por Bastion, Transistor, Pyre y Hades."
        }
    }
];

export { GAMES_DATA, COMPANIES_DATA };
