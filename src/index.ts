import ConsoleLogger from './utils/console_logger.ts'
import type { Logger } from './utils/logger.ts'

class MickeyService {
  constructor(private readonly logger: Logger) {}

  readonly phrases = [
    "H-Hey everybody! It's me, Mickey Mouse!",
    'Everybody says, "Oh, Toodles!"',
    "We've got ears! Say cheers!",
    'We\'ve used all our Mousketools! Say "Super Cheers!"',
    'What a hot dog day!',
    'Meeska, Mooska, Mickey Mouse!',
    'The telescope will help us see things far away.',
    'The mystery mouseketool is a super-duper camera!',
  ]

  public sayRandomPhrase(): void {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    this.logger.info(randomPhrase)
  }
}

const logger: Logger = new ConsoleLogger()
const mickey = new MickeyService(logger)

setInterval(
  () => {
    mickey.sayRandomPhrase()
  },
  Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
)
