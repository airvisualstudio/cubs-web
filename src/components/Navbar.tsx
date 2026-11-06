import * as React from "react";
import { Dialog } from "radix-ui";
import { Menu, X, ShoppingBag, PhoneCall, Home, Info } from "lucide-react";
import cubsLogo from "../assets/cubs-logo.webp";

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  const logoSrc =
    typeof cubsLogo === "string"
      ? cubsLogo
      : (cubsLogo as any)?.src || "/images/cubs-logo.webp";

  // Normalize path without trailing slash
  const normPath =
    currentPath.endsWith("/") && currentPath.length > 1
      ? currentPath.slice(0, -1)
      : currentPath;

  const leftLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
  ];

  const rightLinks = [
    { label: "Product", href: "/products", icon: ShoppingBag },
    { label: "Contact", href: "/contact", icon: PhoneCall },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const isActive = (href: string) => {
    if (href === "/") return normPath === "/" || normPath === "";
    return normPath.startsWith(href);
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 w-[94%] max-w-5xl">
      <nav
        aria-label="Main Navigation"
        className="relative overflow-visible rounded-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-200/70 dark:border-stone-800 px-3 sm:px-6 py-1 transition-all duration-300"
      >
        {/* DESKTOP LAYOUT (md & up) */}
        <div className="hidden md:flex items-center justify-between w-full h-11 sm:h-12">
          {/* Left Wing */}
          <div className="flex items-center gap-2 lg:gap-4 flex-1">
            {/* Small Age Badge in Pastel Mint on Far Left */}

            {/* Left Nav Links: Home, About */}
            <div className="flex items-center justify-end gap-1 lg:gap-2 flex-1 pr-3 lg:pr-6">
              {leftLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${active
                      ? "bg-emerald-100 text-emerald-950 font-bold"
                      : "text-stone-700 hover:text-emerald-800 hover:bg-emerald-50/60"
                      }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Center Overlapping Logo (Sits Higher so Navbar is Slightly Below the Logo) */}
          <div className="relative shrink-0 z-30 flex items-center justify-center px-l mt-5">
            <a
              href="/"
              title="CUBS Kids -  Bright Wear for Little Adventurers"
              aria-label="CUBS Kids Beranda"
              className="group relative -translate-y-2.5 sm:-translate-y-3.5 flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <img
                src={logoSrc}
                alt="CUBS Kids Logo"
                className="h-16 sm:h-20 md:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Right Wing: Mirrored links (Product, Contact) */}
          <div className="flex items-center gap-2 lg:gap-4 flex-1">
            <div className="flex items-center justify-start gap-1 lg:gap-2 flex-1 pl-3 lg:pl-6">
              {rightLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${active
                      ? "bg-emerald-100 text-emerald-950 font-bold"
                      : "text-stone-700 hover:text-emerald-800 hover:bg-emerald-50/60"
                      }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (less than md): Logo fits neatly inside navbar without sticking out */}
        <div className="flex md:hidden items-center justify-between w-full h-10 sm:h-11 px-1">
          {/* Mobile Logo: Compact & neatly centered inside the navbar pill */}
          <a
            href="/"
            className="flex items-center transition-transform active:scale-95"
            aria-label="CUBS Kids Beranda"
          >
            <img
              src={logoSrc}
              alt="CUBS Kids Logo"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </a>

          {/* Mobile Actions: Hamburger */}
          <div className="flex items-center">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu"
                  className="p-1.5 rounded-full text-stone-700 hover:bg-stone-100 focus:outline-hidden"
                >
                  <Menu className="size-5" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" />
                <Dialog.Content className="fixed top-18 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-3xl bg-white border border-stone-200 p-6 shadow-xl animate-in zoom-in-95 duration-200 focus:outline-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={logoSrc}
                        alt="CUBS Kids Logo"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup Menu"
                        className="p-1.5 rounded-full text-stone-500 hover:bg-stone-100"
                      >
                        <X className="size-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <ul className="flex flex-col gap-2 py-4">
                    {allLinks.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);
                      return (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-base font-medium transition-all ${active
                              ? "bg-emerald-100 text-emerald-950 font-bold"
                              : "text-stone-700 hover:bg-stone-50"
                              }`}
                          >
                            <Icon className="size-5 text-emerald-600" />
                            <span>{item.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors"
                    >
                      <PhoneCall className="size-4" />
                      <span>Chat WhatsApp CS</span>
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
