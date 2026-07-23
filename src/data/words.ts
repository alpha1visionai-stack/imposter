export type Category = {
  id: string;
  label: string;
  emoji: string;
  words: string[];
};

export const categories: Category[] = [
  {
    id: "essen",
    label: "Essen & Trinken",
    emoji: "🍕",
    words: [
      "Pizza", "Sushi", "Currywurst", "Schokolade", "Döner", "Spaghetti",
      "Erdbeere", "Kaffee", "Popcorn", "Käsekuchen", "Pommes", "Honig",
      "Avocado", "Burger", "Eis", "Brezel", "Wassermelone", "Sekt",
      "Lasagne", "Marmelade", "Kimchi", "Tacos", "Croissant", "Limonade",
    ],
  },
  {
    id: "tiere",
    label: "Tiere",
    emoji: "🐘",
    words: [
      "Elefant", "Pinguin", "Löwe", "Delfin", "Eule", "Faultier",
      "Krokodil", "Känguru", "Igel", "Papagei", "Hai", "Fuchs",
      "Koala", "Chamäleon", "Biber", "Flamingo", "Wolf", "Qualle",
      "Erdmännchen", "Nashorn", "Otter", "Frosch", "Falke", "Zebra",
    ],
  },
  {
    id: "berufe",
    label: "Berufe",
    emoji: "👩‍🚀",
    words: [
      "Astronaut", "Feuerwehrmann", "Bäcker", "Chirurg", "Pilot",
      "Detektiv", "Gärtner", "Friseur", "Zauberer", "Fotograf",
      "Schreiner", "Lehrer", "Taucher", "Bergführer", "Clown",
      "Winzer", "Imker", "Dolmetscher", "Archäologe", "Bademeister",
    ],
  },
  {
    id: "orte",
    label: "Orte & Reiseziele",
    emoji: "🗺️",
    words: [
      "Eiffelturm", "Sahara", "Strand", "Regenwald", "U-Boot",
      "Vulkan", "Flughafen", "Leuchtturm", "Schloss", "Wüste",
      "Bibliothek", "Gletscher", "Achterbahn", "Friedhof", "Bauernhof",
      "Kreuzfahrtschiff", "Höhle", "Museum", "Casino", "Skipiste",
    ],
  },
  {
    id: "filme",
    label: "Filme & Serien",
    emoji: "🎬",
    words: [
      "Titanic", "Jurassic Park", "Der Pate", "Matrix", "Shrek",
      "Avatar", "Star Wars", "Findet Nemo", "Herr der Ringe", "Joker",
      "Frozen", "Harry Potter", "Interstellar", "Barbie", "Inception",
      "Squid Game", "Stranger Things", "Breaking Bad", "The Office", "Friends",
    ],
  },
  {
    id: "sport",
    label: "Sport",
    emoji: "⚽",
    words: [
      "Fußball", "Tennis", "Skifahren", "Schwimmen", "Boxen",
      "Klettern", "Surfen", "Golf", "Volleyball", "Karate",
      "Bogenschießen", "Turnen", "Reiten", "Segeln", "Rudern",
      "Skateboarden", "Eishockey", "Radrennen", "Bowling", "Darts",
    ],
  },
  {
    id: "alltag",
    label: "Alltagsgegenstände",
    emoji: "🧦",
    words: [
      "Regenschirm", "Kopfhörer", "Zahnbürste", "Rucksack", "Kerze",
      "Wecker", "Spiegel", "Schlüssel", "Kissen", "Taschenlampe",
      "Toaster", "Kompass", "Puzzle", "Klebeband", "Portemonnaie",
      "Staubsauger", "Fernbedienung", "Feuerzeug", "Handtuch", "Notizbuch",
    ],
  },
  {
    id: "fantasie",
    label: "Superkräfte & Fantasie",
    emoji: "🦸",
    words: [
      "Unsichtbarkeit", "Zeitreise", "Gedankenlesen", "Fliegen",
      "Teleportation", "Feueratem", "Riesenwuchs", "Unsterblichkeit",
      "Formwandlung", "Superkraft", "Frostatem", "Röntgenblick",
      "Heilkraft", "Magie", "Drache", "Einhorn", "Zauberstab", "Portal",
    ],
  },
];

export const ALL_WORDS_ID = "alle";
