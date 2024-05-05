import AppError from './errors/AppError.js';

export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance) {
    const res = errorHandler(error);
    return res;
  }
  throw error;
};

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if ((error instanceof errorInstance) && (error instanceof AppError)) {
    const res = errorHandler(error);
    return res;
  }
  throw error;
};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if ((!errorInstance) && (error.isCustomError)) {
    const res = errorHandler(error);
    return res;
  }
  throw error;
};
