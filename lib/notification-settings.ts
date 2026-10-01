export type NotificationSettings = {
    smsEnabled: boolean;
    recipientPhones: string[];
    senderPhone: string;
};

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
    smsEnabled: false,
    recipientPhones: [],
    senderPhone: '',
};

// Accepts `unknown` (not just Partial<NotificationSettings>) because this also
// reads whatever shape is already sitting in the database — including the
// original single `recipientPhone: string` field from before multi-recipient
// support existed. A row saved in that older shape is transparently upgraded
// into `recipientPhones: [that number]` the next time it's read, so existing
// admin-entered numbers are never lost by this change.
export function mergeNotificationSettings(partial: unknown): NotificationSettings {
    if (!partial || typeof partial !== 'object') return DEFAULT_NOTIFICATION_SETTINGS;
    const p = partial as Record<string, unknown>;

    const recipientPhones = Array.isArray(p.recipientPhones)
        ? p.recipientPhones.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
        : typeof p.recipientPhone === 'string' && p.recipientPhone.trim().length > 0
          ? [p.recipientPhone]
          : DEFAULT_NOTIFICATION_SETTINGS.recipientPhones;

    return {
        smsEnabled: typeof p.smsEnabled === 'boolean' ? p.smsEnabled : DEFAULT_NOTIFICATION_SETTINGS.smsEnabled,
        recipientPhones,
        senderPhone: typeof p.senderPhone === 'string' ? p.senderPhone : DEFAULT_NOTIFICATION_SETTINGS.senderPhone,
    };
}
