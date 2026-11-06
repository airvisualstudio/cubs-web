import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images', 'products');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const svgs = {
  'kaos-dino.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgDino" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE" />
        <stop offset="100%" stop-color="#BAE6FD" />
      </linearGradient>
      <linearGradient id="shirtMint" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6EE7B7" />
        <stop offset="100%" stop-color="#10B981" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgDino)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- T-Shirt Body -->
    <path d="M120 120 L165 105 C185 125 215 125 235 105 L280 120 L295 180 L250 195 L245 285 L155 285 L150 195 L105 180 Z" fill="url(#shirtMint)" stroke="#047857" stroke-width="4" stroke-linejoin="round" />
    <!-- Collar -->
    <path d="M165 105 C185 125 215 125 235 105" stroke="#047857" stroke-width="4" fill="none" />
    <!-- Dino Graphic on Chest -->
    <path d="M180 200 C170 170 190 155 215 155 C230 155 240 165 235 180 C230 195 245 215 240 230 L220 230 C215 215 190 220 180 200 Z" fill="#FBBF24" />
    <circle cx="218" cy="165" r="3" fill="#78350F" />
    <!-- Spikes -->
    <polygon points="195,152 202,143 208,153" fill="#F87171" />
    <polygon points="210,150 217,140 223,152" fill="#F87171" />
    <!-- Text Badge -->
    <text x="200" y="260" font-family="sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">DINO ROAR (3-8Y)</text>
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369A1" text-anchor="middle">Kaos Katun Oversized</text>
  </svg>`,

  'piyama-star.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgStar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF3C7" />
        <stop offset="100%" stop-color="#FDE68A" />
      </linearGradient>
      <linearGradient id="clothYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE047" />
        <stop offset="100%" stop-color="#EAB308" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgStar)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Top -->
    <path d="M135 110 L170 100 C185 118 215 118 230 100 L265 110 L285 165 L248 175 L245 220 L155 220 L152 175 L115 165 Z" fill="url(#clothYellow)" stroke="#CA8A04" stroke-width="4" stroke-linejoin="round" />
    <!-- Buttons -->
    <circle cx="200" cy="140" r="4" fill="#A16207" />
    <circle cx="200" cy="165" r="4" fill="#A16207" />
    <circle cx="200" cy="190" r="4" fill="#A16207" />
    <!-- Bottom Pants -->
    <path d="M160 225 L240 225 L245 295 L210 295 L200 245 L190 295 L155 295 Z" fill="#CA8A04" stroke="#854D0E" stroke-width="3" />
    <!-- Star accents -->
    <polygon points="175,145 178,153 186,154 180,160 182,168 175,164 168,168 170,160 164,154 172,153" fill="#F59E0B" />
    <polygon points="225,145 228,153 236,154 230,160 232,168 225,164 218,168 220,160 214,154 222,153" fill="#F59E0B" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#A16207" text-anchor="middle">Setelan Piyama Katun Bambu</text>
  </svg>`,

  'dress-floral.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgDress" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCE7F3" />
        <stop offset="100%" stop-color="#FBCFE8" />
      </linearGradient>
      <linearGradient id="pinkDress" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F472B6" />
        <stop offset="100%" stop-color="#EC4899" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgDress)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Bodice -->
    <path d="M165 110 C180 125 220 125 235 110 L250 145 L230 180 L170 180 L150 145 Z" fill="url(#pinkDress)" stroke="#BE185D" stroke-width="4" stroke-linejoin="round" />
    <!-- Flare Skirt -->
    <path d="M170 180 L230 180 L280 285 C240 295 160 295 120 285 Z" fill="#FB7185" stroke="#BE185D" stroke-width="4" stroke-linejoin="round" />
    <!-- Waist Bow -->
    <ellipse cx="200" cy="180" rx="14" ry="7" fill="#FDE047" stroke="#CA8A04" stroke-width="2" />
    <polygon points="190,180 178,172 178,188" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
    <polygon points="210,180 222,172 222,188" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
    <!-- Floral Pattern dots -->
    <circle cx="160" cy="230" r="6" fill="white" opacity="0.9" />
    <circle cx="200" cy="245" r="6" fill="white" opacity="0.9" />
    <circle cx="240" cy="230" r="6" fill="white" opacity="0.9" />
    <circle cx="180" cy="270" r="5" fill="white" opacity="0.9" />
    <circle cx="220" cy="270" r="5" fill="white" opacity="0.9" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#BE185D" text-anchor="middle">Dress Katun Floral Breeze</text>
  </svg>`,

  'hoodie-zipper.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#CBD5E1" />
      </linearGradient>
      <linearGradient id="hoodieBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38BDF8" />
        <stop offset="100%" stop-color="#0284C7" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgHoodie)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Hood -->
    <path d="M160 130 C160 80 240 80 240 130 Z" fill="#0369A1" stroke="#075985" stroke-width="3" />
    <!-- Jacket Body -->
    <path d="M125 130 L160 115 L240 115 L275 130 L290 200 L250 210 L245 285 L155 285 L150 210 L110 200 Z" fill="url(#hoodieBlue)" stroke="#075985" stroke-width="4" stroke-linejoin="round" />
    <!-- Zipper -->
    <line x1="200" y1="115" x2="200" y2="285" stroke="white" stroke-width="4" stroke-dasharray="6 3" />
    <circle cx="200" cy="130" r="4" fill="#F59E0B" />
    <!-- Kangaroo Pockets -->
    <path d="M165 240 L190 240 L190 275 L165 275 Z" fill="#0369A1" rx="4" />
    <path d="M210 240 L235 240 L235 275 L210 275 Z" fill="#0369A1" rx="4" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#075985" text-anchor="middle">Jaket Hoodie Zipper Active</text>
  </svg>`,

  'polo-stripes.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgPolo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#CCFBF1" />
        <stop offset="100%" stop-color="#99F6E4" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgPolo)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Polo Shirt -->
    <path d="M125 125 L165 110 L235 110 L275 125 L290 180 L250 190 L245 280 L155 280 L150 190 L110 180 Z" fill="#0D9488" stroke="#115E59" stroke-width="4" stroke-linejoin="round" />
    <!-- Collar Fold -->
    <polygon points="165,110 185,145 200,125" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
    <polygon points="235,110 215,145 200,125" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
    <!-- Placket & Buttons -->
    <rect x="194" y="125" width="12" height="45" fill="white" />
    <circle cx="200" cy="138" r="2.5" fill="#115E59" />
    <circle cx="200" cy="155" r="2.5" fill="#115E59" />
    <!-- Stripes -->
    <line x1="151" y1="210" x2="249" y2="210" stroke="#FDE047" stroke-width="5" />
    <line x1="153" y1="235" x2="247" y2="235" stroke="white" stroke-width="5" />
    <line x1="154" y1="260" x2="246" y2="260" stroke="#FDE047" stroke-width="5" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#115E59" text-anchor="middle">Kaos Polo Shirt Stripes</text>
  </svg>`,

  'setelan-waffle.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgWaffle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFEDD5" />
        <stop offset="100%" stop-color="#FED7AA" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgWaffle)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Waffle Top -->
    <path d="M130 115 L168 105 C185 120 215 120 232 105 L270 115 L285 168 L250 178 L245 225 L155 225 L150 178 L115 168 Z" fill="#FB923C" stroke="#C2410C" stroke-width="4" stroke-linejoin="round" />
    <!-- Pocket -->
    <rect x="165" y="145" width="22" height="22" rx="4" fill="#EA580C" />
    <!-- Shorts -->
    <path d="M158 230 L242 230 L248 290 L212 290 L200 250 L188 290 L152 290 Z" fill="#9A3412" stroke="#7C2D12" stroke-width="3" />
    <!-- Drawstring -->
    <circle cx="195" cy="238" r="2" fill="white" />
    <circle cx="205" cy="238" r="2" fill="white" />
    <path d="M195 240 Q197 252 192 258 M205 240 Q203 252 208 258" stroke="white" stroke-width="2" fill="none" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#9A3412" text-anchor="middle">Setelan Baju Main Waffle</text>
  </svg>`,

  'jogger-pants.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgJogger" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EDE9FE" />
        <stop offset="100%" stop-color="#DDD6FE" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgJogger)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- Jogger Pants -->
    <path d="M150 110 L250 110 L240 280 C240 288 225 288 225 280 L205 170 L195 170 L175 280 C175 288 160 288 160 280 Z" fill="#6366F1" stroke="#4338CA" stroke-width="4" stroke-linejoin="round" />
    <!-- Ribbed Waistband -->
    <rect x="148" y="105" width="104" height="15" rx="6" fill="#4338CA" />
    <!-- Drawstrings -->
    <path d="M195 120 Q192 135 188 142 M205 120 Q208 135 212 142" stroke="white" stroke-width="3" fill="none" />
    <!-- Ribbed Ankle Cuffs -->
    <rect x="158" y="275" width="20" height="10" rx="3" fill="#4338CA" />
    <rect x="222" y="275" width="20" height="10" rx="3" fill="#4338CA" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#4338CA" text-anchor="middle">Celana Jogger Anak Cozy</text>
  </svg>`,

  'dress-rainbow.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF2F2" />
        <stop offset="100%" stop-color="#FEE2E2" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bgRainbow)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.8" />
    <!-- White Top -->
    <path d="M165 110 C180 120 220 120 235 110 L250 145 L230 180 L170 180 L150 145 Z" fill="white" stroke="#E11D48" stroke-width="3" stroke-linejoin="round" />
    <!-- Rainbow Tiered Skirt -->
    <!-- Tier 1 Yellow -->
    <path d="M170 180 L230 180 L245 215 L155 215 Z" fill="#FDE047" stroke="#CA8A04" stroke-width="2" />
    <!-- Tier 2 Coral -->
    <path d="M155 215 L245 215 L265 250 L135 250 Z" fill="#FB7185" stroke="#E11D48" stroke-width="2" />
    <!-- Tier 3 Sky Blue -->
    <path d="M135 250 L265 250 L285 290 C240 298 160 298 115 290 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="2" />
    <text x="200" y="340" font-family="sans-serif" font-size="16" font-weight="bold" fill="#BE123C" text-anchor="middle">Dress Katun Twirl Rainbow</text>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('Created asset:', filename);
}

