class ClickstormError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends ClickstormError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends ClickstormError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends ClickstormError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  ClickstormError,
  ValidationError,
  WrongParametersError,
  NotAuthorizedError,
};
