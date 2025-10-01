import { RateLimiter } from '@/types';

class RateLimiterService {
  private limiters: Map<string, RateLimiter> = new Map();

  checkLimit(userId: string, maxBets: number = 10, timeWindow: number = 60000): boolean {
    const now = Date.now();
    const limiter = this.limiters.get(userId);

    if (!limiter) {
      this.limiters.set(userId, {
        maxBets,
        timeWindow,
        attempts: 1,
        resetTime: now + timeWindow,
      });
      return true;
    }

    if (now > limiter.resetTime) {
      // Reset the limiter
      limiter.attempts = 1;
      limiter.resetTime = now + timeWindow;
      return true;
    }

    if (limiter.attempts >= maxBets) {
      return false;
    }

    limiter.attempts++;
    return true;
  }

  getRemainingAttempts(userId: string): number {
    const limiter = this.limiters.get(userId);
    if (!limiter) return 10;
    return Math.max(0, limiter.maxBets - limiter.attempts);
  }

  getTimeUntilReset(userId: string): number {
    const limiter = this.limiters.get(userId);
    if (!limiter) return 0;
    return Math.max(0, limiter.resetTime - Date.now());
  }

  reset(userId: string): void {
    this.limiters.delete(userId);
  }
}

export const rateLimiter = new RateLimiterService();
