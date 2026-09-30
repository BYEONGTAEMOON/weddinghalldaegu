import { weddingCardImageResponse } from '@/lib/wedding-card-image';

export async function GET() {
    return weddingCardImageResponse(
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="1.4" />
            <path d="M12 8v4.5l3 2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    );
}
