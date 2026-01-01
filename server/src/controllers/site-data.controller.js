import { SiteData } from "../models/site-data.model.js";

const readSiteData = async (req, res) => {
  try {
    const siteData = await SiteData.find();
    return res.status(200).json({
      message: "Site data fetched successfully"
    })
  }
  catch (err) {
    return res.status(500).json({
      message: `Server Error: ${err.message}`
    })
  }
}

export {
  readSiteData
}