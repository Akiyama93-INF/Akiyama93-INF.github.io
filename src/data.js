const GAMES_DATA = [
    {
        id: "half-life",
        title: "Half-Life",
        developer: "Valve",
        publisher: "Sierra Entertainment",
        genre: "First-person shooter",
        releaseDate: "1998-11-19",
        description: {
            en: "Step into the boots of Gordon Freeman, a theoretical physicist who must fight his way out of a top-secret research facility after an experiment goes catastrophically wrong. Half-Life redefined the FPS genre by merging intense action with seamless, scripted storytelling.",
            es: "Ponte en las botas de Gordon Freeman, un físico teórico que debe abrirse paso en una instalación de investigación ultrasecreta después de que un experimento sale catastróficamente mal. Half-Life redefinió el género FPS al fusionar acción intensa con una narrativa fluida y guionizada."
        },
        detailedHistory: {
            en: "Released in 1998, Half-Life was Valve's debut and a turning point for the industry. Unlike other shooters of the time, it never used cutscenes to tell its story, keeping players in control through every scripted event. It received over 50 'Game of the Year' awards and spawned an ecosystem of mods, including Counter-Strike.",
            es: "Lanzado en 1998, Half-Life fue el debut de Valve y un punto de inflexión para la industria. A diferencia de otros shooters de la época, nunca usó escenas cinematográficas para contar su historia, manteniendo al jugador en control durante cada evento. Recibió más de 50 premios al 'Juego del Año' y dio lugar a un ecosistema de mods, incluido Counter-Strike."
        },
        development: {
            en: "Development began in 1996, with the team building on a heavily modified version of the Quake engine (GoldSrc). The project was famously delayed to completely rework the levels and AI, resulting in the seamless narrative experience that shocked the gaming world upon release.",
            es: "El desarrollo comenzó en 1996, con el equipo trabajando sobre una versión muy modificada del motor Quake (GoldSrc). El proyecto fue retrasado para rehacer completamente los niveles y la IA, resultando en la experiencia narrativa fluida que conmocionó al mundo al lanzarse."
        },
        companyId: "valve",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/70/header.jpg"
    },
    {
        id: "half-life-2",
        title: "Half-Life 2",
        developer: "Valve",
        publisher: "Valve",
        genre: "First-person shooter",
        releaseDate: "2004-11-16",
        description: {
            en: "Gordon Freeman returns to find Earth occupied by the Combine, an interdimensional empire. Armed with the iconic Gravity Gun, you will lead a resistance in City 17, experiencing a level of physics interaction and facial animation that was years ahead of its time.",
            es: "Gordon Freeman regresa para encontrar la Tierra ocupada por la Alianza, un imperio interdimensional. Armado con la icónica Pistola de Gravedad, liderarás una resistencia en Ciudad 17, experimentando un nivel de interacción física y animación facial que estaba años por delante de su tiempo."
        },
        detailedHistory: {
            en: "After six years of development, Half-Life 2 arrived in 2004, introducing the Source engine. Its 'City 17' setting became legendary for its atmosphere and dystopian detail. The game also marked the launch of Steam, Valve's digital distribution platform that would eventually dominate the PC market.",
            es: "Tras seis años de desarrollo, Half-Life 2 llegó en 2004, introduciendo el motor Source. Su ambientación en 'Ciudad 17' se volvió legendaria por su atmósfera y detalle distópico. El juego también marcó el lanzamiento de Steam, la plataforma de distribución digital de Valve que acabaría dominando el mercado de PC."
        },
        development: {
            en: "The development was marked by the creation of the Source engine, featuring groundbreaking physics and facial animation. A high-profile hack in 2003 led to the leak of the game's source code, causing significant delays and a complete redesign of certain chapters.",
            es: "El desarrollo estuvo marcado por la creación del motor Source, con físicas y animación facial revolucionarias. Un hackeo de alto perfil en 2003 provocó la filtración del código fuente, lo que causó retrasos significativos y un rediseño completo de ciertos capítulos."
        },
        companyId: "valve",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg"
    },
    {
        id: "portal",
        title: "Portal",
        developer: "Valve",
        publisher: "Valve",
        genre: "Puzzle-platform",
        releaseDate: "2007-10-10",
        description: {
            en: "A short but groundbreaking experience focused on the Aperture Science Handheld Portal Device. Navigate impossible chambers, outsmart the sarcastic A.I. GLaDOS, and remember: the cake is a lie.",
            es: "Una experiencia corta pero revolucionaria centrada en el Dispositivo de Portales de Aperture Science. Navega por cámaras imposibles, burla a la sarcástica IA GLaDOS y recuerda: el pastel es mentira."
        },
        detailedHistory: {
            en: "Developed by a small team from DigiPen, Portal was included in The Orange Box. What started as an experimental puzzle game became a cultural phenomenon, praised for its tight design and darkly humorous writing.",
            es: "Desarrollado por un pequeño equipo de DigiPen, Portal se incluyó en The Orange Box. Lo que comenzó como un juego de rompecabezas experimental se convirtió en un fenómeno cultural, elogiado por su diseño ajustado y su guion de humor negro."
        },
        development: {
            en: "The project was based on 'Narbacular Drop', a student project from DigiPen. Valve hired the entire student team to turn their concept into a commercial game. The iconic character GLaDOS was added late in development to provide a narrative motivation for the puzzles.",
            es: "El proyecto se basó en 'Narbacular Drop', un proyecto de estudiantes de DigiPen. Valve contrató a todo el equipo para convertir su concepto en un juego comercial. El icónico personaje GLaDOS se añadió tarde en el desarrollo para dar una motivación narrativa a los puzles."
        },
        companyId: "valve",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg"
    },
    {
        id: "resident-evil",
        title: "Resident Evil",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Survival horror",
        releaseDate: "1996-03-22",
        description: {
            en: "Resident Evil is a survival horror video game developed and released by Capcom originally for the PlayStation in 1996, and is the first game in the Resident Evil series.",
            es: "Resident Evil es un videojuego de terror y supervivencia desarrollado y lanzado por Capcom originalmente para PlayStation en 1996, y es el primer juego de la serie Resident Evil."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "The game that coined the term 'survival horror'. It follows the S.T.A.R.S. Alpha team as they investigate mysterious disappearances in a mansion on the outskirts of Raccoon City.",
            es: "El juego que acuñó el término 'survival horror'. Sigue al equipo Alpha de S.T.A.R.S. mientras investigan desapariciones misteriosas en una mansión a las afueras de Raccoon City."
        },
        development: {
            en: "Directed by Shinji Mikami, it was originally conceived as a remake of Sweet Home. The game's fixed camera angles and tank controls became iconic staples of the genre.",
            es: "Dirigido por Shinji Mikami, fue concebido originalmente como un remake de Sweet Home. Los ángulos de cámara fijos y los controles de 'tanque' se convirtieron en sellos icónicos del género."
        }
    },
    {
        id: "resident-evil-4",
        title: "Resident Evil 4",
        developer: "Capcom Production Studio 4",
        publisher: "Capcom",
        genre: "Survival horror",
        releaseDate: "2005-01-11",
        description: {
            en: "Six years after the Raccoon City disaster, Leon S. Kennedy is sent to a remote European village to rescue the President's daughter. Face terrifying new threats that move faster and think harder than zombies in a game that reinvented action-horror with its over-the-shoulder camera.",
            es: "Seis años después del desastre de Raccoon City, Leon S. Kennedy es enviado a una aldea remota en Europa para rescatar a la hija del presidente. Enfréntate a nuevas amenazas aterradoras que se mueven más rápido y piensan más que los zombis en un juego que reinventó el terror de acción con su cámara sobre el hombro."
        },
        detailedHistory: {
            en: "Resident Evil 4 underwent multiple radical redesigns before Shinji Mikami took the lead. Its influence on the industry is immeasurable, standardizing the third-person 'over-the-shoulder' perspective that almost every modern action game uses today. It is widely considered one of the greatest games of all time.",
            es: "Resident Evil 4 pasó por múltiples rediseños radicales antes de que Shinji Mikami tomara el mando. Su influencia en la industria es incalculable, estandarizando la perspectiva en tercera persona 'sobre el hombro' que casi todos los juegos de acción modernos utilizan hoy en día. Es ampliamente considerado uno de los mejores juegos de la historia."
        },
        development: {
            en: "The game started as a very different project that eventually became 'Devil May Cry'. After several iterations, Mikami returned to the director's chair to create a faster, more action-oriented experience that still maintained the series' signature tension.",
            es: "El juego comenzó como un proyecto muy diferente que acabó convirtiéndose en 'Devil May Cry'. Tras varias iteraciones, Mikami volvió a la dirección para crear una experiencia más rápida y orientada a la acción que aún mantenía la tensión de la serie."
        },
        companyId: "capcom"
    },
    {
        id: "the-walking-dead",
        title: "The Walking Dead: Season 1",
        rawgId: 3439,
        developer: "Telltale Games",
        publisher: "Telltale Games",
        genre: "Graphic adventure",
        releaseDate: "2012-04-24",
        description: {
            en: "Focus on story and character development over traditional puzzle-solving. Every choice you make as Lee Everett will shape the journey of young Clementine in a world overrun by the undead.",
            es: "Céntrate en la historia y el desarrollo de los personajes por encima de la resolución de acertijos tradicionales. Cada elección que tomes como Lee Everett dará forma al viaje de la joven Clementine en un mundo infestado de muertos vivientes."
        },
        detailedHistory: {
            en: "The Walking Dead revitalized the adventure genre with its focus on emotional consequences and binary choices. It won numerous 'Game of the Year' awards and established the 'Telltale formula' that would influence narrative games for a decade.",
            es: "The Walking Dead revitalizó el género de las aventuras con su enfoque en las consecuencias emocionales y las decisiones binarias. Ganó numerosos premios al 'Juego del Año' y estableció la 'fórmula Telltale' que influiría en los juegos narrativos durante una década."
        },
        companyId: "telltale"
    },
    {
        id: "minecraft",
        title: "Minecraft",
        developer: "Mojang Studios",
        publisher: "Mojang Studios",
        genre: "Sandbox, Survival",
        releaseDate: "2011-11-18",
        description: {
            en: "An infinite world of blocks where your imagination is the only limit. Mine, build, and survive in the best-selling video game of all time.",
            es: "Un mundo infinito de bloques donde tu imaginación es el único límite. Mina, construye y sobrevive en el videojuego más vendido de todos los tiempos."
        },
        detailedHistory: {
            en: "What started as a niche project by Markus 'Notch' Persson became a global phenomenon. Minecraft's procedural world and creative freedom led to its acquisition by Microsoft for $2.5 billion in 2014, and it continues to be a cornerstone of modern gaming culture.",
            es: "Lo que comenzó como un proyecto de nicho de Markus 'Notch' Persson se convirtió en un fenómeno global. El mundo procedimental y la libertad creativa de Minecraft llevaron a su adquisición por parte de Microsoft por 2.500 millones de dólares en 2014, y sigue siendo una piedra angular de la cultura de los videojuegos moderna."
        },
        development: {
            en: "Originally developed in Java by Notch, development was later handed over to Jens 'Jeb' Bergensten. The game's evolution from a simple building game to a complex sandbox with technical logic (Redstone) was driven by its massive and creative player community.",
            es: "Originalmente desarrollado en Java por Notch, el desarrollo fue entregado más tarde a Jens 'Jeb' Bergensten. La evolución del juego, de un simple simulador de construcción a un complejo sandbox con lógica técnica (Redstone), fue impulsada por su masiva y creativa comunidad de jugadores."
        },
        companyId: "mojang"
    },
    {
        id: "gta-v",
        title: "Grand Theft Auto V",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        genre: "Action-adventure",
        releaseDate: "2013-09-17",
        description: {
            en: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.",
            es: "Grand Theft Auto V es un videojuego de acción y aventura de 2013 desarrollado por Rockstar North y publicado por Rockstar Games. Es la séptima entrega de la serie Grand Theft Auto."
        },
        detailedHistory: {
            en: "One of the most profitable entertainment products ever, GTA V introduced a revolutionary three-protagonist system. Its online component, GTA Online, has sustained a massive player base for over a decade through constant updates and social features.",
            es: "Uno de los productos de entretenimiento más rentables de la historia, GTA V introdujo un revolucionario sistema de tres protagonistas. Su componente en línea, GTA Online, ha mantenido una base masiva de jugadores durante más de una década."
        },
        development: {
            en: "Developed by Rockstar North, the game had a budget exceeding $265 million. The team spent years researching Los Angeles to create Los Santos, focusing on satire and a level of environmental detail that set new industry standards for open worlds.",
            es: "Desarrollado por Rockstar North, el juego contó con un presupuesto superior a los 265 millones de dólares. El equipo pasó años investigando Los Ángeles para crear Los Santos, centrándose en la sátira y un nivel de detalle ambiental sin precedentes."
        },
        companyId: "rockstar"
    },
    {
        id: "red-dead-redemption-2",
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        genre: "Action-adventure",
        releaseDate: "2018-10-26",
        description: {
            en: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.",
            es: "Red Dead Redemption 2 es un videojuego de acción y aventura de 2018 desarrollado y publicado por Rockstar Games. Es la tercera entrega de la serie Red Dead y una precuela del juego de 2010."
        },
        companyId: "rockstar",
        detailedHistory: {
            en: "A prequel to Red Dead Redemption, following Arthur Morgan and the Van der Linde gang as the era of the outlaw comes to an end. It is noted for its immense detail and emotional narrative.",
            es: "Una precuela de Red Dead Redemption, que sigue a Arthur Morgan y la banda de Van der Linde mientras la era de los forajidos llega a su fin. Destaca por su inmenso detalle y narrativa emocional."
        },
        development: {
            en: "Developing RDR2 took over eight years, with Rockstar Studios working as a single global team. The project pushed technical boundaries with its dynamic weather and AI.",
            es: "El desarrollo de RDR2 duró más de ocho años, con Rockstar Studios trabajando como un solo equipo global. El proyecto superó límites técnicos con su clima dinámico e IA."
        }
    },
    {
        id: "the-witcher-3",
        title: "The Witcher 3: Wild Hunt",
        developer: "CD Projekt Red",
        publisher: "CD Projekt Red",
        genre: "Action role-playing",
        releaseDate: "2015-05-19",
        description: {
            en: "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt Red. The game is the sequel to the 2011 game The Witcher 2: Assassins of Kings.",
            es: "The Witcher 3: Wild Hunt es un videojuego de rol de acción de 2015 desarrollado y publicado por CD Projekt Red. Es la secuela del juego de 2011 The Witcher 2: Assassins of Kings."
        },
        detailedHistory: {
            en: "Renowned for setting a new benchmark in side-quest quality and adult storytelling, The Witcher 3 concludes Geralt of Rivia's story. It is widely praised for its moral complexity and the tangible impact of player choices on the world.",
            es: "Reconocido por establecer un nuevo estándar en la calidad de las misiones secundarias y la narrativa adulta, The Witcher 3 concluye la historia de Geralt de Rivia. Es elogiado por su complejidad moral y el impacto real de las decisiones del jugador."
        },
        development: {
            en: "Developed by the Polish studio CD Projekt Red, the game utilized the REDengine 3 to create a vast, seamless world. The writers focused on avoiding 'fetch quests', ensuring every character and mission had a meaningful place in the dark fantasy world.",
            es: "Desarrollado por el estudio polaco CD Projekt Red, el juego utilizó el REDengine 3 para crear un mundo vasto y sin interrupciones. Los guionistas se centraron en evitar misiones de recadero, asegurando que cada personaje y misión tuviera un lugar significativo."
        },
        companyId: "cdprojekt"
    },
    {
        id: "skyrim",
        title: "The Elder Scrolls V: Skyrim",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        genre: "Action role-playing",
        releaseDate: "2011-11-11",
        description: {
            en: "The Elder Scrolls V: Skyrim is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
            es: "The Elder Scrolls V: Skyrim es un videojuego de rol de acción de mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks."
        },
        detailedHistory: {
            en: "A cultural phenomenon that popularized open-world RPGs for a mass audience. Its longevity is largely attributed to its sheer freedom and the legendary modding community that continues to expand the game more than a decade after its release.",
            es: "Un fenómeno cultural que popularizó los RPG de mundo abierto para el gran público. Su longevidad se atribuye en gran medida a su libertad total y a la legendaria comunidad de modding que sigue expandiendo el juego más de una década después."
        },
        development: {
            en: "Developed by Bethesda Game Studios using the Creation Engine. The project focused on 'environmental storytelling', ensuring that even the most remote cave in the province of Skyrim had a story to tell through NPC placements and item locations.",
            es: "Desarrollado por Bethesda Game Studios utilizando el Creation Engine. El proyecto se centró en la 'narrativa ambiental', asegurando que incluso la cueva más remota de la provincia de Skyrim tuviera una historia que contar."
        },
        companyId: "bethesda"
    },
    {
        id: "fallout-4",
        title: "Fallout 4",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        genre: "Action role-playing",
        releaseDate: "2015-11-10",
        description: {
            en: "Fallout 4 is an action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth main effort in the Fallout series.",
            es: "Fallout 4 es un videojuego de rol de acción desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Es el cuarto esfuerzo principal de la serie Fallout."
        },
        companyId: "bethesda",
        detailedHistory: {
            en: "Set in 2287, 210 years after a nuclear war, the player emerges from Vault 111 into the 'Commonwealth' to find their kidnapped son. It expanded the series with deep crafting and base-building systems.",
            es: "Ambientado en 2287, 210 años después de una guerra nuclear, el jugador sale del Refugio 111 a la 'Commonwealth' para buscar a su hijo secuestrado. Expandió la serie con sistemas profundos de crafteo y construcción."
        },
        development: {
            en: "Bethesda began work on Fallout 4 immediately after Fallout 3, but focused on it fully after Skyrim. The team improved the gunplay significantly with help from id Software.",
            es: "Bethesda comenzó a trabajar en Fallout 4 inmediatamente después de Fallout 3, pero se centró totalmente en él tras Skyrim. El equipo mejoró significativamente el gunplay con ayuda de id Software."
        }
    },
    {
        id: "bioshock",
        title: "BioShock",
        developer: "2K Boston / 2K Australia",
        publisher: "2K Games",
        genre: "First-person shooter",
        releaseDate: "2007-08-21",
        description: {
            en: "BioShock is a first-person shooter game developed by 2K Boston and 2K Australia and published by 2K Games. The game's story is set in 1960.",
            es: "BioShock es un videojuego de disparos en primera persona desarrollado por 2K Boston y 2K Australia y publicado por 2K Games. La historia del juego se desarrolla en 1960."
        },
        detailedHistory: {
            en: "Set in the decaying underwater city of Rapture, BioShock explored deep philosophical themes like objectivism and free will. Its 'Would you kindly' twist remains one of the most famous narrative moments in gaming history.",
            es: "Ambientado en la decadente ciudad submarina de Rapture, BioShock exploró temas filosóficos profundos como el objetivismo y el libre albedrío. Su giro de '¿Quieres hacerme el favor?' sigue siendo uno de los momentos narrativos más famosos de la historia."
        },
        development: {
            en: "Directed by Ken Levine, the game was a spiritual successor to System Shock 2. The team at Irrational Games (2K Boston) spent years refining the 'AI ecosystem' of Rapture, where Big Daddies and Little Sisters interacted independently of the player.",
            es: "Dirigido por Ken Levine, el juego fue un sucesor espiritual de System Shock 2. El equipo de Irrational Games (2K Boston) pasó años refinando el 'ecosistema de IA' de Rapture, donde los Big Daddies y Little Sisters interactuaban independientemente del jugador."
        },
        companyId: "2k"
    },
    {
        id: "god-of-war",
        title: "God of War (2018)",
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure, hack and slash",
        releaseDate: "2018-04-20",
        description: {
            en: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It is the eighth installment in the God of War series.",
            es: "God of War es un videojuego de acción y aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Es la octava entrega de la serie God of War."
        },
        detailedHistory: {
            en: "A bold reimagining of the series, moving from Greek to Norse mythology and focusing on Kratos' role as a father. It is famous for its 'no-cut' camera technique, delivering the entire experience as a single continuous shot.",
            es: "Una audaz reinvención de la serie, pasando de la mitología griega a la nórdica y centrándose en el papel de Kratos como padre. Es famoso por su técnica de cámara 'sin cortes', ofreciendo toda la experiencia como una única toma continua."
        },
        development: {
            en: "Directed by Cory Barlog, the development team at Santa Monica Studio spent five years reinventing the franchise. The focus shifted from pure hack-and-slash to internal character growth and emotional narrative, humanizing the previously static protagonist.",
            es: "Dirigido por Cory Barlog, el equipo de desarrollo de Santa Monica Studio pasó cinco años reinventando la franquicia. El enfoque pasó del puro hack-and-slash al crecimiento interno del personaje y la narrativa emocional, humanizando al protagonista anteriormente estático."
        },
        companyId: "sony"
    },
    {
        id: "the-last-of-us",
        title: "The Last of Us Part I",
        developer: "Naughty Dog",
        publisher: "Sony Computer Entertainment",
        genre: "Action-adventure",
        releaseDate: "2013-06-14",
        description: {
            en: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie.",
            es: "The Last of Us es un videojuego de acción y aventura de 2013 desarrollado por Naughty Dog y publicado por Sony Computer Entertainment. Los jugadores controlan a Joel, un contrabandista encargado de escoltar a Ellie."
        },
        detailedHistory: {
            en: "Defined cinematic storytelling in video games with its grounded, character-driven narrative. It won hundreds of Game of the Year awards and is considered one of the finest examples of the medium as an art form.",
            es: "Definió la narrativa cinematográfica en los videojuegos con su historia realista centrada en los personajes. Ganó cientos de premios al Juego del Año y es considerado uno de los mejores ejemplos del medio como forma de arte."
        },
        development: {
            en: "Directed by Neil Druckmann and Bruce Straley, the game utilized advanced motion capture and facial animation to convey subtle emotions. The development focused on the 'tension' of survival, influencing the minimalist HUD and sound design.",
            es: "Dirigido por Neil Druckmann y Bruce Straley, el juego utilizó captura de movimiento avanzada y animación facial para transmitir emociones sutiles. El desarrollo se centró en la 'tensión' de la supervivencia, influyendo en el HUD minimalista y el diseño de sonido."
        },
        companyId: "sony"
    },
    {
        id: "elden-ring",
        title: "Elden Ring",
        developer: "FromSoftware",
        publisher: "Bandai Namco Entertainment",
        genre: "Action role-playing",
        releaseDate: "2022-02-25",
        description: {
            en: "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. It was directed by Hidetaka Miyazaki and made in collaboration with George R. R. Martin.",
            es: "Elden Ring es un videojuego de rol de acción de 2022 desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Dirigido por Hidetaka Miyazaki y en colaboración con George R. R. Martin."
        },
        detailedHistory: {
            en: "A massive open-world RPG that evolved the 'Souls' formula. It allows for unprecedented player freedom in 'The Lands Between', becoming FromSoftware's biggest commercial and critical success to date.",
            es: "Un RPG de mundo abierto masivo que evolucionó la fórmula 'Souls'. Permite una libertad sin precedentes al jugador en las 'Tierras Intermedias', convirtiéndose en el mayor éxito comercial y de crítica de FromSoftware hasta la fecha."
        },
        development: {
            en: "Directed by Hidetaka Miyazaki, featuring world-building lore created by George R.R. Martin. Martin wrote the deep history of the world (the Shattering and the demigods) which FromSoftware then used as the foundation for the game's actual events and environment.",
            es: "Dirigido por Hidetaka Miyazaki, con un trasfondo histórico creado por George R.R. Martin. Martin escribió la historia profunda del mundo (la Devastación y los semidioses) que FromSoftware utilizó como base para los eventos y el entorno actual del juego."
        },
        companyId: "fromsoftware"
    },
    {
        id: "dark-souls",
        title: "Dark Souls",
        developer: "FromSoftware",
        publisher: "Namco Bandai Games",
        genre: "Action role-playing",
        releaseDate: "2011-09-22",
        description: {
            en: "Prepare to die in a decaying world of gods and monsters. Master precision combat and learn from every defeat in the game that defined a new subgenre of challenging RPGs.",
            es: "Prepárate para morir en un mundo decadente de dioses y monstruos. Domina el combate de precisión y aprende de cada derrota en el juego que definió un nuevo subgénero de RPG desafiantes."
        },
        detailedHistory: {
            en: "A spiritual successor to Demon's Souls, Dark Souls became a cultural touchstone for its uncompromising difficulty and environmental storytelling. Its interconnected world design and 'tough but fair' philosophy transformed FromSoftware into one of the world's most acclaimed developers.",
            es: "Sucesor espiritual de Demon's Souls, Dark Souls se convirtió en un referente cultural por su dificultad inflexible y su narrativa ambiental. El diseño de su mundo interconectado y su filosofía de 'difícil pero justo' convirtieron a FromSoftware en uno de los desarrolladores más aclamados del mundo."
        },
        companyId: "fromsoftware"
    },
    {
        id: "mass-effect-2",
        title: "Mass Effect 2",
        developer: "BioWare",
        publisher: "Electronic Arts",
        genre: "Action role-playing, third-person shooter",
        releaseDate: "2010-01-26",
        description: {
            en: "Assemble a team of the galaxy's most dangerous specialists and lead them on a suicide mission to save humanity. In Mass Effect 2, your choices don't just affect the story—they determine who lives and who dies.",
            es: "Reúne a un equipo con los especialistas más peligrosos de la galaxia y lidéralos en una misión suicida para salvar a la humanidad. En Mass Effect 2, tus elecciones no solo afectan la historia, sino que determinan quién vive y quién muere."
        },
        detailedHistory: {
            en: "Often cited as the peak of the trilogy, Mass Effect 2 streamlined the RPG mechanics of the first game in favor of intense tactical combat and peerless character writing. Its 'Suicide Mission' finale is widely regarded as one of the best-designed sequences in gaming history.",
            es: "Citado a menudo como el punto álgido de la trilogía, Mass Effect 2 simplificó las mecánicas de RPG del primer juego en favor de un combate táctico intenso y una escritura de personajes incomparable. El final de la 'Misión Suicida' es ampliamente considerado como una de las secuencias mejor diseñadas en la historia de los videojuegos."
        },
        development: {
            en: "BioWare focused on character-driven narratives, where the player's loyalty missions directly impacted the chances of survival in the finale. The game moved away from the complex inventory of the first game to focus on cinematic pacing and polished shooting mechanics.",
            es: "BioWare se centró en narrativas impulsadas por los personajes, donde las misiones de lealtad afectaban directamente a las posibilidades de supervivencia en el final. El juego se alejó del inventario complejo del primero para centrarse en el ritmo cinematográfico."
        },
        companyId: "bioware",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU9X5EmMGg1oZz5DuHql8e5MsrsgJQ1zmrg&s"
    },
    {
        id: "hollow-knight",
        title: "Hollow Knight",
        developer: "Team Cherry",
        publisher: "Team Cherry",
        genre: "Metroidvania",
        releaseDate: "2017-02-24",
        description: {
            en: "Descend into the vast, ruined kingdom of Hallownest. Embark on an epic journey through twisting caverns and ancient cities in this beautifully hand-drawn 2D adventure.",
            es: "Desciende al vasto reino en ruinas de Hallownest. Embárcate en un viaje épico a través de cavernas serpenteantes y ciudades antiguas en esta aventura en 2D bellamente dibujada a mano."
        },
        detailedHistory: {
            en: "Funded via Kickstarter, Hollow Knight is a masterclass in atmosphere and tight Metroidvania design. Developed by a core team of only three people, it achieved massive success and is frequently cited as one of the best games in its genre.",
            es: "Financiado a través de Kickstarter, Hollow Knight es una clase magistral de atmósfera y diseño Metroidvania refinado. Desarrollado por un equipo principal de solo tres personas, alcanzó un éxito masivo y es citado frecuentemente como uno de los mejores juegos de su género."
        },
        development: {
            en: "The game was created by Team Cherry (Ari Gibson and William Pellen) in Adelaide, Australia. They used a unique art style based on hand-drawn sketches and traditional animation, creating a world that felt both grand and intimate despite the small team size.",
            es: "El juego fue creado por Team Cherry (Ari Gibson y William Pellen) en Adelaida, Australia. Utilizaron un estilo artístico único basado en bocetos hechos a mano y animación tradicional, creando un mundo vasto pero íntimo."
        },
        companyId: "teamcherry"
    },
    {
        id: "fallout-nv",
        title: "Fallout: New Vegas",
        developer: "Obsidian Entertainment",
        publisher: "Bethesda Softworks",
        genre: "Action role-playing",
        releaseDate: "2010-10-19",
        description: {
            en: "Fallout: New Vegas is a 2010 action role-playing game developed by Obsidian Entertainment and published by Bethesda Softworks.",
            es: "Fallout: New Vegas es un videojuego de rol de acción de 2010 desarrollado por Obsidian Entertainment y publicado por Bethesda Softworks."
        },
        companyId: "obsidian",
        detailedHistory: {
            en: "Unlike Bethesda's entries, New Vegas focuses on the faction warfare in the Mojave Wasteland. It is celebrated for its deep RPG systems and writing that honors the original Interplay games.",
            es: "A diferencia de las entregas de Bethesda, New Vegas se centra en la guerra de facciones en el Mojave. Es celebrado por sus profundos sistemas de RPG y un guion que honra a los juegos originales de Interplay."
        },
        development: {
            en: "Developed by Obsidian Entertainment in just 18 months using the Fallout 3 engine. Many team members were veterans of the original Fallout games, bringing back classic lore and mechanics.",
            es: "Desarrollado por Obsidian Entertainment en solo 18 meses usando el motor de Fallout 3. Muchos miembros del equipo eran veteranos de los juegos originales, recuperando lore y mecánicas clásicas."
        }
    },
    {
        id: "stardew-valley",
        title: "Stardew Valley",
        developer: "ConcernedApe",
        publisher: "ConcernedApe",
        genre: "Simulation, role-playing",
        releaseDate: "2016-02-26",
        description: {
            en: "Stardew Valley is an open-ended country-life RPG. You've inherited your grandfather's old farm plot in Stardew Valley.",
            es: "Stardew Valley es un RPG de vida campestre. Has heredado la vieja parcela agrícola de tu abuelo en Stardew Valley."
        },
        detailedHistory: {
            en: "Inspired by the Harvest Moon series, Stardew Valley became a global phenomenon, selling over 30 million copies. It is celebrated for its deep mechanics, charming atmosphere, and the way it expanded the farming simulation genre with RPG elements and emotional depth.",
            es: "Inspirado por la serie Harvest Moon, Stardew Valley se convirtió en un fenómeno global, vendiendo más de 30 millones de copias. Es celebrado por sus mecánicas profundas, atmósfera encantadora y la forma en que expandió el género de simulación agrícola con elementos de RPG y profundidad emocional."
        },
        development: {
            en: "The game was developed entirely by Eric Barone (ConcernedApe) over the course of four years. Working alone, Barone created all the art, music, programming, and dialogue, driven by a desire to fix the perceived decline of the farming sim genre.",
            es: "El juego fue desarrollado íntegramente por Eric Barone (ConcernedApe) a lo largo de cuatro años. Trabajando solo, Barone creó todo el arte, la música, la programación y los diálogos, motivado por el deseo de corregir el declive que percibía en el género de simulación agrícola."
        },
        companyId: "concernedape",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/413150/Stardew_Valley/" },
            { name: "GOG", url: "https://www.gog.com/en/game/stardew_valley" }
        ],
    },
    {
        id: "terraria",
        title: "Terraria",
        developer: "Re-Logic",
        publisher: "Re-Logic",
        genre: "Action-adventure, sandbox",
        releaseDate: "2011-05-16",
        description: {
            en: "Terraria is an action-adventure sandbox game developed by Re-Logic. Dig, fight, explore, build!",
            es: "Terraria es un videojuego de acción y aventura de mundo abierto desarrollado por Re-Logic. ¡Cava, lucha, explora, construye!"
        },
        companyId: "relogic",
        detailedHistory: {
            en: "Often described as '2D Minecraft', Terraria actually focuses much more on RPG progression and boss battles. It has received continuous updates for over a decade, expanding its content massively.",
            es: "Descrito a menudo como 'Minecraft en 2D', Terraria se centra mucho más en la progresión RPG y las batallas contra jefes. Ha recibido actualizaciones continuas durante más de una década, expandiendo su contenido masivamente."
        },
        development: {
            en: "Created by Re-Logic, a small independent team led by Andrew Spinks. The game's success allowed the studio to evolve from a small project to one of the most successful indie developers in the world.",
            es: "Creado por Re-Logic, un pequeño equipo independiente liderado por Andrew Spinks. El éxito del juego permitió que el estudio evolucionara de un proyecto pequeño a uno de los desarrolladores indie más exitosos."
        }
    },
    {
        id: "doom-eternal",
        title: "DOOM Eternal",
        developer: "id Software",
        publisher: "Bethesda Softworks",
        genre: "First-person shooter",
        releaseDate: "2020-03-20",
        description: {
            en: "DOOM Eternal is the direct sequel to the 2016 award-winning hit DOOM. Hell's armies have invaded Earth. Become the Slayer.",
            es: "DOOM Eternal es la secuela directa del éxito de 2016, DOOM. Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer."
        },
        companyId: "idsoftware",
        detailedHistory: {
            en: "The sequel to DOOM (2016), Eternal pushes the 'combat puzzle' formula to its limit, requiring players to manage resources through aggressive play. It features a grander scope and deeper lore.",
            es: "La secuela de DOOM (2016), Eternal lleva la fórmula del 'puzzle de combate' al límite, exigiendo a los jugadores gestionar recursos mediante un juego agresivo. Presenta una escala mayor y un lore más profundo."
        },
        development: {
            en: "id Software focused on 'Doom Engine 7' to deliver high-speed action at 60FPS across all platforms. The team aimed to fix the repetitiveness of the 2016 game by introducing more enemy variety and traversal tools.",
            es: "id Software se centró en 'Doom Engine 7' para ofrecer acción de alta velocidad a 60FPS en todas las plataformas. El equipo buscó corregir la repetitividad del juego de 2016 con más variedad de enemigos."
        }
    },
    {
        id: "unreal-tournament",
        title: "Unreal Tournament",
        developer: "Epic Games",
        publisher: "GT Interactive",
        genre: "First-person shooter",
        releaseDate: "1999-11-23",
        description: {
            en: "Unreal Tournament is a first-person shooter video game developed by Epic Games and Digital Extremes.",
            es: "Unreal Tournament es un videojuego de disparos en primera persona desarrollado por Epic Games y Digital Extremes."
        },
        companyId: "epic",
        detailedHistory: {
            en: "A pioneer of the arena shooter genre, Unreal Tournament focused purely on multiplayer competition. It competed directly with Quake III Arena and introduced iconic modes like Capture the Flag and Assault.",
            es: "Pionero del género arena shooter, Unreal Tournament se centró puramente en la competición multijugador. Compitió directamente con Quake III Arena e introdujo modos icónicos como Capturar la Bandera y Asalto."
        },
        development: {
            en: "Developed by Epic Games and Digital Extremes. It was built on the Unreal Engine, showcasing the engine's capability for fast-paced networking and advanced AI bots that mimicked human behavior.",
            es: "Desarrollado por Epic Games y Digital Extremes. Se construyó sobre el Unreal Engine, mostrando la capacidad del motor para el networking rápido y bots de IA avanzados que imitaban el comportamiento humano."
        }
    },
    {
        id: "bioshock-infinite",
        title: "BioShock Infinite",
        developer: "Irrational Games",
        publisher: "2K Games",
        genre: "First-person shooter",
        releaseDate: "2013-03-26",
        description: {
            en: "BioShock Infinite is a first-person shooter game developed by Irrational Games and published by 2K Games. Set in 1912 in the airborne city of Columbia.",
            es: "BioShock Infinite es un videojuego de disparos en primera persona desarrollado por Irrational Games y publicado por 2K Games. Ambientado en 1912 en la ciudad flotante de Columbia."
        },
        companyId: "irrational",
        detailedHistory: {
            en: "Moving from the depths of Rapture to the floating city of Columbia, Infinite tells the story of Booker DeWitt and Elizabeth. It explores themes of American exceptionalism and quantum physics.",
            es: "Pasando de las profundidades de Rapture a la ciudad flotante de Columbia, Infinite cuenta la historia de Booker DeWitt y Elizabeth. Explora temas del excepcionalismo americano y la física cuántica."
        },
        development: {
            en: "The development by Irrational Games was notoriously difficult, with many concepts being cut or redesigned. The focus was on the relationship between Booker and Elizabeth, aiming for a truly companion-driven experience.",
            es: "El desarrollo de Irrational Games fue notoriamente difícil, con muchos conceptos recortados o rediseñados. El enfoque fue la relación entre Booker y Elizabeth, buscando una experiencia centrada en el acompañante."
        }
    },
    {
        id: "left-4-dead-2",
        title: "Left 4 Dead 2",
        developer: "Valve",
        publisher: "Valve",
        genre: "First-person shooter",
        releaseDate: "2009-11-17",
        description: {
            en: "Left 4 Dead 2 is a cooperative first-person shooter video game, the sequel to Valve's Left 4 Dead.",
            es: "Left 4 Dead 2 es un videojuego de disparos en primera persona cooperativo, secuela del exitoso Left 4 Dead de Valve."
        },
        companyId: "valve",
        detailedHistory: {
            en: "L4D2 expanded on the original's cooperative formula with more characters, special infected, and melee weapons. Its 'AI Director' ensures that no two playthroughs of a campaign are ever the same.",
            es: "L4D2 expandió la fórmula cooperativa del original con más personajes, infectados especiales y armas cuerpo a cuerpo. Su 'AI Director' asegura que no haya dos partidas iguales en una campaña."
        },
        development: {
            en: "Valve released the sequel just one year after the first game, which initially caused controversy among fans. However, the consistent updates and Steam Workshop support made it the definitive co-op zombie shooter.",
            es: "Valve lanzó la secuela solo un año después del primer juego, lo que inicialmente causó controversia. Sin embargo, las actualizaciones constantes y el soporte de Steam Workshop lo convirtieron en el shooter definitivo."
        }
    },
    {
        id: "silent-hill-2",
        title: "Silent Hill 2",
        developer: "Team Silent",
        publisher: "Konami",
        genre: "Survival horror",
        releaseDate: "2001-09-24",
        description: {
            en: "Silent Hill 2 is a survival horror game published by Konami. It follows James Sunderland as he travels to the town of Silent Hill.",
            es: "Silent Hill 2 es un videojuego de terror y supervivencia publicado por Konami. Sigue a James Sunderland mientras viaja al pueblo de Silent Hill."
        },
        detailedHistory: {
            en: "Widely considered one of the greatest horror games ever made, Silent Hill 2 is a masterpiece of psychological storytelling. It explores themes of guilt, punishment, and the human subconscious, featuring the iconic antagonist Pyramid Head and a haunting fog-filled setting.",
            es: "Ampliamente considerado uno de los mejores juegos de terror jamás creados, Silent Hill 2 es una obra maestra de la narrativa psicológica. Explora temas de culpa, castigo y el subconsciente humano, presentando al icónico antagonista Pyramid Head y una inquietante ambientación llena de niebla."
        },
        development: {
            en: "Developed by Team Silent, a group within Konami Computer Entertainment Tokyo, the game was influenced by artists like Francis Bacon and film directors like David Lynch. The fog, originally a technical trick to hide hardware limitations, became the series' most atmospheric signature.",
            es: "Desarrollado por Team Silent, un grupo dentro de Konami Computer Entertainment Tokyo, el juego fue influenciado por artistas como Francis Bacon y directores de cine como David Lynch. La niebla, originalmente un truco técnico para ocultar limitaciones de hardware, se convirtió en la firma más atmosférica de la serie."
        },
        companyId: "konami"
    },
    {
        id: "metal-gear-solid-3",
        title: "Metal Gear Solid 3: Snake Eater",
        developer: "Konami Computer Entertainment Japan",
        publisher: "Konami",
        genre: "Action-adventure, stealth",
        releaseDate: "2004-11-17",
        description: {
            en: "Metal Gear Solid 3: Snake Eater is a stealth action game directed by Hideo Kojima and published by Konami. It is a prequel to the entire Metal Gear series.",
            es: "Metal Gear Solid 3: Snake Eater es un juego de acción y sigilo dirigido por Hideo Kojima y publicado por Konami. Es una precuela de toda la serie Metal Gear."
        },
        detailedHistory: {
            en: "A masterpiece of the stealth genre, Snake Eater moved the action to the Soviet jungle during the Cold War. It introduced survival mechanics like hunting for food and treating injuries, culminating in one of the most emotional final boss battles in history.",
            es: "Una obra maestra del sigilo, Snake Eater trasladó la acción a la jungla soviética durante la Guerra Fría. Introdujo mecánicas de supervivencia como cazar para comer y tratar heridas, culminando en una de las batallas finales más emotivas de la historia."
        },
        development: {
            en: "Directed by Hideo Kojima, the game was a technical feat for the PlayStation 2. The team focused on creating a living jungle environment where camouflage played a central role, departing from the urban settings of previous entries.",
            es: "Dirigido por Hideo Kojima, el juego fue una hazaña técnica para PS2. El equipo se centró en crear una jungla viva donde el camuflaje jugaba un papel central, alejándose de los entornos urbanos de entregas anteriores."
        },
        companyId: "konami"
    },
    {
        id: "final-fantasy-vii",
        title: "Final Fantasy VII",
        developer: "Square",
        publisher: "Square",
        genre: "Role-playing",
        releaseDate: "1997-01-31",
        description: {
            en: "Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series.",
            es: "Final Fantasy VII es un videojuego de rol de 1997 desarrollado por Square para PlayStation. Es la séptima entrega principal de la serie Final Fantasy."
        },
        detailedHistory: {
            en: "A landmark title that popularized JRPGs in the West. Its transition to 3D graphics, cinematic presentation, and the tragic story of Cloud Strife and Aerith Gainsborough made it a cultural phenomenon that defines the 32-bit era.",
            es: "Un título emblemático que popularizó los JRPG en Occidente. Su transición a gráficos 3D, presentación cinematográfica y la trágica historia de Cloud Strife y Aerith lo convirtieron en un fenómeno cultural que define la era de los 32 bits."
        },
        development: {
            en: "Originally planned for the Nintendo 64, the project moved to the PlayStation due to the storage capacity of CDs. This allowed Square to include over 40 minutes of full-motion video (FMV), blending cinematic storytelling with traditional turn-based combat.",
            es: "Originalmente planeado para Nintendo 64, el proyecto se trasladó a PlayStation por el almacenamiento de los CDs. Esto permitió a Square incluir más de 40 minutos de video (FMV), mezclando narrativa cinematográfica con combate por turnos."
        },
        companyId: "square"
    },
    {
        id: "zelda-botw",
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        genre: "Action-adventure",
        releaseDate: "2017-03-03",
        description: {
            en: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Switch and Wii U consoles.",
            es: "The Legend of Zelda: Breath of the Wild es un videojuego de acción y aventura desarrollado y publicado por Nintendo para Switch y Wii U."
        },
        detailedHistory: {
            en: "Breath of the Wild reinvented the open-world genre by emphasizing chemistry and physics-based interactions over traditional quest markers. Its 'go-anywhere' philosophy and emergent gameplay made it an instant classic and a milestone for the Zelda franchise.",
            es: "Breath of the Wild reinventó el género de mundo abierto al enfatizar las interacciones basadas en la química y la física. Su filosofía de 'ir a cualquier parte' y su jugabilidad emergente lo convirtieron en un clásico instantáneo."
        },
        development: {
            en: "The development team, led by Hidemaro Fujibayashi, spent years prototyping the game's chemistry engine using a 2D 'NES-style' version of the world. This focus on systemic interactions allowed for the 'multiplicative' gameplay that defined the final product.",
            es: "El equipo de desarrollo, liderado por Hidemaro Fujibayashi, pasó años haciendo prototipos del motor de química usando una versión 2D del mundo. Este enfoque permitió la jugabilidad 'multiplicativa' que define el producto final."
        },
        companyId: "nintendo"
    },
    {
        id: "mario-odyssey",
        title: "Super Mario Odyssey",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        genre: "Platform, action-adventure",
        releaseDate: "2017-10-27",
        description: {
            en: "Super Mario Odyssey is a platform game developed and published by Nintendo for the Nintendo Switch. It is the sixth main Super Mario game in 3D.",
            es: "Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo para Nintendo Switch. Es el sexto juego principal de Super Mario en 3D."
        },
        detailedHistory: {
            en: "A joyous return to the 'sandbox' style of 3D Mario games. Odyssey introduced Cappy, a sentient hat that allows Mario to possess enemies and objects, leading to some of the most creative and varied platforming sequences in the series.",
            es: "Un alegre regreso al estilo 'sandbox' de los juegos de Mario en 3D. Odyssey introdujo a Cappy, un sombrero consciente que permite a Mario poseer enemigos y objetos, dando lugar a secuencias de plataformas increíblemente creativas."
        },
        development: {
            en: "Directed by Kenta Motokura, the development team focused on the theme of 'surprise'. They aimed to pack every kingdom with unexpected secrets and transformations, encouraging players to experiment with Cappy in every corner of the world.",
            es: "Dirigido por Kenta Motokura, el equipo de desarrollo se centró en el tema de la 'sorpresa'. Su objetivo era llenar cada reino de secretos inesperados y transformaciones, fomentando la experimentación de los jugadores."
        },
        companyId: "nintendo"
    },
    {
        id: "halo-ce",
        title: "Halo: Combat Evolved",
        developer: "Bungie",
        publisher: "Microsoft Game Studios",
        genre: "First-person shooter",
        releaseDate: "2001-11-15",
        description: {
            en: "Halo: Combat Evolved is a 2001 first-person shooter game developed by Bungie and published by Microsoft Game Studios.",
            es: "Halo: Combat Evolved es un videojuego de disparos en primera persona de 2001 desarrollado por Bungie y publicado por Microsoft Game Studios."
        },
        companyId: "bungie",
        detailedHistory: {
            en: "Halo revolutionized the FPS genre on consoles, proving that shooters could work perfectly without a mouse and keyboard. Its rich science-fiction lore and Master Chief became the face of the Xbox brand.",
            es: "Halo revolucionó el género FPS en consolas, demostrando que los shooters podían funcionar perfectamente sin ratón y teclado. Su rico lore de ciencia ficción y el Jefe Maestro se convirtieron en la cara de Xbox."
        },
        development: {
            en: "Originally conceived as a third-person strategy game for Mac, Halo was transformed into an FPS after Bungie was acquired by Microsoft. It became the 'killer app' that launched the original Xbox.",
            es: "Concebido originalmente como un juego de estrategia en tercera persona para Mac, Halo se transformó en un FPS tras la adquisición de Bungie por parte de Microsoft. Se convirtió en la 'killer app' de la Xbox original."
        }
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        developer: "CD Projekt Red",
        publisher: "CD Projekt",
        genre: "Action role-playing",
        releaseDate: "2020-12-10",
        description: {
            en: "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt Red. The story takes place in Night City, an open world set in the Cyberpunk universe.",
            es: "Cyberpunk 2077 es un videojuego de rol de acción desarrollado y publicado por CD Projekt Red. La historia tiene lugar en Night City, un mundo abierto ambientado en el universo Cyberpunk."
        },
        detailedHistory: {
            en: "Despite a famously troubled launch, Cyberpunk 2077 has been transformed through years of updates into a definitive RPG experience. Its portrayal of Night City and the narrative partnership with Johnny Silverhand (Keanu Reeves) offer a deep, mature exploration of transhumanism.",
            es: "A pesar de un lanzamiento problemático, Cyberpunk 2077 se ha transformado a través de años de actualizaciones en una experiencia de rol definitiva. Su retrato de Night City y la relación con Johnny Silverhand ofrecen una exploración profunda del transhumanismo."
        },
        development: {
            en: "CD Projekt Red utilized the REDengine 4 to create the dense, vertical environment of Night City. Following the 2.0 update and the 'Phantom Liberty' expansion, the game finally achieved the vision originally promised by the developers.",
            es: "CD Projekt Red utilizó el REDengine 4 para crear el entorno denso y vertical de Night City. Tras la actualización 2.0 y la expansión 'Phantom Liberty', el juego finalmente alcanzó la visión prometida originalmente."
        },
        companyId: "cdprojekt",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/" },
            { name: "GOG", url: "https://www.gog.com/en/game/cyberpunk_2077" },
            { name: "Epic Games", url: "https://store.epicgames.com/en-US/p/cyberpunk-2077" }
        ],
    },
    {
        id: "baldurs-gate-3",
        title: "Baldur's Gate 3",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        genre: "Role-playing",
        releaseDate: "2023-08-03",
        description: {
            en: "Baldur's Gate 3 is a role-playing video game developed and published by Larian Studios. It is the third main game in the Baldur's Gate series.",
            es: "Baldur's Gate 3 es un videojuego de rol desarrollado y publicado por Larian Studios. Es el tercer juego principal de la serie Baldur's Gate."
        },
        detailedHistory: {
            en: "A monumental achievement in the RPG genre, Baldur's Gate 3 brought the depth of Dungeons & Dragons 5th Edition to a massive audience. It is celebrated for its incredible reactive storytelling and the freedom it gives players to solve problems.",
            es: "Un logro monumental en el género RPG, Baldur's Gate 3 llevó la profundidad de Dungeons & Dragons (5ª Edición) a una audiencia masiva. Es celebrado por su increíble narrativa reactiva y la libertad total que otorga a los jugadores."
        },
        development: {
            en: "After years of Early Access, Larian Studios polished every aspect of the game with the help of a passionate community. The project involved over 2.5 million words of dialogue and thousands of variations depending on player choices.",
            es: "Tras años de Early Access, Larian Studios pulió cada aspecto del juego con la ayuda de la comunidad. El proyecto involucró más de 2.5 millones de palabras de diálogo y miles de variaciones según las decisiones del jugador."
        },
        companyId: "larian"
    },
    {
        id: "league-of-legends",
        title: "League of Legends",
        developer: "Riot Games",
        publisher: "Riot Games",
        genre: "MOBA",
        releaseDate: "2009-10-27",
        description: {
            en: "League of Legends is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
            es: "League of Legends es un videojuego de arena de batalla en línea multijugador de 2009 desarrollado y publicado por Riot Games."
        },
        companyId: "riot",
        detailedHistory: {
            en: "Inspired by Defense of the Ancients (DotA), League of Legends became the catalyst for the global explosion of esports. Its diverse roster of 'Champions' and complex meta have made it one of the most played games in history.",
            es: "Inspirado en Defense of the Ancients (DotA), League of Legends fue el catalizador de la explosión global de los esports. Su diverso elenco de 'Campeones' y su complejo meta lo han convertido en uno de los juegos más jugados de la historia."
        },
        development: {
            en: "Developed by Riot Games, the game was designed to be a more accessible version of DotA. It popularized the 'Free-to-Play' model in the West, relying on cosmetic purchases rather than power-based microtransactions.",
            es: "Desarrollado por Riot Games, el juego fue diseñado para ser una versión más accesible de DotA. Popularizó el modelo 'Free-to-Play' en Occidente, basándose en compras cosméticas en lugar de microtransacciones de poder."
        }
    },
    {
        id: "counter-strike",
        title: "Counter-Strike: Global Offensive",
        developer: "Valve",
        publisher: "Valve",
        genre: "First-person shooter",
        releaseDate: "2012-08-21",
        description: {
            en: "Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment.",
            es: "Counter-Strike: Global Offensive (CS:GO) es un videojuego de disparos en primera persona multijugador desarrollado por Valve y Hidden Path Entertainment."
        },
        companyId: "valve",
        detailedHistory: {
            en: "CS:GO is the most popular iteration of the tactical shooter that started as a Half-Life mod. It is known for its high skill ceiling, precision gunplay, and one of the largest and most stable competitive scenes in the world.",
            es: "CS:GO es la iteración más popular del shooter táctico que comenzó como un mod de Half-Life. Es conocido por su alto techo de habilidad, gunplay de precisión y una de las escenas competitivas más grandes y estables del mundo."
        },
        development: {
            en: "Developed by Valve in collaboration with Hidden Path Entertainment. It initially had a rocky launch on consoles and PC, but Valve's commitment to the 'Skins' economy and constant balancing updates turned it into a massive success.",
            es: "Desarrollado por Valve en colaboración con Hidden Path Entertainment. Inicialmente tuvo un lanzamiento difícil, pero el compromiso de Valve con la economía de las 'Skins' y las actualizaciones de equilibrio lo convirtieron en un éxito masivo."
        }
    },
    {
        id: "apex-legends",
        title: "Apex Legends",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        genre: "Battle royale, hero shooter",
        releaseDate: "2019-02-04",
        description: {
            en: "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
            es: "Apex Legends es un videojuego gratuito de disparos de héroes y battle royale desarrollado por Respawn Entertainment y publicado por Electronic Arts."
        },
        companyId: "respawn",
        detailedHistory: {
            en: "Set in the Titanfall universe, Apex Legends surprised the world with its 'shadow drop' release. It introduced the 'Ping' system, which revolutionized communication in multiplayer games without the need for voice chat.",
            es: "Ambientado en el universo de Titanfall, Apex Legends sorprendió al mundo con su lanzamiento sorpresa. Introdujo el sistema de 'Ping', que revolucionó la comunicación en juegos multijugador sin necesidad de chat de voz."
        },
        development: {
            en: "Developed by Respawn Entertainment, the game was built using a modified version of the Source engine. The team focused on 'Hero' abilities to add a tactical layer to the Battle Royale genre, ensuring each character felt unique and impactful.",
            es: "Desarrollado por Respawn Entertainment, el juego se construyó usando una versión modificada del motor Source. El equipo se centró en las habilidades de 'Héroe' para añadir una capa táctica al género Battle Royale."
        }
    },
    {
        id: "starfield",
        title: "Starfield",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        genre: "Action role-playing",
        releaseDate: "2023-09-06",
        description: {
            en: "Starfield is an action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. In this next-generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
            es: "Starfield es un videojuego de rol de acción desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. En este juego de rol de próxima generación ambientado entre las estrellas, crea el personaje que quieras y explora con una libertad sin precedentes."
        },
        companyId: "bethesda",
        detailedHistory: {
            en: "Bethesda's first new universe in 25 years, Starfield is a space exploration RPG of massive proportions. It allows players to visit over 1,000 planets, build their own starships, and uncover the mysteries of the artifacts.",
            es: "El primer universo nuevo de Bethesda en 25 años, Starfield es un RPG de exploración espacial de proporciones masivas. Permite a los jugadores visitar más de 1.000 planetas, construir sus propias naves espaciales y descubrir los misterios de los artefactos."
        },
        development: {
            en: "The game used the Creation Engine 2, which allowed for improved lighting, animations, and the generation of procedural planets. Todd Howard described the game as 'Skyrim in space', focusing on the sense of wonder and player agency.",
            es: "El juego utilizó el Creation Engine 2, que permitió mejoras en iluminación, animaciones y la generación de planetas procedimentales. Todd Howard describió el juego como 'Skyrim en el espacio'."
        }
    },
    {
        id: "alan-wake-2",
        title: "Alan Wake 2",
        developer: "Remedy Entertainment",
        publisher: "Epic Games Publishing",
        genre: "Survival horror",
        releaseDate: "2023-10-27",
        description: {
            en: "Alan Wake 2 is a survival horror game developed by Remedy Entertainment and published by Epic Games Publishing. The sequel to Alan Wake, the story follows best-selling thriller novelist Alan Wake.",
            es: "Alan Wake 2 es un videojuego de terror y supervivencia desarrollado por Remedy Entertainment y publicado por Epic Games Publishing. Secuela de Alan Wake, la historia sigue al novelista de suspenso Alan Wake."
        },
        companyId: "remedy",
        detailedHistory: {
            en: "After 13 years, the story of the writer trapped in the Dark Place continued as a full survival horror experience. It weaves two parallel narratives: Alan's attempts to write his escape and Saga Anderson's FBI investigation in Bright Falls.",
            es: "Después de 13 años, la historia del escritor atrapado en el Lugar Oscuro continuó como una experiencia de horror de supervivencia pura. Entrelaza dos narrativas paralelas: los intentos de Alan por escribir su escape y la investigación del FBI de Saga Anderson."
        },
        development: {
            en: "Remedy Entertainment used their proprietary Northlight engine to create some of the most impressive lighting and character models in the industry. The game also features live-action sequences that blend seamlessly with the gameplay.",
            es: "Remedy Entertainment utilizó su motor Northlight para crear algunos de los modelos de personajes e iluminación más impresionantes de la industria. El juego también cuenta con secuencias de acción real (live-action)."
        }
    },
    {
        id: "control",
        title: "Control",
        developer: "Remedy Entertainment",
        publisher: "505 Games",
        genre: "Action-adventure",
        releaseDate: "2019-08-27",
        description: {
            en: "Control is an action-adventure video game developed by Remedy Entertainment and published by 505 Games. The game revolves around the Federal Bureau of Control (FBC).",
            es: "Control es un videojuego de acción y aventura desarrollado por Remedy Entertainment y publicado por 505 Games. El juego gira en torno a la Oficina Federal de Control (FBC)."
        },
        companyId: "remedy",
        detailedHistory: {
            en: "Set in the Oldest House, a shifting headquarters for the Federal Bureau of Control, the game follows Jesse Faden as she battles the Hiss. It is part of the 'Remedy Connected Universe' and features deep supernatural lore.",
            es: "Ambientado en la 'Casa más Antigua', la sede cambiante para la Oficina Federal de Control, el juego sigue a Jesse Faden mientras lucha contra el Hiss. Es parte del 'Universo Conectado de Remedy' y presenta un profundo lore sobrenatural."
        },
        development: {
            en: "Developed by Remedy, Control focused on physics-driven environments. Almost every object in a room can be shattered or moved using Jesse's telekinetic powers, creating dynamic and chaotic combat encounters.",
            es: "Desarrollado por Remedy, Control se centró en entornos impulsados por la física. Casi cualquier objeto en una habitación puede ser destrozado o movido usando los poderes telequinéticos de Jesse."
        }
    },
    {
        id: "dishonored-2",
        title: "Dishonored 2",
        developer: "Arkane Studios",
        publisher: "Bethesda Softworks",
        genre: "Action-adventure, stealth",
        releaseDate: "2016-11-11",
        description: {
            en: "Dishonored 2 is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. The sequel to 2012's Dishonored.",
            es: "Dishonored 2 es un videojuego de acción y aventura y sigilo desarrollado por Arkane Studios y publicado por Bethesda Softworks. Secuela de Dishonored de 2012."
        },
        companyId: "arkane",
        detailedHistory: {
            en: "Set 15 years after the first game, players choose between Corvo Attano or Emily Kaldwin as they seek to reclaim the throne. It is a pinnacle of the 'Immersive Sim' genre, offering endless ways to complete objectives.",
            es: "Ambientado 15 años después del primer juego, los jugadores eligen entre Corvo Attano o Emily Kaldwin para recuperar el trono. Es un pináculo del género 'Immersive Sim', ofreciendo infinitas formas de completar objetivos."
        },
        development: {
            en: "Arkane Studios moved from Unreal Engine to the 'Void Engine' (based on id Tech 5) to better suit their art style and complex level design. The 'Clockwork Mansion' level is often cited as a masterpiece of environmental engineering.",
            es: "Arkane Studios pasó del Unreal Engine al 'Void Engine' para adaptarse mejor a su estilo artístico y complejo diseño de niveles. El nivel de la 'Mansión Mecánica' es citado a menudo como una obra maestra."
        }
    },
    {
        id: "uncharted-4",
        title: "Uncharted 4: A Thief's End",
        developer: "Naughty Dog",
        publisher: "Sony Computer Entertainment",
        genre: "Action-adventure",
        releaseDate: "2016-05-10",
        description: {
            en: "Uncharted 4: A Thief's End es an action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.",
            es: "Uncharted 4: A Thief's End es un videojuego de acción y aventura desarrollado por Naughty Dog y publicado por Sony Computer Entertainment."
        },
        companyId: "sony",
        detailedHistory: {
            en: "The final chapter of Nathan Drake's adventures, focusing on his relationship with his long-lost brother Sam. It is celebrated for its emotional maturity, breathtaking set pieces, and beautiful environments.",
            es: "El capítulo final de las aventuras de Nathan Drake, centrado en su relación con su hermano perdido Sam. Es celebrado por su madurez emocional, escenas de acción impresionantes y entornos hermosos."
        },
        development: {
            en: "Naughty Dog pushed the PlayStation 4 to its limits, using advanced lighting and physics. The project saw a change in leadership during development, with Neil Druckmann and Bruce Straley taking over to deliver a more character-focused story.",
            es: "Naughty Dog llevó el PlayStation 4 a sus límites, usando iluminación y físicas avanzadas. El proyecto vio un cambio en el liderazgo durante el desarrollo, con Neil Druckmann y Bruce Straley al mando."
        }
    },
    {
        id: "bloodborne",
        title: "Bloodborne",
        developer: "FromSoftware",
        publisher: "Sony Computer Entertainment",
        genre: "Action role-playing",
        releaseDate: "2015-03-24",
        description: {
            en: "Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4.",
            es: "Bloodborne es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Sony Computer Entertainment para PlayStation 4."
        },
        detailedHistory: {
            en: "A gothic masterpiece that moved away from the defensive combat of 'Dark Souls' in favor of high-speed, aggressive action. Its world of Yharnam is a haunting blend of Victorian architecture and Lovecraftian cosmic horror.",
            es: "Una obra maestra gótica que se alejó del combate defensivo de 'Dark Souls' en favor de una acción rápida y agresiva. Su mundo de Yharnam es una mezcla inquietante de arquitectura victoriana y horror cósmico lovecraftiano."
        },
        development: {
            en: "Directed by Hidetaka Miyazaki, the development was a collaboration between FromSoftware and Sony's Japan Studio. The team focused on the concept of 'blood' as a central theme, both in gameplay mechanics and narrative mystery.",
            es: "Dirigido por Hidetaka Miyazaki, el desarrollo fue una colaboración entre FromSoftware y Japan Studio de Sony. El equipo se centró en el concepto de la 'sangre' como tema central."
        },
        companyId: "fromsoftware"
    },
    {
        id: "sekiro",
        title: "Sekiro: Shadows Die Twice",
        developer: "FromSoftware",
        publisher: "Activision",
        genre: "Action-adventure",
        releaseDate: "2019-03-22",
        description: {
            en: "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware and published by Activision for PlayStation 4, Xbox One, and Windows.",
            es: "Sekiro: Shadows Die Twice es un videojuego de acción y aventura desarrollado por FromSoftware y publicado por Activision para PlayStation 4, Xbox One y Windows."
        },
        detailedHistory: {
            en: "Sekiro redefined combat in action games with its 'posture' system, emphasizing clashing blades and precision parrying over traditional health bars. It tells a grounded story of a shinobi's loyalty in a reimagined Sengoku period.",
            es: "Sekiro redefinió el combate con su sistema de 'postura', enfatizando el choque de espadas y los parries de precisión. Cuenta una historia realista sobre la lealtad de un shinobi en un período Sengoku reinventado."
        },
        development: {
            en: "Directed by Hidetaka Miyazaki, the project was originally conceived as a new entry in the 'Tenchu' series. The team eventually decided to create a new IP to better explore the unique traversal mechanics provided by the shinobi's prosthetic arm.",
            es: "Dirigido por Hidetaka Miyazaki, el proyecto se concibió originalmente como una nueva entrega de la serie 'Tenchu'. El equipo decidió crear una nueva IP para explorar mejor las mecánicas de movimiento del brazo protésico."
        },
        companyId: "fromsoftware"
    },
    {
        id: "hades",
        title: "Hades",
        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        genre: "Roguelike, action role-playing",
        releaseDate: "2020-09-17",
        description: {
            en: "Hades is a roguelike action role-playing game developed and published by Supergiant Games. Players control Zagreus, the prince of the Underworld.",
            es: "Hades es un videojuego de rol de acción y exploración de mazmorras desarrollado y publicado por Supergiant Games. Los jugadores controlan a Zagreo, el príncipe del Inframundo."
        },
        detailedHistory: {
            en: "Hades revolutionized the roguelike genre by seamlessly weaving narrative progression into the 'die-and-repeat' gameplay loop. It features a diverse cast of Greek gods and a deeply personal story about family and belonging.",
            es: "Hades revolucionó el género roguelike al entrelazar la progresión narrativa con el bucle de juego de 'morir y repetir'. Presenta un elenco diverso de dioses griegos y una historia personal sobre la familia y la pertenencia."
        },
        development: {
            en: "Supergiant Games utilized an Early Access model on the Epic Games Store and Steam to gather player feedback and iteratively build the game. This collaborative process resulted in a perfectly balanced combat system and an incredibly reactive story.",
            es: "Supergiant Games utilizó un modelo de Early Access para recopilar comentarios de los jugadores y construir el juego de forma iterativa. Este proceso resultó en un sistema de combate perfectamente equilibrado y una historia increíblemente reactiva."
        },
        companyId: "supergiant",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1145360/Hades/" },
            { name: "Epic Games", url: "https://store.epicgames.com/en-US/p/hades" }
        ],
    },
    {
        id: "celeste",
        title: "Celeste",
        developer: "Maddy Makes Games",
        publisher: "Maddy Makes Games",
        genre: "Platform",
        releaseDate: "2018-01-25",
        description: {
            en: "Celeste is a 2018 platform game developed and published by Maddy Makes Games. The player controls Madeline, a young woman who sets out to climb Mount Celeste.",
            es: "Celeste es un videojuego de plataformas de 2018 desarrollado y publicado por Maddy Makes Games. El jugador controla a Madeline, una joven que se propone escalar el Monte Celeste."
        },
        detailedHistory: {
            en: "A challenging precision platformer that doubles as a profound exploration of mental health. Celeste's narrative about overcoming anxiety and self-doubt resonated with millions, while its tight controls set a new standard for the genre.",
            es: "Un desafiante plataformas de precisión que funciona también como una profunda exploración de la salud mental. La narrativa de Celeste sobre la superación de la ansiedad y la duda resonó en millones de personas."
        },
        development: {
            en: "Developed by Maddy Thorson and Noel Berry, the game began as a prototype made in four days during a game jam (Celeste Classic). The full game expanded on these mechanics, focusing on accessibility through its 'Assist Mode' while maintaining its high difficulty.",
            es: "Desarrollado por Maddy Thorson y Noel Berry, el juego comenzó como un prototipo hecho en cuatro días durante una game jam. El juego completo expandió estas mecánicas, centrándose en la accesibilidad a través de su 'Modo Asistencia'."
        },
        companyId: "maddymakesgames"
    },
    {
        id: "portal-2",
        title: "Portal 2",
        developer: "Valve",
        publisher: "Valve",
        genre: "Puzzle-platform",
        releaseDate: "2011-04-18",
        description: {
            en: "Portal 2 is a first-person puzzle-platform video game developed and published by Valve. It is the sequel to the 2007 video game Portal.",
            es: "Portal 2 es un videojuego de rompecabezas y plataformas en primera persona desarrollado y publicado por Valve. Es la secuela del videojuego Portal de 2007."
        },
        detailedHistory: {
            en: "Portal 2 expanded the original's bite-sized concept into a full-length cinematic adventure. It explored the history of Aperture Science and introduced iconic characters like Wheatley and Cave Johnson, all while deepening the portal mechanics with new gels and elements.",
            es: "Portal 2 expandió el concepto del original en una aventura cinematográfica completa. Exploró la historia de Aperture Science e introdujo personajes icónicos como Wheatley y Cave Johnson, profundizando en las mecánicas de portales."
        },
        development: {
            en: "Valve focused on creating a more robust narrative and a dedicated co-op campaign. The writers, including Erik Wolpaw and Jay Pinkerton, crafted a script that is widely considered one of the funniest and most engaging in gaming history.",
            es: "Valve se centró en crear una narrativa más robusta y una campaña cooperativa dedicada. Los guionistas crearon un guion que es ampliamente considerado como uno de los más divertidos y atractivos de la historia."
        },
        companyId: "valve"
    },
    {
        id: "dota-2",
        title: "Dota 2",
        developer: "Valve",
        publisher: "Valve",
        genre: "MOBA",
        releaseDate: "2013-07-09",
        description: {
            en: "Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. It is a sequel to Defense of the Ancients (DotA).",
            es: "Dota 2 es un videojuego de arena de batalla en línea multijugador (MOBA) desarrollado y publicado por Valve. Es una secuela de Defense of the Ancients (DotA)."
        },
        companyId: "valve",
        detailedHistory: {
            en: "Dota 2 began as the official standalone sequel to the Warcraft III mod Defense of the Ancients. It has the largest prize pools in esports history, with The International tournament setting records annually.",
            es: "Dota 2 comenzó como la secuela independiente oficial del mod de Warcraft III Defense of the Ancients. Tiene los premios más grandes de la historia de los esports, con el torneo The International rompiendo récords anualmente."
        },
        development: {
            en: "Development was led by IceFrog, the anonymous lead designer of the original mod, who was hired by Valve. The game runs on the Source 2 engine, being one of the first Valve titles to fully migrate to the new technology.",
            es: "El desarrollo fue liderado por IceFrog, el diseñador principal anónimo del mod original, quien fue contratado por Valve. El juego corre en el motor Source 2, siendo uno de los primeros títulos de Valve en migrar completamente a la nueva tecnología."
        }
    },
    {
        id: "fortnite",
        title: "Fortnite",
        developer: "Epic Games",
        publisher: "Epic Games",
        genre: "Battle royale, survival",
        releaseDate: "2017-07-21",
        description: {
            en: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine.",
            es: "Fortnite es un videojuego en línea desarrollado por Epic Games y lanzado en 2017. Está disponible en tres versiones de modo de juego distintas que, por lo demás, comparten la misma jugabilidad general y el mismo motor de juego."
        },
        companyId: "epic",
        detailedHistory: {
            en: "Starting as a co-op survival game, Fortnite explosion in popularity with its Battle Royale mode. It became a cultural phenomenon, hosting virtual concerts and partnering with major franchises.",
            es: "Comenzando como un juego de supervivencia cooperativo, Fortnite explotó en popularidad con su modo Battle Royale. Se convirtió en un fenómeno cultural, organizando conciertos virtuales."
        },
        development: {
            en: "Epic Games rapidly pivoted to Battle Royale after seeing the success of PUBG. Its unique building mechanic sets it apart, allowing players to construct cover and structures on the fly.",
            es: "Epic Games pivotó rápidamente a Battle Royale tras ver el éxito de PUBG. Su mecánica de construcción única lo distingue, permitiendo a los jugadores construir coberturas al vuelo."
        }
    },
    {
        id: "valorant",
        title: "Valorant",
        developer: "Riot Games",
        publisher: "Riot Games",
        genre: "First-person hero shooter",
        releaseDate: "2020-06-02",
        description: {
            en: "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Windows.",
            es: "Valorant es un videojuego gratuito de disparos de héroes en primera persona desarrollado y publicado por Riot Games para Windows."
        },
        companyId: "riot",
        detailedHistory: {
            en: "Riot's entry into the tactical shooter genre combines the precise gunplay of CS:GO with unique character abilities. It emphasizes strategy and team coordination.",
            es: "La entrada de Riot en el género de shooters tácticos combina el gunplay preciso de CS:GO con habilidades de personajes únicas. Enfatiza la estrategia y la coordinación de equipo."
        },
        development: {
            en: "Developed by Riot Games under the codename 'Project A'. The team focused heavily on ensuring competitive integrity, including 128-tick servers and a sophisticated anti-cheat system called Vanguard.",
            es: "Desarrollado por Riot Games bajo el nombre en clave 'Project A'. El equipo se centró en asegurar la integridad competitiva, incluyendo servidores de 128 ticks y el sistema anti-cheat Vanguard."
        }
    },
    {
        id: "overwatch-2",
        title: "Overwatch 2",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        genre: "First-person hero shooter",
        releaseDate: "2022-10-04",
        description: {
            en: "Overwatch 2 is a 2022 first-person shooter developed and published by Blizzard Entertainment. As a sequel to the 2016 hero shooter Overwatch.",
            es: "Overwatch 2 es un videojuego de disparos en primera persona de 2022 desarrollado y publicado por Blizzard Entertainment. Como secuela del hero shooter de 2016, Overwatch."
        },
        companyId: "blizzard",
        detailedHistory: {
            en: "Overwatch 2 transitioned the series to a 5v5 format, removing one tank role to speed up gameplay. It continues the story of the reformed Overwatch team fighting against Null Sector.",
            es: "Overwatch 2 transicionó la serie a un formato 5v5, eliminando un rol de tanque para acelerar el juego. Continúa la historia del equipo Overwatch reformado luchando contra Null Sector."
        },
        development: {
            en: "Blizzard faced challenges in balancing the new format. The shift to a free-to-play model and a seasonal update structure was a major departure from the original game's designated hero releases.",
            es: "Blizzard enfrentó desafíos para equilibrar el nuevo formato. El cambio a un modelo free-to-play y una estructura de actualizaciones estacionales fue un gran cambio."
        }
    },
    {
        id: "diablo-iv",
        title: "Diablo IV",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        genre: "Action role-playing",
        releaseDate: "2023-06-05",
        description: {
            en: "Diablo IV is a 2023 action role-playing game developed and published by Blizzard Entertainment. It is the fourth main installment in the Diablo series.",
            es: "Diablo IV es un videojuego de rol de acción de 2023 desarrollado y publicado por Blizzard Entertainment. Es la cuarta entrega principal de la serie Diablo."
        },
        companyId: "blizzard",
        detailedHistory: {
            en: "Diablo IV returns to the darker, gothic tone of the first two games. It features a shared open world where players can encounter each other, tackle world bosses, and engage in PvP zones.",
            es: "Diablo IV vuelve al tono gótico y oscuro de los dos primeros juegos. Presenta un mundo abierto compartido donde los jugadores pueden encontrarse, enfrentar jefes mundiales y participar en zonas PvP."
        },
        development: {
            en: "The development focused on creating a 'macabre masterpiece'. Blizzard utilized a new engine to render the bleak world of Sanctuary with high-fidelity visuals and physics-based rendering.",
            es: "El desarrollo se centró en crear una 'obra maestra macabra'. Blizzard utilizó un nuevo motor para renderizar el sombrío mundo de Santuario."
        }
    },
    {
        id: "world-of-warcraft",
        title: "World of Warcraft",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        genre: "MMORPG",
        releaseDate: "2004-11-23",
        description: {
            en: "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.",
            es: "World of Warcraft (WoW) es un videojuego de rol multijugador masivo en línea (MMORPG) lanzado en 2004 por Blizzard Entertainment."
        },
        companyId: "blizzard",
        detailedHistory: {
            en: "The definitve MMORPG that defined the genre for dozens of millions of players. WoW's rich lore, based on the Warcraft RTS games, spans over two decades of expansions and evolving storylines.",
            es: "El MMORPG definitivo que definió el género para docenas de millones de jugadores. El rico lore de WoW abarca más de dos décadas de expansiones e historias en evolución."
        },
        development: {
            en: "Blizzard spent years developing WoW, inspired by EverQuest but aiming for a more accessible interface. Its release in 2004 shattered sales records and it remains one of the highest-grossing games of all time.",
            es: "Blizzard pasó años desarrollando WoW, inspirado en EverQuest pero buscando una interfaz más accesible. Su lanzamiento en 2004 rompió récords de ventas."
        }
    },
    {
        id: "star-wars-jedi-survivor",
        title: "Star Wars Jedi: Survivor",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        genre: "Action-adventure",
        releaseDate: "2023-04-28",
        description: {
            en: "Star Wars Jedi: Survivor is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. A sequel to Star Wars Jedi: Fallen Order.",
            es: "Star Wars Jedi: Survivor es un videojuego de acción y aventura desarrollado por Respawn Entertainment y publicado por Electronic Arts. Secuela de Star Wars Jedi: Fallen Order."
        },
        companyId: "respawn",
        detailedHistory: {
            en: "Survivor expands on Cal Kestis' journey as a more mature Jedi Knight. It features larger, more open maps to explore and introduces new lightsaber stances, including a crossguard and blaster hybrid.",
            es: "Survivor expande el viaje de Cal Kestis como un Caballero Jedi más maduro. Presenta mapas más grandes y abiertos e introduce nuevas posturas de sable de luz."
        },
        development: {
            en: "Respawn Entertainment built upon the foundation of Fallen Order, focusing on player freedom. They utilized the power of current-gen consoles to eliminate loading times and create vast, detailed environments.",
            es: "Respawn Entertainment construyó sobre la base de Fallen Order, centrándose en la libertad del jugador. Utilizaron la potencia de las consolas de generación actual."
        }
    },
    {
        id: "dead-space-remake",
        title: "Dead Space (Remake)",
        developer: "Motive Studio",
        publisher: "Electronic Arts",
        genre: "Survival horror",
        releaseDate: "2023-01-27",
        description: {
            en: "Dead Space is a survival horror game developed by Motive Studio and published by Electronic Arts. A remake of the 2008 game of the same name.",
            es: "Dead Space es un videojuego de terror y supervivencia desarrollado por Motive Studio y publicado por Electronic Arts. Un remake del juego de 2008 del mismo nombre."
        },
        companyId: "ea",
        detailedHistory: {
            en: "A ground-up remake of the 2008 classic. It follows Isaac Clarke on the USG Ishimura, adding a voiced protagonist and a seamless ship layout to the original's terrifying atmosphere.",
            es: "Un remake desde cero del clásico de 2008. Sigue a Isaac Clarke en la USG Ishimura, añadiendo un protagonista con voz y un diseño de nave sin interrupciones a la atmósfera original."
        },
        development: {
            en: "Motive Studio built the game in the Frostbite engine, introducing the 'Peeling System' for more realistic necromorph dismemberment. They also added the 'Intensity Director' to dynamically manage scares and atmosphere.",
            es: "Motive Studio construyó el juego en Frostbite, introduciendo el 'Peeling System' para un desmembramiento más realista. También añadieron el 'Intensity Director' para gestionar sustos dinámicamente."
        }
    },
    {
        id: "tomb-raider-2013",
        title: "Tomb Raider (2013)",
        developer: "Crystal Dynamics",
        publisher: "Square Enix",
        genre: "Action-adventure",
        releaseDate: "2013-03-05",
        description: {
            en: "Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix. It is the tenth title in the Tomb Raider franchise.",
            es: "Tomb Raider es un videojuego de acción y aventura desarrollado por Crystal Dynamics y publicado por Square Enix. Es el décimo título de la franquicia Tomb Raider."
        },
        companyId: "crystaldynamics",
        detailedHistory: {
            en: "This reboot reinvented Lara Croft from a confident superhero into a survivor. It explores her origins on the lost island of Yamatai, emphasizing grit, physical vulnerability, and character growth.",
            es: "Este reinicio reinventó a Lara Croft de una superheroína confiada a una superviviente. Explora sus orígenes en la isla perdida de Yamatai, enfatizando la determinación y la vulnerabilidad física."
        },
        development: {
            en: "Crystal Dynamics focused on 'survival action', utilizing motion capture for a more realistic and emotional performance by Camilla Luddington. The 'TressFX' technology was a landmark for realistic hair rendering in games.",
            es: "Crystal Dynamics se centró en la 'acción de supervivencia', utilizando captura de movimiento para una actuación más realista. La tecnología 'TressFX' fue un hito para el renderizado de pelo."
        },
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rbu.webp"
    },
    {
        id: "assassins-creed-valhalla",
        title: "Assassin's Creed Valhalla",
        developer: "Ubisoft Montreal",
        publisher: "Ubisoft",
        genre: "Action role-playing",
        releaseDate: "2020-11-10",
        description: {
            en: "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.",
            es: "Assassin's Creed Valhalla es un videojuego de rol de acción de 2020 desarrollado por Ubisoft Montreal y publicado por Ubisoft."
        },
        companyId: "ubisoft",
        detailedHistory: {
            en: "Valhalla takes the series to the Viking Age, following Eivor during the invasion of England. It continues the RPG formula of Origins and Odyssey but brings back social stealth and the hidden blade.",
            es: "Valhalla lleva la serie a la Era Vikinga, siguiendo a Eivor durante la invasión de Inglaterra. Continúa la fórmula RPG de Origins y Odyssey pero recupera el sigilo social y la hoja oculta."
        },
        development: {
            en: "Ubisoft Montreal led the development with support from 14 other studios. The team consulted with historians to accurately portray Viking society, debunking myths while maintaining the series' sci-fi elements.",
            es: "Ubisoft Montreal lideró el desarrollo con el apoyo de otros 14 estudios. El equipo consultó con historiadores para retratar con precisión la sociedad vikinga."
        }
    },
    {
        id: "far-cry-6",
        title: "Far Cry 6",
        developer: "Ubisoft Toronto",
        publisher: "Ubisoft",
        genre: "First-person shooter",
        releaseDate: "2021-10-07",
        description: {
            en: "Far Cry 6 is a first-person shooter game developed by Ubisoft Toronto and published by Ubisoft. It is the sixth main installment in the Far Cry series.",
            es: "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry."
        },
        companyId: "ubisoft",
        detailedHistory: {
            en: "Set on the fictional Caribbean island of Yara, players lead a revolution against the dictator Antón Castillo (Giancarlo Esposito). It introduced 'Supremo' backpacks and 'Resolver' weapons.",
            es: "Ambientado en la isla ficticia de Yara, los jugadores lideran una revolución contra Antón Castillo (Giancarlo Esposito). Introdujo mochilas 'Supremo' y armas 'Resolver'."
        },
        development: {
            en: "Ubisoft Toronto worked with Giancarlo Esposito to bring a high-profile cinematic feel to the antagonist. The team focused on the 'modern guerrilla' theme, encouraging players to use improvised tools.",
            es: "Ubisoft Toronto trabajó con Giancarlo Esposito para dar un toque cinematográfico al antagonista. El equipo se centró en el tema de la 'guerrilla moderna'."
        }
    },
    {
        id: "resident-evil-village",
        title: "Resident Evil Village",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Survival horror",
        releaseDate: "2021-05-07",
        description: {
            en: "Resident Evil Village is a survival horror game developed and published by Capcom. It is the sequel to Resident Evil 7: Biohazard.",
            es: "Resident Evil Village es un videojuego de terror y supervivencia desarrollado y publicado por Capcom. Es la secuela de Resident Evil 7: Biohazard."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "Continuing Ethan Winters' story, Village moves the action to a remote European settlement. It blends the survival horror of RE7 with the more action-oriented pacing of RE4.",
            es: "Continuando la historia de Ethan Winters, Village traslada la acción a un remoto asentamiento europeo. Mezcla el horror de RE7 con el ritmo de acción de RE4."
        },
        development: {
            en: "Developed using the RE Engine, the game focused on 'beauty and horror' (Utsukushiki Kyofu). The team aimed to create a 'theme park' of horror, with each area representing a different subgenre.",
            es: "Desarrollado con el RE Engine, el juego se centró en la 'belleza y el horror'. El equipo buscó crear un 'parque temático' del terror, con cada área representando un subgénero diferente."
        }
    },
    {
        id: "street-fighter-6",
        title: "Street Fighter 6",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Fighting",
        releaseDate: "2023-06-02",
        description: {
            en: "Street Fighter 6 is a fighting game developed and published by Capcom. It is the seventh main entry in the Street Fighter franchise.",
            es: "Street Fighter 6 es un videojuego de lucha desarrollado y publicado por Capcom. Es la séptima entrega principal de la franquicia Street Fighter."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "SF6 revitalized the fighting game franchise with its 'World Tour' single-player mode and the 'Drive System' mechanics. It aims to be the most accessible entry in the series.",
            es: "SF6 revitalizó la franquicia de lucha con su modo de un solo jugador 'World Tour' y las mecánicas del 'Drive System'. Busca ser la entrega más accesible de la serie."
        },
        development: {
            en: "Using the RE Engine for the first time in the series, Capcom created a distinct urban, graffiti-inspired aesthetic. The team introduced 'Modern' controls to help newcomers perform complex moves.",
            es: "Usando el RE Engine por primera vez en la serie, Capcom creó una estética urbana inspirada en el graffiti. El equipo introdujo los controles 'Modernos' para ayudar a los recién llegados."
        }
    },
    {
        id: "devil-may-cry-5",
        title: "Devil May Cry 5",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Action-adventure, hack and slash",
        releaseDate: "2019-03-08",
        description: {
            en: "Devil May Cry 5 is an action-adventure hack and slash video game developed and published by Capcom. It is the fifth main installment in the Devil May Cry series.",
            es: "Devil May Cry 5 es un videojuego de acción y aventura, hack and slash desarrollado y publicado por Capcom. Es la quinta entrega principal de la serie Devil May Cry."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "The legendary action series returned with three playable characters: Nero, Dante, and the mysterious V. It is a masterclass in stylish, high-speed combat.",
            es: "La legendaria serie de acción regresó con tres personajes jugables: Nero, Dante y el misterioso V. Es una clase magistral de combate elegante y de alta velocidad."
        },
        development: {
            en: "Directed by Hideaki Itsuno, the game used the RE Engine to achieve photorealistic visuals. The team focused on the concept of 'Stylish Action', ensuring that every combo felt rewarding.",
            es: "Dirigido por Hideaki Itsuno, el juego usó el RE Engine para lograr visuales fotorrealistas. El equipo se centró en el concepto de 'Stylish Action', asegurando que cada combo fuera espectacular."
        }
    },
    {
        id: "monster-hunter-world",
        title: "Monster Hunter: World",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Action role-playing",
        releaseDate: "2018-01-26",
        description: {
            en: "Monster Hunter: World is an action role-playing game developed and published by Capcom and is the fifth main installment of the Monster Hunter series.",
            es: "Monster Hunter: World es un videojuego de rol de acción desarrollado y publicado por Capcom y es la quinta entrega principal de la serie Monster Hunter."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "World brought the Monster Hunter franchise to a global mainstream audience. It removed the loading screens between zones and introduced a living, breathing ecosystem.",
            es: "World llevó la franquicia Monster Hunter a una audiencia global masiva. Eliminó las pantallas de carga entre zonas e introdujo un ecosistema vivo."
        },
        development: {
            en: "Capcom focused on accessibility without sacrificing depth. The team used the power of modern consoles to create high-density environments and complex AI behaviors for the monsters.",
            es: "Capcom se centró en la accesibilidad sin sacrificar la profundidad. El equipo usó la potencia de las consolas modernas para crear entornos de alta densidad e IA compleja."
        }
    },
    {
        id: "persona-5",
        title: "Persona 5 Royal",
        developer: "Atlus",
        publisher: "Sega",
        genre: "Role-playing, social simulation",
        releaseDate: "2019-10-31",
        description: {
            en: "Persona 5 Royal is an enhanced version of the original Persona 5. Players follow a high school student who lives out a year while attending high school in Tokyo.",
            es: "Persona 5 Royal es una versión mejorada del Persona 5 original. Los jugadores siguen a un estudiante de secundaria que vive un año mientras asiste a la escuela en Tokio."
        },
        companyId: "atlus",
        detailedHistory: {
            en: "Royal is the definitive edition of Persona 5, adding a new semester, new characters like Kasumi Yoshizawa, and significant gameplay refinements. It is widely considered one of the greatest JRPGs of all time.",
            es: "Royal es la edición definitiva de Persona 5, añadiendo un nuevo semestre, personajes como Kasumi Yoshizawa y refinamientos jugables. Es considerado uno de los mejores JRPG de todos los tiempos."
        },
        development: {
            en: "The developers focused on fixing player complaints from the original game, improving the pacing of dungeons and giving players more free time. They also added the 'Thieves Den', a gallery mode celebrating the game's art and music.",
            es: "Los desarrolladores se centraron en corregir las quejas del juego original, mejorando el ritmo de las mazmorras. También añadieron la 'Guarida de los Ladrones', un modo galería."
        }
    },
    {
        id: "yakuza-0",
        title: "Yakuza 0",
        developer: "Sega",
        publisher: "Sega",
        genre: "Action-adventure",
        releaseDate: "2015-03-12",
        description: {
            en: "Yakuza 0 is an action-adventure game developed and published by Sega. It is a prequel to the Yakuza series.",
            es: "Yakuza 0 es un videojuego de acción y aventura desarrollado y publicado por Sega. Es una precuela de la serie Yakuza."
        },
        companyId: "sega",
        detailedHistory: {
            en: "A prequel set in 1988 Tokyo and Osaka, Yakuza 0 tells the origin stories of Kazuma Kiryu and Goro Majima. It is celebrated for its balance of a serious crime drama and bizarre side activities.",
            es: "Una precuela ambientada en 1988 en Tokio y Osaka, Yakuza 0 cuenta los orígenes de Kazuma Kiryu y Goro Majima. Es celebrado por su equilibrio entre drama criminal y actividades delirantes."
        },
        development: {
            en: "Sega used the game to revitalize interest in the series in the West. The dual-protagonist system and the detailed recreation of 1980s Japan's 'bubble economy' provided a fresh perspective on the long-running franchise.",
            es: "Sega usó el juego para revitalizar el interés por la serie en Occidente. El sistema de doble protagonista y la recreación del Japón de los 80 proporcionaron una perspectiva fresca."
        }
    },
    {
        id: "sonic-frontiers",
        title: "Sonic Frontiers",
        developer: "Sonic Team",
        publisher: "Sega",
        genre: "Platform, action-adventure",
        releaseDate: "2022-11-08",
        description: {
            en: "Sonic Frontiers is a 2022 platform game developed by Sonic Team and published by Sega. Players explore the mysterious Starfall Islands.",
            es: "Sonic Frontiers es un videojuego de plataformas de 2022 desarrollado por Sonic Team y publicado por Sega. Los jugadores exploran las misteriosas Islas Starfall."
        },
        companyId: "sega",
        detailedHistory: {
            en: "Sonic Frontiers reinvented the 3D Sonic formula with its 'Open-Zone' design, allowing for non-linear exploration. It introduced combat trees and puzzles, taking the series in a bold new direction.",
            es: "Sonic Frontiers reinventó la fórmula de Sonic en 3D con su diseño de 'Zona Abierta', permitiendo la exploración no lineal. Introdujo árboles de habilidades y puzles."
        },
        development: {
            en: "Sonic Team aimed to create a 'third generation' of Sonic games. They spent years iterating on how to make high-speed movement fun in an open environment without it feeling uncontrollable.",
            es: "Sonic Team buscó crear una 'tercera generación' de juegos de Sonic. Pasaron años iterando sobre cómo hacer divertido el movimiento a alta velocidad en un entorno abierto."
        }
    },
    {
        id: "tekken-8",
        title: "Tekken 8",
        developer: "Bandai Namco Studios",
        publisher: "Bandai Namco Entertainment",
        genre: "Fighting",
        releaseDate: "2024-01-26",
        description: {
            en: "Tekken 8 is a fighting game co-developed by Bandai Namco Studios and Arika and published by Bandai Namco Entertainment. It is the eighth main installment in the Tekken series.",
            es: "Tekken 8 es un videojuego de lucha codesarrollado por Bandai Namco Studios y Arika y publicado por Bandai Namco Entertainment. Es la octava entrega principal de la serie Tekken."
        },
        companyId: "bandainamco",
        detailedHistory: {
            en: "Physics-defying fights and a focus on aggression define Tekken 8. The new 'Heat System' rewards players for staying on the offensive, making matches faster and more spectator-friendly.",
            es: "Peleas que desafían la física y un enfoque en la agresión definen a Tekken 8. El nuevo 'Heat System' recompensa a los jugadores por mantenerse a la ofensiva."
        },
        development: {
            en: "Built on Unreal Engine 5, Tekken 8 features incredibly detailed character models with sweating and muscle deformation. Katsuhiro Harada emphasized that no assets were reused from Tekken 7.",
            es: "Construido en Unreal Engine 5, Tekken 8 presenta modelos de personajes increíblemente detallados. Katsuhiro Harada enfatizó que no se reutilizaron activos de Tekken 7."
        }
    },
    {
        id: "dark-souls-3",
        title: "Dark Souls III",
        developer: "FromSoftware",
        publisher: "Bandai Namco Entertainment",
        genre: "Action role-playing",
        releaseDate: "2016-03-24",
        description: {
            en: "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment. It is the final entry in the Dark Souls trilogy.",
            es: "Dark Souls III es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Es la entrega final de la trilogía Dark Souls."
        },
        companyId: "fromsoftware",
        detailedHistory: {
            en: "The conclusion to the Dark Souls trilogy combines the interconnected world design of the first game with the faster combat of Bloodborne. It is a fitting send-off to the Age of Fire.",
            es: "La conclusión de la trilogía Dark Souls combina el diseño de mundo interconectado del primer juego con el combate más rápido de Bloodborne. Es una despedida digna a la Edad del Fuego."
        },
        development: {
            en: "Miyazaki returned to direct this final entry. The team focused on 'apocalyptic beauty', creating a world that felt like it was literally collapsing in on itself as the fire faded.",
            es: "Miyazaki volvió a dirigir esta entrega final. El equipo se centró en la 'belleza apocalíptica', creando un mundo que parecía colapsar literalmente sobre sí mismo."
        }
    },
    {
        id: "stray",
        title: "Stray",
        developer: "BlueTwelve Studio",
        publisher: "Annapurna Interactive",
        genre: "Adventure",
        releaseDate: "2022-07-19",
        description: {
            en: "Stray is an adventure game developed by BlueTwelve Studio and published by Annapurna Interactive. The story follows a stray cat who falls into a walled city.",
            es: "Stray es un videojuego de aventura desarrollado por BlueTwelve Studio y publicado por Annapurna Interactive. La historia sigue a un gato callejero que cae en una ciudad amurallada."
        },
        companyId: "bluetwelve",
        detailedHistory: {
            en: "Stray captured hearts with its realistic cat protagonist and neon-soaked cyberpunk city. The game balances platforming and light puzzles with a touching story about companionship.",
            es: "Stray cautivó corazones con su protagonista gato realista y su ciudad ciberpunk de neón. El juego equilibra plataformas y puzles ligeros con una historia conmovedora sobre la compañía."
        },
        development: {
            en: "The developers at BlueTwelve Studio spent years observing their own cats to perfect the animations. The city was designed specifically to be vertically traversable by a feline.",
            es: "Los desarrolladores de BlueTwelve Studio pasaron años observando a sus propios gatos para perfeccionar las animaciones. La ciudad fue diseñada específicamente para ser transitable verticalmente por un felino."
        }
    },
    {
        id: "nier-automata",
        title: "NieR:Automata",
        developer: "PlatinumGames",
        publisher: "Square Enix",
        genre: "Action role-playing",
        releaseDate: "2017-02-23",
        description: {
            en: "NieR:Automata is a 2017 action role-playing game developed by PlatinumGames and published by Square Enix. It is a sequel to the 2010 video game Nier.",
            es: "NieR:Automata es un videojuego de rol de acción de 2017 desarrollado por PlatinumGames y publicado por Square Enix. Es una secuela del videojuego Nier de 2010."
        },
        companyId: "platinum",
        detailedHistory: {
            en: "A philosophical action RPG directed by Yoko Taro. It explores the meaning of humanity through the eyes of androids 2B and 9S, featuring a dynamic soundtrack and shifting gameplay genres.",
            es: "Un RPG de acción filosófico dirigido por Yoko Taro. Explora el significado de la humanidad a través de los ojos de los androides 2B y 9S, con una banda sonora dinámica."
        },
        development: {
            en: "A collaboration between Square Enix and PlatinumGames. Platinum brought their signature tight combat to Yoko Taro's unique storytelling, creating a game that is greater than the sum of its parts.",
            es: "Una colaboración entre Square Enix y PlatinumGames. Platinum aportó su combate característico a la narrativa única de Yoko Taro."
        }
    },
    {
        id: "metal-gear-rising",
        title: "Metal Gear Rising: Revengeance",
        developer: "PlatinumGames",
        publisher: "Konami",
        genre: "Action, hack and slash",
        releaseDate: "2013-02-19",
        description: {
            en: "Metal Gear Rising: Revengeance is an action game developed by PlatinumGames and produced by Kojima Productions. It is a spin-off in the Metal Gear series.",
            es: "Metal Gear Rising: Revengeance es un videojuego de acción desarrollado por PlatinumGames y producido por Kojima Productions. Es un spin-off de la serie Metal Gear."
        },
        companyId: "platinum",
        detailedHistory: {
            en: "A high-octane spin-off featuring Raiden. It introduced the 'Blade Mode' mechanic, allowing players to cut enemies and objects at any angle with surgical precision.",
            es: "Un spin-off de alto octanaje protagonizado por Raiden. Introdujo la mecánica 'Blade Mode', permitiendo a los jugadores cortar enemigos y objetos en cualquier ángulo."
        },
        development: {
            en: "Originally developed by Kojima Productions as 'Metal Gear Solid: Rising', it was cancelled and then revived by PlatinumGames. They retooled the game to focus on speed and aggression.",
            es: "Originalmente desarrollado por Kojima Productions, fue cancelado y luego revivido por PlatinumGames. Reestructuraron el juego para centrarse en la velocidad y la agresividad."
        }
    },
    {
        id: "skyrim-ae",
        title: "Skyrim Anniversary Edition",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        genre: "Action role-playing",
        releaseDate: "2021-11-11",
        description: {
            en: "Skyrim Anniversary Edition is a re-release of the 2011 game The Elder Scrolls V: Skyrim. It includes the base game and all official DLCs plus Creation Club content.",
            es: "Skyrim Anniversary Edition es un relanzamiento del juego de 2011 The Elder Scrolls V: Skyrim. Incluye el juego base y todos los DLC oficiales más contenido de Creation Club."
        },
        companyId: "bethesda",
        detailedHistory: {
            en: "Released to celebrate the game's 10th anniversary, this edition integrates mods from the Creation Club into the main game, including fishing, survival mode, and new questlines.",
            es: "Lanzada para celebrar el décimo aniversario, esta edición integra mods del Creation Club en el juego principal, incluyendo pesca, modo supervivencia y nuevas misiones."
        },
        development: {
            en: "The Anniversary Edition was designed to be the 'final' definitive version of Skyrim, bundling a decade of community-inspired content officially into the game.",
            es: "La Anniversary Edition fue diseñada para ser la versión definitiva 'final' de Skyrim, agrupando una década de contenido inspirado por la comunidad."
        }
    },
    {
        id: "hearthstone",
        title: "Hearthstone",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        genre: "Digital collectible card game",
        releaseDate: "2014-03-11",
        description: {
            en: "Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment.",
            es: "Hearthstone es un videojuego gratuito de cartas coleccionables digitales en línea desarrollado y publicado por Blizzard Entertainment."
        },
        companyId: "blizzard",
        detailedHistory: {
            en: "Based on the Warcraft lore, Hearthstone simplified the TCG genre for a digital audience. Its polished interface and 'mana' system became the template for almost every digital card game that followed.",
            es: "Basado en el lore de Warcraft, Hearthstone simplificó el género TCG para una audiencia digital. Su interfaz pulida y sistema de 'maná' se convirtieron en el modelo para casi todos los juegos de cartas digitales posteriores."
        },
        development: {
            en: "Developed by 'Team 5', a small experimental team within Blizzard. They aimed to create a game that could be played quickly and felt physical, with cards that had weight and impact.",
            es: "Desarrollado por el 'Team 5', un pequeño equipo experimental dentro de Blizzard. Buscaron crear un juego que se pudiera jugar rápido y se sintiera físico."
        }
    },
    {
        id: "battlefield-2042",
        title: "Battlefield 2042",
        developer: "DICE",
        publisher: "Electronic Arts",
        genre: "First-person shooter",
        releaseDate: "2021-10-06",
        description: {
            en: "Battlefield 2042 is a first-person shooter developed by DICE and published by Electronic Arts. It is the twelfth main installment in the Battlefield series.",
            es: "Battlefield 2042 es un videojuego de disparos en primera persona desarrollado por DICE y publicado por Electronic Arts. Es la duodécima entrega principal de la serie Battlefield."
        },
        companyId: "dice",
        detailedHistory: {
            en: "A multiplayer-only installment that aimed to double the player count to 128. It introduced the 'Portal' mode, allowing players to mix and match eras from previous Battlefield games.",
            es: "Una entrega solo multijugador que buscaba duplicar el número de jugadores a 128. Introdujo el modo 'Portal', permitiendo a los jugadores mezclar épocas de juegos anteriores de Battlefield."
        },
        development: {
            en: "Developed by DICE with support from multiple EA studios. The game faced technical challenges due to the scale of the maps and player count, leading to significant post-launch reworks.",
            es: "Desarrollado por DICE con el apoyo de múltiples estudios de EA. El juego enfrentó desafíos técnicos debido a la escala de los mapas y el número de jugadores."
        }
    },
    {
        id: "the-sims-4",
        title: "The Sims 4",
        developer: "Maxis",
        publisher: "Electronic Arts",
        genre: "Social simulation",
        releaseDate: "2014-09-02",
        description: {
            en: "The Sims 4 is a social simulation game developed by Maxis and published by Electronic Arts. It is the fourth major title in The Sims series.",
            es: "The Sims 4 es un videojuego de simulación social desarrollado por Maxis y publicado por Electronic Arts. Es el cuarto título principal de la serie Los Sims."
        },
        companyId: "maxis",
        detailedHistory: {
            en: "The Sims 4 focused on the emotions and personalities of the Sims. It streamlined the building tools and has been supported for nearly a decade with numerous expansions.",
            es: "Los Sims 4 se centró en las emociones y personalidades de los Sims. Simplificó las herramientas de construcción y ha sido apoyado durante casi una década con numerosas expansiones."
        },
        development: {
            en: "Maxis rebuilt the engine to run better on lower-end machines compared to The Sims 3. The 'SmartSim' technology allowed for better multitasking and group conversations.",
            es: "Maxis reconstruyó el motor para que funcionara mejor en máquinas de gama baja en comparación con Los Sims 3. La tecnología 'SmartSim' permitió una mejor multitarea."
        }
    },
    {
        id: "dragon-age-inquisition",
        title: "Dragon Age: Inquisition",
        developer: "BioWare",
        publisher: "Electronic Arts",
        genre: "Action role-playing",
        releaseDate: "2014-11-18",
        description: {
            en: "Dragon Age: Inquisition is an action role-playing game developed by BioWare and published by Electronic Arts. The third major game in the Dragon Age franchise.",
            es: "Dragon Age: Inquisition es un videojuego de rol de acción desarrollado por BioWare y publicado por Electronic Arts. El tercer juego principal de la franquicia Dragon Age."
        },
        companyId: "bioware",
        detailedHistory: {
            en: "Inquisition combined the tactical combat of Origins with the action of DA2. It won Game of the Year in 2014 for its massive semi-open world and political intrigue.",
            es: "Inquisition combinó el combate táctico de Origins con la acción de DA2. Ganó el Juego del Año en 2014 por su enorme mundo semiabierto e intriga política."
        },
        development: {
            en: "BioWare used the Frostbite engine for the first time in an RPG, which posed significant challenges. They focused on creating huge zones filled with content to answer criticisms of DA2's reused environments.",
            es: "BioWare usó el motor Frostbite por primera vez en un RPG, lo que planteó desafíos significativos. Se centraron en crear zonas enormes llenas de contenido."
        }
    },
    {
        id: "watch-dogs-2",
        title: "Watch Dogs 2",
        developer: "Ubisoft Montreal",
        publisher: "Ubisoft",
        genre: "Action-adventure",
        releaseDate: "2016-11-15",
        description: {
            en: "Watch Dogs 2 is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. The sequel to 2014's Watch Dogs.",
            es: "Watch Dogs 2 es un videojuego de acción y aventura desarrollado por Ubisoft Montreal y publicado por Ubisoft. Secuela de Watch Dogs de 2014."
        },
        companyId: "ubisoft",
        detailedHistory: {
            en: "Moving to San Francisco, Watch Dogs 2 adopted a lighter, more satirical tone. It emphasized player freedom, allowing missions to be completed via stealth, hacking, or combat.",
            es: "Trasladándose a San Francisco, Watch Dogs 2 adoptó un tono más ligero y satírico. Enfatizó la libertad del jugador, permitiendo completar misiones mediante sigilo, hackeo o combate."
        },
        development: {
            en: "Ubisoft Montreal consulted with real hackers to ensure the authenticity of the 'DedSec' culture. They improved the driving and parkour mechanics significantly over the first game.",
            es: "Ubisoft Montreal consultó con hackers reales para asegurar la autenticidad de la cultura 'DedSec'. Mejoraron significativamente las mecánicas de conducción y parkour."
        }
    },
    {
        id: "mortal-kombat-11",
        title: "Mortal Kombat 11",
        developer: "NetherRealm Studios",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Fighting",
        releaseDate: "2019-04-23",
        description: {
            en: "Mortal Kombat 11 is a fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment.",
            es: "Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment."
        },
        companyId: "netherrealm",
        detailedHistory: {
            en: "MK11 slowed down the pace of combat to focus on footsies and strategy. It features a cinematic story mode involving time travel and younger versions of classic characters meeting their older selves.",
            es: "MK11 ralentizó el ritmo del combate para centrarse en los 'footsies' y la estrategia. Presenta un modo historia cinematográfico que involucra viajes en el tiempo."
        },
        development: {
            en: "NetherRealm used a new custom graphics engine to deliver industry-leading facial animation. The 'Fatal Blow' mechanic was designed to give struggling players a chance to make a comeback.",
            es: "NetherRealm usó un nuevo motor gráfico personalizado para ofrecer animaciones faciales líderes en la industria. La mecánica 'Fatal Blow' fue diseñada para dar oportunidad de remontar."
        }
    },
    {
        id: "spider-man-ps4",
        title: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure",
        releaseDate: "2018-09-07",
        description: {
            en: "Marvel's Spider-Man is an action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.",
            es: "Marvel's Spider-Man es un videojuego de acción y aventura desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment."
        },
        companyId: "insomniac",
        detailedHistory: {
            en: "Insomniac delivered the definitive Spider-Man experience, mastering the feeling of web-swinging through Manhattan. The story is an original take on the Peter Parker mythos, balancing his dual life.",
            es: "Insomniac entregó la experiencia definitiva de Spider-Man, dominando la sensación de balancearse por Manhattan. La historia es una versión original del mito de Peter Parker."
        },
        development: {
            en: "The team focused heavily on 'traversal' as a core mechanic. They wanted the web-swinging to be accessible but have a high skill ceiling, allowing players to maintain momentum indefinitely.",
            es: "El equipo se centró mucho en el 'movimiento' como mecánica central. Querían que el balanceo fuera accesible pero con un alto techo de habilidad."
        }
    },
    {
        id: "death-stranding",
        title: "Death Stranding",
        developer: "Kojima Productions",
        publisher: "Sony Interactive Entertainment",
        genre: "Action",
        releaseDate: "2019-11-08",
        description: {
            en: "Death Stranding is an action game developed by Kojima Productions. It is the first game from director Hideo Kojima and his studio after their split from Konami.",
            es: "Death Stranding es un videojuego de acción desarrollado por Kojima Productions. Es el primer juego del director Hideo Kojima y su estudio tras su separación de Konami."
        },
        companyId: "kojimaprod",
        detailedHistory: {
            en: "A genre-defying 'strand game' about reconnecting a fractured society. Players take on the role of Sam Porter Bridges, traversing a post-apocalyptic America to deliver cargo and link isolated cities.",
            es: "Un 'juego de hilos' que desafía el género sobre reconectar una sociedad fracturada. Los jugadores asumen el papel de Sam Porter Bridges, atravesando una América postapocalíptica."
        },
        development: {
            en: "The first game from Hideo Kojima after leaving Konami. It features a star-studded cast including Norman Reedus and Mads Mikkelsen. The 'Social Strand System' allows players to help each other indirectly by building structures.",
            es: "El primer juego de Hideo Kojima tras dejar Konami. Cuenta con un elenco estelar. El 'Sistema de Hilo Social' permite a los jugadores ayudarse mutuamente de forma indirecta."
        }
    },
    {
        id: "rust",
        title: "Rust",
        developer: "Facepunch Studios",
        publisher: "Facepunch Studios",
        genre: "Survival",
        releaseDate: "2018-02-08",
        description: {
            en: "Rust is a multiplayer-only survival video game developed by Facepunch Studios. Players must survive in the wilderness.",
            es: "Rust es un videojuego de supervivencia solo multijugador desarrollado por Facepunch Studios. Los jugadores deben sobrevivir en la naturaleza."
        },
        companyId: "facepunch",
        detailedHistory: {
            en: "Rust is notorious for its brutal difficulty and emergent gameplay. Starting with a rock and a torch, players must gather resources, build bases, and defend against others in a persistent open world.",
            es: "Rust es notorio por su brutal dificultad y jugabilidad emergente. Comenzando con una roca y una antorcha, los jugadores deben reunir recursos, construir bases y defenderse."
        },
        development: {
            en: "Facepunch Studios originally created Rust as a clone of DayZ with Minecraft elements. Over a decade of development, it evolved into a distinct survival experience with regular monthly updates.",
            es: "Facepunch Studios creó originalmente Rust como un clon de DayZ con elementos de Minecraft. Tras una década de desarrollo, evolucionó hacia una experiencia de supervivencia distinta."
        }
    },
    {
        id: "undertale",
        title: "Undertale",
        developer: "Toby Fox",
        publisher: "Toby Fox",
        genre: "Role-playing",
        releaseDate: "2015-09-15",
        description: {
            en: "Undertale is a 2015 2D role-playing video game created by American indie developer Toby Fox. The player controls a child who has fallen into the Underground.",
            es: "Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. El jugador controla a un niño que ha caído al Subsuelo."
        },
        detailedHistory: {
            en: "Undertale disrupted the RPG genre with its 'mercy' system, allowing players to complete the game without killing a single enemy. Its meta-narrative and subversion of established gaming tropes earned it a cult following and critical acclaim for its writing and emotional impact.",
            es: "Undertale sacudió el género RPG con su sistema de 'merced', permitiendo a los jugadores completar el juego sin matar a un solo enemigo. Su meta-narrativa y subversión de los tropos establecidos en los videojuegos le valieron un seguimiento de culto y elogios de la crítica por su guion e impacto emocional."
        },
        development: {
            en: "Created by Toby Fox using GameMaker: Studio, the project was partially funded via Kickstarter. Fox composed the entire soundtrack, which gained massive popularity, while working with artist Temmie Chang on the game's unique visual style.",
            es: "Creado por Toby Fox usando GameMaker: Studio, el proyecto fue financiado parcialmente a través de Kickstarter. Fox compuso toda la banda sonora, que alcanzó una popularidad masiva, mientras trabajaba con la artista Temmie Chang en el estilo visual único del juego."
        },
        companyId: "tobyfox",
        relatedGames: ["deltarune"]
    },
    {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure",
        releaseDate: "2022-11-09",
        description: {
            en: "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.",
            es: "God of War Ragnarök es un videojuego de acción y aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment."
        },
        companyId: "sony",
        detailedHistory: {
            en: "The finale of the Norse saga, Ragnarök expands on the relationship between Kratos and Atreus as they face the end of the world. It is praised for its seamless narrative and refined combat.",
            es: "El final de la saga nórdica, Ragnarök expande la relación entre Kratos y Atreus mientras enfrentan el fin del mundo. Es elogiado por su narrativa fluida y combate refinado."
        },
        development: {
            en: "Santa Monica Studio aimed to tell a complete story across two games instead of a trilogy. The team focused on expanding the combat roster and enemy variety, addressing critiques of the 2018 game.",
            es: "Santa Monica Studio buscó contar una historia completa en dos juegos en lugar de una trilogía. El equipo se centró en expandir el elenco de combate y la variedad de enemigos."
        }
    },
    {
        id: "ghost-of-tsushima",
        title: "Ghost of Tsushima",
        developer: "Sucker Punch Productions",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure",
        releaseDate: "2020-07-17",
        description: {
            en: "Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment.",
            es: "Ghost of Tsushima es un videojuego de acción y aventura desarrollado por Sucker Punch Productions y publicado por Sony Interactive Entertainment."
        },
        companyId: "sony",
        detailedHistory: {
            en: "A cinematic samurai epic inspired by classic Akira Kurosawa films. Players control Jin Sakai, who must abandon his samurai code to defeat the Mongol invasion of Tsushima Island.",
            es: "Una épica samurai cinematográfica inspirada en las películas clásicas de Akira Kurosawa. Los jugadores controlan a Jin Sakai, quien debe abandonar su código samurai."
        },
        development: {
            en: "Sucker Punch Productions worked closely with Japanese cultural consultants to ensure authenticity. The 'Guiding Wind' mechanic was created to remove UI clutter and immerse players in the world.",
            es: "Sucker Punch trabajó estrechamente con consultores culturales japoneses. La mecánica del 'Viento Guía' fue creada para eliminar la interfaz y sumergir a los jugadores."
        }
    },
    {
        id: "spider-man-miles-morales",
        title: "Marvel's Spider-Man: Miles Morales",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure",
        releaseDate: "2020-11-12",
        description: {
            en: "Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.",
            es: "Marvel's Spider-Man: Miles Morales es un videojuego de acción y aventura de 2020 desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment."
        },
        companyId: "insomniac",
        detailedHistory: {
            en: "A standalone expansion focusing on Miles Morales as he comes into his own as Spider-Man. It introduces bio-electric 'Venom' powers and camouflage, adding new layers to the combat.",
            es: "Una expansión independiente centrada en Miles Morales. Introduce poderes bioeléctricos 'Venom' y camuflaje, añadiendo nuevas capas al combate."
        },
        development: {
            en: "Insomniac designed Harlem as a distinct character in the game. The shorter runtime allowed for a tighter, more personal story that resonated with fans for its representation and heart.",
            es: "Insomniac diseñó Harlem como un personaje distinto en el juego. La duración más corta permitió una historia más ajustada y personal."
        }
    },
    {
        id: "horizon-forbidden-west",
        title: "Horizon Forbidden West",
        developer: "Guerrilla Games",
        publisher: "Sony Interactive Entertainment",
        genre: "Action role-playing",
        releaseDate: "2022-02-18",
        description: {
            en: "Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment.",
            es: "Horizon Forbidden West es un videojuego de rol de acción de 2022 desarrollado por Guerrilla Games y publicado por Sony Interactive Entertainment."
        },
        companyId: "sony",
        detailedHistory: {
            en: "Aloy's journey continues into a post-apocalyptic version of the American West. The game features stunning underwater exploration and a larger variety of machine enemies.",
            es: "El viaje de Aloy continúa en una versión postapocalíptica del Oeste americano. El juego presenta una exploración submarina impresionante y una mayor variedad de máquinas enemigas."
        },
        development: {
            en: "Guerrilla Games pushed the Decima Engine to render incredible detail on both PS4 and PS5. The team focused on improving melee combat and climbing mechanics based on player feedback.",
            es: "Guerrilla Games impulsó el motor Decima para renderizar detalles increíbles. El equipo se centró en mejorar el combate cuerpo a cuerpo y la escalada."
        }
    },
    {
        id: "ratchet-clank-rift",
        title: "Ratchet & Clank: Rift Apart",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        genre: "Platform, third-person shooter",
        releaseDate: "2021-06-11",
        description: {
            en: "Ratchet & Clank: Rift Apart is a 2021 platform game developed by Insomniac Games and published by Sony Interactive Entertainment for the PlayStation 5.",
            es: "Ratchet & Clank: Rift Apart es un videojuego de plataformas de 2021 desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment para PlayStation 5."
        },
        companyId: "insomniac",
        detailedHistory: {
            en: "A showcase title for the PS5's SSD, allowing players to warp between dimensions instantly. It introduces Rivet, a female Lombax counterpart to Ratchet.",
            es: "Un título de exhibición para el SSD de PS5, que permite a los jugadores deformar entre dimensiones al instante. Introduce a Rivet, una contraparte femenina Lombax de Ratchet."
        },
        development: {
            en: "Insomniac utilized the high-speed storage of the PS5 to create gameplay mechanics that were previously impossible, such as loading entire new worlds in a fraction of a second.",
            es: "Insomniac utilizó el almacenamiento de alta velocidad de PS5 para crear mecánicas de juego que antes eran imposibles, como cargar mundos nuevos enteros en una fracción de segundo."
        }
    },
    {
        id: "returnal",
        title: "Returnal",
        developer: "Housemarque",
        publisher: "Sony Interactive Entertainment",
        genre: "Roguelike, third-person shooter",
        releaseDate: "2021-04-30",
        description: {
            en: "Returnal is a roguelike video game developed by Housemarque and published by Sony Interactive Entertainment. It follows Selene Vassos, a space explorer.",
            es: "Returnal es un videojuego roguelike desarrollado por Housemarque y publicado por Sony Interactive Entertainment. Sigue a Selene Vassos, una exploradora espacial."
        },
        companyId: "housemarque",
        detailedHistory: {
            en: "Returnal combines bullet-hell arcade action with a third-person shooter and roguelike structure. It tells a cryptic, psychological story about trauma and cycles.",
            es: "Returnal combina acción arcade bullet-hell con un shooter en tercera persona y estructura roguelike. Cuenta una historia críptica y psicológica sobre el trauma."
        },
        development: {
            en: "Housemarque's first AAA title, transitioning from their arcade roots. They verified that 'arcade gameplay' could translate to a high-fidelity narrative experience.",
            es: "El primer título AAA de Housemarque, transicionando desde sus raíces arcade. Verificaron que la 'jugabilidad arcade' podía traducirse a una experiencia narrativa de alta fidelidad."
        }
    },
    {
        id: "bioshock-2",
        title: "BioShock 2",
        developer: "2K Marin",
        publisher: "2K Games",
        genre: "First-person shooter",
        releaseDate: "2010-02-09",
        description: {
            en: "BioShock 2 is a first-person shooter game developed by 2K Marin and published by 2K Games. It is the sequel to the 2007 game BioShock.",
            es: "BioShock 2 es un videojuego de disparos en primera persona desarrollado por 2K Marin y publicado por 2K Games. Es la secuela del juego de 2007 BioShock."
        },
        companyId: "2k",
        detailedHistory: {
            en: "Players control a Big Daddy, Subject Delta, searching for his Little Sister. It refined the combat of the original games, allowing for dual-wielding of weapons and plasmids.",
            es: "Los jugadores controlan a un Big Daddy, Sujeto Delta, buscando a su Little Sister. Refinó el combate de los juegos originales, permitiendo el uso dual de armas y plásmidos."
        },
        development: {
            en: "Developed by 2K Marin, the team faced the challenge of making a heavy, lumbering protagonist feel fun to play. It also introduced a multiplayer mode set during the civil war of Rapture.",
            es: "Desarrollado por 2K Marin, el equipo enfrentó el reto de hacer que un protagonista pesado y torpe fuera divertido de jugar. También introdujo un modo multijugador."
        }
    },
    {
        id: "resident-evil-7",
        title: "Resident Evil 7: Biohazard",
        developer: "Capcom",
        publisher: "Capcom",
        genre: "Survival horror",
        releaseDate: "2017-01-24",
        description: {
            en: "Resident Evil 7: Biohazard is a survival horror game developed and published by Capcom. It is the first main series installment to be played in first-person.",
            es: "Resident Evil 7: Biohazard es un videojuego de terror y supervivencia desarrollado y publicado por Capcom. Es la primera entrega de la serie principal en jugarse en primera persona."
        },
        companyId: "capcom",
        detailedHistory: {
            en: "RE7 saved the franchise by returning to its survival horror roots and switching to a first-person perspective. Set in a derelict plantation, it introduced the terrifying Baker family.",
            es: "RE7 salvó la franquicia volviendo a sus raíces de horror de supervivencia y cambiando a una perspectiva en primera persona. Ambientado en una plantación abandonada."
        },
        development: {
            en: "Capcom built the proprietary RE Engine specifically for this game to achieve photorealistic visuals. The change to first-person was made to increase immersion, especially for VR.",
            es: "Capcom construyó el motor propietario RE Engine específicamente para este juego. El cambio a primera persona se hizo para aumentar la inmersión, especialmente para VR."
        }
    },
    {
        id: "mass-effect-3",
        title: "Mass Effect 3",
        developer: "BioWare",
        publisher: "Electronic Arts",
        genre: "Action role-playing",
        releaseDate: "2012-03-06",
        description: {
            en: "Mass Effect 3 is an action role-playing video game developed by BioWare and published by Electronic Arts. It is the final installment of the original Mass Effect trilogy.",
            es: "Mass Effect 3 es un videojuego de rol de acción desarrollado por BioWare y publicado por Electronic Arts. Es la entrega final de la trilogía original de Mass Effect."
        },
        detailedHistory: {
            en: "The epic conclusion to Commander Shepard's journey. Mass Effect 3 raised the stakes to a galactic level, forcing players to unite warring species against the Reaper threat. Despite controversy regarding its ending, it is praised for its emotional depth and the weight of prior choices.",
            es: "La épica conclusión del viaje del Comandante Shepard. Mass Effect 3 llevó las apuestas a un nivel galáctico, obligando a los jugadores a unir a especies enfrentadas contra la amenaza de los Segadores."
        },
        development: {
            en: "BioWare focused on creating a darker, more desperate atmosphere. The development team refined the combat system to be more fluid and introduced a multiplayer mode that directly impacted the player's 'Galactic Readiness' in the main story.",
            es: "BioWare se centró en crear una atmósfera más oscura y desesperada. El equipo refinó el sistema de combate para que fuera más fluido e introdujo un modo multijugador que afectaba a la 'Preparación Galáctica'."
        },
        companyId: "bioware"
    },
    {
        id: "cuphead",
        title: "Cuphead",
        developer: "Studio MDHR",
        publisher: "Studio MDHR",
        genre: "Run and gun",
        releaseDate: "2017-09-29",
        description: {
            en: "Cuphead is a run and gun video game developed and published by Studio MDHR. The game follows Cuphead and his brother Mugman who lost a bet with the Devil.",
            es: "Cuphead es un videojuego de acción y plataformas desarrollado y publicado por Studio MDHR. El juego sigue a Cuphead y su hermano Mugman después de perder una apuesta con el Diablo."
        },
        detailedHistory: {
            en: "Cuphead became an instant icon thanks to its 1930s cartoon aesthetic. It is famous for its brutal difficulty and incredible boss designs, winning multiple awards for its visual style and soundtrack.",
            es: "Cuphead se convirtió en un icono instantáneo gracias a su estética de dibujos animados de los años 30. Es famoso por su dificultad brutal y sus increíbles diseños de jefes."
        },
        development: {
            en: "Developed by brothers Chad and Jared Moldenhauer, the project took seven years to complete. They used traditional hand-drawn animation on paper and hand-inked cells, capturing the authentic look of the Fleischer and Disney era.",
            es: "Desarrollado por los hermanos Chad y Jared Moldenhauer, el proyecto tardó siete años. Usaron animación tradicional dibujada a mano sobre papel, capturando el aspecto auténtico de la era Fleischer y Disney."
        },
        companyId: "mdhr"
    },
    {
        id: "outer-wilds",
        title: "Outer Wilds",
        developer: "Mobius Digital",
        publisher: "Annapurna Interactive",
        genre: "Action-adventure",
        releaseDate: "2019-05-28",
        description: {
            en: "Outer Wilds is an exploration game set in a solar system trapped in a 22-minute time loop. Explore the cosmos and uncover its secrets.",
            es: "Outer Wilds es un videojuego de exploración ambientado en un sistema solar atrapado en un bucle temporal de 22 minutos. Explora el cosmos y descubre sus secretos."
        },
        detailedHistory: {
            en: "A masterpiece of curious discovery, Outer Wilds uses a 22-minute time loop to encourage exploration without traditional hand-holding. It is widely regarded as one of the best games about space and 'the joy of knowing'.",
            es: "Una obra maestra del descubrimiento, Outer Wilds usa un bucle temporal de 22 minutos para fomentar la exploración sin tutoriales tradicionales. Es considerado uno de los mejores juegos sobre el espacio."
        },
        development: {
            en: "What began as Alex Beachum's master's thesis at USC became a full commercial project. The development team at Mobius Digital focused on creating a physically consistent solar system where everything moves in real-time.",
            es: "Lo que comenzó como la tesis de maestría de Alex Beachum en la USC se convirtió en un proyecto comercial. Mobius Digital se centró en crear un sistema solar físicamente consistente que se mueve en tiempo real."
        },
        companyId: "mobius"
    },
    {
        id: "nier-replicant",
        title: "NieR Replicant ver.1.22474487139...",
        developer: "Toylogic",
        publisher: "Square Enix",
        genre: "Action role-playing",
        releaseDate: "2021-04-22",
        description: {
            en: "NieR Replicant ver.1.22474487139... is an updated version of the original NieR game, released in 2010. Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata.",
            es: "NieR Replicant ver.1.22474487139... es una versión actualizada del juego NieR original, lanzado en 2010. Descubre la precuela única de NieR:Automata."
        },
        detailedHistory: {
            en: "A unique blend of genres and a deeply emotional story about sacrifice. This version updated the combat and visuals to match the standards set by NieR:Automata, bringing Yoko Taro's tragic vision to a new generation.",
            es: "Una mezcla única de géneros y una historia profundamente emotiva sobre el sacrificio. Esta versión actualizó el combate y los visuales para igualar los estándares de NieR:Automata."
        },
        development: {
            en: "Developed by Toylogic with supervision from Yoko Taro and Keisuke Okayasu. The project focused on refining the combat to be faster and more responsive, while preserving the original's haunting atmosphere and iconic soundtrack.",
            es: "Desarrollado por Toylogic con supervisión de Yoko Taro. El proyecto se centró en refinar el combate para hacerlo más rápido y reactivo, preservando la atmósfera inquietante y la banda sonora icónica."
        },
        companyId: "square"
    },
    {
        id: "balatro",
        title: "Balatro",
        developer: "LocalThunk",
        publisher: "Playstack",
        genre: "Roguelike, deck-building",
        releaseDate: "2024-02-20",
        description: {
            en: "Balatro is a poker-themed roguelike deck-builder about creating powerful synergies and winning big.",
            es: "Balatro es un videojuego de construcción de barajas roguelike con temática de póker sobre la creación de sinergias poderosas y ganar a lo grande."
        },
        detailedHistory: {
            en: "An addictive indie sensation that combined poker hands with roguelike progression. Balatro's deep strategy and satisfying 'scoring' mechanics turned it into one of the most successful and praised games of 2024.",
            es: "Una sensación indie adictiva que combina manos de póker con progresión roguelike. La estrategia profunda de Balatro lo convirtió en uno de los juegos más exitosos de 2024."
        },
        development: {
            en: "Developed by the solo developer LocalThunk, the game was built using the LÖVE framework. LocalThunk focused on the 'math' and the feeling of growing power, iteratively balancing the various Joker cards to ensure every run felt unique.",
            es: "Desarrollado por el desarrollador en solitario LocalThunk usando el framework LÖVE. LocalThunk se centró en las 'matemáticas' y en la sensación de poder creciente."
        },
        companyId: "localthunk"
    },
    {
        id: "palworld",
        title: "Palworld",
        developer: "Pocketpair",
        publisher: "Pocketpair",
        genre: "Action-adventure, survival",
        releaseDate: "2024-01-19",
        description: {
            en: "Palworld is an action-adventure, survival, and monster-taming game created by Japanese developer Pocketpair. Fight, farm, build and work alongside mysterious creatures.",
            es: "Palworld es un videojuego de acción, aventura y supervivencia de recolección de monstruos creado por Pocketpair. Lucha, cultiva, construye y trabaja con criaturas misteriosas."
        },
        detailedHistory: {
            en: "Nicknamed 'Pokémon with guns', Palworld became a massive viral hit. It combines survival mechanics, base building, and creature collection in a way that resonated with millions of players, breaking multiple concurrent player records.",
            es: "Apodado 'Pokémon con armas', Palworld se convirtió en un éxito viral masivo. Combina mecánicas de supervivencia, construcción de bases y recolección de criaturas."
        },
        development: {
            en: "Developed by Pocketpair, the team focused on the 'survival' aspect as much as the monster taming. Despite limited resources compared to major publishers, they utilized Unreal Engine to create a vast, interactive world that encouraged player creativity.",
            es: "Desarrollado por Pocketpair, el equipo se centró tanto en la supervivencia como en el entrenamiento de monstruos. Utilizaron Unreal Engine para crear un mundo vasto e interactivo."
        },
        companyId: "pocketpair"
    },
    {
        id: "it-takes-two",
        title: "It Takes Two",
        developer: "Hazelight Studios",
        publisher: "Electronic Arts",
        genre: "Action-adventure, platformer",
        releaseDate: "2021-03-26",
        description: {
            en: "It Takes Two is an action-adventure platform game developed by Hazelight Studios and published by Electronic Arts. Embark on the craziest journey of your life.",
            es: "It Takes Two es un videojuego de plataformas de acción y aventura desarrollado por Hazelight Studios y publicado por Electronic Arts. Embárcate en el viaje más loco de tu vida."
        },
        detailedHistory: {
            en: "Winner of Game of the Year in 2021, It Takes Two is an exclusively cooperative experience that tells the story of a couple undergoing divorce. Each chapter introduces entirely new mechanics, keeping the gameplay fresh from start to finish.",
            es: "Ganador del Juego del Año en 2021, It Takes Two es una experiencia exclusivamente cooperativa. Cada capítulo introduce mecánicas totalmente nuevas, manteniendo el juego fresco de principio a fin."
        },
        development: {
            en: "Directed by Josef Fares, the game was built on the philosophy of 'narrative-gameplay marriage'. Fares famously promised that the game would never get boring, leading the team to create dozens of unique mechanics used only for single sequences.",
            es: "Dirigido por Josef Fares, el juego se basó en la filosofía del 'matrimonio entre narrativa y jugabilidad'. Fares prometió que el juego nunca sería aburrido, llevando al equipo a crear decenas de mecánicas únicas."
        },
        companyId: "hazelight"
    },
    {
        id: "the-last-of-us-2",
        title: "The Last of Us Part II",
        developer: "Naughty Dog",
        publisher: "Sony Interactive Entertainment",
        genre: "Action-adventure",
        releaseDate: "2020-06-19",
        description: {
            en: "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment. Five years after their perilous journey across the post-pandemic United States.",
            es: "The Last of Us Part II es un videojuego de acción y aventura de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment. Cinco años después de su peligroso viaje por los Estados Unidos."
        },
        detailedHistory: {
            en: "A challenging and polarizing sequel that explores themes of revenge, empathy, and the cycle of violence. It is technically one of the most advanced games ever made, featuring unrivaled facial animation and environmental detail.",
            es: "Una secuela desafiante y polarizante que explora temas de venganza, empatía y el ciclo de la violencia. Técnicamente es uno de los juegos más avanzados jamás creados."
        },
        development: {
            en: "Naughty Dog pushed the limits of the PlayStation 4 hardware. The development focused on 'fluidity', ensuring that combat, movement, and stealth felt like a continuous, cinematic experience where the AI reacted realistically to every player action.",
            es: "Naughty Dog llevó al límite el hardware de PlayStation 4. El desarrollo se centró en la 'fluidez', asegurando que el combate, el movimiento y el sigilo se sintieran como una experiencia cinematográfica continua."
        },
        companyId: "sony"
    },
    {
        id: "catherine-classic",
        title: "Catherine Classic",
        developer: "Atlus",
        publisher: "Sega",
        genre: "Puzzle, adventure",
        releaseDate: "2019-01-10",
        description: {
            en: "Catherine Classic is a puzzle-platformer adventure game. Experience a tale of love, betrayal, and the terror of commitment.",
            es: "Catherine Classic es un videojuego de puzles y plataformas. Vive una historia de amor, traición y el terror al compromiso."
        },
        detailedHistory: {
            en: "A unique blend of social simulation and intense block-climbing puzzles. Catherine explored adult themes of relationships and infidelity, becoming a cult classic for its distinct style and challenging gameplay.",
            es: "Una mezcla única de simulación social e intensos puzles de escalada. Catherine exploró temas adultos sobre las relaciones y la infidelidad, convirtiéndose en un clásico de culto."
        },
        development: {
            en: "Created by the Persona team at Atlus, the game served as a technical testbed for the engine that would eventually power Persona 5. The distinctive art style was led by Shigenori Soejima, creating a mature, nightmare-fueled aesthetic.",
            es: "Creado por el equipo de Persona en Atlus, el juego sirvió como banco de pruebas técnico para el motor de Persona 5. El estilo artístico distintivo fue liderado por Shigenori Soejima."
        },
        companyId: "atlus"
    },
    {
        id: "persona-3-reload",
        title: "Persona 3 Reload",
        developer: "Atlus",
        publisher: "Sega",
        genre: "Role-playing, social simulation",
        releaseDate: "2024-02-02",
        description: {
            en: "Persona 3 Reload is a captivating reimagining of the genre-defining RPG, reborn for the modern era.",
            es: "Persona 3 Reload es una cautivadora reinvención del RPG que definió el género, renacido para la era moderna."
        },
        detailedHistory: {
            en: "A full remake of the original Persona 3, bringing it in line with the visual and gameplay standards of Persona 5. It tells a mature story about mortality and the bonds people form in the face of inevitable fate.",
            es: "Un remake completo del Persona 3 original, igualando los estándares visuales y de jugabilidad de Persona 5. Cuenta una historia madura sobre la mortalidad y los vínculos entre las personas."
        },
        development: {
            en: "Developed by P-Studio at Atlus, the team aimed to modernize the experience while staying faithful to the original's dark atmosphere. This included rerecorded dialogue, a complete visual overhaul in Unreal Engine, and quality-of-life improvements to the social simulation.",
            es: "Desarrollado por P-Studio en Atlus, el equipo buscó modernizar la experiencia permaneciendo fiel a la atmósfera oscura original. Esto incluyó un rediseño visual completo en Unreal Engine."
        },
        companyId: "atlus"
    },
    {
        id: "persona-4-golden",
        title: "Persona 4 Golden",
        developer: "Atlus",
        publisher: "Sega",
        genre: "Role-playing, social simulation",
        releaseDate: "2012-06-14",
        description: {
            en: "A coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.",
            es: "Una historia de madurez que sitúa al protagonista y a sus amigos en un viaje iniciado por una cadena de asesinatos en serie."
        },
        detailedHistory: {
            en: "Persona 4 Golden is the definitive version of the beloved RPG. Set in the quiet town of Inaba, it focuses on a group of high schoolers investigating a series of murders through a mysterious television world. It is praised for its memorable cast and lighter, yet still deep, tone.",
            es: "Persona 4 Golden es la versión definitiva del querido RPG. Ambientado en el pueblo de Inaba, se centra en un grupo de estudiantes que investigan asesinatos a través de un mundo televisivo."
        },
        development: {
            en: "The 'Golden' version added significant new content, including the character Marie and a new dungeon. Atlus optimized the game for the PlayStation Vita, adding social features and refining the combat balance that made it a flagship title for the handheld.",
            es: "La versión 'Golden' añadió contenido significativo, incluyendo al personaje Marie. Atlus optimizó el juego para PlayStation Vita, añadiendo funciones sociales y refinando el combate."
        },
        companyId: "atlus"
    },
    {
        id: "persona-5-strikers",
        title: "Persona 5 Strikers",
        developer: "Omega Force, P-Studio",
        publisher: "Sega",
        genre: "Action RPG, hack and slash",
        releaseDate: "2020-02-20",
        description: {
            en: "Join the Phantom Thieves and strike back against the corruption overtaking cities across Japan.",
            es: "Únete a los Ladrones Fantasma y contraataca contra la corrupción que asola las ciudades de Japón."
        },
        detailedHistory: {
            en: "A direct sequel to Persona 5 that trades turn-based combat for fast-paced Musou-style action. It follows the Phantom Thieves on a summer road trip across Japan, solving new mysteries and helping those in need.",
            es: "Una secuela directa de Persona 5 que cambia el combate por turnos por acción rápida estilo Musou. Sigue a los Ladrones Fantasma en un viaje de verano por todo Japón."
        },
        development: {
            en: "A collaboration between Atlus' P-Studio and Koei Tecmo's Omega Force. The team worked to blend the distinct style and storytelling of Persona with the large-scale combat expertise of Omega Force, resulting in a unique 'Action RPG' hybrid.",
            es: "Una colaboración entre P-Studio de Atlus y Omega Force de Koei Tecmo. El equipo trabajó para mezclar el estilo de Persona con la experiencia en combate a gran escala de Omega Force."
        },
        companyId: "atlus"
    },
    {
        id: "deltarune",
        title: "Deltarune",
        developer: "Toby Fox",
        publisher: "Toby Fox",
        genre: "Role-playing",
        releaseDate: "2018-10-31",
        description: {
            en: "Deltarune is a role-playing video game developed by Toby Fox. The player controls a human, Kris, in a world where monsters live on the surface. It is set in a different world from Undertale.",
            es: "Deltarune es un videojuego de rol desarrollado por Toby Fox. El jugador controla a un humano, Kris, en un mundo donde los monstruos viven en la superficie. Está ambientado en un mundo diferente al de Undertale."
        },
        detailedHistory: {
            en: "Toby Fox's follow-up to Undertale, released in episodic chapters. Deltarune features a more complex combat system and a group of protagonists, continuing Fox's signature subversion of RPG tropes while introducing an entirely new lore and setting.",
            es: "La continuación de Undertale por Toby Fox, lanzada en capítulos episódicos. Deltarune presenta un sistema de combate más complejo y un grupo de protagonistas."
        },
        development: {
            en: "Toby Fox began working on the concept for Deltarune even before Undertale was finished. The game is being developed with a slightly larger team to handle the increased complexity of the visuals and mechanics, while Fox remains the lead writer and composer.",
            es: "Toby Fox comenzó a trabajar en el concepto de Deltarune antes de terminar Undertale. El juego se está desarrollando con un equipo un poco más grande para manejar la complejidad visual."
        },
        companyId: "tobyfox",
        relatedGames: ["undertale"]
    },
    {
        id: "a-way-out",
        title: "A Way Out",
        developer: "Hazelight Studios",
        publisher: "Electronic Arts",
        genre: "Action-adventure",
        releaseDate: "2018-03-23",
        description: {
            en: "From the creators of Brothers: A Tale of Two Sons comes A Way Out, an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.",
            es: "De los creadores de Brothers: A Tale of Two Sons llega A Way Out, una aventura exclusivamente cooperativa en la que interpretas el papel de uno de los dos prisioneros que realizan su audaz huida de la cárcel."
        },
        detailedHistory: {
            en: "A mandatory co-op experience that tells a cinematic story of escape and betrayal. A Way Out forced players to cooperate in ways that required physical communication, culminating in a powerful and unexpected climax.",
            es: "Una experiencia cooperativa obligatoria que cuenta una historia cinematográfica de huida y traición. A Way Out obligaba a los jugadores a cooperar de formas que requerían comunicación física."
        },
        development: {
            en: "The first game from Hazelight Studios, founded by Josef Fares. The development focused on synchronous gameplay where the screen split dynamically to show different perspectives, ensuring that both players felt equally involved in the narrative.",
            es: "El primer juego de Hazelight Studios, fundado por Josef Fares. El desarrollo se centró en una jugabilidad síncrona donde la pantalla se dividía dinámicamente para mostrar diferentes perspectivas."
        },
        companyId: "hazelight",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg?t=1730912036"
    },
    {
        id: "brothers-a-tale-of-two-sons",
        title: "Brothers: A Tale of Two Sons",
        developer: "Starbreeze Studios",
        publisher: "505 Games",
        genre: "Adventure",
        releaseDate: "2013-08-07",
        description: {
            en: "Share the journey of two brothers on an epic fairy tale adventure from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios.",
            es: "Comparte el viaje de dos hermanos en una épica aventura de cuento de hadas del visionario director de cine sueco Josef Fares y el desarrollador de primer nivel Starbreeze Studios."
        },
        detailedHistory: {
            en: "A groundbreaking adventure where the player controls two brothers simultaneously with a single controller. It is celebrated for its emotional storytelling and the way its unique control scheme translates into deep narrative weight.",
            es: "Una aventura revolucionaria donde el jugador controla a dos hermanos simultáneamente con un solo mando. Es celebrado por su narrativa emocional y su esquema de control único."
        },
        development: {
            en: "Directed by Josef Fares during his time at Starbreeze, the game was a pioneer in using gameplay mechanics as a metaphor for character relationships. Every interaction was designed to emphasize the bond between the two siblings.",
            es: "Dirigido por Josef Fares durante su tiempo en Starbreeze, el juego fue pionero en usar mecánicas de juego como metáfora de las relaciones entre personajes."
        },
        companyId: "starbreeze",
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000016192/66ff285f93c258a69a58c1ef2c3dd60c03401535d1e56de3bcbe71fbaad453d6"
    }
];

