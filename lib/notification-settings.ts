export type NotificationSettings = {
    smsEnabled: boolean;
    recipientPhone: string;
    senderPhone: string;
};

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
    smsEnabled: false,
    recipientPhone: '',
    senderPhone: '',
};

export function mergeNotificationSettings(partial: Partial<NotificationSettings> | null | undefined): NotificationSettings {
    if (!partial) return DEFAULT_NOTIFICATION_SETTINGS;
    return { ...DEFAULT_NOTIFICATION_SETTINGS, ...partial };
}
