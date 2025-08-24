
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62VaY+qSBSG/0t9xVzZF5NOptgUcUFU7O7JfEAoEFktChFv/O8TtHtuZ5a+PcnlE1QVp5731HlPfQdFmdTIRh0YfQcVTs4+Qf0r6SoERkBtoghhMAChT3wwArx29KrhetEuaUGZJqcNi71AXtHIjXb21dbiY+Xa1K6Vd8ETuA1A1eyzJPgkIGTnpsIeS0sj1wU2jeAaJa6mGytqyGmkcLacQsfSjMq49gnc+oh+gpMiNqoDyhH2Mxt1jp/gr+HnKjUjizBSZ1bgLL35qVYpa31K8Ppa7Zdze0NOyqzN1/nk5Wv48X6/fSl1yaSbFs31LeRibq16nbtPgtCdvNaO7i9q9tR49QO/TuIChVaICpKQ7st5b5ZIQYt1Pt0XnBU5L/ZZ0i/cae8dbKw5bRId46Cb+naYll8DX0VOFureJrlSu5hzN2k+mc9yb90EArkYrzFWwteqnlbyePUR3MHvtZL+n7yvrN3Bofxh5VFWTi/TxW7byGVLlSLB5aQ9UcV8kznp1czSr+F7jHeRy7K0ZsNXVXSdRq6eDU0cZtGG37XNJF1g+oxeg9ftB3yfNPgzSptqEUKSXrmF0ypylMIXqsMx52B7525TNR52aXHkh4sVJcjzpavvWGlsLzkJrcf2cVlaNhVa1hpuNCgsSEwZtOKq8OmuKEWdFYIRcxsAjOKkJtgnSVncxxRmAPzwvEYBRuSeXqCeF9zOxmR2mVpLU+6eidnO28WEG2YFE3ldKqxE0aUQtuInMAAVLgNU1yicJDUpcTdHde3HqAaj3+8n1YvGKC8JmiYhGAGF5ViFVmRWkKXf6m/twSe1X1XfCkTAAES4zOcIjAhu0ADcf+BZU2JNEWqaAlWNUWWD01lRhxrPqJJuCr3E/LHpJslRTfy8AiNGEkSaZmiFvg1+DYeoSKJB01CEMs0xtCxIGityLKMzNGQMWvkJB/OrOGRNZVldliVWMFVNZniFlxWR0SWBZnhG4D/lYBjhV3HoCtQNyVQhzUIBSlDXFUOVIcPLDG3ykvwTDvH2xwAU6EIevu6rkWMGIEpwTbZFU2WlH76b/n3SD4KyKci6KwKtf0EYjD4MI0KSIq57ZU3h4+CQnJHW6wCjyM9q9JcBEEbhu5a3pq6VYe9Lfqd6M3ehgp69D/SP3IwY7p/pye7LWIYVBVaReF4UWFHuV/YTA1D4fTAA8zzvs/LG24cPEfGTrAYjoC3Fi+zPDWO2yU/BdjyGqxhqMQQ/9L33kYdPt+v9daksJguHWrnncSkM9xRcK5yHSmrJMi/OMIuI42/p7d2nfw/SiyVc9dxMBPvY7NHLxBetgjcDvrgWVCLq/LJMHePQlPh5yo/jyIGsbDUCg12BGJVbiRDuEWmE7tBF9KF2844V91jvm84AhOicBOjjZpuxR2vb/dzd+y500iS2sBFNHWRrq4LfuvO2UE8t0/ErJw89pA2DYKoqdGg6lbeGS49om2nVZvWzRF86U1at1IpbdfXocPcOm73dbMlb70nun1GC7hfF2xH89CQf4H3B0bfBhxhvV89/tG/VM3L5et64180wNfaX0zJih7FxDpnnk3MkZKcPhWdpw2YL0wK3vvKrzCdRiXMwAn4R4vJeJ7hs+gq2iqj8ZDMNxta78syvCfzhin9pPLL8WOXgspr49QGMgLNLhXuFd7Cq1sQn7x4DsH8cOAa3PwEnMRsNngkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
