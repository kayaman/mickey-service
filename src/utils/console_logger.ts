import type { Logger } from './logger.ts'

export default class ConsoleLogger implements Logger {
  private getTimestamp(): string {
    return new Date().toISOString()
  }

  info(message: string, ...optionalParams: any[]): void {
    console.info(`[INFO] ${this.getTimestamp()} - ${message}`, ...optionalParams)
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(`[WARN] ${this.getTimestamp()} - ${message}`, ...optionalParams)
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(`[ERROR] ${this.getTimestamp()} - ${message}`, ...optionalParams)
  }

  debug(message: string, ...optionalParams: any[]): void {
    // console.debug might not be visible by default in some environments
    // Using console.log for broader visibility, but tagged as DEBUG
    console.log(`[DEBUG] ${this.getTimestamp()} - ${message}`, ...optionalParams)
    // Alternatively, if console.debug works for you:
    // console.debug(`[DEBUG] ${this.getTimestamp()} - ${message}`, ...optionalParams);
  }
}
