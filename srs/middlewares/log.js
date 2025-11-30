export function log(req, res, next) {
console.log(`[LOG] ${req.method} - ${req.url}`);
next();
}