import paths from "../../paths";
import RssToJson from "../../modules/RssToJson/index";
import {Express, NextFunction, Request, Response} from "express";

const {getRouteRssToJsonConverter} = RssToJson.routes;

/**
 * getRssToJsonApiRoutes()
 * @param app
 */
export default async function getRssToJsonApiRoutes(app: Express) {
  /**
   * Middleware to handle the conversion of an RSS feed to JSON.
   * @route /api/rss-to-json-converter
   */
  app.use("/api/rss-to-json-converter", async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return getRouteRssToJsonConverter(req, res, next);
  });

  /**
   * Route to show the success template after downloading a file
   * @route /api/rss-to-json-converter/success
   */
  app.get("/api/rss-to-json-converter/success", async (req: Request, res: Response) => {
    return res.sendFile(paths.successTemplate);
  });
}