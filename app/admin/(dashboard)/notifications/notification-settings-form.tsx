'use client';

import { useState } from 'react';

import type { NotificationSettings } from '@/lib/notification-settings';

function RecipientPhoneListEditor({
    phones,
    onChange,
}: {
    phones: string[];
    onChange: (phones: string[]) => void;
}) {
    return (
        <div>
            <span className="text-xs font-semibold text-gray-600">알림 받을 번호 (관리자 휴대폰, 여러 개 등록 가능)</span>
            <div className="mt-1.5 space-y-2">
                {phones.map((phone, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="01012345678"
                            value={phone}
                            onChange={(e) => {
                                const next = [...phones];
                                next[index] = e.target.value;
                                onChange(next);
                            }}
                            className="flex-1 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                        />
                        <button
                            type="button"
                            onClick={() => onChange(phones.filter((_, i) => i !== index))}
                            className="cursor-pointer rounded-lg border border-red-200 px-2.5 py-2 text-xs font-semibold text-red-500 hover:bg-red-50"
                        >
                            삭제
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => onChange([...phones, ''])}
                    className="cursor-pointer rounded-lg border border-dashed border-gray-300 px-3 py-2 text-xs font-semibold text-gray-500 hover:border-brand hover:text-brand"
                >
                    + 번호 추가
                </button>
            </div>
        </div>
    );
}

export function NotificationSettingsForm({ initialSettings }: { initialSettings: NotificationSettings }) {
    const [smsEnabled, setSmsEnabled] = useState(initialSettings.smsEnabled);
    const [recipientPhones, setRecipientPhones] = useState<string[]>(
        initialSettings.recipientPhones.length > 0 ? initialSettings.recipientPhones : [''],
    );
    const [senderPhone, setSenderPhone] = useState(initialSettings.senderPhone);
    const [saving, setSaving] = useState(false);
    const [testing, setTesting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const cleanedPhones = recipientPhones.map((p) => p.trim()).filter(Boolean);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);
        setMessage(null);
        try {
            const res = await fetch('/api/admin/notification-settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ smsEnabled, recipientPhones: cleanedPhones, senderPhone }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setMessage({ type: 'error', text: data.error ?? '저장에 실패했습니다.' });
                return;
            }
            setMessage({ type: 'success', text: '저장했어요. 다음 신청부터 바로 적용됩니다.' });
        } catch {
            setMessage({ type: 'error', text: '네트워크 오류가 발생했습니다.' });
        } finally {
            setSaving(false);
        }
    }

    async function handleTestSend() {
        setTesting(true);
        setMessage(null);
        try {
            const res = await fetch('/api/admin/notification-settings/test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recipientPhones: cleanedPhones, senderPhone }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setMessage({ type: 'error', text: data.error ?? '테스트 문자 발송에 실패했습니다.' });
                return;
            }
            const failed: string[] = data.failed ?? [];
            if (failed.length > 0) {
                setMessage({ type: 'error', text: `일부 번호 발송 실패: ${failed.join(', ')}` });
                return;
            }
            setMessage({ type: 'success', text: '테스트 문자를 모두 보냈어요. 수신 여부를 확인해주세요.' });
        } catch {
            setMessage({ type: 'error', text: '네트워크 오류가 발생했습니다.' });
        } finally {
            setTesting(false);
        }
    }

    return (
        <form onSubmit={handleSave} className="max-w-md space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <label className="flex items-center gap-2.5">
                <input
                    type="checkbox"
                    checked={smsEnabled}
                    onChange={(e) => setSmsEnabled(e.target.checked)}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-brand focus:ring-brand"
                />
                <span className="text-sm font-semibold text-gray-700">새 신청이 접수되면 문자로 알림받기</span>
            </label>

            <div className="border-t border-gray-100 pt-4">
                <RecipientPhoneListEditor phones={recipientPhones} onChange={setRecipientPhones} />

                <label className="mt-4 block">
                    <span className="text-xs font-semibold text-gray-600">
                        발신 번호 <span className="font-normal text-gray-400">(Solapi에 사전 등록된 번호만 사용 가능)</span>
                    </span>
                    <input
                        type="text"
                        placeholder="01012345678"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        className="mt-1.5 block w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                </label>
            </div>

            {message && (
                <p className={`text-sm font-medium ${message.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {message.text}
                </p>
            )}

            <div className="flex items-center gap-2">
                <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 cursor-pointer rounded-lg bg-brand py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {saving ? '저장 중...' : '저장하기'}
                </button>
                <button
                    type="button"
                    onClick={handleTestSend}
                    disabled={testing || cleanedPhones.length === 0 || !senderPhone}
                    className="flex-1 cursor-pointer rounded-lg border border-gray-200 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {testing ? '발송 중...' : '테스트 문자 보내기'}
                </button>
            </div>
        </form>
    );
}
