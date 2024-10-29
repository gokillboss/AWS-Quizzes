import rateLimit from 'express-rate-limit';

// Middleware function to create a rate limiter
const createRateLimit = (windowMs: number, max: number, message: string) => {
  return rateLimit({
    windowMs, // Time frame for rate limit (e.g., 1 hour)
    max, // Maximum number of requests allowed within the time frame
    message, // Message returned when the rate limit is exceeded
    standardHeaders: true, // Return rate limit info in RateLimit-* headers
    legacyHeaders: false, // Disable X-RateLimit-* headers
  });
};

// Rate limiter for reset password requests (e.g., 5 requests per hour)
const resetPasswordLimiter = createRateLimit(
  60 * 60 * 1000, // 1 hour
  5, // Maximum 5 requests per hour
  'Bạn đã gửi quá nhiều yêu cầu đặt lại mật khẩu. Vui lòng thử lại sau 1 giờ.'
);

// Rate limiter for login attempts (e.g., 10 requests per 15 minutes)
const loginLimiter = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  15, // Maximum 10 requests per 15 minutes
  'Bạn đã thử đăng nhập quá nhiều lần. Vui lòng thử lại sau 15 phút.'
);

// Rate limiter for signup requests (e.g., 5 requests per hour)
const signupLimiter = createRateLimit(
  60 * 60 * 1000, // 1 hour
  10, // Maximum 5 requests per hour
  'Bạn đã gửi quá nhiều yêu cầu đăng ký. Vui lòng thử lại sau 1 giờ.'
);

// Export the rate limiters
export {
  resetPasswordLimiter,
  loginLimiter,
  signupLimiter
};
