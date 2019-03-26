class DuplicateError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 409;
  }
}

class ForbiddenError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 403;
  }
}

class InvalidRequestError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 400;
  }
}

class UnauthenticatedError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 401;
  }
}

class UnauthorizedError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 403;
  }
}

class NotFound extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 404;
  }
}

class UnprocessableError extends Error {
  constructor(message = '', ...args) {
    super(message, ...args);
    this.statusCode = 422;
  }
}

const joiError = (err) => {
  let returnableError = {};

  err.details.map((detail) => {
    if (detail.type === 'any.required') {
      returnableError = {
        statusCode: 400,
        error: 'Bad Request',
        message: detail.message,
      };

      return returnableError;
    }
    returnableError = {
      statusCode: 422,
      error: 'Unprocessable Entity',
      message: detail.message,
    };

    return returnableError;
  });

  return returnableError;
};

export {
  DuplicateError,
  ForbiddenError,
  InvalidRequestError,
  joiError,
  NotFound,
  UnauthenticatedError,
  UnauthorizedError,
  UnprocessableError,
};