const COMPANIES_DATA = [
    {
        id: "valve",
        name: "Valve Corporation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeOpE_lrdiH1kB7Ken7Z6METRjismAOxe_Q&s",
        founded: "24 de agosto de 1996",
        headquarters: "Bellevue, Washington, USA",
        description: {
            en: "Valve Corporation, also known as Valve Software, is an American video game developer, publisher, and digital distribution company headquartered in Bellevue, Washington.",
            es: "Valve Corporation, también conocida como Valve Software, es una empresa estadounidense de desarrollo, publicación y distribución digital de videojuegos con sede en Bellevue, Washington."
        },
        detailedHistory: {
            en: "Founded in 1996 by former Microsoft employees Gabe Newell and Mike Harrington, Valve debuted with the groundbreaking Half-Life. Beyond game development, they revolutionized the industry by creating Steam, the world's leading digital distribution platform for PC gaming. They are known for their flat management structure and 'Valve time'—a humorous reference to their extended development cycles.",
            es: "Fundada en 1996 por los ex empleados de Microsoft Gabe Newell y Mike Harrington, Valve debutó con el revolucionario Half-Life. Más allá del desarrollo de juegos, revolucionaron la industria al crear Steam, la plataforma de distribución digital líder en el mundo para juegos de PC. Son conocidos por su estructura de gestión plana y el 'Valve time', una referencia humorística a sus ciclos de desarrollo prolongados."
        }
    },
    {
        id: "capcom",
        name: "Capcom",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/5592px-Capcom_logo.svg.png",
        founded: "30 de mayo de 1979",
        headquarters: "Osaka, Japón",
        description: {
            en: "Capcom Co., Ltd. is a Japanese video game developer and publisher. It has created a number of multi-million-selling game franchises, including Resident Evil and Street Fighter.",
            es: "Capcom Co., Ltd. es un desarrollador y editor japonés de videojuegos. Ha creado una serie de franquicias de juegos multimillonarias, incluidas Resident Evil y Street Fighter."
        },
        detailedHistory: {
            en: "Founded in 1979 as IRM Corporation, Capcom (short for 'Capsule Computers') became a giant of the arcade era with Street Fighter II and later defined survival horror with Resident Evil. It remains one of the most respected developers in Japan, known for high-quality action gameplay.",
            es: "Fundada en 1979 como IRM Corporation, Capcom (abreviatura de 'Capsule Computers') se convirtió en un gigante de la era de los salones recreativos con Street Fighter II y más tarde definió el survival horror con Resident Evil. Sigue siendo uno de los desarrolladores más respetados de Japón, conocido por su jugabilidad de acción de alta calidad."
        }
    },
    {
        id: "rockstar",
        name: "Rockstar Games",
        image: "https://www.google.com/s2/favicons?domain=rockstargames.com&sz=128",
        founded: "Diciembre de 1998",
        headquarters: "New York City, New York, USA",
        description: {
            en: "Rockstar Games, Inc. is an American video game publisher based in New York City. The company was established in December 1998 as a subsidiary of Take-Two Interactive.",
            es: "Rockstar Games, Inc. es un editor de videojuegos estadounidense con sede en la ciudad de Nueva York. La empresa se fundó en diciembre de 1998 como filial de Take-Two Interactive."
        },
        detailedHistory: {
            en: "Formed by Sam Houser, Dan Houser, Terry Donovan, Jamie King and Gary Foreman, Rockstar Games is synonymous with high-production-value open-world games. Their Grand Theft Auto and Red Dead Redemption series have consistently pushed the boundaries of narrative, immersion, and commercial success in the medium.",
            es: "Formada por Sam Houser, Dan Houser, Terry Donovan, Jamie King y Gary Foreman, Rockstar Games es sinónimo de juegos de mundo abierto de alto valor de producción. Sus series Grand Theft Auto y Red Dead Redemption han superado constantemente los límites de la narrativa, la inmersión y el éxito comercial en el medio."
        }
    },
    {
        id: "sony",
        name: "Sony Interactive Entertainment",
        image: "https://www.google.com/s2/favicons?domain=playstation.com&sz=128",
        founded: "16 de noviembre de 1993",
        headquarters: "San Mateo, California, USA",
        description: {
            en: "Sony Interactive Entertainment (SIE) is a multinational video game and digital entertainment company that is a wholly owned subsidiary of Sony.",
            es: "Sony Interactive Entertainment (SIE) es una empresa multinacional de videojuegos y entretenimiento digital que es una subsidiaria de propiedad total de Sony."
        }
    },
    {
        id: "nintendo",
        name: "Nintendo",
        image: "https://www.google.com/s2/favicons?domain=nintendo.com&sz=128",
        founded: "23 de septiembre de 1889",
        headquarters: "Kyoto, Japón",
        description: {
            en: "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It was founded in 1889 as Nintendo Karuta.",
            es: "Nintendo Co., Ltd. es una empresa multinacional japonesa de videojuegos con sede en Kioto. Fue fundada en 1889 como Nintendo Karuta."
        }
    },
    {
        id: "bioware",
        name: "BioWare",
        image: "https://www.google.com/s2/favicons?domain=bioware.com&sz=128",
        founded: "1 de febrero de 1995",
        headquarters: "Edmonton, Alberta, Canadá",
        description: {
            en: "BioWare is a Canadian video game developer located in Edmonton, Alberta. It was founded in 1995 by Ray Muzyka, Greg Zeschuk, and Augustine Yip.",
            es: "BioWare es un desarrollador de videojuegos canadiense ubicado en Edmonton, Alberta. Fue fundado en 1995 por Ray Muzyka, Greg Zeschuk y Augustine Yip."
        }
    },
    {
        id: "bethesda",
        name: "Bethesda Game Studios",
        image: "https://www.google.com/s2/favicons?domain=bethesda.net&sz=128",
        founded: "2001 (Studio)",
        headquarters: "Rockville, Maryland, USA",
        description: {
            en: "Bethesda Game Studios is an American video game developer and a studio of ZeniMax Media based in Rockville, Maryland.",
            es: "Bethesda Game Studios es un desarrollador de videojuegos estadounidense y un estudio de ZeniMax Media con sede en Rockville, Maryland."
        }
    },
    {
        id: "remedy",
        name: "Remedy Entertainment",
        image: "https://www.google.com/s2/favicons?domain=remedygames.com&sz=128",
        founded: "18 de agosto de 1995",
        headquarters: "Espoo, Finlandia",
        description: {
            en: "Remedy Entertainment Plc is a Finnish video game developer based in Espoo. Its best-known games include Max Payne and Alan Wake.",
            es: "Remedy Entertainment Plc es un desarrollador de videojuegos finlandés con sede en Espoo. Sus juegos más conocidos incluyen Max Payne y Alan Wake."
        }
    },
    {
        id: "arkane",
        name: "Arkane Studios",
        image: "https://www.google.com/s2/favicons?domain=arkane-studios.com&sz=128",
        founded: "1999",
        headquarters: "Lyon, Francia",
        description: {
            en: "Arkane Studios is a French video game developer based in Lyon. It was founded in 1999, and released its first game, Arx Fatalis, in 2002.",
            es: "Arkane Studios es un desarrollador de videojuegos francés con sede en Lyon. Fue fundado en 1999 y lanzó su primer juego, Arx Fatalis, en 2002."
        }
    },
    {
        id: "supergiant",
        name: "Supergiant Games",
        image: "https://logo.clearbit.com/supergiantgames.com?size=256",
        founded: "2009",
        headquarters: "San Francisco, California, USA",
        description: {
            en: "Supergiant Games, LLC is an American video game developer and publisher based in San Francisco. It was founded in 2009 by Amir Rao and Gavin Simon.",
            es: "Supergiant Games, LLC es un desarrollador y editor de videojuegos estadounidense con sede en San Francisco. Fue fundada en 2009 por Amir Rao y Gavin Simon."
        }
    },
    {
        id: "blizzard",
        name: "Blizzard Entertainment",
        image: "https://www.google.com/s2/favicons?domain=blizzard.com&sz=128",
        founded: "8 de febrero de 1991",
        headquarters: "Irvine, California, USA",
        description: {
            en: "Blizzard Entertainment, Inc. is an American video game developer and publisher based in Irvine, California. A subsidiary of Activision Blizzard.",
            es: "Blizzard Entertainment, Inc. es un desarrollador y editor de videojuegos estadounidense con sede en Irvine, California. Una subsidiaria de Activision Blizzard."
        }
    },
    {
        id: "ea",
        name: "Electronic Arts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/1200px-Electronic-Arts-Logo.svg.png",
        founded: "27 de mayo de 1982",
        headquarters: "Redwood City, California, USA",
        description: {
            en: "Electronic Arts Inc. (EA) is an American video game company headquartered in Redwood City, California.",
            es: "Electronic Arts Inc. (EA) es una empresa estadounidense de videojuegos con sede en Redwood City, California."
        }
    },
    {
        id: "ubisoft",
        name: "Ubisoft",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hSJuNER47dJlhvt3veoP4O8XkJIDyTxC3g&s",
        founded: "28 de marzo de 1986",
        headquarters: "Saint-Mandé, Francia",
        description: {
            en: "Ubisoft Entertainment SA is a French video game publisher headquartered in Saint-Mandé with development studios across the world.",
            es: "Ubisoft Entertainment SA es un editor de videojuegos francés con sede en Saint-Mandé y estudios de desarrollo en todo el mundo."
        }
    },
    {
        id: "riot",
        name: "Riot Games",
        image: "https://www.google.com/s2/favicons?domain=riotgames.com&sz=128",
        founded: "Septiembre de 2006",
        headquarters: "Los Angeles, California, USA",
        description: {
            en: "Riot Games, Inc. is an American video game developer, publisher and esports tournament organizer based in West Los Angeles, California.",
            es: "Riot Games, Inc. es un desarrollador, editor y organizador de torneos de deportes electrónicos de videojuegos estadounidense con sede en West Los Angeles, California."
        }
    },
    {
        id: "epic",
        name: "Epic Games",
        image: "https://www.google.com/s2/favicons?domain=epicgames.com&sz=128",
        founded: "1991",
        headquarters: "Cary, North Carolina, USA",
        description: {
            en: "Epic Games, Inc. is an American video game and software developer and publisher based in Cary, North Carolina.",
            es: "Epic Games, Inc. es un desarrollador y editor de software y videojuegos estadounidense con sede en Cary, Carolina del Norte."
        }
    },
    {
        id: "atlus",
        name: "Atlus",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BV2SWSD3hwIiVK9RAl5gf6pnj3mBUvH-tQ&s",
        founded: "7 de abril de 1986",
        headquarters: "Setagaya, Tokio, Japón",
        description: {
            en: "Atlus Co., Ltd. is a Japanese video game developer, publisher and distribution company based in Tokyo. A subsidiary of Sega.",
            es: "Atlus Co., Ltd. es un desarrollador, editor y distribuidor de videojuegos japonés con sede en Tokio. Una subsidiaria de Sega."
        }
    },
    {
        id: "sega",
        name: "Sega",
        image: "https://www.google.com/s2/favicons?domain=sega.com&sz=128",
        founded: "3 de junio de 1960",
        headquarters: "Shinagawa, Tokio, Japón",
        description: {
            en: "Sega Corporation is a Japanese multinational video game and entertainment company headquartered in Shinagawa, Tokyo.",
            es: "Sega Corporation es una empresa multinacional japonesa de videojuegos y entretenimiento con sede en Shinagawa, Tokio."
        }
    },
    {
        id: "bandainamco",
        name: "Bandai Namco Entertainment",
        image: "https://www.google.com/s2/favicons?domain=bandainamcoent.com&sz=128",
        founded: "31 de marzo de 2006",
        headquarters: "Minato-ku, Tokio, Japón",
        description: {
            en: "Bandai Namco Entertainment Inc. is a Japanese multinational video game publisher headquartered in Minato-ku, Tokyo.",
            es: "Bandai Namco Entertainment Inc. es un editor de videojuegos multinacional japonés con sede en Minato-ku, Tokio."
        }
    },
    {
        id: "platinum",
        name: "PlatinumGames",
        image: "https://www.google.com/s2/favicons?domain=platinumgames.com&sz=128",
        founded: "1 de octubre de 2007",
        headquarters: "Osaka, Japón",
        description: {
            en: "PlatinumGames Inc. is a Japanese video game developer based in Osaka. It was founded in 2007 by former members of Capcom's Clover Studio.",
            es: "PlatinumGames Inc. es un desarrollador de videojuegos japonés con sede en Osaka. Fue fundado en 2007 por antiguos miembros de Clover Studio de Capcom."
        }
    },
    {
        id: "kojimaprod",
        name: "Kojima Productions",
        image: "https://www.google.com/s2/favicons?domain=kojimaproductions.jp&sz=128",
        founded: "16 de diciembre de 2015",
        headquarters: "Tokio, Japón",
        description: {
            en: "Kojima Productions Co., Ltd. is a Japanese video game development studio founded in 2005 by video game designer Hideo Kojima.",
            es: "Kojima Productions Co., Ltd. es un estudio de desarrollo de videojuegos japonés fundado en 2005 por el diseñador de videojuegos Hideo Kojima."
        }
    },
    {
        id: "insomniac",
        name: "Insomniac Games",
        image: "https://www.google.com/s2/favicons?domain=insomniac.games&sz=128",
        founded: "28 de febrero de 1994",
        headquarters: "Burbank, California, USA",
        description: {
            en: "Insomniac Games, Inc. is an American video game developer based in Burbank, California. It was founded in 1994 by Ted Price.",
            es: "Insomniac Games, Inc. es un desarrollador de videojuegos estadounidense con sede en Burbank, California. Fue fundado en 1994 por Ted Price."
        }
    },
    {
        id: "netherrealm",
        name: "NetherRealm Studios",
        image: "https://www.google.com/s2/favicons?domain=netherrealm.com&sz=128",
        founded: "20 de abril de 2010",
        headquarters: "Chicago, Illinois, USA",
        description: {
            en: "NetherRealm Studios is an American video game developer based in Chicago, Illinois. It was founded in 2010 to replace Midway Games' internal Chicago studio.",
            es: "NetherRealm Studios es un desarrollador de videojuegos estadounidense con sede en Chicago, Illinois. Fue fundado en 2010 para reemplazar al estudio interno de Midway Games."
        }
    },
    {
        id: "facepunch",
        name: "Facepunch Studios",
        image: "https://www.google.com/s2/favicons?domain=facepunch.com&sz=128",
        founded: "Junio de 2004",
        headquarters: "Walsall, Reino Unido",
        description: {
            en: "Facepunch Studios Ltd is a British video game developer based in Walsall, England. It was founded in June 2004 by Garry Newman.",
            es: "Facepunch Studios Ltd es un desarrollador de videojuegos británico con sede en Walsall, Inglaterra. Fue fundado en junio de 2004 por Garry Newman."
        }
    },
    {
        id: "tobyfox",
        name: "Toby Fox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpEIL95qYEAzw4l6xakDxO4VN-qb3XI3DjA&s",
        founded: "2013 (Independiente)",
        headquarters: "New Hampshire, USA",
        description: {
            en: "Toby Fox, also known as Fwug放射, is an American video game developer and composer. He is best known for developing the games Undertale and Deltarune.",
            es: "Toby Fox, también conocido como Fwug放射, es un desarrollador de videojuegos y compositor estadounidense. Es más conocido por desarrollar los juegos Undertale y Deltarune."
        }
    },
    {
        id: "dice",
        name: "DICE",
        image: "https://www.google.com/s2/favicons?domain=dice.se&sz=128",
        founded: "Mayo de 1992",
        headquarters: "Stockholm, Suecia",
        description: {
            en: "EA Digital Illusions CE AB (DICE) is a Swedish video game developer based in Stockholm. The company was founded in 1992 and has been a subsidiary of Electronic Arts since 2006.",
            es: "EA Digital Illusions CE AB (DICE) es un desarrollador de videojuegos sueco con sede en Estocolmo. La empresa fue fundada en 1992 y es subsidiaria de Electronic Arts desde 2006."
        }
    },
    {
        id: "maxis",
        name: "Maxis",
        image: "https://www.google.com/s2/favicons?domain=maxis.com&sz=128",
        founded: "1987",
        headquarters: "Redwood City, California, USA",
        description: {
            en: "Maxis is an American video game developer and a division of Electronic Arts. It was founded in 1987 by Will Wright and Jeff Braun.",
            es: "Maxis es un desarrollador de videojuegos estadounidense y una división de Electronic Arts. Fue fundada en 1987 por Will Wright y Jeff Braun."
        }
    },
    {
        id: "rocksteady",
        name: "Rocksteady Studios",
        image: "https://www.google.com/s2/favicons?domain=rocksteady.com&sz=128",
        founded: "13 de diciembre de 2004",
        headquarters: "Londres, Reino Unido",
        description: {
            en: "Rocksteady Studios Limited is a British video game developer based in London. Founded in 2004, the studio is best known for its work in the Batman: Arkham series.",
            es: "Rocksteady Studios Limited es un desarrollador de videojuegos británico con sede en Londres. Fundado en 2004, el estudio es conocido por su trabajo en la serie Batman: Arkham."
        }
    },
    {
        id: "fromsoftware",
        name: "FromSoftware",
        image: "https://www.google.com/s2/favicons?domain=fromsoftware.jp&sz=128",
        founded: "1 de noviembre de 1986",
        headquarters: "Shibuya, Tokio, Japón",
        description: {
            en: "FromSoftware, Inc. is a Japanese video game development company founded in 1986. They are renowned for the Souls series, Bloodborne, Sekiro, and Elden Ring.",
            es: "FromSoftware, Inc. es una empresa japonesa de desarrollo de videojuegos fundada en 1986. Son reconocidos por la serie Souls, Bloodborne, Sekiro y Elden Ring."
        }
    },
    {
        id: "2k",
        name: "2K Games",
        image: "https://www.google.com/s2/favicons?domain=2k.com&sz=128",
        founded: "25 de enero de 2005",
        headquarters: "Novato, California, USA",
        description: {
            en: "2K Games is an American video game publisher based in Novato, California. It is a subsidiary of Take-Two Interactive and known for BioShock, Borderlands, and NBA 2K.",
            es: "2K Games es un editor de videojuegos estadounidense con sede en Novato, California. Es una subsidiaria de Take-Two Interactive y conocida por BioShock, Borderlands y NBA 2K."
        }
    },
    {
        id: "telltale",
        name: "Telltale Games",
        image: "https://www.google.com/s2/favicons?domain=telltale.com&sz=128",
        founded: "Julio de 2004",
        headquarters: "San Rafael, California, USA",
        description: {
            en: "Telltale Games was an American video game developer based in San Rafael, California. Best known for their episodic narrative adventure games like The Walking Dead.",
            es: "Telltale Games fue un desarrollador de videojuegos estadounidense con sede en San Rafael, California. Conocido por sus juegos de aventuras narrativas episódicas como The Walking Dead."
        }
    },
    {
        id: "mojang",
        name: "Mojang Studios",
        image: "https://www.google.com/s2/favicons?domain=mojang.com&sz=128",
        founded: "Mayo de 2009",
        headquarters: "Stockholm, Suecia",
        description: {
            en: "Mojang Studios is a Swedish video game developer based in Stockholm. It is best known for creating the sandbox and survival game Minecraft.",
            es: "Mojang Studios es un desarrollador de videojuegos sueco con sede en Estocolmo. Es más conocido por crear el juego de mundo abierto y supervivencia Minecraft."
        }
    },
    {
        id: "square",
        name: "Square Enix",
        image: "https://www.google.com/s2/favicons?domain=square-enix.com&sz=128",
        founded: "1 de abril de 2003",
        headquarters: "Shinjuku, Tokio, Japón",
        description: {
            en: "Square Enix Holdings Co., Ltd. is a Japanese entertainment company and video game developer and publisher, best known for the Final Fantasy and Dragon Quest franchises.",
            es: "Square Enix Holdings Co., Ltd. es una empresa de entretenimiento japonesa y desarrolladora y editora de videojuegos, conocida por las franquicias Final Fantasy y Dragon Quest."
        }
    },
    {
        id: "konami",
        name: "Konami",
        image: "https://www.google.com/s2/favicons?domain=konami.com&sz=128",
        founded: "21 de marzo de 1969",
        headquarters: "Chuo, Tokio, Japón",
        description: {
            en: "Konami Digital Entertainment Co., Ltd. is a Japanese entertainment and video game company. Famous for Metal Gear, Silent Hill, and Pro Evolution Soccer.",
            es: "Konami Digital Entertainment Co., Ltd. es una empresa japonesa de entretenimiento y videojuegos. Famosa por Metal Gear, Silent Hill y Pro Evolution Soccer."
        }
    },
    {
        id: "bungie",
        name: "Bungie",
        image: "https://www.google.com/s2/favicons?domain=bungie.net&sz=128",
        founded: "Mayo de 1991",
        headquarters: "Bellevue, Washington, USA",
        description: {
            en: "Bungie, Inc. is an American video game developer based in Bellevue, Washington. They created the Halo and Destiny franchises.",
            es: "Bungie, Inc. es un desarrollador de videojuegos estadounidense con sede en Bellevue, Washington. Crearon las franquicias Halo y Destiny."
        }
    },
    {
        id: "larian",
        name: "Larian Studios",
        image: "https://www.google.com/s2/favicons?domain=larian.com&sz=128",
        founded: "1996",
        headquarters: "Ghent, Bélgica",
        description: {
            en: "Larian Studios is a Belgian video game developer founded in 1996. They are the creators of the Divinity series and Baldur's Gate 3.",
            es: "Larian Studios es un desarrollador de videojuegos belga fundado en 1996. Son los creadores de la serie Divinity y Baldur's Gate 3."
        }
    },
    {
        id: "teamcherry",
        name: "Team Cherry",
        image: "https://www.google.com/s2/favicons?domain=teamcherry.com.au&sz=128",
        founded: "2014",
        headquarters: "Adelaide, Australia",
        description: {
            en: "Team Cherry is an independent video game developer based in Adelaide, South Australia, famous for their hit Metroidvania game, Hollow Knight.",
            es: "Team Cherry es un desarrollador de videojuegos independiente con sede en Adelaida, Australia del Sur, famoso por su exitoso juego Metroidvania, Hollow Knight."
        }
    },
    {
        id: "respawn",
        name: "Respawn Entertainment",
        image: "https://www.google.com/s2/favicons?domain=respawn.com&sz=128",
        founded: "12 de abril de 2010",
        headquarters: "Sherman Oaks, California, USA",
        description: {
            en: "Respawn Entertainment is an American video game developer founded in 2010. They created Titanfall and Apex Legends.",
            es: "Respawn Entertainment es un desarrollador de videojuegos estadounidense fundado en 2010. Crearon Titanfall y Apex Legends."
        }
    },
    {
        id: "obsidian",
        name: "Obsidian Entertainment",
        image: "https://www.google.com/s2/favicons?domain=obsidian.net&sz=128",
        founded: "12 de junio de 2003",
        headquarters: "Irvine, California, USA",
        description: {
            en: "Obsidian Entertainment is an American video game developer based in Irvine, California. Known for Fallout: New Vegas and Star Wars: Knights of the Old Republic II.",
            es: "Obsidian Entertainment es un desarrollador de videojuegos estadounidense con sede en Irvine, California. Conocido por Fallout: New Vegas and Kinghts of the Old Republic II."
        }
    },
    {
        id: "idsoftware",
        name: "id Software",
        image: "https://www.google.com/s2/favicons?domain=idsoftware.com&sz=128",
        founded: "1 de febrero de 1991",
        headquarters: "Richardson, Texas, USA",
        description: {
            en: "id Software is an American video game developer based in Richardson, Texas. The company was founded in 1991 and is known for DOOM and Quake.",
            es: "id Software es un desarrollador de videojuegos estadounidense con sede en Richardson, Texas. La empresa fue fundada en 1991 y es conocida por DOOM y Quake."
        }
    },
    {
        id: "irrational",
        name: "Irrational Games",
        image: "https://www.google.com/s2/favicons?domain=irrationalgames.com&sz=128",
        founded: "1997",
        headquarters: "Quincy, Massachusetts, USA",
        description: {
            en: "Irrational Games (formerly known as 2K Marin/Australia) was an American video game developer best known for BioShock.",
            es: "Irrational Games (anteriormente conocida como 2K Marin/Australia) fue un desarrollador de videojuegos estadounidense conocido por BioShock."
        }
    },
    {
        id: "concernedape",
        name: "ConcernedApe",
        image: "https://preview.redd.it/why-is-the-logo-for-concernedape-a-sleepy-cat-instead-of-v0-6r813sh3def81.gif?format=png8&s=9a7d41daef3dbcb9ff828a7e34374400e39152f9",
        founded: "2012 (Independiente)",
        headquarters: "Seattle, Washington, USA",
        description: {
            en: "ConcernedApe (Eric Barone) is an American game developer, best known for creating the hit simulation game Stardew Valley.",
            es: "ConcernedApe (Eric Barone) es un desarrollador de videojuegos estadounidense, conocido por crear el exitoso juego de simulación Stardew Valley."
        }
    },
    {
        id: "guerrilla",
        name: "Guerrilla Games",
        image: "https://www.google.com/s2/favicons?domain=guerrilla-games.com&sz=128",
        founded: "1 de enero de 2000",
        headquarters: "Amsterdam, Países Bajos",
        description: {
            en: "Guerrilla Games is a Dutch video game developer based in Amsterdam. They are best known for the Killzone and Horizon series.",
            es: "Guerrilla Games es un desarrollador de videojuegos neerlandés con sede en Ámsterdam. Son conocidos por las series Killzone y Horizon."
        }
    },
    {
        id: "housemarque",
        name: "Housemarque",
        image: "https://www.google.com/s2/favicons?domain=housemarque.com&sz=128",
        founded: "19 de julio de 1995",
        headquarters: "Helsinki, Finlandia",
        description: {
            en: "Housemarque Oy is a Finnish video game developer based in Helsinki. They are known for arcade-style shooters like Resogun and Returnal.",
            es: "Housemarque Oy es un desarrollador de videojuegos finlandés con sede en Helsinki. Son conocidos por juegos de disparos tipo arcade como Resogun y Returnal."
        }
    },
    {
        id: "mdhr",
        name: "Studio MDHR",
        image: "https://www.google.com/s2/favicons?domain=studiomdhr.com&sz=128",
        founded: "2013",
        headquarters: "Oakville, Ontario, Canadá",
        description: {
            en: "Studio MDHR Entertainment Inc. is a Canadian independent video game developer founded by brothers Chad and Jared Moldenhauer.",
            es: "Studio MDHR Entertainment Inc. es un desarrollador de videojuegos independiente canadiense fundado por los hermanos Chad y Jared Moldenhauer."
        }
    },
    {
        id: "mobius",
        name: "Mobius Digital",
        image: "https://www.google.com/s2/favicons?domain=mobiusdigitalgames.com&sz=128",
        founded: "2013",
        headquarters: "Los Angeles, California, USA",
        description: {
            en: "Mobius Digital is an American independent video game developer based in Los Angeles, founded by Masi Oka.",
            es: "Mobius Digital es un desarrollador de videojuegos independiente estadounidense con sede en Los Ángeles, fundado por Masi Oka."
        }
    },
    {
        id: "localthunk",
        name: "LocalThunk",
        image: "https://pics.filmaffinity.com/140978080914811-nm_200.jpg",
        founded: "2021 (Independiente)",
        headquarters: "Canadá",
        description: {
            en: "LocalThunk is the independent developer of the hit poker-themed roguelike Balatro.",
            es: "LocalThunk es el desarrollador independiente del exitoso roguelike de póker Balatro."
        }
    },
    {
        id: "pocketpair",
        name: "Pocketpair",
        image: "https://www.google.com/s2/favicons?domain=pocketpair.jp&sz=128",
        founded: "27 de abril de 2015",
        headquarters: "Shinagawa, Tokio, Japón",
        description: {
            en: "Pocketpair, Inc. is a Japanese video game developer based in Shinagawa, Tokyo, known for Palworld.",
            es: "Pocketpair, Inc. es un desarrollador de videojuegos japonés con sede en Shinagawa, Tokio, conocido por Palworld."
        }
    },
    {
        id: "hazelight",
        name: "Hazelight Studios",
        image: "https://www.google.com/s2/favicons?domain=hazelight.se&sz=128",
        founded: "2014",
        headquarters: "Stockholm, Suecia",
        description: {
            en: "Hazelight Studios is a Swedish video game developer based in Stockholm, founded by film director Josef Fares.",
            es: "Hazelight Studios es un desarrollador de videojuegos sueco con sede en Estocolmo, fundado por el director de cine Josef Fares."
        }
    },
    {
        id: "starbreeze",
        name: "Starbreeze Studios",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Starbreeze_Studios.svg/1200px-Starbreeze_Studios.svg.png",
        founded: "1998",
        headquarters: "Stockholm, Suecia",
        description: {
            en: "Starbreeze Studios AB is a Swedish video game developer and publisher based in Stockholm. Known for Brothers: A Tale of Two Sons and the Payday series.",
            es: "Starbreeze Studios AB es un desarrollador y editor de videojuegos sueco con sede en Estocolmo. Conocido por Brothers: A Tale of Two Sons and the Payday series."
        }
    },
    {
        id: "quantic",
        name: "Quantic Dream",
        image: "https://www.google.com/s2/favicons?domain=quanticdream.com&sz=128",
        founded: "2 de mayo de 1997",
        headquarters: "París, Francia",
        description: {
            en: "Quantic Dream SA is a French video game developer and publisher based in Paris, known for Heavy Rain and Detroit: Become Human.",
            es: "Quantic Dream SA es un desarrollador y editor de videojuegos francés con sede en París, conocido por Heavy Rain y Detroit: Become Human."
        }
    }
];
