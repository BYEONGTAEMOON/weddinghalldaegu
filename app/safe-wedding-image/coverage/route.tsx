import { weddingCardImageResponse } from '@/lib/wedding-card-image';

export async function GET() {
    return weddingCardImageResponse(
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 21s7-6.3 7-11.5A7 7 0 105 9.5C5 14.7 12 21 12 21z"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="9.5" r="2.3" stroke="#fff" strokeWidth="1.4" />
        </svg>,
    );
}
