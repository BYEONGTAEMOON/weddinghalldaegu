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
        quote: '화려한 샹들리에 홀 분위기에 다들 감탄했어요. 고급 뷔페 코스도 하객분들 반응이 정말 좋았습니다.',
        couple: '문**·송**우 커플',
        detail: '수성구 라온제나',
        daysAgo: 2,
    },
    {
        initial: '서',
        color: 'orange',
        destination: '수성구',
        quote: '전문 플래너님이 처음부터 끝까지 꼼꼼하게 챙겨주셔서 준비 과정이 수월했어요. 인테리어도 고급스러웠습니다.',
        couple: '서**·남** 부부',
        detail: '수성구 아리아나',
        daysAgo: 4,
    },
    {
        initial: '박',
        color: 'navy',
        destination: '동구',
        quote: '호텔 웨딩이라 그런지 객실 컨디션이 좋아서 지방에서 오신 하객분들이 편하게 묵으셨어요.',
        couple: '박**·유** 커플',
        detail: '동구 퀸벨호텔',
        daysAgo: 6,
    },
    {
        initial: '정',
        color: 'orange',
        destination: '동구',
        quote: '스카이라운지에서 바라보는 전망이 정말 예뻤어요. 최상층이라 사진도 예쁘게 나왔습니다.',
        couple: '정**·강** 커플',
        detail: '동구 스카이나인스',
        daysAgo: 8,
    },
    {
        initial: '이',
        color: 'navy',
        destination: '북구',
        quote: '화려한 인테리어와 고급스러운 서비스 모두 만족스러웠어요. 진행도 매끄러웠습니다.',
        couple: '이**·박** 부부',
        detail: '북구 라온웨딩',
        daysAgo: 9,
    },
    {
        initial: '조',
        color: 'pink',
        destination: '북구',
        quote: '홀이 넓어서 하객이 많아도 여유로웠고, 메뉴 구성도 다양해서 다들 좋아하셨어요.',
        couple: '조**·윤** 커플',
        detail: '북구 웨딩메르디앙',
        daysAgo: 11,
    },
    {
        initial: '한',
        color: 'orange',
        destination: '서구',
        quote: '80분이라는 여유로운 예식 시간 덕분에 급하지 않게 진행할 수 있었어요. 복층 신부대기실도 편했습니다.',
        couple: '한**·김** 커플',
        detail: '서구 웨딩 아테네',
        daysAgo: 13,
    },
    {
        initial: '신',
        color: 'pink',
        destination: '달서구',
        quote: '8층 홀 전망이 좋았고, 호텔 객실과 연계돼서 혼주분들 숙박도 편하게 해결했어요.',
        couple: '신**·구** 부부',
        detail: '달서구 AW호텔',
        daysAgo: 15,
    },
    {
        initial: '김',
        color: 'pink',
        destination: '달서구',
        quote: '자연 친화적인 야외 공간이 정말 예뻤어요. 수목원 컨셉이라 사진 찍을 곳이 많아서 좋았습니다.',
        couple: '김**·최** 부부',
        detail: '달서구 아뜰리에 수목원',
        daysAgo: 17,
    },
    {
        initial: '노',
        color: 'orange',
        destination: '구미',
        quote: '900대 주차 가능하다는 말이 사실이었어요. 하객분들 주차 걱정 없이 편하게 오셨습니다.',
        couple: '노**·임** 커플',
        detail: '구미 BW웨딩',
        daysAgo: 19,
    },
    {
        initial: '배',
        color: 'navy',
        destination: '구미',
        quote: '가든 스타일 야외예식이 감성적이었고, 실내 컨벤션도 함께 있어서 날씨 걱정 없이 준비했어요.',
        couple: '배**·전** 부부',
        detail: '구미 토미스퀘어가든',
        daysAgo: 21,
    },
    {
        initial: '백',
        color: 'orange',
        destination: '경산',
        quote: '5층 뷔페홀 음식 종류가 다양해서 하객분들 반응이 좋았어요. 현대적인 디자인도 마음에 들었습니다.',
        couple: '백**·서** 부부',
        detail: '경산 아트라움',
        daysAgo: 22,
    },
    {
        initial: '홍',
        color: 'navy',
        destination: '경산',
        quote: '프리미엄 웨딩홀답게 시설이 고급스러웠고, 수용 인원이 넉넉해서 양가 하객 모두 편하게 앉으셨어요.',
        couple: '홍**·차** 커플',
        detail: '경산 로터스101',
        daysAgo: 23,
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
