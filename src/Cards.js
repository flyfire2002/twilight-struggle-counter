const { Map, Seq, Set } = require("immutable");

class Cards {
  static rawCards = () =>
    Map({
      japan: Map({
        name: "US / Japan Pact",
        early: true,
        event: true,
        side: "us",
        ops: 4
      }),
      assc: Map({
        name: "Asia Scoring",
        abbr: "AS Score",
        early: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      eusc: Map({
        name: "Europe Scoring",
        abbr: "EU Score",
        early: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      mesc: Map({
        name: "Middle East Scoring",
        abbr: "ME Score",
        early: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      seasc: Map({
        key: "sea",
        name: "Southeast Asia Scoring",
        abbr: "SEA Score",
        mid: true,
        event: true,
        side: "neutral",
        scoringcard: true
      }),
      romabd: Map({
        name: "Romanian Abdication",
        early: true,
        event: true,
        side: "ussr",
        ops: 1
      }),
      ireds: Map({
        name: "Independent Reds",
        abbr: "Indie Reds",
        early: true,
        event: true,
        side: "us",
        ops: 2
      }),
      olymp: Map({
        name: "Olympic Games",
        abbr: "Olympic",
        early: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      rsp: Map({
        key: "rsp",
        name: "Redscare / Purge",
        abbr: "RS/P",
        early: true,
        event: false,
        side: "neutral",
        ops: 4
      }),
      bw: Map({
        name: "Brush War",
        abbr: "Brush",
        mid: true,
        event: false,
        side: "neutral",
        ops: 3
      }),
      willy: Map({
        name: "Willy Brandt",
        mid: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      "d&c": Map({
        name: "Duck and Cover",
        early: true,
        event: false,
        side: "us",
        ops: 3
      }),
      fyp: Map({
        name: "Five Year Plan",
        early: true,
        event: false,
        side: "us",
        ops: 3
      }),
      socgov: Map({
        name: "Socialist Governments",
        early: true,
        event: false,
        side: "ussr",
        ops: 3
      }),
      yuri: Map({
        name: "Yuri & Samantha",
        late: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      fidel: Map({
        name: "Fidel",
        early: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      viet: Map({
        name: "Vietnam Revolts",
        abbr: "VR",
        early: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      block: Map({
        name: "Blockade",
        early: true,
        event: true,
        side: "ussr",
        ops: 1
      }),
      kwar: Map({
        name: "Korean War",
        abbr: "K-War",
        early: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      aiwar: Map({
        name: "Arab-Israeli War",
        abbr: "AI-War",
        early: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      come: Map({
        name: "Comecon",
        early: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      nass: Map({
        name: "Nasser",
        early: true,
        event: true,
        side: "ussr",
        ops: 1
      }),
      warsaw: Map({
        name: "Warsaw Pact Formed",
        abbr: "Warsaw",
        early: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      degau: Map({
        name: "DeGaulle Leads France",
        abbr: "DeGaulle",
        early: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      cns: Map({
        name: "Captured Nazi Scientist",
        abbr: "CNS",
        early: true,
        event: true,
        side: "neutral",
        ops: 1
      }),
      trum: Map({
        name: "Truman Doctrine",
        abbr: "Truman",
        early: true,
        event: true,
        side: "us",
        ops: 1
      }),
      nato: Map({
        name: "NATO",
        early: true,
        event: true,
        side: "us",
        ops: 4
      }),
      mp: Map({
        name: "Marshall Plan",
        abbr: "Marshall",
        early: true,
        event: true,
        side: "us",
        ops: 4
      }),
      ipwar: Map({
        name: "Indo-Pakistani War",
        abbr: "IP-War",
        early: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      cont: Map({
        name: "Containment",
        early: true,
        event: true,
        side: "us",
        ops: 3
      }),
      cia: Map({
        name: "CIA Created",
        abbr: "CIA",
        early: true,
        event: true,
        side: "us",
        ops: 1
      }),
      suez: Map({
        name: "Suez Crisis",
        abbr: "Suez",
        early: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      eeunr: Map({
        name: "East European Unrest",
        abbr: "EU Unrest",
        early: true,
        event: false,
        side: "us",
        ops: 3
      }),
      decol: Map({
        name: "Decolonization",
        abbr: "Decol",
        early: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      destal: Map({
        name: "Destalinization",
        abbr: "Destal",
        early: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      un: Map({
        name: "UN Intervention",
        abbr: "UN",
        early: true,
        event: false,
        side: "neutral",
        ops: 1
      }),
      ntb: Map({
        name: "Nuclear Test Ban",
        abbr: "NTB",
        early: true,
        event: false,
        side: "neutral",
        ops: 4
      }),
      form: Map({
        name: "Formosan Resolution",
        abbr: "Formosa",
        early: true,
        event: true,
        side: "us",
        ops: 2
      }),
      def: Map({
        name: "Defectors",
        early: true,
        event: false,
        side: "us",
        ops: 2
      }),
      casc: Map({
        name: "Central American Scoring",
        abbr: "CA Score",
        mid: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      armsr: Map({
        name: "Arms Race",
        mid: true,
        event: false,
        side: "neutral",
        ops: 3
      }),
      cubmc: Map({
        name: "Cuban Missile Crisis",
        abbr: "Cuba",
        mid: true,
        event: true,
        side: "neutral",
        ops: 3
      }),
      nsubs: Map({
        name: "Nuclear Subs",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      quag: Map({
        name: "Quagmire",
        abbr: "Quag",
        mid: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      salt: Map({
        name: "SALT Negotiations",
        abbr: "SALT",
        mid: true,
        event: true,
        side: "neutral",
        ops: 3
      }),
      bear: Map({
        name: "Bear Trap",
        abbr: "Trap",
        mid: true,
        event: true,
        side: "us",
        ops: 3
      }),
      summ: Map({
        name: "Summit",
        mid: true,
        event: false,
        side: "neutral",
        ops: 1
      }),
      howil: Map({
        name: "How I Learned to Stop Worrying",
        mid: true,
        event: true,
        side: "neutral",
        ops: 2
      }),
      junta: Map({
        name: "Junta",
        mid: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      kitch: Map({
        name: "Kitchen Debates",
        mid: true,
        event: true,
        side: "us",
        ops: 1
      }),
      misenv: Map({
        name: "Missile Envy",
        mid: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      wwby: Map({
        name: "We Will Bury You",
        mid: true,
        event: true,
        side: "ussr",
        ops: 4
      }),
      brez: Map({
        name: "Brezhnev Doctrine",
        abbr: "Brezhnev",
        mid: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      portu: Map({
        name: "Portuguese Empire Crumbles",
        abbr: "Portuguese",
        mid: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      safrun: Map({
        name: "South African Unrest",
        abbr: "SA Unrest",
        mid: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      allend: Map({
        name: "Allende",
        mid: true,
        event: true,
        side: "ussr",
        ops: 1
      }),
      musrev: Map({
        name: "Muslim Revolution",
        abbr: "Muslim",
        mid: true,
        event: false,
        side: "ussr",
        ops: 4
      }),
      cult: Map({
        name: "Cultural Revolution",
        mid: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      flowr: Map({
        name: "Flower Power",
        mid: true,
        event: true,
        side: "ussr",
        ops: 4
      }),
      u2: Map({
        name: "U-2 incident",
        abbr: "U2",
        mid: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      opec: Map({
        name: "OPEC",
        mid: true,
        event: false,
        side: "ussr",
        ops: 3
      }),
      lone: Map({
        name: "Lone Gunman",
        abbr: "Gunman",
        mid: true,
        event: true,
        side: "ussr",
        ops: 1
      }),
      colrg: Map({
        name: "Colonial Rear Guards",
        abbr: "Colo Guards",
        mid: true,
        event: false,
        side: "us",
        ops: 2
      }),
      panam: Map({
        name: "Panama Canal Returned",
        mid: true,
        event: true,
        side: "us",
        ops: 1
      }),
      camp: Map({
        name: "Camp David Accords",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      pupp: Map({
        name: "Puppet Governments",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      gsales: Map({
        name: "Grain Sales to Soviets",
        abbr: "Grain",
        mid: true,
        event: false,
        side: "us",
        ops: 2
      }),
      jp2: Map({
        name: "John Paul II Elected Pope",
        abbr: "Pope",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      lads: Map({
        name: "Latin American Death Squads",
        mid: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      nixon: Map({
        name: "Nixon Plays the China Card",
        abbr: "Nixon",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      oas: Map({
        name: "OAS Founded",
        abbr: "OAS",
        mid: true,
        event: true,
        side: "us",
        ops: 1
      }),
      sadat: Map({
        name: "Sadat Expels Soviets",
        abbr: "Sadat",
        mid: true,
        event: true,
        side: "us",
        ops: 1
      }),
      shutt: Map({
        name: "Shuttle Diplomacy",
        abbr: "Shuttle",
        mid: true,
        event: true,
        side: "us",
        ops: 3
      }),
      voa: Map({
        name: "Voice of America",
        abbr: "VOA",
        mid: true,
        event: false,
        side: "us",
        ops: 2
      }),
      lib: Map({
        name: "Liberation Theology",
        mid: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      ussu: Map({
        name: "Ussuri River Skirmish",
        abbr: "Ussuri",
        mid: true,
        event: true,
        side: "us",
        ops: 3
      }),
      asknot: Map({
        name: "Ask Not What Your Country...",
        mid: true,
        event: true,
        side: "us",
        ops: 3
      }),
      allpro: Map({
        name: "Alliance For Progress",
        mid: true,
        event: true,
        side: "us",
        ops: 3
      }),
      afsc: Map({
        name: "Africa Scoring",
        abbr: "AF Score",
        mid: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      onest: Map({
        name: "One Small Step",
        mid: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      sasc: Map({
        name: "South America Scoring",
        abbr: "SA Score",
        mid: true,
        event: false,
        side: "neutral",
        scoringcard: true
      }),
      hostage: Map({
        name: "Iranian Hostage Crisis",
        late: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      ironl: Map({
        name: "The Iron Lady",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      reagan: Map({
        name: "Reagan Bombs Libya",
        late: true,
        event: true,
        side: "us",
        ops: 2
      }),
      sw: Map({
        name: "Star Wars",
        late: true,
        event: true,
        side: "us",
        ops: 2
      }),
      norsea: Map({
        name: "North Sea Oil",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      refo: Map({
        name: "The Reformer",
        late: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      marine: Map({
        name: "Marine Barracks Bombing",
        late: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      kal: Map({
        name: "Soviets Shoot Down KAL-007",
        abbr: "KAL-007",
        late: true,
        event: true,
        side: "us",
        ops: 4
      }),
      glas: Map({
        name: "Glasnost",
        late: true,
        event: true,
        side: "ussr",
        ops: 4
      }),
      ortega: Map({
        name: "Ortega Elected in Nicaragua",
        abbr: "Ortega",
        late: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      terror: Map({
        name: "Terrorism",
        late: true,
        event: false,
        side: "neutral",
        ops: 2
      }),
      contra: Map({
        name: "Iran-Contra Scandal",
        abbr: "Iran-Contra",
        late: true,
        event: true,
        side: "ussr",
        ops: 2
      }),
      chern: Map({
        name: "Chernobyl",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      ladc: Map({
        name: "Latin American Debt Crisis",
        late: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      tdtw: Map({
        name: "Tear Down This Wall",
        abbr: "Wall",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      evil: Map({
        name: "An Evil Empire",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      aldr: Map({
        name: "Aldrich Ames Remix",
        abbr: "Aldrich",
        late: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      persh: Map({
        name: "Pershing II deployed",
        abbr: "Pershing",
        late: true,
        event: true,
        side: "ussr",
        ops: 3
      }),
      warg: Map({
        name: "Wargames",
        late: true,
        event: true,
        side: "neutral",
        ops: 4
      }),
      solid: Map({
        name: "Solidarity",
        late: true,
        event: true,
        side: "us",
        ops: 2
      }),
      iiw: Map({
        name: "Iran Iraq War",
        late: true,
        event: true,
        side: "neutral",
        ops: 2
      }),
      camb: Map({
        name: "The Cambridge Five",
        abbr: "Cambridge",
        early: true,
        event: false,
        side: "ussr",
        ops: 2
      }),
      sprel: Map({
        name: "Special Relationship",
        early: true,
        event: false,
        side: "us",
        ops: 2
      }),
      nord: Map({
        name: "NORAD",
        early: true,
        event: true,
        side: "us",
        ops: 3
      }),
      che: Map({
        name: "Che",
        mid: true,
        event: false,
        side: "ussr",
        ops: 3
      }),
      tehran: Map({
        name: "Our Man in Tehran",
        abbr: "Tehran",
        mid: true,
        event: true,
        side: "us",
        ops: 2
      }),
      awacs: Map({
        name: "AWACS Sale to Saudis",
        abbr: "AWACS",
        late: true,
        event: true,
        side: "us",
        ops: 3
      }),
      abm: Map({
        name: "ABM Treaty",
        abbr: "ABM",
        mid: true,
        event: false,
        side: "neutral",
        ops: 4
      })
    });
  static cardRanking = () =>
    Seq([
      "summ",
      "ireds",
      "romabd",
      "olymp",
      "yuri",
      "kitch",
      "ironl",
      "norsea",
      "evil",
      "awacs",
      "eeunr",
      "shutt",
      "reagan",
      "onest",
      "cns",
      "iiw",
      "lads",
      "ladc",
      "come",
      "persh",
      "u2",
      "contra",
      "viet",
      "willy",
      "cont",
      "camp",
      "jp2",
      "form",
      "solid",
      "tehran",
      "sprel",
      "armsr",
      "cubmc",
      "howil",
      "ipwar",
      "un",
      "brez",
      "hostage",
      "warsaw",
      "marine",
      "portu",
      "aiwar",
      "camb",
      "ortega",
      "fidel",
      "allpro",
      "d&c",
      "seasc",
      "kal",
      "tdtw",
      "asknot",
      "chern",
      "fyp",
      "sw",
      "nsubs",
      "pupp",
      "nixon",
      "oas",
      "sadat",
      "panam",
      "salt",
      "terror",
      "misenv",
      "flowr",
      "musrev",
      "glas",
      "che",
      "opec",
      "degau",
      "cult",
      "socgov",
      "suez",
      "quag",
      "safrun",
      "kwar",
      "nass",
      "trum",
      "mp",
      "nato",
      "nord",
      "bear",
      "ussu",
      "def",
      "voa",
      "gsales",
      "colrg",
      "sasc",
      "afsc",
      "casc",
      "ntb",
      "junta",
      "wwby",
      "refo",
      "aldr",
      "lib",
      "allend",
      "destal",
      "decol",
      "japan",
      "block",
      "bw",
      "abm",
      "rsp",
      "mesc",
      "eusc",
      "assc",
      "lone",
      "cia",
      "warg"
    ]);

  // List of cards to watch out for in regions which which they effect.
  static cardRegions = (cardsRemoved, validStarWarsTargets, phase) => {
    let cards = Map({
      // we aren't including ones no one will play like olympic games or summit.
      suicide: Set(["cia", "lone", "d&c", "wwby", "ortega", "kal", "gsales"]),
      // cards that are commonly used to improve the defcon to get rid of a bad card
      defconimprovers: Set(["salt", "howil", "ntb"]),
      // cards that are commonly used to degrade the defcon by the US to prevent bad card from leaving
      defconincreasers: Set(["howil", "cubmc", "gsales"]),
      // cards capable of ditching score cards.
      badcarddiscarders: Set(["asknot", "fyp", "aldr"]),
      warcards: Set(["iiw", "aiwar", "ipwar", "bw", "kwar"]),
      // china card stealers
      china: Set(["nixon", "cult", "ussu"]),
      // card stealers / discarders you should be aware of
      cardstealers: Set(["gsales", "misenv", "aldr", "fyp", "block", "terror"]),

      // these cards could theoretically affect any region at any time when if headlined.
      all: Set(["destal", "bw", "nsubs", "abm", "pupp", "cam"]),
      eu: Set([
        "eusc",
        "socgov",
        "block",
        "romabd",
        "come",
        "warsaw",
        "degau",
        "trum",
        "ireds",
        "mp",
        "suez",
        "eeunr",
        "willy",
        "voa",
        "refo",
        "tdtw",
        "persh",
        "jp2",
        "sprel"
      ]),
      me: Set(["mesc", "aiwar", "opec", "camp", "sadat", "voa", "hostage", "shutt", "awacs", "musrev", "nass"]),
      as: Set(["assc", "viet", "kwar", "ipwar", "japan", "decol", "form", "voa", "marine", "shutt"]),
      sea: Set(["seasc", "viet", "decol", "colrg", "voa", "ussu"]),
      sa: Set(["sasc", "junta", "allend", "panam", "oas", "voa", "ussu", "allpro", "ladc"]),
      ca: Set(["casc", "fidel", "junta", "panam", "oas", "voa", "lib", "ironl", "ortega"]),
      af: Set(["afsc", "decol", "portu", "colrg", "voa"])
    });

    if (cardsRemoved.has("jp2")) {
      cards = cards.updateIn(["eu"], s => s.add("solid"));
    }
    if (cardsRemoved.has("awacs")) {
      cards = cards.updateIn(["me"], s => s.remove("musrev"));
    }
    if (cardsRemoved.has("camp")) {
      cards = cards.updateIn(["me"], s => s.remove("aiwar"));
    }

    // cambridge five in late war
    if (phase === 3) cards = cards.updateIn(["all"], s => s.remove("cam"));

    // star wars, add to all categories
    if (phase === 3) {
      cards = cards.map((s, cat) => {
        const add = validStarWarsTargets.reduce((accum, card) => (s.has(card) ? true : accum), false);
        return add ? s.add("sw") : s;
      });
    }

    return cards;
  };

  static cards = () =>
    Cards.cardRanking().reduce((accum, card) => [accum[0] + 1, accum[1].setIn([card, "importance"], accum[0])], [
      1,
      Cards.rawCards()
    ])[1];
}
export default Cards;
