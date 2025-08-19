// import gPlay from "google-play-scraper";

// const googlePlayScrapperController = (req, res) => {
//   const { appId } = req.query;
//   console.log(appId);
// };

// export default googlePlayScrapperController;

import gplay from "google-play-scraper";

export const googlePlayScrapperController = async (req, res) => {
  const { appId } = req.query;

  if (!appId) {
    return res.status(400).json({ error: "Please provide an appId" });
  }

  try {
    const appDetails = await gplay.app({ appId });
    res.json({
      title: appDetails.title,
      developer: appDetails.developer,
      score: appDetails.scoreText,
      installs: appDetails.installs,
      genre: appDetails.genre,
      url: appDetails.url,
      description: appDetails.description,
      screenShots: appDetails.screenshots,
      totalAppDetails: appDetails,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
