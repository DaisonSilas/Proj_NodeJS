import { logger } from "../config/logger.js";

export function errorHandler(err, req, res, next) {
  logger.error(`Erro interno: ${err.message}`);

  res.status(500).json({
    error: "Erro interno do servidor",
    details: err.message,
  });
}
