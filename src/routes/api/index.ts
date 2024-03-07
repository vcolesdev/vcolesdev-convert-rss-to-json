import { Express } from "express"
import getTestApiRoutes from "./test"
import getRssToJsonApiRoutes from "./rssToJson"

const testApiRoutes = getTestApiRoutes
const rssToJsonApiRoutes = getRssToJsonApiRoutes

/**
 * Get API routes
 */
export default async function getApiRoutes(app: Express) {
  await testApiRoutes(app)
  await rssToJsonApiRoutes(app)
}
