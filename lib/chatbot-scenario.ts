export type TextItem = { title: string; desc: string };
export type TagItem = { title: string; tag: string };
export type DestinationResort = { slug: string; name: string; description: string; tags: string[]; image: string };
export type PopularResort = { slug: string; country: string; name: string; description: string; tags: string[]; image: string };

export type ChatbotScenario = {
    introMessage: string;
    monthRangeStart: string;
    monthRangeEnd: string;
    destinations: string[];
    destinationQuestion: string;
    budgets: string[];
    budgetQuestion: string;
    resortPickerIntro: string;
    afterResortMessage: string;
    phoneQuestion: string;
    privacyNotice: string;
    regions: string[];
    regionQuestion: string;
    nameQuestion: string;
    freeItems: TextItem[];
    extraBenefits: TagItem[];
    completionSubtitle: string;
    completionClosing: string;
    resortsByDestination: Record<string, DestinationResort[]>;
    popularResorts: PopularResort[];
};

function seedImage(slug: string): string {
    return `https://picsum.photos/seed/${slug}/800/360`;
}

function withImages(resorts: Omit<DestinationResort, 'image'>[]): DestinationResort[] {
    return resorts.map((resort) => ({ ...resort, image: seedImage(resort.slug) }));
}

const DEFAULT_RESORTS_BY_DESTINATION: Record<string, DestinationResort[]> = {
    수성구: withImages([
        {
            slug: 'ravia-wedding-convention',
            name: '라비아웨딩컨벤션',
            description: '화려한 샹들리에 홀과 고급 뷔페 다이닝을 갖춘 수성구 대표 프리미엄 웨딩홀',
            tags: ['샹들리에홀', '고급뷔페', '발렛파킹'],
        },
        {
            slug: 'grand-hills-wedding',
            name: '그랜드힐스웨딩',
            description: '탁 트인 스카이라운지 야외 포토존과 넉넉한 주차 공간을 갖춘 모던 웨딩홀',
            tags: ['스카이라운지', '야외포토존', '넉넉한주차'],
        },
        {
            slug: 'garden-palace-house',
            name: '더가든팰리스',
            description: '사계절 실내 정원 홀과 셰프 협업 코스 요리를 선보이는 프라이빗 하우스웨딩홀',
            tags: ['실내정원홀', '코스요리', '프라이빗홀'],
        },
    ]),
    동구: withImages([
        {
            slug: 'ayang-river-view-wedding',
            name: '아양리버뷰웨딩',
            description: '금호강 리버뷰와 자연광 가득한 통유리 홀을 갖춘 감성 웨딩홀',
            tags: ['리버뷰', '통유리홀', '자연광'],
        },
        {
            slug: 'sincheon-central-wedding',
            name: '신천센트럴웨딩',
            description: '넉넉한 주차공간과 합리적인 견적이 강점인 실속형 컨벤션 웨딩홀',
            tags: ['넉넉한주차', '합리적견적', '컨벤션홀'],
        },
        {
            slug: 'palgong-garden-house',
            name: '팔공가든하우스',
            description: '팔공산 자락의 탁 트인 야외 정원에서 즐기는 자연친화형 하우스웨딩홀',
            tags: ['야외정원', '하우스웨딩', '자연친화'],
        },
    ]),
    북구: withImages([
        {
            slug: 'daegu-station-wedding-convention',
            name: '대구역웨딩컨벤션',
            description: '대구역 도보 5분, 대규모 하객도 여유로운 동선을 자랑하는 컨벤션 웨딩홀',
            tags: ['역세권', '대규모홀', '넉넉한동선'],
        },
        {
            slug: 'chilseong-noblesse-wedding',
            name: '칠성노블레스웨딩',
            description: '은은한 조명의 클래식 홀과 프리미엄 한식 다이닝을 갖춘 웨딩홀',
            tags: ['클래식홀', '한식다이닝', '프리미엄'],
        },
        {
            slug: 'universal-wedding-hall',
            name: '유니버설웨딩홀',
            description: '합리적인 가격과 실속있는 패키지 구성으로 인기인 가성비 웨딩홀',
            tags: ['가성비', '실속패키지', '실용동선'],
        },
    ]),
    달서구: withImages([
        {
            slug: 'duryu-park-view-wedding',
            name: '두류파크뷰웨딩',
            description: '두류공원 전망과 넓은 야외 포토존을 갖춘 가족 하객 친화형 웨딩홀',
            tags: ['공원전망', '야외포토존', '가족형'],
        },
        {
            slug: 'seongseo-grand-convention',
            name: '성서그랜드컨벤션',
            description: '성서산업단지 인근에 위치해 직장인 하객 접근성이 좋은 대형 컨벤션 웨딩홀',
            tags: ['대형컨벤션', '접근성', '넉넉한주차'],
        },
        {
            slug: 'west-hill-chapel',
            name: '웨스트힐웨딩',
            description: '따뜻한 우드톤 인테리어가 돋보이는 아늑한 소규모 웨딩 전문홀',
            tags: ['우드톤홀', '아늑한분위기', '소규모예식'],
        },
    ]),
    서구: withImages([
        {
            slug: 'seodaegu-wedding-hall',
            name: '서대구웨딩홀',
            description: '서대구역 인근에 위치한 실속형 컨벤션 웨딩홀',
            tags: ['역세권', '실속형', '컨벤션홀'],
        },
        {
            slug: 'naedang-classic-wedding',
            name: '내당클래식웨딩',
            description: '아늑한 소규모 홀과 정갈한 한정식 다이닝을 갖춘 웨딩홀',
            tags: ['소규모홀', '한정식', '아늑함'],
        },
    ]),
    구미: withImages([
        {
            slug: 'gumi-business-wedding-convention',
            name: '구미비즈니스웨딩컨벤션',
            description: '구미국가산업단지 인근 대규모 컨벤션과 넉넉한 주차를 갖춘 실속형 웨딩홀',
            tags: ['산업단지인근', '대형컨벤션', '넉넉한주차'],
        },
        {
            slug: 'geumosan-garden-wedding',
            name: '금오산가든웨딩',
            description: '금오산 자락의 탁 트인 야외 정원과 자연 채광 홀을 갖춘 웨딩홀',
            tags: ['금오산뷰', '야외정원', '자연채광'],
        },
        {
            slug: 'gumi-central-chapel',
            name: '구미센트럴웨딩',
            description: '구미역 도보권에 위치한 아늑한 소규모 웨딩 전문홀',
            tags: ['역세권', '소규모홀', '아늑함'],
        },
    ]),
    경산: withImages([
        {
            slug: 'gyeongsan-university-wedding-hall',
            name: '경산대학로웨딩홀',
            description: '대학가 인근 젊은 감성의 모던한 인테리어를 갖춘 웨딩홀',
            tags: ['대학가', '모던인테리어', '청년감성'],
        },
        {
            slug: 'hayang-river-view-convention',
            name: '하양리버뷰컨벤션',
            description: '금호강 지류 리버뷰와 넓은 홀을 갖춘 실속형 컨벤션 웨딩홀',
            tags: ['리버뷰', '대형홀', '실속형'],
        },
        {
            slug: 'gyeongsan-palace-wedding',
            name: '경산팰리스웨딩',
            description: '경산 중심가에 위치한 고급 홀과 프리미엄 다이닝을 갖춘 웨딩홀',
            tags: ['프리미엄다이닝', '고급홀', '중심가'],
        },
    ]),
};

