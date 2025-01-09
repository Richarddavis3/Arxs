//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078,2348109243618,2348160433565";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RySEFCdVJrcUhpTytyOUdjSk9udUhOaWs5bFo0d3pKYm5KSmRkdHVYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGVmMXpiQjBjT3B4bUF0blBaYWhIUW4rY2ZmZlFNb0UrQUl6MnFkemZXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSU1NR05WTGVMakQ0TUNNak1GNGxmSk95WEF0VzJNQ00yU04zMUVkNTFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRTFuZ1dwN2JHcjdLS2pGb0VKdnR1c0Y3eHY0eWNKWVhCL0RoR1RUNzNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDQ3dnMVNhdFcwS3VGMldOVzFId2xrREdWWjlVeG0zSTJPMXJQcEJoM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9zVlltRURhTkdrZkRCTk1Ud2dmSTNwYkloNWo2dVM4ZGVRSG1SVGd3MlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NLUTlaUWIzSXhCblgwWU5oWVoyUEhGZXF1UlFpTE1NSysxei9IKzFtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFGK0JyVDVMa0ordDZTclo3azZpbmlrKzUwMmdWMlZVS2NjQjE1RER4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpGM0JKbCtoa1BUNmI3b3FoRktCR1c1amFhSnlHZ3lLQ2hQR3NoRkozVGpGaWNiUldnWWpLREJoeEFNYndhWEt0SWQ2TncxQkRtcm5aR1hVZ01RUGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IjZEMHh1NDZrZDZZUTIzMTg2RWo1UCt6d3lvc01VZ1JhY0c3aEZGRUtRam89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNJRDZnY2tJUlBxdHFpOW5XNFk3VHciLCJwaG9uZUlkIjoiYjMwMDAyZTctNzZlZi00ZTU0LWE2ZDYtNmQ5ZWU0ZTkwNzMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllVYkVxL25NT05IbUhyV2tJMktoQ1VRTkRZOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVmxDa2tydGpuTy9BV0Z4Y21CR2k0S1gxODg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1dXR0pHQjMiLCJtZSI6eyJpZCI6IjIzNDgxNjA0MzM1NjU6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBcnhzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ2ZyUGtPRUo3WS9yc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4TnMvRU80b3hhMENCSWdtS0U1VGpiNEZwdGlKaW12NGprNXNpY050TlhNPSIsImFjY291bnRTaWduYXR1cmUiOiJCYVB3aVArUytCU1hac3Q0bnFMc2JCbXF1dFpySkFTRE44bXh1a2pOaGd2TUZmaGlWRktodXdSSy9MUTFYMGg5Y2p6RlBKLytwRktKOGFZSTF5YmNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUpBVmNCdnVqOFlldzI0eW91TnZqSE1lejNiRmtjcGNKMVBvUSt0cHQ1Z2k2THhjbUR1UHhkVGE4S3ExUTlmQ2xURExjZVpjWmZjSS9ia25TZEp3anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYwNDMzNTY1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkRiUHhEdUtNV3RBZ1NJSmloT1U0MitCYWJZaVlwcitJNU9iSW5EYlRWeiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NDIwMzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUowbiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "ARXS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
