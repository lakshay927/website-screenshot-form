const UserModel = require("../models/form");
const puppeteer = require("puppeteer");

//list
const getList = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

//screenshot
const captureScreenshots = async (websiteURL) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(websiteURL);

  const resolutions = [
    {
      width: 1920,
      height: 1080,
      filename: "screenshot-1920x1080.png",
    },
    { width: 1280, height: 720, filename: "screenshot-1280x720.png" },
    { width: 640, height: 360, filename: "screenshot-640x360.png" },
  ];

  const screenshotData = [];

  for (const resolution of resolutions) {
    await page.setViewport({
      width: resolution.width,
      height: resolution.height,
    });
    const filename = `./public/${Date.now() + resolution.filename}`;
    await page.screenshot({ path: filename });
    screenshotData.push({ filename: filename.replace("./", "/") });
  }

  await browser.close();
  return screenshotData;
};

//form
const form = async (req, res) => {
  try {
    const { name, email, websiteURL } = req.body;
    const screenshotData = await captureScreenshots(websiteURL);

    const data = await UserModel.create({
      name,
      email,
      websiteURL,
      imageURL: screenshotData.map((screenshot) => screenshot.filename),
    });
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = {
  getList,
  form,
};
