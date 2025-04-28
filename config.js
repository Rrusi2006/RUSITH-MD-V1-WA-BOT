const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "mZsXzIZJ#hwNO627grKEssZeoVB3EPy_o_UZuHpBOet4nP-6IC8w",
  OWNER_NUM: process.env.OWNER_NUM || "94772136479",
};
