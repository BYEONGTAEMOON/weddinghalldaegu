import type { Metadata } from 'next';

import { getNotificationSettingsWithStatus } from '@/lib/notification-store';

import { NotificationSettingsForm } from './notification-settings-form';

export const metadata: Metadata = { title: '알림 설정' };
export const dynamic = 'force-dynamic';

export default async function AdminNotificationsPage() {
    const { settings, error } = await getNotificationSettingsWithStatus();
    const smsConfigured = Boolean(process.env.SOLAPI_API_KEY && process.env.SOLAPI_API_SECRET);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">알림 설정</h1>
            <p className="mt-1 text-sm text-gray-500">새 신청이 접수되면 관리자 휴대폰으로 문자 알림을 보내드려요.</p>

            {error && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    데이터베이스가 아직 연결되지 않았어요. 지금은 기본값을 보여드리고 있고, 여기서 저장해도 DB 연결 전까지는
                    반영되지 않아요. ({error})
                </div>
            )}

            {!smsConfigured && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    문자 발송 연동(Solapi)이 아직 설정되지 않았어요. SOLAPI_API_KEY / SOLAPI_API_SECRET 환경변수를 등록한 뒤
                    다시 배포해주세요.
                </div>
            )}

            <div className="mt-6">
                <NotificationSettingsForm initialSettings={settings} />
            </div>
        </div>
    );
}
