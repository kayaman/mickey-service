import { Router, type Request, type Response } from 'express'
import MickeyService from '../services/mickey.ts'
import type { Logger } from '../utils/logger.ts'
import ConsoleLogger from '../utils/console_logger.ts'

const logger: Logger = new ConsoleLogger()

const router = Router()

router.get('/say', (req: Request, res: Response) => {
  const saying = MickeyService.saySomething()
  logger.debug('Mickey said:', saying)
  res.status(200).send(saying)
})

export default router
