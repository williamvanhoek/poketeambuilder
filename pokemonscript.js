// Define Kanto Region Pokémon and their types with Pokedex numbers
const pokemonList = [
    { number: "0001", name: "Bulbasaur", types: ["Grass", "Poison"] },
    { number: "0002", name: "Ivysaur", types: ["Grass", "Poison"] },
    { number: "0003", name: "Venusaur", types: ["Grass", "Poison"] },
    { number: "0004", name: "Charmander", types: ["Fire"] },
    { number: "0005", name: "Charmeleon", types: ["Fire"] },
    { number: "0006", name: "Charizard", types: ["Fire", "Flying"] },
    { number: "0007", name: "Squirtle", types: ["Water"] },
    { number: "0008", name: "Wartortle", types: ["Water"] },
    { number: "0009", name: "Blastoise", types: ["Water"] },
    { number: "0010", name: "Caterpie", types: ["Bug"] },
    { number: "0011", name: "Metapod", types: ["Bug"] },
    { number: "0012", name: "Butterfree", types: ["Bug", "Flying"] },
    { number: "0013", name: "Weedle", types: ["Bug", "Poison"] },
    { number: "0014", name: "Kakuna", types: ["Bug", "Poison"] },
    { number: "0015", name: "Beedrill", types: ["Bug", "Poison"] },
    { number: "0016", name: "Pidgey", types: ["Normal", "Flying"] },
    { number: "0017", name: "Pidgeotto", types: ["Normal", "Flying"] },
    { number: "0018", name: "Pidgeot", types: ["Normal", "Flying"] },
    { number: "0019", name: "Rattata", types: ["Normal"] },
    { number: "0020", name: "Raticate", types: ["Normal"] },
    { number: "0021", name: "Spearow", types: ["Normal", "Flying"] },
    { number: "0022", name: "Fearow", types: ["Normal", "Flying"] },
    { number: "0023", name: "Ekans", types: ["Poison"] },
    { number: "0024", name: "Arbok", types: ["Poison"] },
    { number: "0025", name: "Pikachu", types: ["Electric"] },
    { number: "0026", name: "Raichu", types: ["Electric"] },
    { number: "0027", name: "Sandshrew", types: ["Ground"] },
    { number: "0028", name: "Sandslash", types: ["Ground"] },
    { number: "0029", name: "Nidoran♀", types: ["Poison"] },
    { number: "0030", name: "Nidorina", types: ["Poison"] },
    { number: "0031", name: "Nidoqueen", types: ["Poison", "Ground"] },
    { number: "0032", name: "Nidoran♂", types: ["Poison"] },
    { number: "0033", name: "Nidorino", types: ["Poison"] },
    { number: "0034", name: "Nidoking", types: ["Poison", "Ground"] },
    { number: "0035", name: "Clefairy", types: ["Fairy"] },
    { number: "0036", name: "Clefable", types: ["Fairy"] },
    { number: "0037", name: "Vulpix", types: ["Fire"] },
    { number: "0038", name: "Ninetales", types: ["Fire"] },
    { number: "0039", name: "Jigglypuff", types: ["Normal", "Fairy"] },
    { number: "0040", name: "Wigglytuff", types: ["Normal", "Fairy"] },
    { number: "0041", name: "Zubat", types: ["Poison", "Flying"] },
    { number: "0042", name: "Golbat", types: ["Poison", "Flying"] },
    { number: "0043", name: "Oddish", types: ["Grass", "Poison"] },
    { number: "0044", name: "Gloom", types: ["Grass", "Poison"] },
    { number: "0045", name: "Vileplume", types: ["Grass", "Poison"] },
    { number: "0046", name: "Paras", types: ["Bug", "Grass"] },
    { number: "0047", name: "Parasect", types: ["Bug", "Grass"] },
    { number: "0048", name: "Venonat", types: ["Bug", "Poison"] },
    { number: "0049", name: "Venomoth", types: ["Bug", "Poison"] },
    { number: "0050", name: "Diglett", types: ["Ground"] },
    { number: "0051", name: "Dugtrio", types: ["Ground"] },
    { number: "0052", name: "Meowth", types: ["Normal"] },
    { number: "0053", name: "Persian", types: ["Normal"] },
    { number: "0054", name: "Psyduck", types: ["Water"] },
    { number: "0055", name: "Golduck", types: ["Water"] },
    { number: "0056", name: "Mankey", types: ["Fighting"] },
    { number: "0057", name: "Primeape", types: ["Fighting"] },
    { number: "0058", name: "Growlithe", types: ["Fire"] },
    { number: "0059", name: "Arcanine", types: ["Fire"] },
    { number: "0060", name: "Poliwag", types: ["Water"] },
    { number: "0061", name: "Poliwhirl", types: ["Water"] },
    { number: "0062", name: "Poliwrath", types: ["Water", "Fighting"] },
    { number: "0063", name: "Abra", types: ["Psychic"] },
    { number: "0064", name: "Kadabra", types: ["Psychic"] },
    { number: "0065", name: "Alakazam", types: ["Psychic"] },
    { number: "0066", name: "Machop", types: ["Fighting"] },
    { number: "0067", name: "Machoke", types: ["Fighting"] },
    { number: "0068", name: "Machamp", types: ["Fighting"] },
    { number: "0069", name: "Bellsprout", types: ["Grass", "Poison"] },
    { number: "0070", name: "Weepinbell", types: ["Grass", "Poison"] },
    { number: "0071", name: "Victreebel", types: ["Grass", "Poison"] },
    { number: "0072", name: "Tentacool", types: ["Water", "Poison"] },
    { number: "0073", name: "Tentacruel", types: ["Water", "Poison"] },
    { number: "0074", name: "Geodude", types: ["Rock", "Ground"] },
    { number: "0075", name: "Graveler", types: ["Rock", "Ground"] },
    { number: "0076", name: "Golem", types: ["Rock", "Ground"] },
    { number: "0077", name: "Ponyta", types: ["Fire"] },
    { number: "0078", name: "Rapidash", types: ["Fire"] },
    { number: "0079", name: "Slowpoke", types: ["Water", "Psychic"] },
    { number: "0080", name: "Slowbro", types: ["Water", "Psychic"] },
    { number: "0081", name: "Magnemite", types: ["Electric", "Steel"] },
    { number: "0082", name: "Magneton", types: ["Electric", "Steel"] },
    { number: "0083", name: "Farfetch'd", types: ["Normal", "Flying"] },
    { number: "0084", name: "Doduo", types: ["Normal", "Flying"] },
    { number: "0085", name: "Dodrio", types: ["Normal", "Flying"] },
    { number: "0086", name: "Seel", types: ["Water"] },
    { number: "0087", name: "Dewgong", types: ["Water", "Ice"] },
    { number: "0088", name: "Grimer", types: ["Poison"] },
    { number: "0089", name: "Muk", types: ["Poison"] },
    { number: "0090", name: "Shellder", types: ["Water"] },
    { number: "0091", name: "Cloyster", types: ["Water", "Ice"] },
    { number: "0092", name: "Gastly", types: ["Ghost", "Poison"] },
    { number: "0093", name: "Haunter", types: ["Ghost", "Poison"] },
    { number: "0094", name: "Gengar", types: ["Ghost", "Poison"] },
    { number: "0095", name: "Onix", types: ["Rock", "Ground"] },
    { number: "0096", name: "Drowzee", types: ["Psychic"] },
    { number: "0097", name: "Hypno", types: ["Psychic"] },
    { number: "0098", name: "Krabby", types: ["Water"] },
    { number: "0099", name: "Kingler", types: ["Water"] },
    { number: "0100", name: "Voltorb", types: ["Electric"] },
    { number: "0101", name: "Electrode", types: ["Electric"] },
    { number: "0102", name: "Exeggcute", types: ["Grass", "Psychic"] },
    { number: "0103", name: "Exeggutor", types: ["Grass", "Psychic"] },
    { number: "0104", name: "Cubone", types: ["Ground"] },
    { number: "0105", name: "Marowak", types: ["Ground"] },
    { number: "0106", name: "Hitmonlee", types: ["Fighting"] },
    { number: "0107", name: "Hitmonchan", types: ["Fighting"] },
    { number: "0108", name: "Lickitung", types: ["Normal"] },
    { number: "0109", name: "Koffing", types: ["Poison"] },
    { number: "0110", name: "Weezing", types: ["Poison"] },
    { number: "0111", name: "Rhyhorn", types: ["Ground", "Rock"] },
    { number: "0112", name: "Rhydon", types: ["Ground", "Rock"] },
    { number: "0113", name: "Chansey", types: ["Normal"] },
    { number: "0114", name: "Tangela", types: ["Grass"] },
    { number: "0115", name: "Kangaskhan", types: ["Normal"] },
    { number: "0116", name: "Horsea", types: ["Water"] },
    { number: "0117", name: "Seadra", types: ["Water"] },
    { number: "0118", name: "Goldeen", types: ["Water"] },
    { number: "0119", name: "Seaking", types: ["Water"] },
    { number: "0120", name: "Staryu", types: ["Water"] },
    { number: "0121", name: "Starmie", types: ["Water", "Psychic"] },
    { number: "0122", name: "Mr. Mime", types: ["Psychic", "Fairy"] },
    { number: "0123", name: "Scyther", types: ["Bug", "Flying"] },
    { number: "0124", name: "Jynx", types: ["Ice", "Psychic"] },
    { number: "0125", name: "Electabuzz", types: ["Electric"] },
    { number: "0126", name: "Magmar", types: ["Fire"] },
    { number: "0127", name: "Pinsir", types: ["Bug"] },
    { number: "0128", name: "Tauros", types: ["Normal"] },
    { number: "0129", name: "Magikarp", types: ["Water"] },
    { number: "0130", name: "Gyarados", types: ["Water", "Flying"] },
    { number: "0131", name: "Lapras", types: ["Water", "Ice"] },
    { number: "0132", name: "Ditto", types: ["Normal"] },
    { number: "0133", name: "Eevee", types: ["Normal"] },
    { number: "0134", name: "Vaporeon", types: ["Water"] },
    { number: "0135", name: "Jolteon", types: ["Electric"] },
    { number: "0136", name: "Flareon", types: ["Fire"] },
    { number: "0137", name: "Porygon", types: ["Normal"] },
    { number: "0138", name: "Omanyte", types: ["Rock", "Water"] },
    { number: "0139", name: "Omastar", types: ["Rock", "Water"] },
    { number: "0140", name: "Kabuto", types: ["Rock", "Water"] },
    { number: "0141", name: "Kabutops", types: ["Rock", "Water"] },
    { number: "0142", name: "Aerodactyl", types: ["Rock", "Flying"] },
    { number: "0143", name: "Snorlax", types: ["Normal"] },
    { number: "0144", name: "Articuno", types: ["Ice", "Flying"] },
    { number: "0145", name: "Zapdos", types: ["Electric", "Flying"] },
    { number: "0146", name: "Moltres", types: ["Fire", "Flying"] },
    { number: "0147", name: "Dratini", types: ["Dragon"] },
    { number: "0148", name: "Dragonair", types: ["Dragon"] },
    { number: "0149", name: "Dragonite", types: ["Dragon", "Flying"] },
    { number: "0150", name: "Mewtwo", types: ["Psychic"] },
    { number: "0151", name: "Mew", types: ["Psychic"] },
    { number: "0152", name: "Chikorita", types: ["Grass"] },
    { number: "0153", name: "Bayleef", types: ["Grass"] },
    { number: "0154", name: "Meganium", types: ["Grass"] },
    { number: "0155", name: "Cyndaquil", types: ["Fire"] },
    { number: "0156", name: "Quilava", types: ["Fire"] },
    { number: "0157", name: "Typhlosion", types: ["Fire"] },
    { number: "0158", name: "Totodile", types: ["Water"] },
    { number: "0159", name: "Croconaw", types: ["Water"] },
    { number: "0160", name: "Feraligatr", types: ["Water"] },
    { number: "0161", name: "Sentret", types: ["Normal"] },
    { number: "0162", name: "Furret", types: ["Normal"] },
    { number: "0163", name: "Hoothoot", types: ["Normal", "Flying"] },
    { number: "0164", name: "Noctowl", types: ["Normal", "Flying"] },
    { number: "0165", name: "Ledyba", types: ["Bug", "Flying"] },
    { number: "0166", name: "Ledian", types: ["Bug", "Flying"] },
    { number: "0167", name: "Spinarak", types: ["Bug", "Poison"] },
    { number: "0168", name: "Ariados", types: ["Bug", "Poison"] },
    { number: "0169", name: "Crobat", types: ["Poison", "Flying"] },
    { number: "0170", name: "Chinchou", types: ["Water", "Electric"] },
    { number: "0171", name: "Lanturn", types: ["Water", "Electric"] },
    { number: "0172", name: "Pichu", types: ["Electric"] },
    { number: "0173", name: "Cleffa", types: ["Fairy"] },
    { number: "0174", name: "Igglybuff", types: ["Normal", "Fairy"] },
    { number: "0175", name: "Togepi", types: ["Fairy"] },
    { number: "0176", name: "Togetic", types: ["Fairy", "Flying"] },
    { number: "0177", name: "Natu", types: ["Psychic", "Flying"] },
    { number: "0178", name: "Xatu", types: ["Psychic", "Flying"] },
    { number: "0179", name: "Mareep", types: ["Electric"] },
    { number: "0180", name: "Flaaffy", types: ["Electric"] },
    { number: "0181", name: "Ampharos", types: ["Electric"] },
    { number: "0182", name: "Bellossom", types: ["Grass"] },
    { number: "0183", name: "Marill", types: ["Water", "Fairy"] },
    { number: "0184", name: "Azumarill", types: ["Water", "Fairy"] },
    { number: "0185", name: "Sudowoodo", types: ["Rock"] },
    { number: "0186", name: "Politoed", types: ["Water"] },
    { number: "0187", name: "Hoppip", types: ["Grass", "Flying"] },
    { number: "0188", name: "Skiploom", types: ["Grass", "Flying"] },
    { number: "0189", name: "Jumpluff", types: ["Grass", "Flying"] },
    { number: "0190", name: "Aipom", types: ["Normal"] },
    { number: "0191", name: "Sunkern", types: ["Grass"] },
    { number: "0192", name: "Sunflora", types: ["Grass"] },
    { number: "0193", name: "Yanma", types: ["Bug", "Flying"] },
    { number: "0194", name: "Wooper", types: ["Water", "Ground"] },
    { number: "0195", name: "Quagsire", types: ["Water", "Ground"] },
    { number: "0196", name: "Espeon", types: ["Psychic"] },
    { number: "0197", name: "Umbreon", types: ["Dark"] },
    { number: "0198", name: "Murkrow", types: ["Dark", "Flying"] },
    { number: "0199", name: "Slowking", types: ["Water", "Psychic"] },
    { number: "0200", name: "Misdreavus", types: ["Ghost"] },
    { number: "0201", name: "Unown", types: ["Psychic"] },
    { number: "0202", name: "Wobbuffet", types: ["Psychic"] },
    { number: "0203", name: "Girafarig", types: ["Normal", "Psychic"] },
    { number: "0204", name: "Pineco", types: ["Bug"] },
    { number: "0205", name: "Forretress", types: ["Bug", "Steel"] },
    { number: "0206", name: "Dunsparce", types: ["Normal"] },
    { number: "0207", name: "Gligar", types: ["Ground", "Flying"] },
    { number: "0208", name: "Steelix", types: ["Steel", "Ground"] },
    { number: "0209", name: "Snubbull", types: ["Fairy"] },
    { number: "0210", name: "Granbull", types: ["Fairy"] },
    { number: "0211", name: "Qwilfish", types: ["Water", "Poison"] },
    { number: "0212", name: "Scizor", types: ["Bug", "Steel"] },
    { number: "0213", name: "Shuckle", types: ["Bug", "Rock"] },
    { number: "0214", name: "Heracross", types: ["Bug", "Fighting"] },
    { number: "0215", name: "Sneasel", types: ["Dark", "Ice"] },
    { number: "0216", name: "Teddiursa", types: ["Normal"] },
    { number: "0217", name: "Ursaring", types: ["Normal"] },
    { number: "0218", name: "Slugma", types: ["Fire"] },
    { number: "0219", name: "Magcargo", types: ["Fire", "Rock"] },
    { number: "0220", name: "Swinub", types: ["Ice", "Ground"] },
    { number: "0221", name: "Piloswine", types: ["Ice", "Ground"] },
    { number: "0222", name: "Corsola", types: ["Water", "Rock"] },
    { number: "0223", name: "Remoraid", types: ["Water"] },
    { number: "0224", name: "Octillery", types: ["Water"] },
    { number: "0225", name: "Delibird", types: ["Ice", "Flying"] },
    { number: "0226", name: "Mantine", types: ["Water", "Flying"] },
    { number: "0227", name: "Skarmory", types: ["Steel", "Flying"] },
    { number: "0228", name: "Houndour", types: ["Dark", "Fire"] },
    { number: "0229", name: "Houndoom", types: ["Dark", "Fire"] },
    { number: "0230", name: "Kingdra", types: ["Water", "Dragon"] },
    { number: "0231", name: "Phanpy", types: ["Ground"] },
    { number: "0232", name: "Donphan", types: ["Ground"] },
    { number: "0233", name: "Porygon2", types: ["Normal"] },
    { number: "0234", name: "Stantler", types: ["Normal"] },
    { number: "0235", name: "Smeargle", types: ["Normal"] },
    { number: "0236", name: "Tyrogue", types: ["Fighting"] },
    { number: "0237", name: "Hitmontop", types: ["Fighting"] },
    { number: "0238", name: "Smoochum", types: ["Ice", "Psychic"] },
    { number: "0239", name: "Elekid", types: ["Electric"] },
    { number: "0240", name: "Magby", types: ["Fire"] },
    { number: "0241", name: "Miltank", types: ["Normal"] },
    { number: "0242", name: "Blissey", types: ["Normal"] },
    { number: "0243", name: "Raikou", types: ["Electric"] },
    { number: "0244", name: "Entei", types: ["Fire"] },
    { number: "0245", name: "Suicune", types: ["Water"] },
    { number: "0246", name: "Larvitar", types: ["Rock", "Ground"] },
    { number: "0247", name: "Pupitar", types: ["Rock", "Ground"] },
    { number: "0248", name: "Tyranitar", types: ["Rock", "Dark"] },
    { number: "0249", name: "Lugia", types: ["Psychic", "Flying"] },
    { number: "0250", name: "Ho-Oh", types: ["Fire", "Flying"] },
    { number: "0251", name: "Celebi", types: ["Psychic", "Grass"] },
    { number: "0252", name: "Treecko", types: ["Grass"] },
    { number: "0253", name: "Grovyle", types: ["Grass"] },
    { number: "0254", name: "Sceptile", types: ["Grass"] },
    { number: "0255", name: "Torchic", types: ["Fire"] },
    { number: "0256", name: "Combusken", types: ["Fire", "Fighting"] },
    { number: "0257", name: "Blaziken", types: ["Fire", "Fighting"] },
    { number: "0258", name: "Mudkip", types: ["Water"] },
    { number: "0259", name: "Marshtomp", types: ["Water", "Ground"] },
    { number: "0260", name: "Swampert", types: ["Water", "Ground"] },
    { number: "0261", name: "Poochyena", types: ["Dark"] },
    { number: "0262", name: "Mightyena", types: ["Dark"] },
    { number: "0263", name: "Zigzagoon", types: ["Normal"] },
    { number: "0264", name: "Linoone", types: ["Normal"] },
    { number: "0265", name: "Wurmple", types: ["Bug"] },
    { number: "0266", name: "Silcoon", types: ["Bug"] },
    { number: "0267", name: "Beautifly", types: ["Bug", "Flying"] },
    { number: "0268", name: "Cascoon", types: ["Bug"] },
    { number: "0269", name: "Dustox", types: ["Bug", "Poison"] },
    { number: "0270", name: "Lotad", types: ["Water", "Grass"] },
    { number: "0271", name: "Lombre", types: ["Water", "Grass"] },
    { number: "0272", name: "Ludicolo", types: ["Water", "Grass"] },
    { number: "0273", name: "Seedot", types: ["Grass"] },
    { number: "0274", name: "Nuzleaf", types: ["Grass", "Dark"] },
    { number: "0275", name: "Shiftry", types: ["Grass", "Dark"] },
    { number: "0276", name: "Taillow", types: ["Normal", "Flying"] },
    { number: "0277", name: "Swellow", types: ["Normal", "Flying"] },
    { number: "0278", name: "Wingull", types: ["Water", "Flying"] },
    { number: "0279", name: "Pelipper", types: ["Water", "Flying"] },
    { number: "0280", name: "Ralts", types: ["Psychic", "Fairy"] },
    { number: "0281", name: "Kirlia", types: ["Psychic", "Fairy"] },
    { number: "0282", name: "Gardevoir", types: ["Psychic", "Fairy"] },
    { number: "0283", name: "Surskit", types: ["Bug", "Water"] },
    { number: "0284", name: "Masquerain", types: ["Bug", "Flying"] },
    { number: "0285", name: "Shroomish", types: ["Grass"] },
    { number: "0286", name: "Breloom", types: ["Grass", "Fighting"] },
    { number: "0287", name: "Slakoth", types: ["Normal"] },
    { number: "0288", name: "Vigoroth", types: ["Normal"] },
    { number: "0289", name: "Slaking", types: ["Normal"] },
    { number: "0290", name: "Nincada", types: ["Bug", "Ground"] },
    { number: "0291", name: "Ninjask", types: ["Bug", "Flying"] },
    { number: "0292", name: "Shedinja", types: ["Bug", "Ghost"] },
    { number: "0293", name: "Whismur", types: ["Normal"] },
    { number: "0294", name: "Loudred", types: ["Normal"] },
    { number: "0295", name: "Exploud", types: ["Normal"] },
    { number: "0296", name: "Makuhita", types: ["Fighting"] },
    { number: "0297", name: "Hariyama", types: ["Fighting"] },
    { number: "0298", name: "Azurill", types: ["Normal", "Fairy"] },
    { number: "0299", name: "Nosepass", types: ["Rock"] },
    { number: "0300", name: "Skitty", types: ["Normal"] },
    { number: "0301", name: "Delcatty", types: ["Normal"] },
    { number: "0302", name: "Sableye", types: ["Dark", "Ghost"] },
    { number: "0303", name: "Mawile", types: ["Steel", "Fairy"] },
    { number: "0304", name: "Aron", types: ["Steel", "Rock"] },
    { number: "0305", name: "Lairon", types: ["Steel", "Rock"] },
    { number: "0306", name: "Aggron", types: ["Steel", "Rock"] },
    { number: "0307", name: "Meditite", types: ["Fighting", "Psychic"] },
    { number: "0308", name: "Medicham", types: ["Fighting", "Psychic"] },
    { number: "0309", name: "Electrike", types: ["Electric"] },
    { number: "0310", name: "Manectric", types: ["Electric"] },
    { number: "0311", name: "Plusle", types: ["Electric"] },
    { number: "0312", name: "Minun", types: ["Electric"] },
    { number: "0313", name: "Volbeat", types: ["Bug"] },
    { number: "0314", name: "Illumise", types: ["Bug"] },
    { number: "0315", name: "Roselia", types: ["Grass", "Poison"] },
    { number: "0316", name: "Gulpin", types: ["Poison"] },
    { number: "0317", name: "Swalot", types: ["Poison"] },
    { number: "0318", name: "Carvanha", types: ["Water", "Dark"] },
    { number: "0319", name: "Sharpedo", types: ["Water", "Dark"] },
    { number: "0320", name: "Wailmer", types: ["Water"] },
    { number: "0321", name: "Wailord", types: ["Water"] },
    { number: "0322", name: "Numel", types: ["Fire", "Ground"] },
    { number: "0323", name: "Camerupt", types: ["Fire", "Ground"] },
    { number: "0324", name: "Torkoal", types: ["Fire"] },
    { number: "0325", name: "Spoink", types: ["Psychic"] },
    { number: "0326", name: "Grumpig", types: ["Psychic"] },
    { number: "0327", name: "Spinda", types: ["Normal"] },
    { number: "0328", name: "Trapinch", types: ["Ground"] },
    { number: "0329", name: "Vibrava", types: ["Ground", "Dragon"] },
    { number: "0330", name: "Flygon", types: ["Ground", "Dragon"] },
    { number: "0331", name: "Cacnea", types: ["Grass"] },
    { number: "0332", name: "Cacturne", types: ["Grass", "Dark"] },
    { number: "0333", name: "Swablu", types: ["Normal", "Flying"] },
    { number: "0334", name: "Altaria", types: ["Dragon", "Flying"] },
    { number: "0335", name: "Zangoose", types: ["Normal"] },
    { number: "0336", name: "Seviper", types: ["Poison"] },
    { number: "0337", name: "Lunatone", types: ["Rock", "Psychic"] },
    { number: "0338", name: "Solrock", types: ["Rock", "Psychic"] },
    { number: "0339", name: "Barboach", types: ["Water", "Ground"] },
    { number: "0340", name: "Whiscash", types: ["Water", "Ground"] },
    { number: "0341", name: "Corphish", types: ["Water"] },
    { number: "0342", name: "Crawdaunt", types: ["Water", "Dark"] },
    { number: "0343", name: "Baltoy", types: ["Ground", "Psychic"] },
    { number: "0344", name: "Claydol", types: ["Ground", "Psychic"] },
    { number: "0345", name: "Lileep", types: ["Rock", "Grass"] },
    { number: "0346", name: "Cradily", types: ["Rock", "Grass"] },
    { number: "0347", name: "Anorith", types: ["Rock", "Bug"] },
    { number: "0348", name: "Armaldo", types: ["Rock", "Bug"] },
    { number: "0349", name: "Feebas", types: ["Water"] },
    { number: "0350", name: "Milotic", types: ["Water"] },
    { number: "0351", name: "Castform", types: ["Normal"] },
    { number: "0352", name: "Kecleon", types: ["Normal"] },
    { number: "0353", name: "Shuppet", types: ["Ghost"] },
    { number: "0354", name: "Banette", types: ["Ghost"] },
    { number: "0355", name: "Duskull", types: ["Ghost"] },
    { number: "0356", name: "Dusclops", types: ["Ghost"] },
    { number: "0357", name: "Tropius", types: ["Grass", "Flying"] },
    { number: "0358", name: "Chimecho", types: ["Psychic"] },
    { number: "0359", name: "Absol", types: ["Dark"] },
    { number: "0360", name: "Wynaut", types: ["Psychic"] },
    { number: "0361", name: "Snorunt", types: ["Ice"] },
    { number: "0362", name: "Glalie", types: ["Ice"] },
    { number: "0363", name: "Spheal", types: ["Ice", "Water"] },
    { number: "0364", name: "Sealeo", types: ["Ice", "Water"] },
    { number: "0365", name: "Walrein", types: ["Ice", "Water"] },
    { number: "0366", name: "Clamperl", types: ["Water"] },
    { number: "0367", name: "Huntail", types: ["Water"] },
    { number: "0368", name: "Gorebyss", types: ["Water"] },
    { number: "0369", name: "Relicanth", types: ["Water", "Rock"] },
    { number: "0370", name: "Luvdisc", types: ["Water"] },
    { number: "0371", name: "Bagon", types: ["Dragon"] },
    { number: "0372", name: "Shelgon", types: ["Dragon"] },
    { number: "0373", name: "Salamence", types: ["Dragon", "Flying"] },
    { number: "0374", name: "Beldum", types: ["Steel", "Psychic"] },
    { number: "0375", name: "Metang", types: ["Steel", "Psychic"] },
    { number: "0376", name: "Metagross", types: ["Steel", "Psychic"] },
    { number: "0377", name: "Regirock", types: ["Rock"] },
    { number: "0378", name: "Regice", types: ["Ice"] },
    { number: "0379", name: "Registeel", types: ["Steel"] },
    { number: "0380", name: "Latias", types: ["Dragon", "Psychic"] },
    { number: "0381", name: "Latios", types: ["Dragon", "Psychic"] },
    { number: "0382", name: "Kyogre", types: ["Water"] },
    { number: "0383", name: "Groudon", types: ["Ground"] },
    { number: "0384", name: "Rayquaza", types: ["Dragon", "Flying"] },
    { number: "0385", name: "Jirachi", types: ["Steel", "Psychic"] },
    { number: "0386", name: "Deoxys", types: ["Psychic"] },
    { number: "0387", name: "Turtwig", types: ["Grass"] },
    { number: "0388", name: "Grotle", types: ["Grass"] },
    { number: "0389", name: "Torterra", types: ["Grass", "Ground"] },
    { number: "0390", name: "Chimchar", types: ["Fire"] },
    { number: "0391", name: "Monferno", types: ["Fire", "Fighting"] },
    { number: "0392", name: "Infernape", types: ["Fire", "Fighting"] },
    { number: "0393", name: "Piplup", types: ["Water"] },
    { number: "0394", name: "Prinplup", types: ["Water"] },
    { number: "0395", name: "Empoleon", types: ["Water", "Steel"] },
    { number: "0396", name: "Starly", types: ["Normal", "Flying"] },
    { number: "0397", name: "Staravia", types: ["Normal", "Flying"] },
    { number: "0398", name: "Staraptor", types: ["Normal", "Flying"] },
    { number: "0399", name: "Bidoof", types: ["Normal"] },
    { number: "0400", name: "Bibarel", types: ["Normal", "Water"] },
    { number: "0401", name: "Kricketot", types: ["Bug"] },
    { number: "0402", name: "Kricketune", types: ["Bug"] },
    { number: "0403", name: "Shinx", types: ["Electric"] },
    { number: "0404", name: "Luxio", types: ["Electric"] },
    { number: "0405", name: "Luxray", types: ["Electric"] },
    { number: "0406", name: "Budew", types: ["Grass", "Poison"] },
    { number: "0407", name: "Roserade", types: ["Grass", "Poison"] },
    { number: "0408", name: "Cranidos", types: ["Rock"] },
    { number: "0409", name: "Rampardos", types: ["Rock"] },
    { number: "0410", name: "Shieldon", types: ["Rock", "Steel"] },
    { number: "0411", name: "Bastiodon", types: ["Rock", "Steel"] },
    { number: "0412", name: "Burmy", types: ["Bug"] },
    { number: "0413", name: "Wormadam", types: ["Bug", "Grass"] },
    { number: "0414", name: "Mothim", types: ["Bug", "Flying"] },
    { number: "0415", name: "Combee", types: ["Bug", "Flying"] },
    { number: "0416", name: "Vespiquen", types: ["Bug", "Flying"] },
    { number: "0417", name: "Pachirisu", types: ["Electric"] },
    { number: "0418", name: "Buizel", types: ["Water"] },
    { number: "0419", name: "Floatzel", types: ["Water"] },
    { number: "0420", name: "Cherubi", types: ["Grass"] },
    { number: "0421", name: "Cherrim", types: ["Grass"] },
    { number: "0422", name: "Shellos", types: ["Water"] },
    { number: "0423", name: "Gastrodon", types: ["Water", "Ground"] },
    { number: "0424", name: "Ambipom", types: ["Normal"] },
    { number: "0425", name: "Drifloon", types: ["Ghost", "Flying"] },
    { number: "0426", name: "Drifblim", types: ["Ghost", "Flying"] },
    { number: "0427", name: "Buneary", types: ["Normal"] },
    { number: "0428", name: "Lopunny", types: ["Normal"] },
    { number: "0429", name: "Mismagius", types: ["Ghost"] },
    { number: "0430", name: "Honchkrow", types: ["Dark", "Flying"] },
    { number: "0431", name: "Glameow", types: ["Normal"] },
    { number: "0432", name: "Purugly", types: ["Normal"] },
    { number: "0433", name: "Chingling", types: ["Psychic"] },
    { number: "0434", name: "Stunky", types: ["Poison", "Dark"] },
    { number: "0435", name: "Skuntank", types: ["Poison", "Dark"] },
    { number: "0436", name: "Bronzor", types: ["Steel", "Psychic"] },
    { number: "0437", name: "Bronzong", types: ["Steel", "Psychic"] },
    { number: "0438", name: "Bonsly", types: ["Rock"] },
    { number: "0439", name: "Mime Jr.", types: ["Psychic", "Fairy"] },
    { number: "0440", name: "Happiny", types: ["Normal"] },
    { number: "0441", name: "Chatot", types: ["Normal", "Flying"] },
    { number: "0442", name: "Spiritomb", types: ["Ghost", "Dark"] },
    { number: "0443", name: "Gible", types: ["Dragon", "Ground"] },
    { number: "0444", name: "Gabite", types: ["Dragon", "Ground"] },
    { number: "0445", name: "Garchomp", types: ["Dragon", "Ground"] },
    { number: "0446", name: "Munchlax", types: ["Normal"] },
    { number: "0447", name: "Riolu", types: ["Fighting"] },
    { number: "0448", name: "Lucario", types: ["Fighting", "Steel"] },
    { number: "0449", name: "Hippopotas", types: ["Ground"] },
    { number: "0450", name: "Hippowdon", types: ["Ground"] },
    { number: "0451", name: "Skorupi", types: ["Poison", "Bug"] },
    { number: "0452", name: "Drapion", types: ["Poison", "Dark"] }
];

