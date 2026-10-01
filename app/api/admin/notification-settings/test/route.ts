import { NextResponse } from 'next/server';

import { requireAdminSession } from '@/lib/admin-guard';
import { sendSms } from '@/lib/sms';

export async function POST(request: Request) {
    if (!(await requireAdminSession())) {
        return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    let body: { recipientPhone?: string; senderPhone?: string };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
    }

    const { recipientPhone, senderPhone } = body;
    if (!recipientPhone || !senderPhone) {
        return NextResponse.json({ error: '수신번호와 발신번호를 먼저 입력해주세요.' }, { status: 400 });
    }

    const result = await sendSms({
        to: recipientPhone,
        from: senderPhone,
        text: '[웨딩홀스캔GO] 테스트 문자입니다. 이 문자가 도착했다면 알림 설정이 정상 연결된 거예요.',
    });

    if (!result.ok) {
        return NextResponse.json({ error: result.error }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
}
