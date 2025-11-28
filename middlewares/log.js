export function log(req, res, next) {
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}
Body: ${JSON.stringify(req.body)}
Params: ${JSON.stringify(req.params)}
`;

  console.log(logMessage);

  next();
}