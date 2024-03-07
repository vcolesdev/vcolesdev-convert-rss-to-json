import { Express, Request, Response } from "express"
import RssToJson from "../../modules/RssToJson";

const { dispatchConsumeRssUrl } = RssToJson.actions;

/**
 * getSampleJsonResults()
 * Get sample JSON results from the NASA latest news RSS feed
 */
const getSampleJsonResults = async () => {
  let seededData: unknown = {};
  const url = "https://www.nasa.gov/rss/dyn/breaking_news.rss";
  const options = {
    replacer: null,
    space: 2,
    toDownload: false,
  };

  await dispatchConsumeRssUrl(url, options)
    .then((data: unknown) => {
      seededData = data;
    })
    .catch((error: Error) => {
      console.error(`Error getting sample JSON results: `, error);
    });

  return seededData;
}

/**
 * handleApiTestRoute()
 * Handle the API test route
 */
const handleApiTestRoute = async (req: Request, res: Response) => {
  const data = await getSampleJsonResults();
  return res.json(data);
}

/**
 * Get API routes for test routes
 * @param app
 */
export default async function getTestApiRoutes(app: Express) {
  /**
   * Route to test the API
   * @route /api/test
   */
  app.get("/api/test/nasa", (req: Request, res: Response) => handleApiTestRoute(req, res))
}