const DEFAULT_POPULAR_RESORTS: PopularResort[] = [
    {
        slug: 'ravia-wedding-convention-popular',
        country: '수성구',
        name: '라비아웨딩컨벤션',
        description: '화려한 샹들리에 홀과 고급 뷔페 다이닝을 갖춘 수성구 대표 프리미엄 웨딩홀',
        tags: ['샹들리에홀', '고급뷔페', '프리미엄'],
        image: seedImage('ravia-wedding-convention-popular'),
    },
    {
        slug: 'ayang-river-view-wedding-popular',
        country: '동구',
        name: '아양리버뷰웨딩',
        description: '금호강 리버뷰와 자연광 가득한 통유리 홀을 갖춘 감성 웨딩홀',
        tags: ['리버뷰', '통유리홀', '자연광'],
        image: seedImage('ayang-river-view-wedding-popular'),
    },
    {
        slug: 'daegu-station-wedding-convention-popular',
        country: '북구',
        name: '대구역웨딩컨벤션',
        description: '대구역 도보 5분, 대규모 하객도 여유로운 동선을 자랑하는 컨벤션 웨딩홀',
        tags: ['역세권', '대규모홀', '넉넉한동선'],
        image: seedImage('daegu-station-wedding-convention-popular'),
    },
    {
        slug: 'duryu-park-view-wedding-popular',
        country: '달서구',
        name: '두류파크뷰웨딩',
        description: '두류공원 전망과 넓은 야외 포토존을 갖춘 가족 하객 친화형 웨딩홀',
        tags: ['공원전망', '야외포토존', '가족형'],
        image: seedImage('duryu-park-view-wedding-popular'),
    },
    {
        slug: 'seodaegu-wedding-hall-popular',
        country: '서구',
        name: '서대구웨딩홀',
        description: '서대구역 인근에 위치한 실속형 컨벤션 웨딩홀',
        tags: ['역세권', '실속형', '컨벤션홀'],
        image: seedImage('seodaegu-wedding-hall-popular'),
    },
    {
        slug: 'geumosan-garden-wedding-popular',
        country: '구미',
        name: '금오산가든웨딩',
        description: '금오산 자락의 탁 트인 야외 정원과 자연 채광 홀을 갖춘 웨딩홀',
        tags: ['금오산뷰', '야외정원', '자연채광'],
        image: seedImage('geumosan-garden-wedding-popular'),
    },
    {
        slug: 'gyeongsan-palace-wedding-popular',
        country: '경산',
        name: '경산팰리스웨딩',
        description: '경산 중심가에 위치한 고급 홀과 프리미엄 다이닝을 갖춘 웨딩홀',
        tags: ['프리미엄다이닝', '고급홀', '중심가'],
        image: seedImage('gyeongsan-palace-wedding-popular'),
    },
];

