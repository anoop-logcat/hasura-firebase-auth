export class HasuraException extends Error {
  extensions: Record<string, any>;
  constructor(
    message: string,
    private readonly code: string | number,
    private readonly metadata?: any
  ) {
    super(message);
    this.extensions = { code, ...metadata };
  }
}
