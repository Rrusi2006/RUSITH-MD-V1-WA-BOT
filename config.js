const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "mZsXzIZJ#hwNO627grKEssZeoVB3EPy_o_UZuHpBOet4nP-6IC8w",
  OWNER_NUM: process.env.OWNER_NUM || "94772136479",
  FREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Rrusi2006/Bot-images/refs/heads/main/20250427_201853.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now,\n\n 𝐌𝐚𝐝𝐞 𝐛𝐲 ❤️ 𝙍𝙐𝙎𝙄𝙏𝙃_𝙈𝘿_𝙑1 𝙗𝙤𝙩 😍",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
}; 
