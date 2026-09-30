// Falls back to the current Vercel deployment domain until a custom domain is
// connected — set NEXT_PUBLIC_SITE_URL (locally and on Vercel) once one is,
// so canonical URLs, the sitemap, robots.txt, and OG/JSON-LD links all follow
// automatically without another code change.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.daeguweddinghall.com';

// The on-page/visible brand — kept separate from the SEO-focused <title> copy
// so structured data always matches what a visitor (and a crawler fact-checking
// against the rendered page) actually sees in the header/footer.
export const SITE_BRAND_NAME = '웨딩홀스캔GO';

export const SITE_TITLE = '대구웨딩홀 스캔 라모르';
export const SITE_DESCRIPTION = '예식 비용, 식대, 보증인원, 홀 분위기까지 한눈에 비교하고 나에게 맞는 웨딩홀을 찾아보세요.';

export const SITE_KEYWORDS = [
    '대구웨딩홀',
    '구미웨딩홀',
    '경산웨딩홀',
    '웨딩홀 비교',
    '웨딩홀 견적',
    '예식장 추천',
    '웨딩홀 식대',
    '웨딩홀 보증인원',
];

export const NAVER_SITE_VERIFICATION = 'b659b1d6116c8f29dad9bf0eba503e08d80ff7ad';

// Real, currently-displayed business details (site-footer.tsx) — reused as-is
// in structured data so it never asserts anything the page itself doesn't.
export const BUSINESS = {
    legalName: SITE_BRAND_NAME,
    representative: '류수진',
    address: {
        streetAddress: '법원로8번길 10(거제동)',
        addressLocality: '연제구',
        addressRegion: '부산광역시',
        addressCountry: 'KR',
    },
    registrationNumber: '112-86-03487',
    areaServed: ['대구광역시', '구미시', '경산시'],
} as const;