// Define type chart with strengths and weaknesses
const typeChart = {
    "Normal": { strongAgainst: [], weakAgainst: ["Fighting"] },
    "Fire": { strongAgainst: ["Grass", "Bug", "Ice", "Steel"], weakAgainst: ["Water", "Rock", "Fire", "Dragon"] },
    "Water": { strongAgainst: ["Fire", "Ground", "Rock"], weakAgainst: ["Water", "Grass", "Dragon"] },
    "Electric": { strongAgainst: ["Water", "Flying"], weakAgainst: ["Ground", "Electric", "Grass", "Dragon"] },
    "Grass": { strongAgainst: ["Water", "Ground", "Rock"], weakAgainst: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"] },
    "Ice": { strongAgainst: ["Grass", "Ground", "Flying", "Dragon"], weakAgainst: ["Fire", "Water", "Ice", "Steel"] },
    "Fighting": { strongAgainst: ["Normal", "Rock", "Steel", "Ice", "Dark"], weakAgainst: ["Flying", "Psychic", "Fairy"] },
    "Poison": { strongAgainst: ["Grass", "Fairy"], weakAgainst: ["Poison", "Ground", "Rock", "Ghost"] },
    "Ground": { strongAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"], weakAgainst: ["Grass", "Ice", "Water"] },
    "Flying": { strongAgainst: ["Grass", "Fighting", "Bug"], weakAgainst: ["Electric", "Ice", "Rock"] },
    "Psychic": { strongAgainst: ["Fighting", "Poison"], weakAgainst: ["Psychic", "Steel", "Dark"] },
    "Bug": { strongAgainst: ["Grass", "Psychic", "Dark"], weakAgainst: ["Fire", "Flying", "Rock"] },
    "Rock": { strongAgainst: ["Fire", "Ice", "Flying", "Bug"], weakAgainst: ["Water", "Grass", "Fighting", "Ground", "Steel"] },
    "Ghost": { strongAgainst: ["Psychic", "Ghost"], weakAgainst: ["Dark"] },
    "Dragon": { strongAgainst: ["Dragon"], weakAgainst: ["Ice", "Fairy", "Steel"] },
    "Dark": { strongAgainst: ["Psychic", "Ghost"], weakAgainst: ["Fighting", "Fairy", "Bug"] },
    "Steel": { strongAgainst: ["Ice", "Rock", "Fairy"], weakAgainst: ["Fire", "Fighting", "Ground"] },
    "Fairy": { strongAgainst: ["Fighting", "Dragon", "Dark"], weakAgainst: ["Steel", "Poison"] }
};
// Function to populate dropdowns
function populateDropdowns() {
    const pokemonSelects = document.querySelectorAll('.pokemon-select');
    pokemonList.forEach(pokemon => {
        pokemonSelects.forEach(select => {
            let option = document.createElement('option');
            option.value = pokemon.name;
            option.textContent = `${pokemon.name}`;
            select.appendChild(option);
        });
    });
}

// Function to update dropdown based on input code
function updateDropdownFromCode(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    input.addEventListener('input', function () {
        const enteredCode = input.value;
        const matchingPokemon = pokemonList.find(pokemon => pokemon.number === enteredCode);

        if (matchingPokemon) {
            dropdown.value = matchingPokemon.name;
            calculateMatchups();
        }
    });
}

// Function to update dropdown based on search input
function updateDropdownFromSearch(searchId, dropdownId) {
    const searchInput = document.getElementById(searchId);
    const dropdown = document.getElementById(dropdownId);

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const matchingPokemon = pokemonList.find(pokemon => pokemon.name.toLowerCase().includes(searchTerm));

        if (matchingPokemon) {
            dropdown.value = matchingPokemon.name;
            calculateMatchups();
        }
    });
}

