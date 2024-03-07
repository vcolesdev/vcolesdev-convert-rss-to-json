import {NextFunction, Request, Response} from "express";
import {RssFeedQueryArgs} from "../../types";

interface RssToJsonShape {
  fn: {
    handleCheckRssFeedUrl: (rssFeedUrl: string, res: Response) => void,
    handleGetRssFeedQueryArgs: (args: RssFeedQueryArgs) => RssFeedQueryArgs,
    handleConvertRssToJson: (
      content: unknown,
      options: {
        replacer: null,
        space: number,
        toDownload?: boolean | undefined
      },
      cb?: () => Response
    ) => Promise<unknown>
  },
  actions: {
    dispatchConsumeRssUrl: (url: string, options: { replacer: null, space: number, toDownload?: boolean | undefined }) => Promise<unknown>,
    dispatchConsumeRssFile: (filepath: string, options: { replacer: null, space: number, toDownload?: boolean | undefined }) => Promise<unknown>,
  },
  routes: {
    getRouteRssToJsonConverter: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  }
}

type RssToJsonModule = RssToJsonShape;

export {RssToJsonShape, RssToJsonModule};