export const DEFAULT_CHATBOT_SCENARIO: ChatbotScenario = {
    introMessage:
        '안녕하세요, 웨딩홀스캔GO 대구입니다. 😊\n예식월·희망지역·예산만 알려주시면 조건에 딱 맞는 웨딩홀과 예상 견적, 예식 가능일까지 한 번에 비교해드려요.\n\n먼저, 예식은 몇 월쯤으로 생각하고 계세요?\n날짜가 아직 미정이어도 괜찮아요. 예식월만 알아도 가능한 홀 스케줄과 받으실 수 있는 혜택을 먼저 확인해드릴게요.',
    monthRangeStart: '2026-10',
    monthRangeEnd: '2027-12',
    destinations: ['수성구', '동구', '북구', '서구', '달서구', '구미', '경산'],
    destinationQuestion:
        '{value} 예정으로 예식 가능일과 견적 조회 도와드릴게요. ✨\n\n희망 지역은 대구·구미·경산 중 어느 곳으로 생각하고 계세요? 📍\n지역마다 홀 스타일과 견적대가 달라요.\n두 분이 원하시는 예식 스타일 기준으로 골라도 좋아요.',
    budgets: ['1,000만원 이하', '1,000~2,000만원', '2,000~3,000만원', '3,000만원 이상'],
    budgetQuestion:
        '예상 예식 비용은 어느 정도로 보세요? 💰\n대관료부터 식대까지 총 견적을 좌우하는 가장 큰 변수예요.\n정확하지 않아도 괜찮으니 대략 범위로 골라주세요.',
    resortPickerIntro:
        '조건에 맞는 {destination} 웨딩홀 후보예요.\n혹시 1순위로 보고 계신 곳이 있다면 최대 3곳까지 골라주세요.\n(없으면 아래 "추천으로 받을게요")\n\n선택하신 웨딩홀 + 함께 보면 좋을 웨딩홀까지 총 3곳의 예식 가능일 · 예상 총견적 · 제휴 혜택을 한 번에 정리해 드릴게요.',
    afterResortMessage: '좋아요! 그럼 아래 자료를 무료로 정리해서 보내드릴게요. 🎁',
    phoneQuestion: '정리된 자료를 받으실 휴대폰 번호를 입력해주세요. 📱\n(카카오톡으로 보내드려요)',
    privacyNotice:
        '🔒 남겨주신 연락처는 상담 자료 발송에만 사용하고 안전하게 보관해요. 입력 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.',
    regions: ['100명 이하', '100~200명', '200~300명', '300명 이상'],
    regionQuestion: '예상 하객 수를 선택해주세요. 🏠\n하객 규모에 맞는 홀 크기와 테이블 구성을 더 정확하게 안내해드려요.',
    nameQuestion: '신청자 이름을 입력해주세요. 😊\n(자료 발송과 함께 추후 웨딩홀 간편예약 서비스 혜택도 함께 도와드릴게요)',
    freeItems: [
        { title: '2027 웨딩홀 비교 견적표', desc: '대관료·식대 조합을 한눈에' },
        { title: '선택 웨딩홀 예식 가능일 리포트', desc: '원하는 예식일 가능성 정리' },
        { title: '웨딩홀별 예상 총견적 비교', desc: '숨은 비용까지 합산' },
        { title: '제휴 혜택 총정리표', desc: '웨딩홀스캔GO 단독 제휴 적용' },
        { title: '예약 전 체크리스트', desc: '누락 방지 필수 항목' },
    ],
    extraBenefits: [
        { title: '무료 웨딩홀 예약 간편 서비스', tag: '무료' },
        { title: '상담 확정 시 예비부부 웰컴 기프트 증정', tag: '상담' },
        { title: '예약 확정 시 최대 100만원+ 추가 혜택', tag: '예약' },
    ],
    completionSubtitle: '선택하신 웨딩홀 기준 예식 가능일 · 예상 총견적 · 제휴 혜택 자료를 곧 카카오톡으로 정리해 보내드릴게요.',
    completionClosing:
        '상담·예약 시 받는 혜택은 자료 안내와 함께 웨딩홀 전담 플래너가 카카오톡 안내 시 자세히 알려드릴게요. 🙌\n신청 기준 1일 이내에 카카오톡으로 결과 자료를 공유드리겠습니다.\n\n행복한 결혼 준비의 시작이 되시길 바랍니다. 감사합니다. 💒',
    resortsByDestination: DEFAULT_RESORTS_BY_DESTINATION,
    popularResorts: DEFAULT_POPULAR_RESORTS,
};

export function applyTemplate(template: string, vars: Record<string, string>): string {
    return Object.entries(vars).reduce((text, [key, value]) => text.split(`{${key}}`).join(value), template);
}

export function mergeScenario(partial: Partial<ChatbotScenario> | null | undefined): ChatbotScenario {
    if (!partial) return DEFAULT_CHATBOT_SCENARIO;
    return { ...DEFAULT_CHATBOT_SCENARIO, ...partial };
}
