class ErrorStatus extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export default ErrorStatus;
