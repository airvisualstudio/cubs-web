import * as React from "react";
import { Dialog } from "radix-ui";
import { Menu, X, Sparkles, ShoppingBag, HeartHandshake, PhoneCall, Home, Info, Edit3 } from "lucide-react";

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  // Normalize path without trailing slash
  const normPath = currentPath.endsWith("/") && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Product", href: "/products", icon: ShoppingBag },
    { label: "Contact", href: "/contact", icon: PhoneCall },
  ];

  const isActive = (href: string) => {
    if (href === "/") return normPath === "/" || normPath === "";
    return normPath.startsWith(href);
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-5xl">
      <nav
        aria-label="Main Navigation"
        className="rounded-full bg-white/92 dark:bg-stone-900/90 backdrop-blur-md border border-amber-200/70 dark:border-stone-800 shadow-xl shadow-amber-950/5 px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300"
      >
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-md shadow-orange-300/40 group-hover:scale-105 transition-transform">
            {/* Cute bear cub icon */}
            <span className="text-xl select-none" role="img" aria-label="Cubs Bear">
              🧸
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-1">
              CUBS
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
                Kids
              </span>
            </span>
            <span className="text-[10px] font-medium text-stone-500 dark:text-stone-400 hidden xs:inline leading-none">
              Produk Aman Si Kecil
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                    active
                      ? "bg-amber-100/90 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-semibold shadow-xs"
                      : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100/70 dark:hover:bg-stone-800/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Keystatic CMS Quick Access Pill */}
          <a
            href="/keystatic"
            target="_blank"
            rel="noopener noreferrer"
            title="Kelola Produk di Keystatic CMS"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 transition-colors"
          >
            <Edit3 className="size-3.5 text-orange-500" />
            <span>CMS Admin</span>
          </a>

          {/* WhatsApp Direct Order / Consultation */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20CUBS,%20saya%20mau%20tanya%20produk%20anak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-full shadow-md shadow-orange-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="size-3.5" />
            <span>Konsultasi</span>
          </a>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu"
                  className="p-2 rounded-full text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-hidden"
                >
                  <Menu className="size-6" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" />
                <Dialog.Content className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-3xl bg-white dark:bg-stone-900 border border-amber-200 p-6 shadow-2xl animate-in zoom-in-95 duration-200 focus:outline-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🧸</span>
                      <span className="font-bold text-lg text-stone-900 dark:text-stone-100">
                        CUBS Menu
                      </span>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup Menu"
                        className="p-1.5 rounded-full text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
                      >
                        <X className="size-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <ul className="flex flex-col gap-2 py-4">
                    {navLinks.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);
                      return (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                              active
                                ? "bg-amber-100 text-amber-900 font-semibold"
                                : "text-stone-700 hover:bg-stone-50"
                            }`}
                          >
                            <Icon className="size-5 text-amber-600" />
                            <span>{item.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-2">
                    <a
                      href="/keystatic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-amber-50 text-amber-800 font-medium text-sm border border-amber-200"
                    >
                      <Edit3 className="size-4" />
                      <span>Buka Keystatic CMS (Admin)</span>
                    </a>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm shadow-md"
                    >
                      <PhoneCall className="size-4" />
                      <span>Chat WhatsApp Kami</span>
                    </a>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </nav>
    </header>
  );
}

