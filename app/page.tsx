'use client';

import { useState, useEffect, useMemo } from 'react';

type Language = 'fr' | 'en' | 'es';

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [recentDonor, setRecentDonor] = useState('');
  const [language, setLanguage] = useState<Language>('fr');
  const [isUserActive, setIsUserActive] = useState(false);
  const [notificationPhase, setNotificationPhase] = useState(1); // Phase 1, 2, ou 3

  // Traductions
  const translations = useMemo(() => ({
    fr: {
      buttonText: "Un simple clic pour montrer ta générosité",
      bottomText: "Pas de compte, pas d'inscription, juste un bouton. Chaque clic est une contribution directe.",
      copyright: "© 2025 rich button. Tous droits réservés. | Concept original by Clark",
      notificationText: "vient de faire\nun don !",
      messages: [
        "Votre geste peut changer une journée",
        "Un simple clic, un grand impact",
        "Soyez le héros de quelqu'un aujourd'hui",
        "Votre générosité inspire les autres",
        "Ensemble, nous pouvons faire la différence",
        "Chaque don compte, même le plus petit",
        "Votre cœur généreux peut transformer des vies",
        "Un geste simple pour un monde meilleur",
        "Votre bonté rayonne à travers ce clic",
        "Faites partie de quelque chose de plus grand",
        "Votre compassion est une force puissante",
        "Un acte de générosité vaut mille mots",
        "Votre aide précieuse fait toute la différence",
        "Semez l'espoir avec votre générosité",
        "Votre contribution illumine l'avenir",
        "Chaque clic est un sourire offert",
        "Votre empathie transforme le monde",
        "Un don généreux, une vie changée",
        "Votre altruisme inspire l'humanité",
        "Partagez votre lumière avec le monde",
        "Votre bienveillance crée des miracles",
        "Un clic généreux, mille bénédictions",
        "Votre cœur ouvert change tout",
        "La générosité est contagieuse, propagez-la",
        "Votre don est un pont vers l'espoir",
        "Chaque geste compte dans ce grand puzzle",
        "Votre gentillesse résonne à l'infini",
        "Un petit clic, une grande révolution",
        "Votre humanité brille à travers ce geste",
        "Ensemble, créons un cercle de générosité",
        "Votre contribution écrit une belle histoire",
        "Un clic d'amour pour l'humanité",
        "Votre générosité est votre plus beau cadeau",
        "Transformez votre compassion en action",
        "Votre solidarité illumine les ténèbres",
        "Un geste spontané, un impact durable",
        "Votre kindness fait écho dans l'univers",
        "Soyez l'étincelle qui allume l'espoir",
        "Votre générosité déplace des montagnes",
        "Un clic pour répandre la joie",
        "Votre âme généreuse inspire le changement",
        "Ensemble, tissons un monde meilleur",
        "Votre don plante les graines du bonheur",
        "Un geste d'amour vaut tous les trésors",
        "Votre bienveillance guérit les cœurs",
        "Chaque contribution est un rayon de soleil",
        "Votre générosité écrit l'histoire de demain",
        "Un clic, une onde de positivité",
        "Votre empathie construit des ponts",
        "Soyez l'ange gardien de quelqu'un",
        "Votre générosité fait fleurir l'espoir",
        "Un geste simple, une beauté éternelle",
        "Votre cœur ouvert ouvre mille portes",
        "Ensemble, peignons un arc-en-ciel",
        "Votre don est une mélodie d'espoir",
        "Un clic pour illuminer une âme",
        "Votre bonté est un trésor inestimable",
        "Chaque geste généreux compte double",
        "Votre compassion dessine un sourire",
        "Un petit don, une grande humanité",
        "Votre générosité est un phare dans la nuit",
        "Ensemble, semons les graines de l'amour",
        "Votre clic est un câlin virtuel",
        "Un geste de cœur vaut mille paroles",
        "Votre bienveillance récchauffe les âmes",
        "Chaque don est une prière exaucée",
        "Votre générosité transcende les frontières",
        "Un clic pour partager votre lumière intérieure",
        "Votre empathie unit les cœurs",
        "Soyez le changement que vous voulez voir",
        "Votre don est une fenêtre vers l'espoir",
        "Un geste généreux, une éternité de reconnaissance",
        "Votre cœur généreux fait des miracles",
        "Ensemble, créons une symphonie de bonté",
        "Votre contribution est une étoile qui guide",
        "Un clic pour répandre la magie de l'amour",
        "Votre générosité est un souffle de vie",
        "Chaque don est une perle de sagesse",
        "Votre bonté fait danser les anges",
        "Un geste simple, une révolution silencieuse",
        "Votre empathie colore le monde en rose",
        "Soyez l'espoir qui manquait à quelqu'un",
        "Votre générosité est un poème vivant",
        "Un clic pour offrir un rêve",
        "Votre cœur ouvert est un jardin fleuri",
        "Ensemble, peignons le monde en couleurs",
        "Votre don est une clé vers le bonheur",
        "Un geste d'amour résonne pour l'éternité",
        "Votre bienveillance est un baume pour l'âme",
        "Chaque contribution tisse la toile de l'espoir",
        "Votre générosité fait chanter les cœurs",
        "Un clic pour allumer mille bougies",
        "Votre empathie construit des cathédrales",
        "Soyez l'arc-en-ciel après la tempête",
        "Votre don est une danse de joie",
        "Un geste généreux, une mélodie éternelle",
        "Votre cœur généreux peint des sourires",
        "Ensemble, écrivons un conte de fées",
        "Votre contribution est une graine de paradis",
        "Un clic pour offrir des ailes à l'espoir",
        "Votre générosité fait éclore les rêves",
        "Chaque don est une note de musique céleste",
        "Votre bonté transforme l'ordinaire en magique",
        "Un geste simple, une révolution du cœur",
        "Votre empathie fait briller les étoiles",
        "Soyez la lumière dans l'obscurité",
        "Votre générosité est un diamant rare",
        "Un clic pour créer des vagues d'amour",
        "Votre cœur ouvert invite au miracle",
        "Ensemble, construisons un château d'espoir",
        "Votre don est un sourire qui voyage",
        "Un geste d'amour fait fondre les glaces",
        "Votre bienveillance est un soleil levant",
        "Chaque contribution est une prière vivante",
        "Votre générosité fait danser la vie",
        "Un clic pour semer des étoiles",
        "Votre empathie unit les âmes sœurs",
        "Soyez l'ange que vous cherchez",
        "Votre don est une boussole vers l'amour",
        "Un geste généreux, un univers transformé",
        "Votre cœur généreux fait des prodiges",
        "Ensemble, créons une galaxie de bonté",
        "Votre contribution est un feu d'artifice de joie",
        "Un clic pour libérer la magie",
        "Votre générosité est un chant d'espoir",
        "Chaque don est une larme de joie",
        "Votre bonté fait s'épanouir les âmes",
        "Un geste simple, une beauté infinie",
        "Votre empathie peint des couchers de soleil",
        "Soyez l'écho de l'amour universel",
        "Votre générosité est un havre de paix",
        "Un clic pour créer des aurores boréales",
        "Votre cœur ouvert est un temple sacré",
        "Ensemble, semons des jardins d'Eden",
        "Votre don est une caresse à l'humanité",
        "Un geste d'amour fait vibrer l'univers",
        "Votre bienveillance est une fontaine de jeunesse",
        "Chaque contribution est un rayon de lune",
        "Votre générosité fait chanter les sirènes",
        "Un clic pour tisser des rêves dorés",
        "Votre empathie construit des ponts d'étoiles",
        "Soyez le miracle quotidien de quelqu'un",
        "Votre don est une symphonie de tendresse",
        "Un geste généreux, un papillon d'espoir",
        "Votre cœur généreux fait naître des licornes",
        "Ensemble, créons un univers parallèle de bonté",
        "Votre contribution est un feu follet d'amour",
        "Un clic pour réveiller la magie endormie",
        "Votre générosité est une danse cosmique",
        "Chaque don est une perle de rosée sacrée",
        "Votre bonté fait éclore des papillons",
        "Un geste simple, une poésie vivante",
        "Votre empathie peint des galaxies roses",
        "Soyez l'étoile polaire de l'espoir",
        "Votre générosité est un élixir de bonheur",
        "Un clic pour créer des constellations d'amour",
        "Votre cœur ouvert est un portail magique",
        "Ensemble, semons des pluies d'étoiles filantes",
        "Votre don est une berceuse pour l'humanité",
        "Un geste d'amour fait danser les planètes",
        "Votre bienveillance est un sortilège de paix",
        "Chaque contribution est un cristal d'amour pur",
        "Votre générosité fait chanter les anges",
        "Un clic pour libérer mille colombes",
        "Votre empathie construit des châteaux de nuages",
        "Soyez l'enchantement que le monde attend",
        "Votre don est une valse éternelle d'espoir"
      ]
    },
    en: {
      buttonText: "A simple click to show your generosity",
      bottomText: "No account, no registration, just a button. Each click is a direct contribution.",
      copyright: "© 2025 rich button. All rights reserved. | Original concept by Clark",
      notificationText: "just made\na donation!",
      messages: [
        "Your gesture can change someone's day",
        "One simple click, one big impact",
        "Be someone's hero today",
        "Your generosity inspires others",
        "Together, we can make a difference",
        "Every donation counts, even the smallest",
        "Your generous heart can transform lives",
        "A simple gesture for a better world",
        "Your kindness shines through this click",
        "Be part of something greater",
        "Your compassion is a powerful force",
        "One act of generosity speaks louder than words",
        "Your precious help makes all the difference",
        "Plant hope with your generosity",
        "Your contribution lights up the future",
        "Each click is a smile you give",
        "Your empathy transforms the world",
        "One generous donation, one life changed",
        "Your altruism inspires humanity",
        "Share your light with the world",
        "Your benevolence creates miracles",
        "One generous click, a thousand blessings",
        "Your open heart changes everything",
        "Generosity is contagious, spread it",
        "Your gift is a bridge to hope",
        "Every gesture counts in this grand puzzle",
        "Your kindness echoes infinitely",
        "One small click, one big revolution",
        "Your humanity shines through this gesture",
        "Together, let's create a circle of generosity",
        "Your contribution writes a beautiful story",
        "A click of love for humanity",
        "Your generosity is your most beautiful gift",
        "Transform your compassion into action",
        "Your solidarity illuminates the darkness",
        "A spontaneous gesture, a lasting impact",
        "Your kindness echoes in the universe",
        "Be the spark that ignites hope",
        "Your generosity moves mountains",
        "One click to spread joy",
        "Your generous soul inspires change",
        "Together, let's weave a better world",
        "Your gift plants seeds of happiness",
        "A gesture of love is worth all treasures",
        "Your benevolence heals hearts",
        "Each contribution is a ray of sunshine",
        "Your generosity writes tomorrow's history",
        "One click, a wave of positivity",
        "Your empathy builds bridges",
        "Be someone's guardian angel",
        "Your generosity makes hope bloom",
        "A simple gesture, eternal beauty",
        "Your open heart opens a thousand doors",
        "Together, let's paint a rainbow",
        "Your gift is a melody of hope",
        "One click to illuminate a soul",
        "Your kindness is a priceless treasure",
        "Every generous gesture counts double",
        "Your compassion draws a smile",
        "A small gift, great humanity",
        "Your generosity is a lighthouse in the night",
        "Together, let's sow seeds of love",
        "Your click is a virtual hug",
        "A heartfelt gesture is worth a thousand words",
        "Your benevolence warms souls",
        "Each gift is an answered prayer",
        "Your generosity transcends borders",
        "One click to share your inner light",
        "Your empathy unites hearts",
        "Be the change you want to see",
        "Your gift is a window to hope",
        "A generous gesture, an eternity of gratitude",
        "Your generous heart works miracles",
        "Together, let's create a symphony of kindness",
        "Your contribution is a guiding star",
        "One click to spread the magic of love",
        "Your generosity is a breath of life",
        "Each gift is a pearl of wisdom",
        "Your kindness makes angels dance",
        "A simple gesture, a silent revolution",
        "Your empathy colors the world in pink",
        "Be the hope someone was missing",
        "Your generosity is a living poem",
        "One click to offer a dream",
        "Your open heart is a blooming garden",
        "Together, let's paint the world in colors",
        "Your gift is a key to happiness",
        "A gesture of love resonates for eternity",
        "Your benevolence is balm for the soul",
        "Each contribution weaves the web of hope",
        "Your generosity makes hearts sing",
        "One click to light a thousand candles",
        "Your empathy builds cathedrals",
        "Be the rainbow after the storm",
        "Your gift is a dance of joy",
        "A generous gesture, an eternal melody",
        "Your generous heart paints smiles",
        "Together, let's write a fairy tale",
        "Your contribution is a seed of paradise",
        "One click to give wings to hope",
        "Your generosity makes dreams bloom",
        "Each gift is a note of celestial music",
        "Your kindness transforms ordinary into magical",
        "A simple gesture, a revolution of the heart",
        "Your empathy makes stars shine",
        "Be the light in the darkness",
        "Your generosity is a rare diamond",
        "One click to create waves of love",
        "Your open heart invites miracles",
        "Together, let's build a castle of hope",
        "Your gift is a traveling smile",
        "A gesture of love melts ice",
        "Your benevolence is a rising sun",
        "Each contribution is a living prayer",
        "Your generosity makes life dance",
        "One click to sow stars",
        "Your empathy unites kindred souls",
        "Be the angel you seek",
        "Your gift is a compass to love",
        "A generous gesture, a transformed universe",
        "Your generous heart works wonders",
        "Together, let's create a galaxy of kindness",
        "Your contribution is a firework of joy",
        "One click to release magic",
        "Your generosity is a song of hope",
        "Each gift is a tear of joy",
        "Your kindness makes souls bloom",
        "A simple gesture, infinite beauty",
        "Your empathy paints sunsets",
        "Be the echo of universal love",
        "Your generosity is a haven of peace",
        "One click to create aurora borealis",
        "Your open heart is a sacred temple",
        "Together, let's sow gardens of Eden",
        "Your gift is a caress to humanity",
        "A gesture of love makes the universe vibrate",
        "Your benevolence is a fountain of youth",
        "Each contribution is a moonbeam",
        "Your generosity makes sirens sing",
        "One click to weave golden dreams",
        "Your empathy builds bridges of stars",
        "Be someone's daily miracle",
        "Your gift is a symphony of tenderness",
        "A generous gesture, a butterfly of hope",
        "Your generous heart gives birth to unicorns",
        "Together, let's create a parallel universe of kindness",
        "Your contribution is a will-o'-the-wisp of love",
        "One click to awaken sleeping magic",
        "Your generosity is a cosmic dance",
        "Each gift is a sacred dewdrop",
        "Your kindness makes butterflies bloom",
        "A simple gesture, living poetry",
        "Your empathy paints pink galaxies",
        "Be the North Star of hope",
        "Your generosity is an elixir of happiness",
        "One click to create constellations of love",
        "Your open heart is a magical portal",
        "Together, let's sow shooting star showers",
        "Your gift is a lullaby for humanity",
        "A gesture of love makes planets dance",
        "Your benevolence is a spell of peace",
        "Each contribution is a crystal of pure love",
        "Your generosity makes angels sing",
        "One click to release a thousand doves",
        "Your empathy builds castles in the clouds",
        "Be the enchantment the world awaits",
        "Your gift is an eternal waltz of hope"
      ]
    },
    es: {
      buttonText: "Un simple clic para mostrar tu generosidad",
      bottomText: "Sin cuenta, sin registro, solo un botón. Cada clic es una contribución directa.",
      copyright: "© 2025 rich button. Todos los derechos reservados. | Concepto original de Clark",
      notificationText: "acaba de hacer\nuna donación!",
      messages: [
        "Tu gesto puede cambiar el día de alguien",
        "Un simple clic, un gran impacto",
        "Sé el héroe de alguien hoy",
        "Tu generosidad inspira a otros",
        "Juntos, podemos hacer la diferencia",
        "Cada donación cuenta, incluso la más pequeña",
        "Tu corazón generoso puede transformar vidas",
        "Un gesto simple para un mundo mejor",
        "Tu bondad brilla a través de este clic",
        "Forma parte de algo más grande",
        "Tu compasión es una fuerza poderosa",
        "Un acto de generosidad vale más que mil palabras",
        "Tu ayuda preciosa marca la diferencia",
        "Siembra esperanza con tu generosidad",
        "Tu contribución ilumina el futuro",
        "Cada clic es una sonrisa que regalas",
        "Tu empatía transforma el mundo",
        "Una donación generosa, una vida cambiada",
        "Tu altruismo inspira a la humanidad",
        "Comparte tu luz con el mundo",
        "Tu benevolencia crea milagros",
        "Un clic generoso, mil bendiciones",
        "Tu corazón abierto lo cambia todo",
        "La generosidad es contagiosa, propágala",
        "Tu regalo es un puente hacia la esperanza",
        "Cada gesto cuenta en este gran rompecabezas",
        "Tu bondad resuena infinitamente",
        "Un pequeño clic, una gran revolución",
        "Tu humanidad brilla a través de este gesto",
        "Juntos, creemos un círculo de generosidad",
        "Tu contribución escribe una hermosa historia",
        "Un clic de amor por la humanidad",
        "Tu generosidad es tu regalo más hermoso",
        "Transforma tu compasión en acción",
        "Tu solidaridad ilumina la oscuridad",
        "Un gesto espontáneo, un impacto duradero",
        "Tu bondad hace eco en el universo",
        "Sé la chispa que enciende la esperanza",
        "Tu generosidad mueve montañas",
        "Un clic para propagar la alegría",
        "Tu alma generosa inspira el cambio",
        "Juntos, tejamos un mundo mejor",
        "Tu don planta semillas de felicidad",
        "Un gesto de amor vale todos los tesoros",
        "Tu benevolencia sana corazones",
        "Cada contribución es un rayo de sol",
        "Tu generosidad escribe la historia del mañana",
        "Un clic, una onda de positividad",
        "Tu empatía construye puentes",
        "Sé el ángel guardián de alguien",
        "Tu generosidad hace florecer la esperanza",
        "Un gesto simple, belleza eterna",
        "Tu corazón abierto abre mil puertas",
        "Juntos, pintemos un arcoíris",
        "Tu don es una melodía de esperanza",
        "Un clic para iluminar un alma",
        "Tu bondad es un tesoro invaluable",
        "Cada gesto generoso cuenta doble",
        "Tu compasión dibuja una sonrisa",
        "Un pequeño don, gran humanidad",
        "Tu generosidad es un faro en la noche",
        "Juntos, sembremos semillas de amor",
        "Tu clic es un abrazo virtual",
        "Un gesto del corazón vale mil palabras",
        "Tu benevolencia calienta las almas",
        "Cada don es una oración respondida",
        "Tu generosidad trasciende fronteras",
        "Un clic para compartir tu luz interior",
        "Tu empatía une corazones",
        "Sé el cambio que quieres ver",
        "Tu don es una ventana a la esperanza",
        "Un gesto generoso, una eternidad de gratitud",
        "Tu corazón generoso hace milagros",
        "Juntos, creemos una sinfonía de bondad",
        "Tu contribución es una estrella que guía",
        "Un clic para propagar la magia del amor",
        "Tu generosidad es un soplo de vida",
        "Cada don es una perla de sabiduría",
        "Tu bondad hace bailar a los ángeles",
        "Un gesto simple, una revolución silenciosa",
        "Tu empatía colorea el mundo de rosa",
        "Sé la esperanza que alguien necesitaba",
        "Tu generosidad es un poema viviente",
        "Un clic para ofrecer un sueño",
        "Tu corazón abierto es un jardín florecido",
        "Juntos, pintemos el mundo de colores",
        "Tu don es una llave hacia la felicidad",
        "Un gesto de amor resuena por la eternidad",
        "Tu benevolencia es bálsamo para el alma",
        "Cada contribución teje la red de esperanza",
        "Tu generosidad hace cantar a los corazones",
        "Un clic para encender mil velas",
        "Tu empatía construye catedrales",
        "Sé el arcoíris después de la tormenta",
        "Tu don es una danza de alegría",
        "Un gesto generoso, una melodía eterna",
        "Tu corazón generoso pinta sonrisas",
        "Juntos, escribamos un cuento de hadas",
        "Tu contribución es una semilla de paraíso",
        "Un clic para dar alas a la esperanza",
        "Tu generosidad hace florecer los sueños",
        "Cada don es una nota de música celestial",
        "Tu bondad transforma lo ordinario en mágico",
        "Un gesto simple, una revolución del corazón",
        "Tu empatía hace brillar las estrellas",
        "Sé la luz en la oscuridad",
        "Tu generosidad es un diamante raro",
        "Un clic para crear olas de amor",
        "Tu corazón abierto invita al milagro",
        "Juntos, construyamos un castillo de esperanza",
        "Tu don es una sonrisa que viaja",
        "Un gesto de amor derrite el hielo",
        "Tu benevolencia es un sol naciente",
        "Cada contribución es una oración viviente",
        "Tu generosidad hace bailar la vida",
        "Un clic para sembrar estrellas",
        "Tu empatía une almas gemelas",
        "Sé el ángel que buscas",
        "Tu don es una brújula hacia el amor",
        "Un gesto generoso, un universo transformado",
        "Tu corazón generoso hace prodigios",
        "Juntos, creemos una galaxia de bondad",
        "Tu contribución es un fuego artificial de alegría",
        "Un clic para liberar la magia",
        "Tu generosidad es un canto de esperanza",
        "Cada don es una lágrima de alegría",
        "Tu bondad hace florecer las almas",
        "Un gesto simple, belleza infinita",
        "Tu empatía pinta atardeceres",
        "Sé el eco del amor universal",
        "Tu generosidad es un refugio de paz",
        "Un clic para crear auroras boreales",
        "Tu corazón abierto es un templo sagrado",
        "Juntos, sembremos jardines del Edén",
        "Tu don es una caricia a la humanidad",
        "Un gesto de amor hace vibrar el universo",
        "Tu benevolencia es una fuente de juventud",
        "Cada contribución es un rayo de luna",
        "Tu generosidad hace cantar a las sirenas",
        "Un clic para tejer sueños dorados",
        "Tu empatía construye puentes de estrellas",
        "Sé el milagro diario de alguien",
        "Tu don es una sinfonía de ternura",
        "Un gesto generoso, una mariposa de esperanza",
        "Tu corazón generoso da vida a unicornios",
        "Juntos, creemos un universo paralelo de bondad",
        "Tu contribución es un fuego fatuo de amor",
        "Un clic para despertar la magia dormida",
        "Tu generosidad es una danza cósmica",
        "Cada don es una gota de rocío sagrada",
        "Tu bondad hace florecer mariposas",
        "Un gesto simple, poesía viviente",
        "Tu empatía pinta galaxias rosas",
        "Sé la estrella polar de la esperanza",
        "Tu generosidad es un elixir de felicidad",
        "Un clic para crear constelaciones de amor",
        "Tu corazón abierto es un portal mágico",
        "Juntos, sembremos lluvias de estrellas fugaces",
        "Tu don es una canción de cuna para la humanidad",
        "Un gesto de amor hace bailar a los planetas",
        "Tu benevolencia es un hechizo de paz",
        "Cada contribución es un cristal de amor puro",
        "Tu generosidad hace cantar a los ángeles",
        "Un clic para liberar mil palomas",
        "Tu empatía construye castillos en las nubes",
        "Sé el encantamiento que el mundo espera",
        "Tu don es un vals eterno de esperanza"
      ]
    }
  }), []);

  // Pseudos pour notifications simulées - 200 pseudos par langue
  const pseudos = useMemo(() => ({
    fr: [
      'GamerPro2024', 'LeSage42', 'DragonRouge', 'PixelMaster', 'CyberNinja', 
      'StarWalker', 'TechGuru99', 'MysticSoul', 'FirePhoenix', 'IceQueen',
      'ShadowHunter', 'LightBringer', 'CodeWarrior', 'DreamChaser', 'WildSpirit',
      'ElectroVibes', 'CosmicRider', 'NightOwl88', 'GoldenEagle', 'SilverFox',
      'BlueWave', 'RedStorm', 'GreenForce', 'PurpleMage', 'OrangeSun',
      'BlackDiamond', 'WhiteRaven', 'CrimsonBlade', 'Azure_Sky', 'Emerald_Heart',
      'VirtualHero', 'DigitalNomad', 'QuantumLeap', 'NeonGlow', 'RetroGamer',
      'FutureTech', 'AlphaWolf', 'BetaTest', 'GammaRay', 'DeltaForce',
      'EpsilonWave', 'ZetaCore', 'EtaPrime', 'ThetaStar', 'IotaStream',
      'KappaKing', 'LambdaLord', 'MuMaster', 'NuNinja', 'XiExpert',
      'OmicronOne', 'PiPilot', 'RhoRider', 'SigmaStorm', 'TauTitan',
      'UpsilonUltra', 'PhiForce', 'ChiChampion', 'PsiPower', 'OmegaOne',
      'AquaMarine', 'BlazeFire', 'CrystalClear', 'DiamondDust', 'EchoStorm',
      'FlashLightning', 'GalaxyGuard', 'HyperSpace', 'InfiniteLoop', 'JetStream',
      'KnightBlade', 'LaserBeam', 'MagicWand', 'NebulaCloud', 'OrbitStar',
      'PlasmaShock', 'QuantumBit', 'RocketBoost', 'StellarWind', 'TurboCharge',
      'UltraViolet', 'VortexSpin', 'WarpSpeed', 'XenonFlash', 'YellowSpark',
      'ZeroGravity', 'AeroBlast', 'BioChem', 'CyberPunk', 'DataStream',
      'ElectroMagnet', 'FiberOptic', 'GraphicCard', 'HoloDeck', 'InfoByte',
      'JavaCode', 'KernelCore', 'LogicGate', 'MemoryBank', 'NetworkNode',
      'OverClock', 'ProcessorChip', 'QueryBase', 'RandomAccess', 'SystemRoot',
      'ThreadPool', 'UserAgent', 'VirtualMachine', 'WebCrawler', 'XMLParser',
      'YamlFile', 'ZipArchive', 'ApiKey', 'DatabaseQuery', 'ErrorHandler',
      'FunctionCall', 'GitCommit', 'HashTable', 'IndexPage', 'JsonData',
      'KeyValue', 'LibraryPath', 'ModuleImport', 'NameSpace', 'ObjectClass',
      'PackageManager', 'QueueSystem', 'RuntimeError', 'StackTrace', 'TypeScript',
      'UnicodeChar', 'VariableName', 'WebSocket', 'XhrRequest', 'YieldReturn',
      'ZIndexLayer', 'AbstractClass', 'BooleanLogic', 'ConstantValue', 'DynamicType',
      'EventListener', 'FilterMethod', 'GlobalScope', 'HttpProtocol', 'InterfaceType',
      'JoinQuery', 'KeywordThis', 'LoopIteration', 'MethodCall', 'NullPointer',
      'OperatorPlus', 'ParameterList', 'QuoteString', 'ReturnValue', 'SwitchCase',
      'TryCatch', 'UndefinedVar', 'VoidFunction', 'WhileLoop', 'XmlElement',
      'YieldValue', 'ZoneId', 'AsyncAwait', 'BufferSize', 'CallStack',
      'DebugMode', 'ExceptionThrown', 'FinallyBlock', 'GarbageCollector', 'HeapMemory',
      'ImportModule', 'JsonParse', 'KeyPair', 'LinearSearch', 'MapReduce',
      'NodeModule', 'OutputStream', 'PromiseResolve', 'QuickSort', 'RecursiveCall',
      'SortAlgorithm', 'ThreadSafe', 'UnitTest', 'VectorSpace', 'WebWorker',
      'XmlHttpRequest', 'YamlParser', 'ZlibCompress', 'ArrayBuffer', 'BinarySearch',
      'CodeReview', 'DataType', 'ErrorCode', 'FileSystem', 'GraphTheory',
      'HashCode', 'InputOutput', 'JavaVirtual', 'KernelPanic', 'LoadBalancer',
      'MemoryLeak', 'NetworkStack', 'ObjectPool', 'PointerArithmetic', 'QueryOptimizer',
      'RedBlackTree', 'StackOverflow', 'TimeComplexity', 'UnionFind', 'VersionControl',
      'WebAssembly', 'XPathQuery', 'YieldGenerator', 'ZeroKnowledge', 'AlgoRythm'
    ],
    en: [
      'CyberKnight2024', 'PixelWarrior', 'NeonMaster', 'ShadowBlade', 'FireStorm',
      'IceBreaker', 'ThunderBolt', 'WindRunner', 'EarthShaker', 'StarGazer',
      'MoonWalker', 'SunRiser', 'DarkPhoenix', 'LightSaber', 'CodeCrusher',
      'DataHunter', 'ByteBeast', 'TechTitan', 'DigitalDragon', 'VirtualViper',
      'QuantumQuest', 'NanoNinja', 'MicroMage', 'MacroMaster', 'GigaGamer',
      'TeraTracker', 'PetaPlayer', 'ExaExplorer', 'ZettaZero', 'YottaYoda',
      'AlphaAce', 'BetaBoss', 'GammaGod', 'DeltaDemon', 'EpsilonElite',
      'ZetaZone', 'EtaEagle', 'ThetaThunder', 'IotaIce', 'KappaKnight',
      'LambdaLegend', 'MuMystic', 'NuNova', 'XiXpert', 'OmicronOrb',
      'PiPhantom', 'RhoRocket', 'SigmaSword', 'TauTornado', 'UpsilonUltra',
      'PhiPhoenix', 'ChiChief', 'PsiPsycho', 'OmegaOmni', 'RedRover',
      'BlueBlaze', 'GreenGhost', 'YellowYeti', 'PurplePanda', 'OrangeOracle',
      'BlackBison', 'WhiteWolf', 'SilverSerpent', 'GoldenGriffin', 'CrimsonCrow',
      'IndigoIguana', 'VioletVulture', 'TurquoiseTiger', 'MagentaMonkey', 'CyanCobra',
      'BronzeBear', 'PlatinumPanther', 'DiamondDolphin', 'EmeraldEagle', 'RubyRaven',
      'SapphireShark', 'TopazTurtle', 'OpalOctopus', 'PearlPenguin', 'AmethystAnt',
      'QuartzQuail', 'JadeJaguar', 'CoralCat', 'AmberAlligator', 'ObsidianOwl',
      'MarbleMousee', 'GraniteGiraffe', 'SlateSloth', 'FlintFox', 'ChalkCheetah',
      'SandstoneSnake', 'LimestoneLion', 'BasaltBadger', 'QuartziteQuokka', 'SchistShrimp',
      'GneissGoose', 'PumicePorcupine', 'ObsidianOtter', 'VolcanicViper', 'MagmaManatee',
      'LavaLobster', 'CinderCrane', 'AshArmadillo', 'EmberElephant', 'FlameFlingo',
      'BlazeBufalo', 'InfernoIguana', 'ScorchSquirrel', 'BurnBeetle', 'HeatHorse',
      'WarmthWalrus', 'ThermalTurtle', 'RadiantRaccoon', 'GlowGazelle', 'ShineShark',
      'BeamBear', 'RayRhino', 'LuminousLion', 'BrightBird', 'DazzleDeer',
      'SparkleSpider', 'GlitterGiraffe', 'ShimmerSheep', 'TwinkleTiger', 'FlashFrog',
      'LightningLlama', 'ElectricEel', 'VoltageViper', 'CurrentCrab', 'WattWombat',
      'AmpereAnt', 'OhmOwl', 'CircuitCat', 'ResistorRat', 'CapacitorCow',
      'InductorIguana', 'DiodeDog', 'TransistorTurtle', 'MicrochipMouse', 'ProcessorPig',
      'MemoryMonkey', 'StorageStork', 'CacheCamel', 'BufferBear', 'RegisterRabbit',
      'LogicLion', 'BinaryBat', 'HexadecimalHorse', 'OctalOctopus', 'DecimalDuck',
      'AlgorithmAlligator', 'VariableVulture', 'FunctionFox', 'MethodMouse', 'ClassCat',
      'ObjectOtter', 'InterfaceIguana', 'AbstractApe', 'ConcreteCanary', 'StaticStarfish',
      'DynamicDolphin', 'PrivateParrot', 'PublicPenguin', 'ProtectedPanda', 'FinalFish',
      'VolatileViper', 'SynchronizedSeal', 'NativeBuafalso', 'TransientTurtle', 'SerialSquirrel',
      'ArrayArmadillo', 'ListLobster', 'SetSwan', 'MapMoose', 'QueueQuail',
      'StackStag', 'TreeTurkey', 'GraphGiraffe', 'NodeNarwhal', 'EdgeEagle',
      'VertexVulture', 'PathPanther', 'CycleCoyote', 'LoopLynx', 'IterationIbex',
      'RecursionRaven', 'BaseCaseBear', 'DivideConquerDeer', 'GreedyGazelle', 'DynamicDragon',
      'BruteForceBoar', 'OptimalOcelot', 'EfficientElk', 'ComplexityCougar', 'BigOBison',
      'TimeSpaceTiger', 'WorstCaseWolf', 'BestCaseBadger', 'AverageCaseAnt', 'AmortizedApe'
    ],
    es: [
      'DragonCibernético', 'MagoPixel', 'NinjaSombra', 'GuerreroFuego', 'ReyHielo',
      'TormentaAzul', 'LuzEstelar', 'FénixOscuro', 'ÁguilaDorada', 'LoboPlateado',
      'TigreVerde', 'LeónRojo', 'PantheraNegra', 'CisneBlanco', 'HalcónAzul',
      'SerpenteVerde', 'EscorpiónRojo', 'TiburónAzul', 'ÁnguelNegro', 'DemonioPurpura',
      'TechMaestro', 'CódigoGuerrero', 'DataCazador', 'ByteBestia', 'PixelPiloto',
      'NanoNinja', 'MicroMago', 'GigaGamer', 'TeraTitán', 'PetaPoderoso',
      'QuantumQuest', 'CyberCampeón', 'DigitalDiós', 'VirtualVencedor', 'NeteoNinja',
      'WebWarrior', 'TechTornado', 'CodeCometa', 'DataDragón', 'ByteBúho',
      'PixelPuma', 'NanoNave', 'MicroMeteoro', 'GigaGalaxia', 'TeraTempestad',
      'AlphaÁs', 'BetaBoss', 'GammaGuardián', 'DeltaDuende', 'EpsilonElfo',
      'ZetaZorro', 'EtaEspíritu', 'ThetaTrueno', 'IotaImperio', 'KappaRey',
      'LambdaLeyenda', 'MuMístico', 'NuNova', 'XiExperto', 'OmicronOro',
      'PiPirata', 'RhoRey', 'SigmaSeñor', 'TauTitán', 'UpsilonUnico',
      'PhiFénix', 'ChiCampeón', 'PsiPoder', 'OmegaOmnipotente', 'RojoRebelde',
      'AzulAventura', 'VerdeVictorioso', 'AmarilloAudaz', 'MoradoMágico', 'NaranjaNinja',
      'NegroNoble', 'BlancoBrevo', 'PlateadoPotente', 'DoradoDominante', 'CrimsonCazador',
      'ÍndigoInvencible', 'VioletaValiente', 'TurquesaTormenta', 'MagentaMaestro', 'CianCampeón',
      'BronceBravo', 'PlatinoPotente', 'DiamanteDragón', 'EsmeraldaEspíritu', 'RubíRey',
      'ZafiroSeñor', 'TopacioTitán', 'ÓpaloOmnipotente', 'PerlaPoderoso', 'AmetistaAstuto',
      'CuarzoCapitán', 'JadeJefe', 'CoralComandante', 'ÁmbarAmo', 'ObsidianaOlímpico',
      'MármolMaestro', 'GranitoGuardián', 'PizarraPrincipe', 'PedermalPoderoso', 'CalizaCampeón',
      'AreniscaAstuto', 'CalizaCapitán', 'BasaltoBarón', 'CuarcitaComandante', 'EsquistoEspíritu',
      'GneisGuardián', 'PómezPrincipe', 'ObsidianaOráculo', 'VolcánicoVencedor', 'MagmaMonarca',
      'LavaLíder', 'CenizaCapitán', 'BrasaBravo', 'LlamaLeyenda', 'IncendioImperador',
      'FuegoFaraón', 'CalorCaudillo', 'TermalTitán', 'RadianteRey', 'ResplandorRuler',
      'BrilloBarón', 'RayoRey', 'LuminosoLíder', 'ClaroComandante', 'DeslumbranteDuque',
      'ChispaChief', 'DestelloDuque', 'CentelleoCsar', 'ParpadeoPoderoso', 'RelámpagoRey',
      'EléctricoEmperador', 'VoltajeVencedor', 'CorrienteCapitán', 'WattWarrior', 'AmperioAmo',
      'OhmioOlímpico', 'CircuitoComandante', 'ResistorRey', 'CapacitorCapitán', 'InductorImperador',
      'DiodoDuque', 'TransistorTitán', 'MicrochipMonarca', 'ProcesadorPrincipe', 'MemoriaMonarca',
      'AlmacenamientoAmo', 'CachéCapitán', 'BufferBarón', 'RegistroRey', 'LógicaLíder',
      'BinarioBaron', 'HexadecimalHéroe', 'OctalOlímpico', 'DecimalDuque', 'AlgoritmoAmo',
      'VariableVencedor', 'FunciónFaraón', 'MétodoMonarca', 'ClaseCapitán', 'ObjetoOlímpico',
      'InterfazImperador', 'AbstractoAmo', 'ConcretoComandante', 'EstáticoEmperador', 'DinámicoDeque',
      'PrivadoPrincipe', 'PúblicoPoderoso', 'ProtegidoPotente', 'FinalFaraón', 'VolátilVencedor',
      'SincronizadoSeñor', 'NativoNoble', 'TransitorioTitán', 'SerialSeñor', 'ArregloAmo',
      'ListaLíder', 'ConjuntoComandante', 'MapaMonarca', 'ColaCaudillo', 'PilaPrincipe',
      'ÁrbolAmo', 'GrafoGuardián', 'NodoNoble', 'AristaAmo', 'VérticeVencedor',
      'RutaRey', 'CicloComandante', 'BucleBaron', 'IteraciónImperador', 'RecursiónRey',
      'CasoBaseBarón', 'DivideVenceMonarca', 'CodiciosoComandante', 'DinámicoDeque', 'FuerzaBrutaBarón',
      'ÓptimoOlímpico', 'EficienteEmperador', 'ComplejidadComandante', 'GranOOlímpico', 'TiempoEspacioTitán',
      'PeorCasoPoderoso', 'MejorCasoMonarca', 'CasoPromedioPoderoso', 'AmortizadoAmo', 'OptimizadoOlímpico'
    ]
  }), []);

  // Timer countdown supprimé
  // useEffect pour les messages rotatifs
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % translations[language].messages.length);
    }, 3000);
    return () => clearInterval(messageTimer);
  }, [translations, language]);

  // Détection d'activité utilisateur
  useEffect(() => {
    const handleUserActivity = () => {
      setIsUserActive(true);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity, true);
      });
    };
  }, []);

  // Système de notifications sophistiqué avec phases
  useEffect(() => {
    if (!isUserActive) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const showNotificationWithPseudo = () => {
      const currentPseudos = pseudos[language];
      const randomPseudo = currentPseudos[Math.floor(Math.random() * currentPseudos.length)];
      setRecentDonor(randomPseudo);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    };

    const runPhase = () => {
      switch (notificationPhase) {
        case 1:
          // Phase 1: 2 fois par seconde pendant 9 secondes (3x plus lent)
          intervalId = setInterval(showNotificationWithPseudo, 1500); // 2x par seconde mais ralenti
          timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setNotificationPhase(2);
            // Pause de 15 secondes avant phase 2 (3x plus lent)
            setTimeout(() => runPhase(), 15000);
          }, 9000); // 3x plus long
          break;

        case 2:
          // Phase 2: 1 fois par seconde pendant 9 secondes (3x plus lent)
          intervalId = setInterval(showNotificationWithPseudo, 3000); // 1x par seconde mais ralenti
          timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setNotificationPhase(3);
            // Pause de 60 secondes avant phase 3 (3x plus lent)
            setTimeout(() => runPhase(), 60000);
          }, 9000); // 3x plus long
          break;

        case 3:
          // Phase 3: 1 fois toutes les 2 secondes pendant 30 secondes (3x plus lent)
          intervalId = setInterval(showNotificationWithPseudo, 6000); // 1x toutes les 6 secondes (2x3)
          timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setNotificationPhase(1);
            // Retour au début avec une pause de 15 secondes (3x plus lent)
            setTimeout(() => runPhase(), 15000);
          }, 30000); // 3x plus long
          break;
      }
    };

    // Démarrage du cycle après 6 secondes d'activité détectée (3x plus lent)
    const startDelay = setTimeout(() => {
      runPhase();
    }, 6000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isUserActive, notificationPhase, language, pseudos]);

  const handleDonation = () => {
    // Son de succès (simulation avec vibration sur mobile)
    if ('vibrate' in navigator) {
      navigator.vibrate(200);
    }

    // Déclenche immédiatement les notifications de donations (Phase 1)
    setIsUserActive(true);
    setNotificationPhase(1);
    
    // Redirection directe vers Stripe
    window.open('https://buy.stripe.com/14AaEWeCW1MkfKmdKbcV204', '_blank');
  };

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
    setCurrentMessage(0); // Reset message
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Sélecteur de langue en haut */}
      <div className="absolute top-8 left-8 flex space-x-2">
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇫🇷 FR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇺🇸 EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇪🇸 ES
        </button>
      </div>

      {/* Notifications de dons récents */}
      {showNotification && (
        <div className={`
          fixed top-16 right-2 sm:top-20 sm:right-4 bg-blue-500 text-white px-2 py-2 sm:px-3 sm:py-2 rounded-md shadow-lg
          transform transition-all duration-500 z-50 max-w-[200px] sm:max-w-xs
          ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <div className="flex items-start space-x-1 sm:space-x-2">
            <span className="text-sm sm:text-base mt-0.5">💝</span>
            <div className="text-xs sm:text-sm font-medium leading-tight">
              <div className="font-semibold">{recentDonor}</div>
              <div className="text-center mt-0.5">
                {translations[language].notificationText.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center">
        <div className="relative inline-block">
          {/* Sticker souriant qui apparaît au survol */}
          <div className="
            absolute -top-16 left-1/2 transform -translate-x-1/2
            opacity-0 group-hover:opacity-100
            translate-y-4 group-hover:translate-y-0
            transition-all duration-300 ease-out
            pointer-events-none
            text-4xl
          ">
            😊
          </div>

          <button
            onClick={handleDonation}
            className="
              relative overflow-hidden
              bg-green-500 hover:bg-green-600
              text-white font-semibold
              px-7 py-4 rounded-lg
              text-base
              transition-all duration-300 ease-out
              transform hover:scale-105
              shadow-lg hover:shadow-2xl
              group
              border-2 border-green-600
              mb-4
              animate-pulse
              rich-button
            "
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            {/* Effet de lumière qui suit la souris */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
              style={{
                background: `radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                             rgba(255, 255, 255, 0.2) 0%, 
                             rgba(255, 255, 255, 0.1) 30%, 
                             transparent 70%)`,
              }}
            />
            
            {/* Effet de brillance */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-tr from-transparent via-white/10 to-transparent
              transform -skew-x-12 -translate-x-full
              group-hover:translate-x-full transition-transform duration-700
            " />
            
            <span className="relative z-10">
              {translations[language].buttonText}
            </span>
          </button>
        </div>
        
        {/* Messages rotatifs émotionnels */}
        <p className="text-gray-600 italic text-base max-w-2xl leading-relaxed mb-4 min-h-[3rem] flex items-center justify-center">
          <span 
            key={currentMessage}
            className="animate-fade-in"
          >
            {translations[language].messages[currentMessage]}
          </span>
        </p>

        {/* Message original en plus petit */}
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          {translations[language].bottomText}
        </p>
      </div>

      {/* Copyright fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-2">
        <p className="text-center text-xs text-gray-500">
          {translations[language].copyright}
        </p>
      </div>
    </div>
  );
}
