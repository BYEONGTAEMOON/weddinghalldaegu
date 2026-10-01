import { NextResponse } from 'next/server';

import { requireAdminSession } from '@/lib/admin-guard';
import { mergeNotificationSettings, type NotificationSettings } from '@/lib/notification-settings';
import { getNotificationSettingsWithStatus } from '@/lib/notification-store';
import { getPrisma } from '@/lib/prisma';

export async function GET() {
    if (!(await requireAdminSession())) {
        return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    const { settings, error } = await getNotificationSettingsWithStatus();
    return NextResponse.json({ settings, error });
}

export async function PUT(request: Request) {
    if (!(await requireAdminSession())) {
        return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    let body: Partial<NotificationSettings>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
    }

    const settings = mergeNotificationSettings(body);

    try {
        const prisma = getPrisma();
        await prisma.notificationSettings.upsert({
            where: { id: 1 },
            create: { id: 1, data: settings },
            update: { data: settings },
        });
        return NextResponse.json({ ok: true, settings });
    } catch (error) {
        console.error('Failed to save notification settings', error);
        return NextResponse.json({ error: '저장에 실패했습니다.' }, { status: 500 });
    }
}
