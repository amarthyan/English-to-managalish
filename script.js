/* =============================================
   MANGLISH CONVERTER — script.js
   Pure Vanilla JS | No dependencies
   ============================================= */

/* ─── Manglish Dictionary ─────────────────────
   Covers pronouns, verbs, nouns, locations,
   common expressions, and more.
   ─────────────────────────────────────────── */
const MANGLISH_DICT = {
  // Pronouns
  "i":          "njan",
  "me":         "enikku",
  "my":         "ente",
  "mine":       "enteyathu",
  "myself":     "njaan thanne",
  "we":         "nammal",
  "us":         "namukku",
  "our":        "nammalude",
  "you":        "nee",
  "your":       "ninte",
  "yours":      "ninteyathu",
  "yourself":   "nee thanne",
  "he":         "avan",
  "him":        "avane",
  "his":        "avante",
  "himself":    "avan thanne",
  "she":        "aval",
  "her":        "avalude",
  "hers":       "avaludeyathu",
  "herself":    "aval thanne",
  "they":       "avaru",
  "them":       "avare",
  "their":      "avarude",
  "it":         "athu",
  "its":        "athinte",

  // Common verbs
  "go":         "po",
  "goes":       "pokkunnu",
  "going":      "pokunnathu",
  "went":       "poyi",
  "gone":       "poyi",
  "come":       "vaa",
  "comes":      "varunnu",
  "coming":     "varuvathu",
  "came":       "vannu",
  "eat":        "kazhikka",
  "eats":       "kazhikkunnu",
  "eating":     "kazhikkunnathu",
  "ate":        "kazhichu",
  "eaten":      "kazhichu",
  "drink":      "kudikka",
  "drinks":     "kudikunnu",
  "drinking":   "kudikunnathu",
  "drank":      "kudichu",
  "see":        "kaanan",
  "sees":       "kaanunnu",
  "saw":        "kandu",
  "seen":       "kandittundu",
  "look":       "noke",
  "looked":     "nokki",
  "looking":    "nokkunnathu",
  "know":       "ariyam",
  "knew":       "ariyamaayirunnu",
  "known":      "ariyamaayirunnu",
  "think":      "vichaarikka",
  "thought":    "vichaariche",
  "say":        "parayan",
  "said":       "parannu",
  "tell":       "parayan",
  "told":       "parannu",
  "ask":        "chodyikka",
  "asked":      "chodyiche",
  "give":       "tharika",
  "gave":       "thannu",
  "get":        "kittuka",
  "got":        "kitti",
  "take":       "edukkuka",
  "took":       "eduthu",
  "make":       "undakkuka",
  "made":       "undaakki",
  "do":         "cheytha",
  "does":       "cheyyunnu",
  "did":        "cheytu",
  "done":       "cheythu",
  "work":       "pani cheyyuka",
  "worked":     "pani cheytu",
  "working":    "pani cheyyunnu",
  "play":       "kazhinju",
  "played":     "kazhinju",
  "playing":    "kazhinju",
  "sleep":      "urakkam",
  "slept":      "urangu",
  "sleeping":   "urangunnu",
  "run":        "orukka",
  "ran":        "ornje",
  "running":    "orunnu",
  "talk":       "saari",
  "talked":     "saarichu",
  "talking":    "saarichukond",
  "buy":        "vaangu",
  "bought":     "vaangi",
  "buying":     "vaangukond",
  "sell":       "vikkuka",
  "sold":       "vikki",
  "call":       "vilikka",
  "called":     "viliche",
  "calling":    "vilikkunnu",
  "wait":       "kaathu nirkku",
  "waited":     "kaathu nirnje",
  "waiting":    "kaathu nirkkunnu",
  "help":       "sahaayikka",
  "helped":     "sahaayiche",
  "helping":    "sahaayikkunnu",
  "want":       "venom",
  "wanted":     "venmaayirunnu",
  "like":       "ishtam",
  "liked":      "ishtamaayirunnu",
  "love":       "snehikkunnu",
  "loved":      "sneham",
  "hate":       "verupp",
  "hated":      "veruppundu",
  "need":       "vaanam",
  "needed":     "vaanmaayirunnu",
  "try":        "nokku",
  "tried":      "nokkiye",
  "trying":     "nokkikond",
  "learn":      "padikka",
  "learned":    "padiche",
  "learning":   "padikkunnu",
  "study":      "padikkan",
  "studied":    "padiche",
  "studying":   "padikkunnu",
  "write":      "ezhuthuka",
  "wrote":      "ezhuthi",
  "read":       "vayikka",
  "listen":     "kekka",
  "watch":      "kaanuka",
  "watched":    "kandu",
  "understand": "manasilaayi",
  "forget":     "maranthu",
  "forgot":     "maranthu",
  "remember":   "ormayundu",
  "stay":       "nirkku",
  "stayed":     "nirnje",
  "leave":      "pokanam",
  "left":       "poyi",
  "start":      "thudankuu",
  "started":    "thudangi",
  "finish":     "kaanam",
  "finished":   "theernje",
  "open":       "thuravuka",
  "opened":     "thurannu",
  "close":      "adakkuka",
  "closed":     "adachu",
  "send":       "ayakkuka",
  "sent":       "ayache",
  "bring":      "konavaa",
  "brought":    "konandu vannu",
  "put":        "vekka",
  "keep":       "sookshikkuka",
  "find":       "kaanikka",
  "found":      "kittiye",
  "meet":       "kaanaan",
  "met":        "kandu",
  "hear":       "kekka",
  "heard":      "kette",
  "feel":       "thonn",
  "felt":       "thonniye",
  "live":       "jeevikka",
  "lived":      "jeeviche",

  // Common adjectives
  "good":       "nalla",
  "bad":        "mosham",
  "nice":       "nalla",
  "great":      "adipoli",
  "wonderful":  "adipoli",
  "amazing":    "maarumaari",
  "awesome":    "theri",
  "excellent":  "kidu",
  "terrible":   "mosham",
  "horrible":   "bhayankaram",
  "beautiful":  "sundaram",
  "ugly":       "mosham",
  "big":        "valiya",
  "small":      "cheriya",
  "large":      "valiya",
  "little":     "cheriya",
  "tall":       "uyaram",
  "short":      "kutti",
  "long":       "neelam",
  "fast":       "vega",
  "slow":       "patichu",
  "hot":        "chudu",
  "cold":       "thattu",
  "new":        "puthuya",
  "old":        "pazhaya",
  "happy":      "santhosham",
  "sad":        "dukham",
  "angry":      "ദേഷ്യamayirikkum",
  "tired":      "maruppu",
  "hungry":     "vishappund",
  "thirsty":    "ദahippund",
  "busy":       "thamasam",
  "free":       "taraattu",
  "rich":       "kayamaan",
  "poor":       "paavam",
  "funny":      "tharaka",
  "serious":    "garvamayi",
  "easy":       "oru veshamilla",
  "difficult":  "budhimuttund",
  "hard":       "budhimuttund",
  "soft":       "mulam",
  "clean":      "valicchitu",
  "dirty":      "avilokkottilla",
  "expensive":  "vila",
  "cheap":      "vila kammi",
  "healthy":    "aarogyam",
  "sick":       "roga",

  // Common nouns — people
  "friend":     "koottukaran",
  "friends":    "koottukaare",
  "brother":    "chettan",
  "sister":     "chechi",
  "mother":     "amma",
  "father":     "achan",
  "son":        "makan",
  "daughter":   "molu",
  "husband":    "bharthaav",
  "wife":       "bhaarya",
  "child":      "kutti",
  "children":   "kuttikale",
  "teacher":    "maash",
  "student":    "padipisttu",
  "doctor":     "doctor",
  "man":        "aal",
  "woman":      "stree",
  "boy":        "kochu",
  "girl":       "kochii",
  "people":     "aalkaar",
  "person":     "aalu",
  "boss":       "boss",
  "colleague":  "koottukaran",

  // Common nouns — food & drink
  "food":       "saapadu",
  "rice":       "choru",
  "water":      "vellam",
  "tea":        "chaya",
  "coffee":     "kaapi",
  "milk":       "paalu",
  "fish":       "meenu",
  "chicken":    "kozhi",
  "bread":      "pav",
  "egg":        "mutta",
  "curry":      "karivu",
  "lunch":      "uuralund",
  "dinner":     "raatriyile khanam",
  "breakfast":  "kaalachayum kaapiyum",
  "snack":      "theenu",
  "sweet":      "madhuram",
  "spicy":      "kaaram",
  "meal":       "khanam",
  "drink":      "kudikkan",
  "juice":      "juice",
  "salt":       "uppu",
  "sugar":      "sharkara",

  // Locations — with -il suffix for "at/in"
  "shop":       "shop-il",
  "shops":      "shop-ukkalil",
  "school":     "school-il",
  "office":     "office-il",
  "hospital":   "hospital-il",
  "temple":     "kshetram-il",
  "church":     "palli-il",
  "mosque":     "masjid-il",
  "market":     "chantha-il",
  "bank":       "bank-il",
  "hotel":      "hotel-il",
  "restaurant": "restaurantil",
  "house":      "veedu",
  "home":       "veedu",
  "kitchen":    "pakku",
  "room":       "muri",
  "bathroom":   "muri",
  "college":    "college-il",
  "university": "university-il",
  "station":    "station-il",
  "airport":    "airport-il",
  "bus":        "bes",
  "train":      "train",
  "car":        "car",
  "bike":       "bike",
  "road":       "vazhiyil",
  "city":       "nagaram",
  "village":    "gramam",
  "country":    "naadum",
  "state":      "raajyam",
  "place":      "idam",

  // Time words
  "today":      "innu",
  "yesterday":  "innale",
  "tomorrow":   "naale",
  "now":        "ippol",
  "then":       "appol",
  "always":     "eppozhum",
  "never":      "onnum illennaal",
  "sometimes":  "chila neraththe",
  "often":      "kooduthal",
  "soon":       "petti",
  "late":       "vaikki",
  "early":      "munphe",
  "morning":    "raavile",
  "evening":    "vychantthe",
  "night":      "raathriyil",
  "week":       "aara",
  "month":      "maasam",
  "year":       "koollam",
  "time":       "samayam",
  "minute":     "minute",
  "hour":       "manikku",
  "day":        "divasam",

  // Common words & expressions
  "yes":        "aan",
  "no":         "alla",
  "ok":         "sheri",
  "okay":       "sheri",
  "thanks":     "nandi",
  "thank":      "nandi",
  "sorry":      "maafi",
  "please":     "dayavaayi",
  "welcome":    "swagatham",
  "hello":      "ente amma",
  "bye":        "poreee",
  "what":       "enthaanu",
  "where":      "evide",
  "when":       "eappol",
  "why":        "enthu kondaanu",
  "how":        "engane",
  "who":        "aara",
  "which":      "evide",
  "here":       "ivide",
  "there":      "avide",
  "this":       "ithu",
  "that":       "athu",
  "these":      "ivare",
  "those":      "avare",
  "very":       "valare",
  "much":       "ettaram",
  "more":       "koodutal",
  "less":       "kuracche",
  "too":        "koodiye",
  "also":       "kudiye",
  "only":       "mathram",
  "just":       "ingane",
  "really":     "ishtaarttham",
  "again":      "vere",
  "already":    "munphe thanne",
  "still":      "ippozum",
  "back":       "thirichu",
  "together":   "koode",
  "alone":      "okka",
  "money":      "kaasum",
  "problem":    "prasnam",
  "matter":     "vishayam",
  "thing":      "karyam",
  "things":     "kaaryangal",
  "way":        "vazhiyundu",
  "name":       "peru",
  "number":     "number",
  "phone":      "phone",
  "message":    "message",
  "news":       "varthanam",
  "story":      "kadha",
  "picture":    "photo",
  "photo":      "photo",
  "video":      "video",
  "music":      "paattu",
  "song":       "paattu",
  "game":       "kazhinju",
  "work":       "pani",
  "job":        "pani",
  "life":       "jeevitham",
  "world":      "lokam",
  "god":        "bhagavan",
  "heart":      "manasuuu",
  "mind":       "manasuuu",
  "hand":       "kai",
  "eye":        "kannu",
  "head":       "thaala",
  "face":       "mukham",
  "body":       "deham",
  "hair":       "mudiyull",
  "mouth":      "vaa",
  "nose":       "mookku",
  "ear":        "chevi",
  "leg":        "kaalu",
  "foot":       "kaalu",

  // Fillers & Manglish flavour words
  "actually":   "asalil",
  "basically":  "arttham",
  "literally":  "ishtaarttham",
  "definitely": "theerchayayum",
  "obviously":  "ariyaavunna",
  "finally":    "aakhiram",
  "anyway":     "ingane enthai",
  "though":     "enkil‌koode",
  "but":        "pakshe",
  "and":        "um",
  "or":         "athwa",
  "if":         "engil",
  "because":    "eenthukondu",
  "so":         "potti",
  "then":       "appol",
  "for":        "vendi",
  "with":       "koode",
  "without":    "illathe",
  "about":      "kurichu",
  "after":      "shesham",
  "before":     "munpe",
  "during":     "samaiyam",
  "between":    "naduvil",
  "under":      "thaazhe",
  "above":      "muthale",
  "inside":     "ullil",
  "outside":    "puraththe",
  "near":       "arukil",
  "far":        "dooram",
  "until":      "vare",
  "while":      "appol",
  "since":      "muthal",
};