// Initialize dropdowns on page load
populateDropdowns();

// Set up event listeners for 4-digit code inputs
updateDropdownFromCode('pokemonCode1', 'pokemon1');
updateDropdownFromCode('pokemonCode2', 'pokemon2');
updateDropdownFromCode('pokemonCode3', 'pokemon3');

// Set up event listeners for search inputs
updateDropdownFromSearch('pokemonSearch1', 'pokemon1');
updateDropdownFromSearch('pokemonSearch2', 'pokemon2');
updateDropdownFromSearch('pokemonSearch3', 'pokemon3');

// Calculate and display strengths, weaknesses, and neutral matchups
function calculateMatchups() {
    const selectedPokemon = [];
    const selects = document.querySelectorAll('.pokemon-select');

    const strengthsMap = new Map();
    const weaknessesMap = new Map();

    // Collect selected Pokémon
    selects.forEach(select => {
        const pokemonName = select.value;
        if (pokemonName) {
            const selected = pokemonList.find(p => p.name === pokemonName);
            selectedPokemon.push(selected);
        }
    });

    if (selectedPokemon.length === 0) {
        return;
    }

    // Clear previous results
    document.querySelector('#strengths ul').innerHTML = "";
    document.querySelector('#weaknesses ul').innerHTML = "";
    
    let criticalStrengthCount = 0;
    let criticalWeaknessCount = 0;

    // Collect and store strengths and weaknesses along with the Pokémon names
    selectedPokemon.forEach(pokemon => {
        pokemon.types.forEach(type => {
            const matchup = typeChart[type];
            if (matchup) {
                // Process strengths
                matchup.strongAgainst.forEach(strongType => {
                    if (!strengthsMap.has(strongType)) {
                        strengthsMap.set(strongType, new Set());
                    }
                    strengthsMap.get(strongType).add(pokemon.name);
                });

                // Process weaknesses
                matchup.weakAgainst.forEach(weakType => {
                    if (!weaknessesMap.has(weakType)) {
                        weaknessesMap.set(weakType, new Set());
                    }
                    weaknessesMap.get(weakType).add(pokemon.name);
                });
            }
        });
    });

    // Function to display sorted strengths and weaknesses with color logic
    function displayResults() {
        const strengthsUl = document.querySelector('#strengths ul');
        const weaknessesUl = document.querySelector('#weaknesses ul');

        const allTypes = new Set([...strengthsMap.keys(), ...weaknessesMap.keys()]);

        const boldedStrengths = [];
        const regularStrengths = [];
        const boldedWeaknesses = [];
        const regularWeaknesses = [];

        allTypes.forEach(type => {
            const strengthsPokemon = strengthsMap.get(type) || new Set();
            const weaknessesPokemon = weaknessesMap.get(type) || new Set();

            const strengthCount = strengthsPokemon.size;
            const weaknessCount = weaknessesPokemon.size;

            let strengthColor = "";
            let weaknessColor = "";

            if (strengthCount > 1 && weaknessCount === 0) {
                strengthColor = "#0EAD69";  // Green for strong type, no weaknesses (CRITICAL STRENGTH)
                criticalStrengthCount++; // Increment critical strength count
            }

            if (weaknessCount > 1 && strengthCount === 0) {
                weaknessColor = "#EE4266";  // Red for weak type, no strengths (CRITICAL WEAKNESS)
                criticalWeaknessCount++; // Increment critical weakness count
            }

            if (strengthCount > 0 && weaknessCount > 0) {
                strengthColor = "#000000";  // Black for both strength and weakness (NORMAL)
                weaknessColor = "#000000";  // Same color on the weaknesses side
            }

            // Display strength in strengths list
            if (strengthCount > 0) {
                const liStrength = document.createElement('li');
                liStrength.textContent = `${type} (Strengths: ${Array.from(strengthsPokemon).join(', ')})`;
                liStrength.style.fontWeight = strengthCount > 1 ? 'bold' : 'normal';
                liStrength.style.color = strengthColor;

                if (strengthCount > 1) {
                    boldedStrengths.push(liStrength);
                } else {
                    regularStrengths.push(liStrength);
                }
            }

            // Display weakness in weaknesses list
            if (weaknessCount > 0) {
                const liWeakness = document.createElement('li');
                liWeakness.textContent = `${type} (Weaknesses: ${Array.from(weaknessesPokemon).join(', ')})`;
                liWeakness.style.fontWeight = weaknessCount > 1 ? 'bold' : 'normal';
                liWeakness.style.color = weaknessColor;

                if (weaknessCount > 1) {
                    boldedWeaknesses.push(liWeakness);
                } else {
                    regularWeaknesses.push(liWeakness);
                }
            }
        });

        // Sort and append bolded items first, then regular ones
        boldedStrengths.sort((a, b) => a.textContent.localeCompare(b.textContent));
        regularStrengths.sort((a, b) => a.textContent.localeCompare(b.textContent));
        boldedWeaknesses.sort((a, b) => a.textContent.localeCompare(b.textContent));
        regularWeaknesses.sort((a, b) => a.textContent.localeCompare(b.textContent));

        boldedStrengths.forEach(li => strengthsUl.appendChild(li));
        regularStrengths.forEach(li => strengthsUl.appendChild(li));
        boldedWeaknesses.forEach(li => weaknessesUl.appendChild(li));
        regularWeaknesses.forEach(li => weaknessesUl.appendChild(li));

        // Display critical strengths and weaknesses count
        document.getElementById('critical-strength-count').textContent = `Critical Strengths: ${criticalStrengthCount}`;
        document.getElementById('critical-weakness-count').textContent = `Critical Weaknesses: ${criticalWeaknessCount}`;
    }

    // Display strengths and weaknesses
    displayResults();
}

// Event listeners for Pokémon selection
document.querySelectorAll('.pokemon-select').forEach(select => {
    select.addEventListener('change', calculateMatchups);
});
