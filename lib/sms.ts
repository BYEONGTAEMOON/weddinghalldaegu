import { SolapiMessageService } from 'solapi';

const globalForSolapi = globalThis as unknown as { solapi?: SolapiMessageService };

// Solapi requires phone numbers as plain digits (e.g. "01012345678") — no
// dashes, spaces, or a country-code prefix.
function normalizePhone(raw: string): string {
    return raw.replace(/\D/g, '');
}

function getClient(): SolapiMessageService | null {
    if (globalForSolapi.solapi) return globalForSolapi.solapi;

    const apiKey = process.env.SOLAPI_API_KEY;
    const apiSecret = process.env.SOLAPI_API_SECRET;
    if (!apiKey || !apiSecret) return null;

    const client = new SolapiMessageService(apiKey, apiSecret);
    globalForSolapi.solapi = client;
    return client;
}

export type SendSmsResult = { ok: true } | { ok: false; error: string };

export async function sendSms({ to, from, text }: { to: string; from: string; text: string }): Promise<SendSmsResult> {
    const client = getClient();
    if (!client) {
        return { ok: false, error: 'SOLAPI_API_KEY / SOLAPI_API_SECRET 환경변수가 설정되지 않았습니다.' };
    }
    if (!to || !from) {
        return { ok: false, error: '수신번호와 발신번호를 모두 입력해주세요.' };
    }

    try {
        await client.send({ to: normalizePhone(to), from: normalizePhone(from), text });
        return { ok: true };
    } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : '문자 발송에 실패했습니다.' };
    }
}