/* ─── Location words that get -il suffix ─────── */
const LOCATION_WORDS = new Set([
  "shop", "school", "office", "hospital", "temple",
  "church", "mosque", "market", "bank", "hotel",
  "restaurant", "college", "university", "station", "airport",
  "park", "beach", "gym", "library", "mall"
]);

/* ─── Conversion Logic ──────────────────────── */
function convertToManglish(inputText) {
  const words = inputText.split(/(\s+|(?=[.,!?;:()])|(?<=[.,!?;:()]))/);
  let converted = 0;
  let unchanged = 0;

  const resultWords = words.map(token => {
    // Keep whitespace/punctuation tokens as-is
    if (/^\s*$/.test(token) || /^[.,!?;:()]+$/.test(token)) return token;

    // Strip leading/trailing punctuation from word
    const match = token.match(/^([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*)$/);
    if (!match) return token;

    const [, prefix, word, suffix] = match;
    const lowerWord = word.toLowerCase();

    // Check if it's a location word without explicit mapping
    let manglish;
    if (LOCATION_WORDS.has(lowerWord) && !MANGLISH_DICT[lowerWord]) {
      manglish = lowerWord + "-il";
    } else {
      manglish = MANGLISH_DICT[lowerWord];
    }

    if (manglish !== undefined) {
      converted++;
      // Preserve original capitalisation pattern
      const result = preserveCase(word, manglish);
      return prefix + result + suffix;
    } else {
      unchanged++;
      return token;
    }
  });

  return {
    text: resultWords.join(""),
    converted,
    unchanged
  };
}

/* Preserve capitalisation of original word on the manglish word */
function preserveCase(original, replacement) {
  if (original === original.toUpperCase() && original.length > 1) {
    return replacement.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

/* ─── UI helpers ─────────────────────────────── */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function updateStats(converted, unchanged) {
  document.getElementById("wordsConverted").textContent = `✅ Converted: ${converted}`;
  document.getElementById("wordsUnchanged").textContent = `⏭️ Unchanged: ${unchanged}`;
}

/* ─── Dictionary Grid ────────────────────────── */
function renderDictGrid() {
  const grid = document.getElementById("dictGrid");
  // Pick a curated showcase of entries
  const showcase = [
    ["i", "you", "he", "she", "we", "friend", "mother", "father",
     "brother", "sister", "food", "rice", "tea", "water", "fish",
     "shop", "school", "office", "house", "yes", "no", "thanks",
     "sorry", "hello", "bye", "good", "bad", "happy", "sad", "today",
     "tomorrow", "now", "love", "money", "problem", "work", "god"]
  ].flat();

  showcase.forEach(en => {
    const ml = MANGLISH_DICT[en];
    if (!ml) return;
    const chip = document.createElement("div");
    chip.className = "dict-chip";
    chip.innerHTML = `
      <span class="dict-chip-en">${en}</span>
      <span class="dict-chip-arrow">↓</span>
      <span class="dict-chip-ml">${ml}</span>
    `;
    grid.appendChild(chip);
  });
}

/* ─── Theme Toggle ───────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem("manglish-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("manglish-theme", next);
}

/* ─── Event Bindings ─────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderDictGrid();

  const inputEl   = document.getElementById("inputText");
  const outputEl  = document.getElementById("outputText");
  const charCount = document.getElementById("charCount");
  const convertBtn = document.getElementById("convertBtn");
  const clearBtn   = document.getElementById("clearBtn");
  const copyBtn    = document.getElementById("copyBtn");
  const themeToggle = document.getElementById("themeToggle");

  // Character counter
  inputEl.addEventListener("input", () => {
    const len = inputEl.value.length;
    charCount.textContent = `${len} character${len !== 1 ? "s" : ""}`;
  });

  // Convert
  convertBtn.addEventListener("click", () => {
    const input = inputEl.value.trim();
    if (!input) {
      showToast("⚠️ Please type something first!");
      inputEl.focus();
      return;
    }

    // Button animation
    convertBtn.style.transform = "scale(0.96)";
    setTimeout(() => (convertBtn.style.transform = ""), 150);

    const { text, converted, unchanged } = convertToManglish(inputEl.value);
    outputEl.value = text;
    updateStats(converted, unchanged);
    showToast(`🌴 ${converted} word${converted !== 1 ? "s" : ""} converted to Manglish!`);
  });

  // Clear
  clearBtn.addEventListener("click", () => {
    inputEl.value = "";
    outputEl.value = "";
    charCount.textContent = "0 characters";
    document.getElementById("wordsConverted").textContent = "Words converted: –";
    document.getElementById("wordsUnchanged").textContent = "Unchanged: –";
    inputEl.focus();
    showToast("🗑️ Cleared!");
  });

  // Copy
  copyBtn.addEventListener("click", () => {
    const text = outputEl.value;
    if (!text) {
      showToast("⚠️ Nothing to copy yet!");
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("📋 Copied to clipboard!");
      });
    } else {
      // Fallback
      outputEl.select();
      document.execCommand("copy");
      showToast("📋 Copied to clipboard!");
    }
  });

  // Theme
  themeToggle.addEventListener("click", toggleTheme);

  // Allow Enter+Shift to convert (Ctrl/Cmd + Enter)
  inputEl.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      convertBtn.click();
    }
  });
});
