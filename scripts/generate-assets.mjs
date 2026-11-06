import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images', 'products');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const svgs = {
  'piyama.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE" />
        <stop offset="100%" stop-color="#BAE6FD" />
      </linearGradient>
      <linearGradient id="cloth" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="100%" stop-color="#FDE047" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg1)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <path d="M140 130 L170 120 C185 140 215 140 230 120 L260 130 L280 180 L245 190 L240 270 L160 270 L155 190 L120 180 Z" fill="url(#cloth)" stroke="#CA8A04" stroke-width="4" stroke-linejoin="round" />
    <circle cx="200" cy="165" r="5" fill="#CA8A04" />
    <circle cx="200" cy="195" r="5" fill="#CA8A04" />
    <circle cx="200" cy="225" r="5" fill="#CA8A04" />
    <circle cx="175" cy="180" r="16" fill="#F59E0B" />
    <circle cx="167" cy="168" r="6" fill="#D97706" />
    <circle cx="183" cy="168" r="6" fill="#D97706" />
    <circle cx="171" cy="178" r="2" fill="#78350F" />
    <circle cx="179" cy="178" r="2" fill="#78350F" />
    <path d="M173 184 Q175 187 177 184" stroke="#78350F" stroke-width="2" fill="none" />
    <text x="200" y="320" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0284C7" text-anchor="middle">CUBS Sleepwear</text>
  </svg>`,

  'jumper.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCE7F3" />
        <stop offset="100%" stop-color="#FBCFE8" />
      </linearGradient>
      <linearGradient id="cloth2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDA4AF" />
        <stop offset="100%" stop-color="#FB7185" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg2)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <path d="M150 120 C165 135 235 135 250 120 L275 160 L245 175 L245 240 C245 260 220 280 200 280 C180 280 155 260 155 240 L155 175 L125 160 Z" fill="url(#cloth2)" stroke="#E11D48" stroke-width="4" stroke-linejoin="round" />
    <path d="M200 185 C190 165 165 175 175 195 C185 210 200 220 200 220 C200 220 215 210 225 195 C235 175 210 165 200 185 Z" fill="white" />
    <circle cx="185" cy="265" r="4" fill="white" />
    <circle cx="200" cy="265" r="4" fill="white" />
    <circle cx="215" cy="265" r="4" fill="white" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#DB2777" text-anchor="middle">Newborn Bodysuit</text>
  </svg>`,

  'balok.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF3C7" />
        <stop offset="100%" stop-color="#FDE68A" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg3)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <rect x="130" y="210" width="60" height="60" rx="8" fill="#F87171" stroke="#DC2626" stroke-width="3" />
    <text x="160" y="250" font-family="sans-serif" font-size="26" font-weight="bold" fill="white" text-anchor="middle">A</text>
    <rect x="210" y="210" width="60" height="60" rx="8" fill="#60A5FA" stroke="#2563EB" stroke-width="3" />
    <text x="240" y="250" font-family="sans-serif" font-size="26" font-weight="bold" fill="white" text-anchor="middle">B</text>
    <rect x="170" y="140" width="60" height="60" rx="8" fill="#34D399" stroke="#059669" stroke-width="3" />
    <text x="200" y="180" font-family="sans-serif" font-size="26" font-weight="bold" fill="white" text-anchor="middle">C</text>
    <polygon points="200,90 170,135 230,135" fill="#FBBF24" stroke="#D97706" stroke-width="3" stroke-linejoin="round" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#D97706" text-anchor="middle">Montessori Wooden Blocks</text>
  </svg>`,

  'boneka.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFEDD5" />
        <stop offset="100%" stop-color="#FED7AA" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg4)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <ellipse cx="200" cy="225" rx="60" ry="55" fill="#D97706" />
    <ellipse cx="200" cy="230" rx="40" ry="35" fill="#FDE68A" />
    <circle cx="200" cy="150" r="50" fill="#D97706" />
    <circle cx="155" cy="115" r="18" fill="#D97706" />
    <circle cx="155" cy="115" r="10" fill="#FDE68A" />
    <circle cx="245" cy="115" r="18" fill="#D97706" />
    <circle cx="245" cy="115" r="10" fill="#FDE68A" />
    <ellipse cx="200" cy="160" rx="20" ry="15" fill="#FDE68A" />
    <ellipse cx="200" cy="153" rx="8" ry="6" fill="#78350F" />
    <path d="M200 159 L200 167 M194 165 Q200 170 206 165" stroke="#78350F" stroke-width="2.5" fill="none" />
    <circle cx="180" cy="140" r="5" fill="#78350F" />
    <circle cx="220" cy="140" r="5" fill="#78350F" />
    <polygon points="185,195 200,200 185,205" fill="#EF4444" />
    <polygon points="215,195 200,200 215,205" fill="#EF4444" />
    <circle cx="200" cy="200" r="4" fill="#B91C1C" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#B45309" text-anchor="middle">Cubby Plush Bear</text>
  </svg>`,

  'sippycup.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#CCFBF1" />
        <stop offset="100%" stop-color="#99F6E4" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg5)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <path d="M160 160 L168 250 C169 265 180 275 200 275 C220 275 231 265 232 250 L240 160 Z" fill="#2DD4BF" stroke="#0D9488" stroke-width="3" />
    <path d="M160 175 C125 175 125 240 165 240" stroke="#0D9488" stroke-width="6" stroke-linecap="round" fill="none" />
    <path d="M240 175 C275 175 275 240 235 240" stroke="#0D9488" stroke-width="6" stroke-linecap="round" fill="none" />
    <rect x="150" y="145" width="100" height="20" rx="10" fill="#F59E0B" />
    <path d="M195 145 C195 120 205 110 220 110" stroke="#F59E0B" stroke-width="7" stroke-linecap="round" fill="none" />
    <circle cx="185" cy="205" r="3" fill="white" />
    <circle cx="215" cy="205" r="3" fill="white" />
    <path d="M192 218 Q200 226 208 218" stroke="white" stroke-width="3" stroke-linecap="round" fill="none" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0F766E" text-anchor="middle">Silicone Sippy Cup</text>
  </svg>`,

  'mangkok.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFE4E6" />
        <stop offset="100%" stop-color="#FECDD3" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg6)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <ellipse cx="200" cy="255" rx="75" ry="10" fill="#F43F5E" />
    <path d="M130 180 C130 240 270 240 270 180 Z" fill="#FB7185" stroke="#E11D48" stroke-width="3" />
    <circle cx="150" cy="175" r="12" fill="#FB7185" stroke="#E11D48" stroke-width="2" />
    <circle cx="250" cy="175" r="12" fill="#FB7185" stroke="#E11D48" stroke-width="2" />
    <path d="M255 130 C270 145 285 200 260 215" stroke="#F59E0B" stroke-width="8" stroke-linecap="round" fill="none" />
    <ellipse cx="245" cy="215" rx="12" ry="8" fill="#F59E0B" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#BE123C" text-anchor="middle">Suction Feeding Bowl</text>
  </svg>`,

  'sepatu.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EDE9FE" />
        <stop offset="100%" stop-color="#DDD6FE" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg7)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <path d="M130 210 C130 180 160 170 180 170 C195 170 200 185 200 210 C200 245 130 245 130 210 Z" fill="#8B5CF6" stroke="#6D28D9" stroke-width="3" />
    <ellipse cx="165" cy="238" rx="38" ry="8" fill="#4C1D95" opacity="0.3" />
    <path d="M200 210 C200 180 230 170 250 170 C265 170 270 185 270 210 C270 245 200 245 200 210 Z" fill="#A78BFA" stroke="#7C3AED" stroke-width="3" />
    <ellipse cx="235" cy="238" rx="38" ry="8" fill="#4C1D95" opacity="0.3" />
    <path d="M145 195 Q165 205 185 195" stroke="white" stroke-width="4" stroke-linecap="round" fill="none" />
    <path d="M215 195 Q235 205 255 195" stroke="white" stroke-width="4" stroke-linecap="round" fill="none" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#6D28D9" text-anchor="middle">Prewalker Soft Shoes</text>
  </svg>`,

  'topi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bg8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#DCFCE7" />
        <stop offset="100%" stop-color="#BBF7D0" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="32" fill="url(#bg8)" />
    <circle cx="200" cy="200" r="140" fill="white" opacity="0.7" />
    <path d="M110 230 Q200 260 290 230 C290 220 280 215 270 215 Q200 235 130 215 C120 215 110 220 110 230 Z" fill="#10B981" stroke="#047857" stroke-width="3" />
    <path d="M140 218 C140 145 260 145 260 218 Z" fill="#34D399" stroke="#047857" stroke-width="3" />
    <circle cx="155" cy="145" r="14" fill="#10B981" stroke="#047857" stroke-width="2" />
    <circle cx="245" cy="145" r="14" fill="#10B981" stroke="#047857" stroke-width="2" />
    <path d="M136 210 Q200 228 264 210" stroke="#F59E0B" stroke-width="6" fill="none" />
    <text x="200" y="325" font-family="sans-serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">Kids Bucket Hat</text>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('Created asset:', filename);
}
