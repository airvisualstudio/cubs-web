import * as React from "react";
import { Flame, Clock } from "lucide-react";

export function PromoCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 4,
    minutes: 32,
    seconds: 45,
  });

  React.useEffect(() => {
    // Generate countdown to end of day or persistent timer
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-700 shadow-2xs">
      <Flame className="size-4 text-rose-500 fill-rose-500 animate-pulse" />
      <span>Promo Berakhir Dalam:</span>
      <div className="flex items-center gap-1 font-mono font-black text-rose-900 bg-white px-2 py-0.5 rounded-md border border-rose-200">
        <span>{format(timeLeft.hours)}</span>:
        <span>{format(timeLeft.minutes)}</span>:
        <span>{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
}

