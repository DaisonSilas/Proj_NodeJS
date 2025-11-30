export function log(req, res, next) {
  const start = performance.now();

  res.on("finish", () => {
    const duration = (performance.now() - start).toFixed(2);
    console.log(`[LOG] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });

  next();
}
