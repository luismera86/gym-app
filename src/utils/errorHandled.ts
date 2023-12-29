
export class ErrorHandled extends Error {
  constructor(public message: string, public status: number) {
    super(message);
    this.status = status;
  }

  public static errorNotFound(message: string = 'Not found') {
    return new ErrorHandled(message, 404);

  }

  public static errorBadRequest(message: string = 'Bad request') {
    return new ErrorHandled(message, 400);
  }

  public static errorForbidden(message: string = 'Forbidden') {
    return new ErrorHandled(message, 403);
  }

  public static errorUnauthorized(message: string = 'Unauthorized') {
    return new ErrorHandled(message, 401);
  }

  public static errorInternal(message: string = 'Internal server error') {
    return new ErrorHandled(message, 500);
  }

  public static errorNotImplemented(message: string = 'Not implemented') {
    return new ErrorHandled(message, 501);
  }

  public static errorBadGateway(message: string = 'Bad gateway') {
    return new ErrorHandled(message, 502);
  }

  public static errorServiceUnavailable(message: string = 'Service unavailable') {
    return new ErrorHandled(message, 503);
  }
}