import { DEFAULT_NOTIFICATION_SETTINGS, mergeNotificationSettings, type NotificationSettings } from './notification-settings';
import { getPrisma } from './prisma';

// Split out from notification-settings.ts for the same reason as
// scenario-store.ts / chatbot-scenario.ts: keep the Prisma/pg adapter out of
// any bundle that might end up imported by a client component.
export async function getNotificationSettingsWithStatus(): Promise<{
    settings: NotificationSettings;
    error: string | null;
}> {
    try {
        const prisma = getPrisma();
        const row = await prisma.notificationSettings.findUnique({ where: { id: 1 } });
        return { settings: row ? mergeNotificationSettings(row.data) : DEFAULT_NOTIFICATION_SETTINGS, error: null };
    } catch (error) {
        return {
            settings: DEFAULT_NOTIFICATION_SETTINGS,
            error: error instanceof Error ? error.message : '데이터베이스에 연결할 수 없습니다.',
        };
    }
}

export async function getNotificationSettings(): Promise<NotificationSettings> {
    const { settings } = await getNotificationSettingsWithStatus();
    return settings;
}
