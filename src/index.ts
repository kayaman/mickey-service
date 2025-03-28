import express, { type Request, type Response } from 'express'
import apiRoutes from './routes/index.ts'
import type { Logger } from './utils/logger.ts'
import ConsoleLogger from './utils/console_logger.ts'

const app = express()
const PORT = process.env.PORT || 7001

const logger: Logger = new ConsoleLogger()
logger.info('Starting the application...')

app.use(express.json())
app.use('/api/v1', apiRoutes)

app.get('/health', (req: Request, res: Response) => {
  logger.debug('Health check endpoint hit')
  res.status(200).send('👌🏻')
})

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
