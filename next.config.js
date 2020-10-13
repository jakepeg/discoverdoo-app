require("dotenv").config();
const prod = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  env: {
    BASE_URL: prod ? "https://discoverdoo.herokuapp.com" : "http://localhost:3001",
    CLIENT_URL: prod ? "https://jovial-payne-0134cf.netlify.app" : "http://localhost:3000"
  }
};