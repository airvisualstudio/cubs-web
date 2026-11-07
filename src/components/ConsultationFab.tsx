import * as React from "react";
import { MessageCircle, Sparkles } from "lucide-react";

interface ConsultationFabProps {
  whatsappNumber?: string;
}

export function ConsultationFab({ whatsappNumber }: ConsultationFabProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const cleanPhone = (whatsappNumber || "6281234567890").replace(/[^0-9]/g, "") || "6281234567890";

  // Briefly tease tooltip on mount for 4 seconds so visitors immediately notice it
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const waUrl =
    `https://wa.me/${cleanPhone}?text=Halo%20Admin%20CUBS,%20saya%20mau%20konsultasi%20ukuran%20dan%20model%20baju%20anak%20usia%203-8%20tahun`;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip: Konsultasi Ukuran dan Model */}
      <div
        role="tooltip"
        className={`pointer-events-none mr-3 flex items-center gap-2 rounded-2xl bg-stone-900/95 backdrop-blur-xs text-white px-3.5 py-2 text-xs sm:text-sm font-semibold shadow-xl border border-stone-800 transition-all duration-300 relative whitespace-nowrap ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95 pointer-events-none"
        }`}
      >
        <Sparkles className="size-3.5 text-emerald-400 shrink-0" />
        <span>Konsultasi Ukuran dan Model</span>
        {/* Tooltip triangle arrow */}
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-stone-900 border-t border-r border-stone-800" />
      </div>

      {/* Floating Action Button (FAB): Solid Green Emerald */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Ukuran dan Model via WhatsApp CS CUBS Kids"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* WhatsApp Chat Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 sm:size-7"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Little Sparkles Badge Top-Right */}
        <div className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-amber-400 text-stone-900 shadow-xs border-2 border-white">
          <Sparkles className="size-2.5" />
        </div>

        {/* Subtle Online Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-25 animate-ping -z-10" />
      </a>
    </div>
  );
}

