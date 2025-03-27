/**
 * Defines the contract for a logging service.
 * Implementations can log to the console, a file, a remote service, etc.
 */
export interface Logger {
  /**
   * Logs informational messages.
   * Useful for tracking the general flow of the application.
   * @param message The primary message to log.
   * @param optionalParams Optional additional data/context to include.
   */
  info(message: string, ...optionalParams: any[]): void

  /**
   * Logs warning messages.
   * Indicates potential issues that don't necessarily stop execution but should be noted.
   * @param message The primary message to log.
   * @param optionalParams Optional additional data/context to include.
   */
  warn(message: string, ...optionalParams: any[]): void

  /**
   * Logs error messages.
   * Indicates errors that have occurred, potentially disrupting operations.
   * @param message The primary message to log.
   * @param optionalParams Optional additional data/context (often an error object).
   */
  error(message: string, ...optionalParams: any[]): void

  /**
   * Logs debug messages.
   * Detailed information useful for developers during debugging. Often disabled in production.
   * @param message The primary message to log.
   * @param optionalParams Optional additional data/context to include.
   */
  debug(message: string, ...optionalParams: any[]): void
}
