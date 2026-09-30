import { weddingCardImageResponse } from '@/lib/wedding-card-image';

export async function GET() {
    return weddingCardImageResponse(
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none">
            <rect x="5.5" y="4.5" width="13" height="16" rx="2" stroke="#fff" strokeWidth="1.4" />
            <path d="M9 4.5V4a2 2 0 012-2h2a2 2 0 012 2v.5" stroke="#fff" strokeWidth="1.4" />
            <path d="M9 13l2 2 4-4.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    );
}
