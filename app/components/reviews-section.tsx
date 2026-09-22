import { StarIcon } from './icons';

const badgeColors = {
    navy: 'bg-slate-800',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
} as const;

type Review = {
    initial: string;
    color: keyof typeof badgeColors;
    destination: string;
    quote: string;
    couple: string;
    detail: string;
    daysAgo: number;
};

const reviews: Review[] = [
    {
        initial: '문',
        color: 'navy',
        destination: '수성구',
        quote: '질문 몇 개에 저희 취향을 딱 파악해서 가성비와 고급스러움 다 잡은 웨딩홀을 골라주셨어요.',
        couple: '문**·송**우 커플',
        detail: '수성구 라비아웨딩컨벤션',
        daysAgo: 2,
    },
    {
        initial: '서',
        color: 'orange',
        destination: '수성구',
        quote: '수성구 중심가라 하객분들 오시기 편했고, 식사 맛과 홀 컨디션이 기대 이상이었습니다.',
        couple: '서**·남** 부부',
        detail: '수성구 그랜드힐스웨딩',
        daysAgo: 4,
    },
    {
        initial: '박',
        color: 'navy',
        destination: '동구',
        quote: '금호강 리버뷰 채플에 하루 종일 감탄했어요. 사진 스팟이 많아서 하객들도 좋아했습니다.',
        couple: '박**·유** 커플',
        detail: '동구 아양리버뷰웨딩',
        daysAgo: 6,
    },
    {
        initial: '정',
        color: 'orange',
        destination: '동구',
        quote: '하객 동선 짜는 게 너무 막막했거든요. 상담 신청하고 주차부터 식사 동선까지 완벽하게 맞춘 홀을 받았어요.',
        couple: '정**·강** 커플',
        detail: '동구 신천센트럴웨딩',
        daysAgo: 8,
    },
    {
        initial: '이',
        color: 'navy',
        destination: '북구',
        quote: '요즘 웨딩 관련 이슈가 많아 불안했는데, 견적 항목을 투명하게 확인시켜 주셔서 계약할 때 마음이 정말 놓였습니다.',
        couple: '이**·박** 부부',
        detail: '북구 대구역웨딩컨벤션',
        daysAgo: 9,
    },
    {
        initial: '조',
        color: 'pink',
        destination: '북구',
        quote: '클래식 채플 조명부터 인생샷 각이더라고요. 한식 다이닝 코스 예약까지 미리 잡아주셔서 편했어요.',
        couple: '조**·윤** 커플',
        detail: '북구 칠성노블레스웨딩',
        daysAgo: 11,
    },
    {
        initial: '한',
        color: 'orange',
        destination: '서구',
        quote: '서대구역 인근이라 접근성이 좋고, 실속있는 견적으로 알차게 진행했어요.',
        couple: '한**·김** 커플',
        detail: '서구 서대구웨딩홀',
        daysAgo: 13,
    },
    {
        initial: '신',
        color: 'pink',
        destination: '서구',
        quote: '아늑한 소규모 채플이라 조용하고 프라이빗했어요. 한정식 다이닝도 정갈했습니다.',
        couple: '신**·구** 부부',
        detail: '서구 내당클래식웨딩',
        daysAgo: 15,
    },
    {
        initial: '김',
        color: 'pink',
        destination: '달서구',
        quote: '두류공원 전망 덕분에 사진이 정말 예쁘게 나왔어요. 가족 하객분들도 편하게 오셨습니다.',
        couple: '김**·최** 부부',
        detail: '달서구 두류파크뷰웨딩',
        daysAgo: 17,
    },
    {
        initial: '노',
        color: 'orange',
        destination: '달서구',
        quote: '넓은 주차공간 덕분에 하객 동선이 압도적으로 편했어요. 식사 코스 안내도 알차게 해주셨습니다.',
        couple: '노**·임** 커플',
        detail: '달서구 성서그랜드컨벤션',
        daysAgo: 19,
    },
    {
        initial: '배',
        color: 'navy',
        destination: '구미',
        quote: '금오산 자락 야외 정원이 신기했고, 자연 채광 아래 사진 찍으며 여유롭게 진행했어요.',
        couple: '배**·전** 부부',
        detail: '구미 금오산가든웨딩',
        daysAgo: 21,
    },
    {
        initial: '백',
        color: 'orange',
        destination: '구미',
        quote: '산업단지 인근이라 직장 동료 하객분들 접근성이 정말 좋았습니다.',
        couple: '백**·서** 부부',
        detail: '구미 구미비즈니스웨딩컨벤션',
        daysAgo: 22,
    },
    {
        initial: '홍',
        color: 'navy',
        destination: '경산',
        quote: '고급스러운 채플과 프리미엄 다이닝 코스가 인상적이었어요.',
        couple: '홍**·차** 커플',
        detail: '경산 경산팰리스웨딩',
        daysAgo: 23,
    },
    {
        initial: '문',
        color: 'pink',
        destination: '경산',
        quote: '리버뷰 배경으로 사진이 정말 예쁘게 나왔고, 대형홀이라 하객 동선도 여유로웠습니다.',
        couple: '문**·하** 커플',
        detail: '경산 하양리버뷰컨벤션',
        daysAgo: 24,
    },
];

function ReviewCard({ review, hidden = false }: { review: Review; hidden?: boolean }) {
    return (
        <div
            aria-hidden={hidden}
            className="flex h-[260px] w-[280px] shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
        >
            <div className="flex items-start justify-between">
                <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                    ))}
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ${badgeColors[review.color]}`}
                    >
                        {review.destination}
                    </span>
                    <span className="text-[11px] text-gray-400">{review.daysAgo}일 전</span>
                </div>
            </div>

            <p className="mt-3 line-clamp-3 min-h-[63px] text-sm leading-relaxed text-gray-600">{review.quote}</p>

            <div className="mt-auto flex items-center gap-2.5 border-t border-gray-100 pt-4">
                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${badgeColors[review.color]}`}
                >
                    {review.initial}
                </span>
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">{review.couple}</p>
                    <p className="truncate text-xs text-gray-400">{review.detail}</p>
                </div>
            </div>
        </div>
    );
}

export function ReviewsSection() {
    return (
        <section id="reviews" className="scroll-mt-20 border-t border-gray-100 py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
                <h2 className="text-4xl font-extrabold leading-snug text-gray-900 md:text-5xl">
                    예식을 마친 신랑신부들이
                    <br />
                    직접 전하는 <span className="text-brand">100% 찐 후기</span>
                </h2>
                <p className="mt-4 text-sm font-medium tracking-[0.2em] text-gray-400">
                    REAL STORIES WITH WEDDING HALL SCAN GO
                </p>
            </div>

            <div className="relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div className="flex w-max animate-[marquee_100s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.couple} review={review} />
                    ))}
                    {reviews.map((review) => (
                        <ReviewCard key={`${review.couple}-repeat`} review={review} hidden />
                    ))}
                </div>
            </div>
        </section>
    );
}
