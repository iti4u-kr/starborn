export interface TarotCard {
  id: number;
  name: string;
  nameKo: string;
  arcana: "major" | "minor";
  suit?: string;
  image: string;
  keywords: string[];
  keywordsReversed: string[];
  description: string;
  descriptionReversed: string;
}

export const tarotDeck: TarotCard[] = [
  // ── Major Arcana ──
  { id: 0, name: "The Fool", nameKo: "바보", arcana: "major", image: "/tarot/major_00_fool.jpg",
    keywords: ["새로운 시작", "순수함", "자유로운 모험", "무한한 가능성"],
    keywordsReversed: ["무모함", "경솔함", "준비 부족", "위험 무시"],
    description: "바보 카드는 새로운 여정의 시작을 의미합니다. 절벽 끝에 서 있지만 두려움 없이 앞을 바라보는 모습처럼, 순수한 마음으로 새로운 가능성에 뛰어드는 용기를 상징합니다.",
    descriptionReversed: "역방향의 바보는 무모한 행동이나 준비 없이 앞으로 나아가려는 경향을 나타냅니다. 지금은 한 발짝 물러서 신중하게 생각할 시간이 필요합니다." },

  { id: 1, name: "The Magician", nameKo: "마법사", arcana: "major", image: "/tarot/major_01_magician.jpg",
    keywords: ["의지력", "창조", "능력 발휘", "집중과 실현"],
    keywordsReversed: ["능력 낭비", "속임수", "목표 흐트러짐", "잠재력 미발휘"],
    description: "마법사는 하늘과 땅을 연결하며 모든 원소(완드·컵·소드·펜타클)를 자유자재로 다룹니다. 당신 안에 있는 모든 도구와 능력을 의식적으로 활용할 때가 왔습니다.",
    descriptionReversed: "역방향 마법사는 재능이 있음에도 제대로 발휘하지 못하거나, 교묘한 방식으로 남을 이용하려는 경향을 경고합니다. 진실되고 정직한 방식으로 목표를 추구하세요." },

  { id: 2, name: "The High Priestess", nameKo: "여사제", arcana: "major", image: "/tarot/major_02_highpriestess.jpg",
    keywords: ["직관", "내면의 지혜", "신비", "고요한 통찰"],
    keywordsReversed: ["비밀 억압", "직관 무시", "표면적 판단", "내면과의 단절"],
    description: "달의 왕관을 쓴 여사제는 두 기둥(빛과 어둠) 사이에 앉아 신비로운 지혜를 수호합니다. 지금은 외부보다 내면의 목소리에 귀 기울이고 직관을 신뢰할 때입니다.",
    descriptionReversed: "역방향 여사제는 내면의 신호를 무시하거나 겉으로 드러나는 것에만 집착할 때 나타납니다. 느낌과 직관을 억누르지 말고, 깊은 내면과 연결되는 시간을 가져보세요." },

  { id: 3, name: "The Empress", nameKo: "여황제", arcana: "major", image: "/tarot/major_03_empress.jpg",
    keywords: ["풍요", "창조성", "모성적 돌봄", "자연과의 조화"],
    keywordsReversed: ["과잉보호", "의존성", "창의력 막힘", "불균형한 관계"],
    description: "곡식 밭에 앉은 여황제는 생명력과 풍요를 상징합니다. 당신의 창의적 에너지가 활짝 피어날 준비가 되어 있으며, 아름다움과 풍요로움이 삶 곳곳에 스며들고 있습니다.",
    descriptionReversed: "역방향 여황제는 지나친 의존이나 과잉보호를 나타냅니다. 자신을 돌보는 것을 소홀히 하거나 창의력이 막혀 있는 상태일 수 있습니다. 자신의 필요를 먼저 채우세요." },

  { id: 4, name: "The Emperor", nameKo: "황제", arcana: "major", image: "/tarot/major_04_emperor.jpg",
    keywords: ["권위", "안정", "체계와 구조", "실용적 리더십"],
    keywordsReversed: ["독재", "경직성", "과도한 통제", "권위에 대한 저항"],
    description: "돌 왕좌에 앉은 황제는 강인한 의지와 체계적인 사고로 세상을 다스립니다. 안정적인 기반을 세우고 책임감 있는 리더십을 발휘할 때입니다. 규율과 계획이 성공의 열쇠입니다.",
    descriptionReversed: "역방향 황제는 지나친 통제욕이나 경직된 사고를 경고합니다. 유연성을 잃지 말고, 때로는 규칙보다 상황에 맞는 판단력이 더 중요할 수 있습니다." },

  { id: 5, name: "The Hierophant", nameKo: "교황", arcana: "major", image: "/tarot/major_05_hierophant.jpg",
    keywords: ["전통", "가르침", "영적 인도", "관습과 규범"],
    keywordsReversed: ["관습에 대한 반항", "개인주의", "새로운 방식 모색", "제도적 억압"],
    description: "두 신자를 축복하는 교황은 전통과 영적 가르침을 전수합니다. 검증된 지혜와 전통적 가치 속에 답이 있을 수 있습니다. 믿을 만한 스승이나 조언자를 찾아보세요.",
    descriptionReversed: "역방향 교황은 기존 틀에서 벗어나 자신만의 길을 찾으려는 욕구를 반영합니다. 전통을 무조건 따르기보다 자신에게 진정으로 맞는 믿음 체계를 탐구할 시간입니다." },

  { id: 6, name: "The Lovers", nameKo: "연인", arcana: "major", image: "/tarot/major_06_lovers.jpg",
    keywords: ["사랑", "선택", "깊은 연결", "가치관의 조화"],
    keywordsReversed: ["갈등", "잘못된 선택", "불균형한 관계", "내면의 갈등"],
    description: "천사의 축복 아래 마주 선 두 연인은 완전한 연결과 중요한 선택을 상징합니다. 진정한 가치와 믿음에 따른 선택이 필요한 시점입니다. 마음이 이끄는 대로 용기 있게 결정하세요.",
    descriptionReversed: "역방향 연인은 관계의 불균형이나 자신의 가치와 어긋나는 선택을 나타냅니다. 외부 압력이 아닌 진정한 내면의 목소리를 듣고 올바른 결정을 내리세요." },

  { id: 7, name: "The Chariot", nameKo: "전차", arcana: "major", image: "/tarot/major_07_chariot.jpg",
    keywords: ["승리", "의지력", "자기 통제", "목표를 향한 전진"],
    keywordsReversed: ["방향 상실", "통제력 부족", "충동적 행동", "내면의 갈등"],
    description: "두 스핑크스를 이끄는 전차 기사는 강한 의지와 자기 통제를 통해 승리를 향해 나아갑니다. 상반된 힘을 조화롭게 다스리며 목표를 향해 끊임없이 전진하세요.",
    descriptionReversed: "역방향 전차는 방향성을 잃거나 서로 상충되는 욕구에 이끌려 앞으로 나아가지 못하는 상태입니다. 명확한 목표를 설정하고 에너지를 집중시키는 것이 필요합니다." },

  { id: 8, name: "Strength", nameKo: "힘", arcana: "major", image: "/tarot/major_08_strength.jpg",
    keywords: ["용기", "내면의 힘", "인내", "부드러운 통제"],
    keywordsReversed: ["자기 의심", "두려움에 압도됨", "의지력 약화", "충동 조절 실패"],
    description: "사자의 입을 부드럽게 다스리는 여인은 폭력이 아닌 사랑과 인내로 강인함을 발휘합니다. 두려움을 인정하면서도 용기 있게 나아가는 내면의 힘이 지금 당신에게 있습니다.",
    descriptionReversed: "역방향 힘 카드는 자신의 능력을 의심하거나 두려움에 짓눌려 있는 상태를 나타냅니다. 완벽할 필요가 없습니다. 지금 있는 그대로의 자신을 받아들이는 것이 진정한 힘입니다." },

  { id: 9, name: "The Hermit", nameKo: "은둔자", arcana: "major", image: "/tarot/major_09_hermit.jpg",
    keywords: ["내면 탐구", "고독과 성찰", "지혜", "영적 인도"],
    keywordsReversed: ["고립", "외로움", "자기 폐쇄", "사회와의 단절"],
    description: "산꼭대기에서 등불을 밝히는 은둔자는 내면의 빛으로 길을 밝힙니다. 혼자만의 시간과 깊은 성찰이 필요한 때입니다. 외부의 소음을 줄이고 내면의 지혜를 찾아보세요.",
    descriptionReversed: "역방향 은둔자는 지나친 고립이나 다른 사람들과의 연결을 거부하는 상태를 나타냅니다. 혼자 모든 것을 해결하려 하지 말고 주변의 도움을 받아들이는 용기도 필요합니다." },

  { id: 10, name: "Wheel of Fortune", nameKo: "운명의 수레바퀴", arcana: "major", image: "/tarot/major_10_wheel.jpg",
    keywords: ["변화", "행운의 순환", "운명", "새로운 사이클"],
    keywordsReversed: ["불운", "변화에 대한 저항", "사이클의 단절", "통제 불가능한 상황"],
    description: "끊임없이 돌아가는 수레바퀴는 삶의 순환을 상징합니다. 지금은 행운의 바퀴가 당신에게 유리하게 돌아가고 있는 시기입니다. 변화의 흐름을 받아들이고 새로운 기회를 잡으세요.",
    descriptionReversed: "역방향 운명의 수레바퀴는 불운이나 변화에 저항하는 상태를 나타냅니다. 통제할 수 없는 것에 집착하기보다 상황을 받아들이고 적응하는 유연성을 기르세요." },

  { id: 11, name: "Justice", nameKo: "정의", arcana: "major", image: "/tarot/major_11_justice.jpg",
    keywords: ["공정함", "진실", "균형", "인과응보"],
    keywordsReversed: ["불공정", "편견", "책임 회피", "불균형한 판단"],
    description: "저울과 칼을 든 정의의 여신은 공정하고 균형 잡힌 판단을 내립니다. 진실과 공정함이 중요한 시기입니다. 모든 결정과 행동에는 그에 따른 결과가 따른다는 것을 기억하세요.",
    descriptionReversed: "역방향 정의는 불공정한 상황이나 책임을 회피하려는 경향을 나타냅니다. 편견 없이 상황을 바라보고 자신의 행동에 대한 책임을 받아들이는 것이 필요합니다." },

  { id: 12, name: "The Hanged Man", nameKo: "매달린 사람", arcana: "major", image: "/tarot/major_12_hangedman.jpg",
    keywords: ["희생", "기다림", "새로운 관점", "자발적 포기"],
    keywordsReversed: ["무의미한 희생", "지연과 정체", "고집", "자기희생 거부"],
    description: "나무에 거꾸로 매달린 채 평온한 표정의 인물은 자발적인 희생과 기다림을 상징합니다. 지금은 행동보다 관점을 바꾸는 시간입니다. 잠시 멈추어 다른 각도에서 상황을 바라보세요.",
    descriptionReversed: "역방향 매달린 사람은 무의미한 희생을 계속하거나 변화를 거부하며 정체되어 있는 상태입니다. 더 이상 의미 없는 것을 붙잡지 말고 새로운 방향으로 나아갈 용기를 내세요." },

  { id: 13, name: "Death", nameKo: "죽음", arcana: "major", image: "/tarot/major_13_death.jpg",
    keywords: ["변환", "끝과 새 시작", "해방", "근본적 변화"],
    keywordsReversed: ["변화에 대한 두려움", "정체", "과거에 집착", "변혁 거부"],
    description: "죽음 카드는 실제 죽음이 아닌 근본적인 변화와 변환을 의미합니다. 오래된 것이 끝나야 새로운 것이 시작됩니다. 두려움 없이 변화를 받아들이고 새로운 단계로 나아가세요.",
    descriptionReversed: "역방향 죽음 카드는 필요한 변화를 두려워하거나 오래된 패턴에 집착하는 상태를 나타냅니다. 변화는 피할 수 없습니다. 저항보다 수용이 더 나은 결과를 가져다줄 것입니다." },

  { id: 14, name: "Temperance", nameKo: "절제", arcana: "major", image: "/tarot/major_14_temperance.jpg",
    keywords: ["균형", "인내", "조화", "중용의 지혜"],
    keywordsReversed: ["불균형", "과잉과 부족", "충동", "조화 부재"],
    description: "두 컵 사이로 물을 옮기는 천사는 완벽한 균형과 조화를 이루고 있습니다. 서두르지 않고 꾸준히 나아가는 인내심이 필요한 시기입니다. 극단을 피하고 중용을 찾으세요.",
    descriptionReversed: "역방향 절제는 삶의 불균형이나 과잉 혹은 결핍을 나타냅니다. 한쪽으로 치우친 에너지를 조율하고 건강한 균형을 회복하는 노력이 필요합니다." },

  { id: 15, name: "The Devil", nameKo: "악마", arcana: "major", image: "/tarot/major_15_devil.jpg",
    keywords: ["속박", "욕망", "물질주의", "무의식적 패턴"],
    keywordsReversed: ["해방", "자유", "속박에서 벗어남", "자각"],
    description: "사슬에 묶인 두 인물은 스스로 벗어날 수 있지만 그 사실을 모르고 있습니다. 당신을 옭아매는 두려움, 집착, 나쁜 습관을 직시하세요. 인식이 해방의 첫 걸음입니다.",
    descriptionReversed: "역방향 악마는 오랫동안 당신을 구속해온 것으로부터 자유로워지는 시기를 나타냅니다. 오래된 두려움이나 집착에서 벗어나 새로운 자유를 향해 나아가고 있습니다." },

  { id: 16, name: "The Tower", nameKo: "탑", arcana: "major", image: "/tarot/major_16_tower.jpg",
    keywords: ["갑작스러운 변화", "기존 구조 붕괴", "계시", "혼돈 속 진실"],
    keywordsReversed: ["재난 예방", "두려움", "파국 회피", "억압된 변화"],
    description: "번개에 맞아 무너지는 탑은 거짓 기반 위에 세워진 것이 무너지는 것을 나타냅니다. 충격적일 수 있지만 이 변화는 더 강한 기반을 세울 기회입니다. 무너짐 뒤에는 더 나은 재건이 있습니다.",
    descriptionReversed: "역방향 탑은 임박한 변화를 두려워하거나 필요한 무너짐을 억압하려는 경향을 나타냅니다. 작은 변화들을 통해 큰 파국을 예방하거나, 두려움 속에서도 변화를 받아들이세요." },

  { id: 17, name: "The Star", nameKo: "별", arcana: "major", image: "/tarot/major_17_star.jpg",
    keywords: ["희망", "영감", "치유", "우주적 연결"],
    keywordsReversed: ["절망", "희망 상실", "자신감 부족", "믿음 흔들림"],
    description: "별빛 아래 물을 붓는 여인은 희망과 치유, 그리고 우주와의 연결을 상징합니다. 어두운 시간이 지나고 밝은 빛이 비추기 시작했습니다. 자신을 믿고 꿈을 향해 나아가세요.",
    descriptionReversed: "역방향 별 카드는 희망을 잃거나 자신감이 흔들리는 시기를 나타냅니다. 어둠 속에서도 별은 빛나고 있습니다. 잠시 쉬어가더라도 희망을 포기하지 마세요." },

  { id: 18, name: "The Moon", nameKo: "달", arcana: "major", image: "/tarot/major_18_moon.jpg",
    keywords: ["환상", "무의식", "두려움", "숨겨진 진실"],
    keywordsReversed: ["혼란 해소", "진실 드러남", "두려움 극복", "명확성 회복"],
    description: "개와 늑대가 달을 향해 울부짖는 이 카드는 무의식과 환상, 숨겨진 두려움을 상징합니다. 지금은 모든 것이 명확하지 않은 시기입니다. 충동적 결정을 피하고 직관을 신뢰하세요.",
    descriptionReversed: "역방향 달 카드는 오랫동안 숨겨져 있던 진실이 드러나거나 혼란이 해소되는 시기를 나타냅니다. 두려움의 베일이 걷히고 더 명확한 시야를 갖게 될 것입니다." },

  { id: 19, name: "The Sun", nameKo: "태양", arcana: "major", image: "/tarot/major_19_sun.jpg",
    keywords: ["기쁨", "성공", "활력", "순수한 행복"],
    keywordsReversed: ["에너지 저하", "과도한 낙관", "우울", "기쁨 억압"],
    description: "해바라기 밭에서 백마를 탄 아이의 모습은 순수한 기쁨과 성공을 상징합니다. 빛이 가득한 시기입니다. 자신을 자유롭게 표현하고 삶의 즐거움을 마음껏 누리세요.",
    descriptionReversed: "역방향 태양 카드는 기쁨이나 활력이 일시적으로 가려진 상태를 나타냅니다. 지나친 낙관주의나 무기력함에 주의하세요. 작은 것에서부터 기쁨을 찾는 연습을 해보세요." },

  { id: 20, name: "Judgement", nameKo: "심판", arcana: "major", image: "/tarot/major_20_judgement.jpg",
    keywords: ["부활", "내면의 소명", "변혁", "자아 성찰"],
    keywordsReversed: ["자기 의심", "내면의 소명 거부", "후회", "평가에 대한 두려움"],
    description: "천사의 나팔 소리에 무덤에서 일어나는 인물들은 부활과 새로운 사명을 나타냅니다. 과거를 돌아보고 진정한 자아의 소명에 귀 기울일 때입니다. 더 높은 차원으로의 변혁을 받아들이세요.",
    descriptionReversed: "역방향 심판은 자신의 가치를 의심하거나 내면의 소명을 무시하는 상태를 나타냅니다. 남의 시선이나 평가에 대한 두려움을 넘어서 진정한 자신의 목소리를 따르세요." },

  { id: 21, name: "The World", nameKo: "세계", arcana: "major", image: "/tarot/major_21_world.jpg",
    keywords: ["완성", "성취", "통합", "새로운 사이클의 시작"],
    keywordsReversed: ["미완성", "지연", "목표 미달", "더 나아가야 할 필요"],
    description: "월계수 화환으로 둘러싸인 춤추는 인물은 완성과 성취의 기쁨을 표현합니다. 하나의 중요한 사이클이 완성되고 있습니다. 이 성취를 충분히 축하하고 다음 여정을 준비하세요.",
    descriptionReversed: "역방향 세계 카드는 완성을 눈앞에 두고도 마지막 노력이 부족하거나 목표 달성이 지연되는 상태를 나타냅니다. 조금 더 인내심을 갖고 마지막 마무리에 집중하세요." },

  // ── Wands ──
  { id: 22, name: "Ace of Wands", nameKo: "완드 에이스", arcana: "minor", suit: "완드", image: "/tarot/wands_ace.jpg",
    keywords: ["새로운 영감", "열정", "창조적 에너지", "잠재력"],
    keywordsReversed: ["창의력 막힘", "열정 부재", "지연된 시작", "방향 없는 에너지"],
    description: "구름을 뚫고 나온 손이 꽃피는 완드를 들고 있습니다. 강력한 창조적 에너지와 새로운 시작의 불꽃이 당신 앞에 놓여 있습니다. 열정을 따르고 새로운 프로젝트를 시작할 최적의 시기입니다.",
    descriptionReversed: "역방향 완드 에이스는 창의력이나 열정이 막혀 있는 상태를 나타냅니다. 아이디어는 있지만 실행으로 옮기지 못하고 있다면, 작은 첫걸음부터 시작해보세요." },

  { id: 23, name: "Two of Wands", nameKo: "완드 2", arcana: "minor", suit: "완드", image: "/tarot/wands_02.jpg",
    keywords: ["미래 계획", "선택의 기로", "모험 준비", "사전 전략"],
    keywordsReversed: ["두려움", "계획 부재", "좁은 시야", "우유부단함"],
    description: "성 위에서 세계를 바라보는 인물은 아직 탐험되지 않은 가능성을 바라보고 있습니다. 계획은 세워졌으나 아직 실행에 옮기지 않은 시기입니다. 더 넓은 세계로 나아갈 용기를 내세요.",
    descriptionReversed: "역방향 완드 2는 두려움이나 불확실성으로 인해 앞으로 나아가지 못하는 상태입니다. 안전지대에서 벗어나는 것이 두렵더라도, 지금이 바로 결단을 내릴 때입니다." },

  { id: 24, name: "Three of Wands", nameKo: "완드 3", arcana: "minor", suit: "완드", image: "/tarot/wands_03.jpg",
    keywords: ["성장", "확장", "결실 기다림", "장거리 여정"],
    keywordsReversed: ["지연", "실망", "계획 차질", "협력 부족"],
    description: "바다를 바라보며 배의 귀환을 기다리는 인물은 이미 씨앗을 뿌리고 결실을 기다리고 있습니다. 노력의 결과가 돌아오기 시작하는 시기입니다. 비전을 넓히고 성장의 기회를 놓치지 마세요.",
    descriptionReversed: "역방향 완드 3은 예상했던 결과가 지연되거나 계획에 차질이 생기는 상태를 나타냅니다. 실망스럽더라도 인내심을 갖고 전략을 재검토하세요." },

  { id: 25, name: "Four of Wands", nameKo: "완드 4", arcana: "minor", suit: "완드", image: "/tarot/wands_04.jpg",
    keywords: ["축하", "안정", "화합", "성취의 기쁨"],
    keywordsReversed: ["불화", "불완전한 기반", "지연된 축하", "긴장"],
    description: "꽃으로 장식된 아치 아래 축제를 벌이는 장면은 안정과 기쁨, 공동체의 화합을 나타냅니다. 하나의 이정표에 도달한 것을 축하하세요. 중요한 전환점에서 사랑하는 사람들과 기쁨을 나누세요.",
    descriptionReversed: "역방향 완드 4는 가정이나 관계에서의 불화, 또는 성취에 대한 인정이 늦어지는 상황을 나타냅니다. 공동체와의 연결을 강화하고 갈등을 해소하는 노력이 필요합니다." },

  { id: 26, name: "Five of Wands", nameKo: "완드 5", arcana: "minor", suit: "완드", image: "/tarot/wands_05.jpg",
    keywords: ["경쟁", "갈등", "도전", "다양한 의견 충돌"],
    keywordsReversed: ["내면 갈등 해소", "타협", "경쟁 회피", "평화 추구"],
    description: "다섯 인물이 각자의 완드를 들고 충돌하는 장면은 경쟁과 갈등을 나타냅니다. 지금은 다양한 의견이 충돌하는 시기입니다. 건설적인 방식으로 갈등을 다루고 경쟁을 성장의 기회로 삼으세요.",
    descriptionReversed: "역방향 완드 5는 내면의 갈등이 해소되거나 외부 경쟁에서 물러나는 시기를 나타냅니다. 불필요한 충돌을 피하고 협력적인 방식으로 목표를 달성하세요." },

  { id: 27, name: "Six of Wands", nameKo: "완드 6", arcana: "minor", suit: "완드", image: "/tarot/wands_06.jpg",
    keywords: ["승리", "공적 인정", "자신감", "리더십"],
    keywordsReversed: ["자만심", "실패 두려움", "인정받지 못함", "허영"],
    description: "월계관을 쓰고 행진하는 기사는 승리와 공적 인정을 상징합니다. 노력의 결과로 성공과 인정이 찾아오고 있습니다. 자신감을 갖고 리더 역할을 당당하게 수행하세요.",
    descriptionReversed: "역방향 완드 6은 기대했던 인정을 받지 못하거나 자만심으로 인한 실패를 경고합니다. 타인의 평가보다 자신의 내면적 성취에 더 집중하세요." },

  { id: 28, name: "Seven of Wands", nameKo: "완드 7", arcana: "minor", suit: "완드", image: "/tarot/wands_07.jpg",
    keywords: ["방어", "도전 극복", "자신의 입장 고수", "끈기"],
    keywordsReversed: ["포기", "압도됨", "자신감 부족", "지나친 방어성"],
    description: "높은 곳에서 여러 적을 맞서는 인물은 자신의 위치를 지키려는 강인한 의지를 보여줍니다. 도전과 경쟁이 거세지만 당신은 높은 곳에 서 있습니다. 흔들리지 말고 자신의 믿음과 가치를 지키세요.",
    descriptionReversed: "역방향 완드 7은 너무 많은 도전에 압도되어 포기하고 싶은 마음이 드는 상태를 나타냅니다. 무엇이 진정으로 지킬 가치가 있는지 판단하고 에너지를 선택적으로 사용하세요." },

  { id: 29, name: "Eight of Wands", nameKo: "완드 8", arcana: "minor", suit: "완드", image: "/tarot/wands_08.jpg",
    keywords: ["빠른 진행", "소식의 도착", "이동", "에너지의 급증"],
    keywordsReversed: ["지연", "혼란", "빗나간 방향", "오해"],
    description: "하늘을 가로지르는 여덟 개의 완드는 빠른 움직임과 에너지를 상징합니다. 모든 것이 빠르게 움직이는 시기입니다. 좋은 소식이 오거나 계획했던 일이 빠르게 진행될 것입니다.",
    descriptionReversed: "역방향 완드 8은 계획이 지연되거나 방향이 어긋나는 상태를 나타냅니다. 서두르다 실수를 하지 않도록 속도를 조절하고 방향을 재확인하세요." },

  { id: 30, name: "Nine of Wands", nameKo: "완드 9", arcana: "minor", suit: "완드", image: "/tarot/wands_09.jpg",
    keywords: ["회복력", "끈기", "마지막 도전", "경계와 방어"],
    keywordsReversed: ["지쳐 무너짐", "완고한 고집", "편집증", "포기 직전"],
    description: "상처를 입었지만 아직 서 있는 인물은 강인한 회복력을 보여줍니다. 지치고 힘들지만 목표 달성이 코앞에 있습니다. 마지막 남은 힘을 모아 끝까지 포기하지 마세요.",
    descriptionReversed: "역방향 완드 9는 오랜 싸움에 지쳐 더 이상 버티기 어려운 상태를 나타냅니다. 고집스럽게 혼자 모든 것을 감당하려 하지 말고 도움을 청하는 것도 용기입니다." },

  { id: 31, name: "Ten of Wands", nameKo: "완드 10", arcana: "minor", suit: "완드", image: "/tarot/wands_10.jpg",
    keywords: ["무거운 책임", "과부하", "목표 완성 직전", "짐의 무게"],
    keywordsReversed: ["짐 내려놓기", "위임", "불필요한 부담 제거", "완료"],
    description: "열 개의 완드를 홀로 짊어지고 걸어가는 인물은 무거운 책임과 부담을 나타냅니다. 너무 많은 것을 혼자 지고 있지 않나요? 불필요한 짐은 내려놓고 위임할 줄도 알아야 합니다.",
    descriptionReversed: "역방향 완드 10은 오랫동안 짊어왔던 짐을 내려놓는 시기를 나타냅니다. 완성에 가까워지거나 불필요한 책임에서 해방되는 단계입니다." },

  { id: 32, name: "Page of Wands", nameKo: "완드 페이지", arcana: "minor", suit: "완드", image: "/tarot/wands_page.jpg",
    keywords: ["탐구심", "새로운 아이디어", "열정적 에너지", "자유로운 영혼"],
    keywordsReversed: ["산만함", "충동적 행동", "미숙한 열정", "무계획"],
    description: "완드를 바라보며 꿈을 키우는 페이지는 넘치는 열정과 탐구심을 상징합니다. 새로운 아이디어와 모험에 대한 욕구가 강해지는 시기입니다. 이 에너지를 구체적인 행동으로 옮겨보세요.",
    descriptionReversed: "역방향 완드 페이지는 에너지는 있지만 방향성이 없거나 쉽게 산만해지는 상태를 나타냅니다. 흥미로운 것에만 끌리지 말고 한 가지에 집중하는 연습을 해보세요." },

  { id: 33, name: "Knight of Wands", nameKo: "완드 나이트", arcana: "minor", suit: "완드", image: "/tarot/wands_knight.jpg",
    keywords: ["행동력", "모험심", "추진력", "열정적 도전"],
    keywordsReversed: ["무모함", "성급함", "분산된 에너지", "충동적 결정"],
    description: "말을 타고 달리는 기사는 멈추지 않는 추진력과 모험심을 상징합니다. 지금은 과감하게 앞으로 나아갈 때입니다. 하지만 속도만큼이나 방향도 중요하다는 것을 잊지 마세요.",
    descriptionReversed: "역방향 완드 나이트는 무모한 행동이나 충동적인 결정을 경고합니다. 열정은 좋지만 행동 전에 충분히 생각하고 계획을 세우는 것이 필요합니다." },

  { id: 34, name: "Queen of Wands", nameKo: "완드 퀸", arcana: "minor", suit: "완드", image: "/tarot/wands_queen.jpg",
    keywords: ["자신감", "카리스마", "독립성", "열정적 리더십"],
    keywordsReversed: ["내성적", "질투심", "의존적", "에너지 소진"],
    description: "해바라기와 검은 고양이를 곁에 둔 여왕은 자신감 넘치는 카리스마와 창조적 에너지를 상징합니다. 자신을 믿고 당당하게 자신의 재능을 발휘하세요. 당신의 열정이 주변을 이끄는 힘이 됩니다.",
    descriptionReversed: "역방향 완드 퀸은 자신감을 잃거나 다른 사람의 성공을 질투하는 상태를 나타냅니다. 자신의 고유한 재능에 집중하고 비교보다 내면의 성장에 초점을 맞추세요." },

  { id: 35, name: "King of Wands", nameKo: "완드 킹", arcana: "minor", suit: "완드", image: "/tarot/wands_king.jpg",
    keywords: ["비전", "리더십", "기업가 정신", "영감 있는 권위"],
    keywordsReversed: ["독단", "과대한 기대", "성급한 결정", "에너지 낭비"],
    description: "도마뱀이 새겨진 왕좌의 왕은 비전 있는 리더십과 강력한 의지를 상징합니다. 큰 그림을 보고 다른 사람들에게 영감을 주는 리더가 될 때입니다. 당신의 비전을 현실로 만들어 나가세요.",
    descriptionReversed: "역방향 완드 킹은 독단적이거나 지나치게 야심찬 행동을 경고합니다. 자신의 에너지를 현실적인 목표에 집중시키고 팀워크의 중요성을 인식하세요." },

  // ── Cups ──
  { id: 36, name: "Ace of Cups", nameKo: "컵 에이스", arcana: "minor", suit: "컵", image: "/tarot/cups_ace.jpg",
    keywords: ["새로운 감정", "사랑의 시작", "직관", "감정적 충만함"],
    keywordsReversed: ["감정적 블록", "억압된 감정", "공허함", "사랑에 대한 두려움"],
    description: "비둘기가 성체를 넣는 성배에서 넘쳐흐르는 물은 감정과 사랑의 풍요로움을 상징합니다. 새로운 사랑이나 깊은 감정적 연결이 시작될 수 있는 시기입니다. 마음을 열고 사랑을 받아들이세요.",
    descriptionReversed: "역방향 컵 에이스는 감정을 억압하거나 사랑을 받아들이기 두려워하는 상태를 나타냅니다. 과거의 상처가 마음을 닫게 만들고 있다면, 치유를 위한 첫 걸음을 내딛어보세요." },

  { id: 37, name: "Two of Cups", nameKo: "컵 2", arcana: "minor", suit: "컵", image: "/tarot/cups_02.jpg",
    keywords: ["파트너십", "깊은 연결", "상호 이해", "조화로운 관계"],
    keywordsReversed: ["단절", "관계 불균형", "오해", "헤어짐"],
    description: "두 인물이 컵을 교환하는 모습은 완벽한 상호 이해와 감정적 연결을 나타냅니다. 소울메이트나 깊은 파트너십이 형성되는 시기입니다. 진정한 연결과 균형 있는 관계를 소중히 여기세요.",
    descriptionReversed: "역방향 컵 2는 관계에서의 불균형이나 서로에 대한 오해를 나타냅니다. 상대방의 감정을 세심하게 살피고 진솔한 대화로 연결을 회복하세요." },

  { id: 38, name: "Three of Cups", nameKo: "컵 3", arcana: "minor", suit: "컵", image: "/tarot/cups_03.jpg",
    keywords: ["우정", "축하", "공동체", "함께하는 기쁨"],
    keywordsReversed: ["고립", "과음과 과잉", "삼각관계", "우정의 균열"],
    description: "세 여인이 컵을 들어 축배를 드는 모습은 우정과 축하, 공동체의 기쁨을 나타냅니다. 소중한 사람들과 함께 기쁨을 나누는 시간입니다. 관계를 축하하고 공동체 안에서 지지를 찾으세요.",
    descriptionReversed: "역방향 컵 3은 우정의 균열이나 그룹 내의 갈등을 나타낼 수 있습니다. 또는 사교적 활동이 지나쳐 개인적인 경계를 잃을 위험도 있습니다." },

  { id: 39, name: "Four of Cups", nameKo: "컵 4", arcana: "minor", suit: "컵", image: "/tarot/cups_04.jpg",
    keywords: ["무관심", "성찰", "내면 집중", "새로운 가능성 간과"],
    keywordsReversed: ["새로운 관심", "동기부여 회복", "기회 인식", "행동 재개"],
    description: "나무 아래 앉아 제공된 컵을 외면하는 인물은 내면에 집중하며 현재에 무관심한 상태를 보여줍니다. 새로운 기회가 눈앞에 있지만 지금은 알아채지 못할 수 있습니다. 주변을 살펴보세요.",
    descriptionReversed: "역방향 컵 4는 무기력함에서 벗어나 새로운 것들에 관심을 갖기 시작하는 시기를 나타냅니다. 오랫동안 미루어온 일들을 다시 시작할 에너지가 돌아오고 있습니다." },

  { id: 40, name: "Five of Cups", nameKo: "컵 5", arcana: "minor", suit: "컵", image: "/tarot/cups_05.jpg",
    keywords: ["상실", "슬픔", "후회", "아직 남은 것"],
    keywordsReversed: ["치유", "수용", "앞으로 나아감", "용서"],
    description: "엎어진 세 컵을 바라보며 슬퍼하는 인물 뒤에는 아직 두 컵이 서 있습니다. 상실과 슬픔에 집중하느라 아직 남은 것들을 보지 못하고 있습니다. 과거에 집착하지 말고 남은 가능성에 집중하세요.",
    descriptionReversed: "역방향 컵 5는 슬픔과 상실로부터 회복되는 시기를 나타냅니다. 과거를 용서하고 앞으로 나아갈 준비가 되고 있습니다. 치유의 여정이 시작됩니다." },

  { id: 41, name: "Six of Cups", nameKo: "컵 6", arcana: "minor", suit: "컵", image: "/tarot/cups_06.jpg",
    keywords: ["향수", "어린 시절의 기억", "순수함", "과거의 행복"],
    keywordsReversed: ["과거 집착", "미성숙", "현실 도피", "잊혀진 상처"],
    description: "꽃으로 가득 찬 컵을 나누는 아이들의 모습은 순수한 어린 시절과 행복했던 과거를 상징합니다. 추억과 과거의 인연이 다시 찾아오거나 어린 시절의 꿈을 재발견하는 시기입니다.",
    descriptionReversed: "역방향 컵 6은 과거에 지나치게 집착하거나 현실보다 추억 속에 사는 경향을 나타냅니다. 좋은 기억은 간직하되, 현재와 미래에 더 많은 에너지를 쏟으세요." },

  { id: 42, name: "Seven of Cups", nameKo: "컵 7", arcana: "minor", suit: "컵", image: "/tarot/cups_07.jpg",
    keywords: ["환상", "다양한 선택", "상상력", "비현실적 기대"],
    keywordsReversed: ["현실 직면", "명확한 선택", "환상 타파", "실용적 접근"],
    description: "구름 위에 떠 있는 일곱 개의 컵은 다양한 욕망과 환상을 나타냅니다. 너무 많은 선택지와 공상으로 인해 현실적인 행동을 하지 못하고 있습니다. 진정으로 원하는 것 하나를 선택하세요.",
    descriptionReversed: "역방향 컵 7은 환상에서 벗어나 현실을 명확하게 바라보기 시작하는 시기를 나타냅니다. 이제는 실용적인 결정을 내리고 구체적인 행동을 취할 때입니다." },

  { id: 43, name: "Eight of Cups", nameKo: "컵 8", arcana: "minor", suit: "컵", image: "/tarot/cups_08.jpg",
    keywords: ["이행", "의미 있는 것 추구", "포기", "더 깊은 것 탐색"],
    keywordsReversed: ["두려움으로 인한 머무름", "표류", "불만족한 현실 유지", "혼란"],
    description: "달빛 아래 정돈된 여덟 컵을 뒤로하고 떠나는 인물은 현재의 안정을 포기하고 더 의미 있는 것을 찾아 떠나는 여정을 상징합니다. 더 깊은 의미와 목적을 향해 나아갈 용기가 필요합니다.",
    descriptionReversed: "역방향 컵 8은 떠나야 한다는 것을 알면서도 두려움으로 인해 머물러 있는 상태를 나타냅니다. 불만족스러운 상황을 유지할 것인지, 새로운 길을 걷을 것인지 결정해야 할 때입니다." },

  { id: 44, name: "Nine of Cups", nameKo: "컵 9", arcana: "minor", suit: "컵", image: "/tarot/cups_09.jpg",
    keywords: ["소원 성취", "만족", "행복", "감사"],
    keywordsReversed: ["겉모습의 행복", "물질적 집착", "불만족", "지나친 탐욕"],
    description: "자랑스럽게 아홉 개의 컵 앞에 앉은 인물은 소원 성취와 깊은 만족감을 상징합니다. 타로에서 가장 행복한 카드 중 하나로, 당신의 소원이 이루어지거나 깊은 만족감을 느끼는 시기입니다.",
    descriptionReversed: "역방향 컵 9는 겉으로는 행복해 보이지만 내면의 공허함을 느끼거나, 물질적 만족을 진정한 행복으로 착각하는 상태를 나타냅니다. 진정한 행복의 원천을 찾아보세요." },

  { id: 45, name: "Ten of Cups", nameKo: "컵 10", arcana: "minor", suit: "컵", image: "/tarot/cups_10.jpg",
    keywords: ["완전한 행복", "가족의 조화", "영적 완성", "이상적 관계"],
    keywordsReversed: ["불화", "가족 갈등", "이상과 현실의 간극", "단절"],
    description: "무지개 아래 춤추는 가족의 모습은 완전한 행복과 가족의 조화를 상징합니다. 감정적으로 완성된 상태로, 사랑하는 사람들과 진정한 행복을 누리는 시기입니다. 이 아름다운 순간을 소중히 간직하세요.",
    descriptionReversed: "역방향 컵 10은 가족 간의 불화나 이상적인 관계와 현실 사이의 괴리를 나타냅니다. 완벽한 가정을 강요하기보다 있는 그대로를 수용하고 함께 해결해나가세요." },

  { id: 46, name: "Page of Cups", nameKo: "컵 페이지", arcana: "minor", suit: "컵", image: "/tarot/cups_page.jpg",
    keywords: ["감수성", "창의적 영감", "직관적 메시지", "감정적 성장"],
    keywordsReversed: ["감정 억압", "창의력 막힘", "나쁜 소식", "감정적 미숙"],
    description: "컵에서 나오는 물고기를 바라보는 페이지는 직관적인 메시지와 창의적 영감을 받는 상태를 나타냅니다. 예상치 못한 곳에서 영감이 올 수 있습니다. 꿈과 감정에 주의를 기울이세요.",
    descriptionReversed: "역방향 컵 페이지는 감정을 억압하거나 창의적 영감이 막힌 상태를 나타냅니다. 또한 예상치 못한 나쁜 소식이 올 수 있음을 경고합니다." },

  { id: 47, name: "Knight of Cups", nameKo: "컵 나이트", arcana: "minor", suit: "컵", image: "/tarot/cups_knight.jpg",
    keywords: ["낭만주의", "감성적 제안", "예술적 추구", "이상주의"],
    keywordsReversed: ["비현실적", "기분 변화", "실망스러운 제안", "감정적 조작"],
    description: "평화롭게 전진하는 기사는 낭만적이고 감성적인 에너지를 나타냅니다. 사랑의 제안이나 감성적인 초대가 올 수 있는 시기입니다. 꿈을 현실로 만들 수 있는 이상적 에너지가 흐릅니다.",
    descriptionReversed: "역방향 컵 나이트는 비현실적인 기대나 감정적으로 불안정한 상태를 나타냅니다. 낭만적인 감정에 휩쓸리지 말고 현실적인 시각을 유지하세요." },

  { id: 48, name: "Queen of Cups", nameKo: "컵 퀸", arcana: "minor", suit: "컵", image: "/tarot/cups_queen.jpg",
    keywords: ["공감", "감성적 지혜", "직관", "돌봄과 치유"],
    keywordsReversed: ["감정 과잉", "의존성", "자기 희생 과잉", "불안정"],
    description: "바다 위 왕좌에서 화려한 컵을 바라보는 여왕은 깊은 감성적 지혜와 직관을 상징합니다. 다른 사람의 감정을 세심하게 이해하고 돌볼 수 있는 능력을 발휘할 시기입니다.",
    descriptionReversed: "역방향 컵 퀸은 지나친 감정 이입으로 인한 소진이나 타인에게 의존하는 상태를 나타냅니다. 자신의 감정적 경계를 설정하고 자기 자신을 먼저 돌보세요." },

  { id: 49, name: "King of Cups", nameKo: "컵 킹", arcana: "minor", suit: "컵", image: "/tarot/cups_king.jpg",
    keywords: ["감정적 균형", "성숙한 지혜", "관대함", "감정과 이성의 조화"],
    keywordsReversed: ["감정 조작", "냉담함", "감정 억압", "불안정한 감정"],
    description: "파도 위 왕좌의 왕은 격동하는 바다 위에서도 평정심을 유지하는 감정적 성숙함을 보여줍니다. 감정과 이성을 균형 있게 다루며 현명하고 관대한 결정을 내릴 수 있는 시기입니다.",
    descriptionReversed: "역방향 컵 킹은 감정을 억압하거나 감정으로 타인을 조종하려는 경향을 나타냅니다. 솔직하고 성숙한 방식으로 감정을 표현하고 처리하세요." },

  // ── Swords ──
  { id: 50, name: "Ace of Swords", nameKo: "소드 에이스", arcana: "minor", suit: "소드", image: "/tarot/swords_ace.jpg",
    keywords: ["명확함", "진실", "지적 돌파구", "새로운 아이디어"],
    keywordsReversed: ["혼란", "잘못된 정보", "지적 막힘", "잔혹한 진실"],
    description: "왕관을 꿰뚫는 칼은 명확한 진실과 지적인 돌파구를 상징합니다. 진실이 드러나고 명확성이 찾아오는 시기입니다. 복잡한 상황을 명확하게 꿰뚫는 통찰력으로 앞으로 나아가세요.",
    descriptionReversed: "역방향 소드 에이스는 혼란스러운 생각이나 잘못된 정보로 인한 어려움을 나타냅니다. 성급한 판단을 피하고 더 많은 정보를 수집한 후 결정을 내리세요." },

  { id: 51, name: "Two of Swords", nameKo: "소드 2", arcana: "minor", suit: "소드", image: "/tarot/swords_02.jpg",
    keywords: ["교착 상태", "어려운 결정", "균형", "진실 회피"],
    keywordsReversed: ["혼란", "정보 과부하", "우유부단", "막힌 상황"],
    description: "눈을 가리고 두 칼을 들고 있는 인물은 어려운 선택 앞에서 결정을 회피하는 모습을 나타냅니다. 고통스럽더라도 진실을 직시하고 결단을 내릴 시간이 왔습니다.",
    descriptionReversed: "역방향 소드 2는 너무 많은 정보와 가능성으로 인해 더욱 혼란스러워진 상태를 나타냅니다. 가장 중요한 것에 집중하고 단순하게 생각해보세요." },

  { id: 52, name: "Three of Swords", nameKo: "소드 3", arcana: "minor", suit: "소드", image: "/tarot/swords_03.jpg",
    keywords: ["심장의 상처", "이별", "슬픔", "고통스러운 진실"],
    keywordsReversed: ["치유", "상처 회복", "용서", "상처에서 배움"],
    description: "세 개의 칼에 꿰뚫린 심장은 깊은 감정적 상처와 슬픔을 나타냅니다. 이별이나 배신, 실망으로 인한 고통이 있을 수 있습니다. 하지만 이 아픔을 통해 더 강해지고 성장할 수 있습니다.",
    descriptionReversed: "역방향 소드 3은 깊은 상처로부터 서서히 회복되는 시기를 나타냅니다. 자신을 용서하고 타인도 용서하는 것이 치유의 핵심입니다. 폭풍 후에는 반드시 맑은 날이 옵니다." },

  { id: 53, name: "Four of Swords", nameKo: "소드 4", arcana: "minor", suit: "소드", image: "/tarot/swords_04.jpg",
    keywords: ["휴식", "회복", "명상", "전략적 후퇴"],
    keywordsReversed: ["번아웃", "강제적 쉬지 못함", "불안", "필요한 휴식 거부"],
    description: "기사의 석관 위에 조각된 명상하는 모습은 치유와 회복을 위한 고요한 시간을 나타냅니다. 지금은 잠시 물러서서 충분한 휴식을 취해야 할 때입니다. 몸과 마음을 회복시키세요.",
    descriptionReversed: "역방향 소드 4는 필요한 휴식을 거부하거나 번아웃 상태를 나타냅니다. 충분한 회복 없이 계속 달리다가는 더 큰 문제가 생길 수 있습니다. 지금 당장 쉬세요." },

  { id: 54, name: "Five of Swords", nameKo: "소드 5", arcana: "minor", suit: "소드", image: "/tarot/swords_05.jpg",
    keywords: ["갈등", "공허한 승리", "손해 보는 싸움", "불명예"],
    keywordsReversed: ["화해", "과거 갈등 해소", "무의미한 싸움 포기", "반성"],
    description: "패배한 자들의 무기를 빼앗는 인물은 승리했지만 공허한 모습을 보여줍니다. 모든 싸움에서 이길 필요는 없습니다. 때로는 지는 것이 더 현명한 선택일 수 있습니다. 무의미한 갈등은 피하세요.",
    descriptionReversed: "역방향 소드 5는 오래된 갈등이 해소되거나 무의미한 싸움에서 물러나는 시기를 나타냅니다. 자존심을 내려놓고 화해와 용서를 통해 앞으로 나아가세요." },

  { id: 55, name: "Six of Swords", nameKo: "소드 6", arcana: "minor", suit: "소드", image: "/tarot/swords_06.jpg",
    keywords: ["이행", "회복 여정", "혼란에서 안정으로", "변화"],
    keywordsReversed: ["떠나지 못함", "과거에 묶임", "정체", "해결되지 않은 문제"],
    description: "어두운 물을 건너 더 잔잔한 곳으로 향하는 배는 어려운 시기를 지나 더 나은 곳으로 나아가는 여정을 나타냅니다. 힘든 상황에서 서서히 벗어나고 있습니다. 희망을 잃지 마세요.",
    descriptionReversed: "역방향 소드 6은 변화가 필요함을 알면서도 현재 상황에서 벗어나지 못하는 상태를 나타냅니다. 무엇이 당신을 붙잡고 있는지 직시하고 용기 있게 첫 발을 내딛으세요." },

  { id: 56, name: "Seven of Swords", nameKo: "소드 7", arcana: "minor", suit: "소드", image: "/tarot/swords_07.jpg",
    keywords: ["전략", "영리한 계획", "독립적 행동", "일부 포기"],
    keywordsReversed: ["양심의 가책", "진실 고백", "어설픈 계획", "도둑맞음"],
    description: "몰래 다섯 칼을 가져가는 인물은 영리한 전략과 독립적 행동을 상징합니다. 때로는 직접 대결보다 전략적인 접근이 필요합니다. 하지만 도덕적 경계를 넘지 않도록 주의하세요.",
    descriptionReversed: "역방향 소드 7은 과거의 잘못에 대한 양심의 가책이나 진실을 고백해야 하는 상황을 나타냅니다. 부정직한 방식으로 얻은 것은 결국 더 큰 대가를 치르게 됩니다." },

  { id: 57, name: "Eight of Swords", nameKo: "소드 8", arcana: "minor", suit: "소드", image: "/tarot/swords_08.jpg",
    keywords: ["자기 제한", "갇힌 느낌", "두려움", "스스로 만든 감옥"],
    keywordsReversed: ["해방", "새로운 관점", "자유", "자기 인식"],
    description: "눈을 가리고 묶인 채 칼들로 둘러싸인 인물은 스스로 만든 제약에 갇혀 있는 상태를 나타냅니다. 사실 그 묶임은 그렇게 강하지 않습니다. 두려움이 당신을 가두고 있을 뿐입니다.",
    descriptionReversed: "역방향 소드 8은 스스로 만든 제약에서 벗어나는 시기를 나타냅니다. 눈을 가리고 있던 천이 벗겨지고 새로운 관점으로 상황을 바라볼 수 있게 됩니다." },

  { id: 58, name: "Nine of Swords", nameKo: "소드 9", arcana: "minor", suit: "소드", image: "/tarot/swords_09.jpg",
    keywords: ["불안", "악몽", "자기 비판", "걱정"],
    keywordsReversed: ["치유 시작", "근거 없는 두려움 인식", "도움 요청", "회복"],
    description: "침대에 앉아 손으로 얼굴을 가리는 인물은 극심한 불안과 걱정을 나타냅니다. 밤에 잠을 자지 못할 만큼 걱정이 많은 상태입니다. 하지만 대부분의 두려움은 현실보다 과장되어 있습니다.",
    descriptionReversed: "역방향 소드 9는 오랫동안 당신을 괴롭혀온 불안과 두려움에서 서서히 회복되는 시기를 나타냅니다. 근거 없는 걱정임을 인식하고 전문적인 도움이나 주변의 지지를 구하세요." },

  { id: 59, name: "Ten of Swords", nameKo: "소드 10", arcana: "minor", suit: "소드", image: "/tarot/swords_10.jpg",
    keywords: ["완전한 끝", "배신", "고통의 정점", "필연적 결말"],
    keywordsReversed: ["회복", "최악의 상황 극복", "재생", "저항과 생존"],
    description: "열 개의 칼에 쓰러진 인물은 완전한 패배와 끝을 상징합니다. 하지만 지평선에 빛이 보입니다. 이보다 더 나쁠 수 없기에, 이제는 올라가는 일만 남았습니다. 새로운 시작이 기다리고 있습니다.",
    descriptionReversed: "역방향 소드 10은 최악의 상황에서 서서히 회복되는 시기를 나타냅니다. 고통을 통해 배운 지혜로 더 강하게 일어날 준비가 되어 있습니다." },

  { id: 60, name: "Page of Swords", nameKo: "소드 페이지", arcana: "minor", suit: "소드", image: "/tarot/swords_page.jpg",
    keywords: ["호기심", "정보 수집", "기민함", "새로운 아이디어"],
    keywordsReversed: ["험담", "충동적 말", "정보 오용", "교활함"],
    description: "바람에 맞서 칼을 들고 서 있는 페이지는 지적 호기심과 기민함을 나타냅니다. 정보를 수집하고 관찰하는 시기입니다. 새로운 아이디어를 탐구하되 경솔한 말은 주의하세요.",
    descriptionReversed: "역방향 소드 페이지는 험담이나 충동적인 말로 인한 문제를 경고합니다. 알게 된 정보를 신중하게 사용하고 말하기 전에 충분히 생각하는 습관을 기르세요." },

  { id: 61, name: "Knight of Swords", nameKo: "소드 나이트", arcana: "minor", suit: "소드", image: "/tarot/swords_knight.jpg",
    keywords: ["단호함", "빠른 사고", "직접적 행동", "야망"],
    keywordsReversed: ["성급함", "무례함", "무모한 행동", "계획 없는 돌진"],
    description: "폭풍 속을 달리는 기사는 압도적인 추진력과 지적 예리함을 상징합니다. 목표를 향해 빠르고 단호하게 행동할 때입니다. 하지만 주변 사람들에게 미치는 영향도 고려하면서 나아가세요.",
    descriptionReversed: "역방향 소드 나이트는 생각 없이 달려들거나 타인의 감정을 무시하는 행동을 경고합니다. 속도와 함께 방향성과 배려도 필요합니다." },

  { id: 62, name: "Queen of Swords", nameKo: "소드 퀸", arcana: "minor", suit: "소드", image: "/tarot/swords_queen.jpg",
    keywords: ["명석함", "독립성", "직접성", "경험에서 얻은 지혜"],
    keywordsReversed: ["냉담함", "상처로 인한 쓴 마음", "지나친 비판", "감정 단절"],
    description: "높은 곳에서 칼을 치켜든 여왕은 명석한 지성과 독립적인 정신을 상징합니다. 감정에 흔들리지 않고 명확하게 판단하는 능력이 필요한 시기입니다. 진실을 말하되 지혜롭게 하세요.",
    descriptionReversed: "역방향 소드 퀸은 과거의 상처로 인해 냉담하거나 지나치게 비판적이 된 상태를 나타냅니다. 지성과 함께 감성의 온기를 잃지 않도록 노력하세요." },

  { id: 63, name: "King of Swords", nameKo: "소드 킹", arcana: "minor", suit: "소드", image: "/tarot/swords_king.jpg",
    keywords: ["지성", "권위", "공정한 판단", "진실의 추구"],
    keywordsReversed: ["독재", "조작", "잔인한 진실", "지성의 오용"],
    description: "정면을 응시하는 왕은 공정하고 권위 있는 지성의 상징입니다. 이성적이고 공정한 판단을 내려야 하는 시기입니다. 진실과 논리를 바탕으로 결정을 내리세요.",
    descriptionReversed: "역방향 소드 킹은 지성이 조작이나 독재의 도구로 쓰이는 상황을 경고합니다. 정직하지 않은 방식으로 지식을 이용하거나 권위를 남용하지 마세요." },

  // ── Pentacles ──
  { id: 64, name: "Ace of Pentacles", nameKo: "펜타클 에이스", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_ace.jpg",
    keywords: ["새로운 기회", "물질적 풍요", "실용적 시작", "재정적 선물"],
    keywordsReversed: ["기회 상실", "물질적 낭비", "재정 불안", "탐욕"],
    description: "꽃이 만발한 정원 입구에서 내밀어진 손 위의 금화는 새로운 물질적 기회를 상징합니다. 재정적 기회나 새로운 직업, 투자 기회가 찾아올 것입니다. 이 기회를 현명하게 활용하세요.",
    descriptionReversed: "역방향 펜타클 에이스는 재정적 기회를 놓치거나 물질적인 것에 지나치게 집착하는 상태를 나타냅니다. 장기적인 관점으로 재정을 관리하고 현실적인 계획을 세우세요." },

  { id: 65, name: "Two of Pentacles", nameKo: "펜타클 2", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_02.jpg",
    keywords: ["균형", "유연성", "우선순위 결정", "저글링"],
    keywordsReversed: ["불균형", "과부하", "재정 혼란", "조율 실패"],
    description: "두 금화를 묘기처럼 돌리는 인물은 여러 일을 동시에 저글링하는 능력을 나타냅니다. 많은 것들을 균형 있게 다루어야 하는 시기입니다. 유연성을 발휘하되 너무 무리하지 마세요.",
    descriptionReversed: "역방향 펜타클 2는 너무 많은 것을 한꺼번에 처리하려다 모든 것이 엉켜버린 상태를 나타냅니다. 우선순위를 정하고 하나씩 해결해나가세요." },

  { id: 66, name: "Three of Pentacles", nameKo: "펜타클 3", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_03.jpg",
    keywords: ["협력", "기술 인정", "팀워크", "성장"],
    keywordsReversed: ["불화", "협력 거부", "평범한 결과", "홀로 진행"],
    description: "성당에서 작업하는 장인을 인정하는 모습은 기술의 탁월함과 협력의 중요성을 나타냅니다. 당신의 기술과 노력이 인정받는 시기입니다. 팀워크를 통해 더 큰 성과를 이룰 수 있습니다.",
    descriptionReversed: "역방향 펜타클 3은 팀 내 불화나 협력 거부로 인한 저조한 결과를 나타냅니다. 혼자서 모든 것을 하려 하지 말고 다른 사람들의 강점을 활용하는 유연함을 기르세요." },

  { id: 67, name: "Four of Pentacles", nameKo: "펜타클 4", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_04.jpg",
    keywords: ["재정 안정", "절약", "보안 추구", "물질에 집착"],
    keywordsReversed: ["인색함 극복", "나눔", "집착 해소", "물질 집착 인식"],
    description: "금화를 꽉 붙잡고 있는 인물은 재정적 안정에 대한 집착을 나타냅니다. 안정은 중요하지만 지나친 집착은 성장을 막습니다. 소유와 나눔 사이의 균형을 찾아보세요.",
    descriptionReversed: "역방향 펜타클 4는 물질적 집착에서 벗어나 더 자유롭게 나누고 흘려보낼 수 있는 마음이 생기는 시기를 나타냅니다. 베푸는 것이 결국 더 많은 것을 가져다줍니다." },

  { id: 68, name: "Five of Pentacles", nameKo: "펜타클 5", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_05.jpg",
    keywords: ["어려움", "재정 위기", "소외감", "도움 필요"],
    keywordsReversed: ["회복", "지원 수용", "새로운 기회", "극복"],
    description: "눈보라 속을 걷는 두 인물은 어려운 시기와 소외감을 나타냅니다. 하지만 교회 창문에 빛이 새어 나오고 있습니다. 도움이 가까이 있습니다. 자존심을 내려놓고 도움을 요청하는 것도 용기입니다.",
    descriptionReversed: "역방향 펜타클 5는 어려운 시기가 지나가고 서서히 회복되는 시기를 나타냅니다. 고통스러운 경험이 오히려 더 강인하고 지혜로운 당신을 만들어 주었습니다." },

  { id: 69, name: "Six of Pentacles", nameKo: "펜타클 6", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_06.jpg",
    keywords: ["관대함", "균형 있는 나눔", "자선", "받고 줌"],
    keywordsReversed: ["불평등한 나눔", "조건부 관대함", "부채", "이기심"],
    description: "저울을 들고 구걸하는 사람들에게 나누어주는 상인은 풍요로운 나눔과 균형을 상징합니다. 줌과 받음이 균형을 이루는 시기입니다. 감사한 마음으로 베풀고 감사히 받는 연습을 하세요.",
    descriptionReversed: "역방향 펜타클 6은 나눔이 불평등하거나 조건부로 이루어지는 상황을 나타냅니다. 순수한 마음으로 베풀거나 대가 없이 도움을 받을 수 있는 균형을 찾으세요." },

  { id: 70, name: "Seven of Pentacles", nameKo: "펜타클 7", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_07.jpg",
    keywords: ["장기 투자", "인내", "결과 검토", "방향 재설정"],
    keywordsReversed: ["성급함", "단기적 사고", "투자 실패", "불만족"],
    description: "농부가 열심히 일군 작물을 바라보며 평가하는 모습은 투자와 인내, 그리고 결과를 기다리는 것을 나타냅니다. 지금은 진행 상황을 평가하고 더 나은 방향을 모색하는 시기입니다.",
    descriptionReversed: "역방향 펜타클 7은 인내가 부족하거나 단기적 결과만을 바라보는 상태를 나타냅니다. 장기적인 관점에서 목표를 바라보고 지속적인 노력을 이어나가세요." },

  { id: 71, name: "Eight of Pentacles", nameKo: "펜타클 8", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_08.jpg",
    keywords: ["장인 정신", "기술 향상", "헌신", "집중적 훈련"],
    keywordsReversed: ["완벽주의", "단조로운 반복", "기술 낭비", "게으름"],
    description: "열심히 금화를 새기는 장인은 기술 향상과 꾸준한 노력을 상징합니다. 자신의 기술을 갈고닦을 때입니다. 반복적인 연습과 헌신이 탁월함을 만들어냅니다.",
    descriptionReversed: "역방향 펜타클 8은 완벽주의로 인해 진전을 이루지 못하거나 반복적인 일에 지쳐 있는 상태를 나타냅니다. 완벽보다는 완성에 집중하고 배움의 기쁨을 찾아보세요." },

  { id: 72, name: "Nine of Pentacles", nameKo: "펜타클 9", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_09.jpg",
    keywords: ["자립", "물질적 풍요", "독립", "자기 충족"],
    keywordsReversed: ["재정 의존", "허상의 풍요", "과소비", "자립심 부족"],
    description: "풍요로운 포도원에서 매와 함께하는 여인은 자립과 물질적 성공의 기쁨을 나타냅니다. 스스로의 노력으로 이루어낸 안정과 풍요를 즐길 때입니다. 당신의 성취를 자랑스럽게 여기세요.",
    descriptionReversed: "역방향 펜타클 9는 재정적 독립이 아직 이루어지지 않았거나 외부에 의존하는 상태를 나타냅니다. 스스로 설 수 있는 기반을 만들기 위한 구체적인 계획을 세우세요." },

  { id: 73, name: "Ten of Pentacles", nameKo: "펜타클 10", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_10.jpg",
    keywords: ["부와 유산", "가족의 안정", "세대를 잇는 풍요", "완성"],
    keywordsReversed: ["재정 손실", "가족 갈등", "유산 문제", "단기적 이익 추구"],
    description: "가족과 함께하는 노인의 모습은 세대를 넘어 전해지는 부와 안정을 상징합니다. 오랫동안 쌓아온 노력이 결실을 맺고 가족과 함께 진정한 풍요를 누리는 시기입니다.",
    descriptionReversed: "역방향 펜타클 10은 가족 내 재정 갈등이나 유산 문제를 나타낼 수 있습니다. 장기적인 관점에서 가족의 안정을 위한 현명한 재정 계획을 세우세요." },

  { id: 74, name: "Page of Pentacles", nameKo: "펜타클 페이지", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_page.jpg",
    keywords: ["새로운 목표", "학습", "실용적 탐구", "가능성"],
    keywordsReversed: ["나태함", "비현실적 계획", "무기력", "집중력 부족"],
    description: "금화를 경이로운 눈으로 바라보는 페이지는 물질적 세계에 대한 호기심과 배움의 열의를 나타냅니다. 새로운 기술이나 재정적 기회를 탐구할 좋은 시기입니다. 구체적인 목표를 세우고 첫 걸음을 내딛으세요.",
    descriptionReversed: "역방향 펜타클 페이지는 나태함이나 비현실적인 계획으로 인해 실질적인 진전이 없는 상태를 나타냅니다. 작은 것부터 실천하는 습관을 만들어 나가세요." },

  { id: 75, name: "Knight of Pentacles", nameKo: "펜타클 나이트", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_knight.jpg",
    keywords: ["꾸준함", "신뢰성", "인내", "실용적 접근"],
    keywordsReversed: ["정체", "완고함", "게으름", "루틴에서 벗어나지 못함"],
    description: "평화롭게 서 있는 말 위의 기사는 느리지만 확실한 전진을 상징합니다. 빠른 변화보다 꾸준하고 믿음직한 방식으로 목표를 향해 나아가는 것이 중요한 시기입니다.",
    descriptionReversed: "역방향 펜타클 나이트는 지나친 신중함으로 인해 정체되어 있거나 루틴에서 벗어나지 못하는 상태를 나타냅니다. 때로는 변화와 새로운 시도가 필요합니다." },

  { id: 76, name: "Queen of Pentacles", nameKo: "펜타클 퀸", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_queen.jpg",
    keywords: ["실용적 돌봄", "풍요로운 환경 조성", "감각적 즐거움", "물질적 안정"],
    keywordsReversed: ["불안", "물질적 집착", "일과 삶의 불균형", "자기 돌봄 부족"],
    description: "꽃이 만발한 정원에서 토끼와 함께하는 여왕은 풍요롭고 안락한 환경을 만들어내는 능력을 상징합니다. 실용적이고 감각적인 방식으로 삶의 질을 높이고 주변 사람들을 돌볼 때입니다.",
    descriptionReversed: "역방향 펜타클 퀸은 자신을 돌보지 않거나 물질적 안정에 지나치게 집착하는 상태를 나타냅니다. 자기 자신의 필요와 경계를 존중하는 것이 먼저입니다." },

  { id: 77, name: "King of Pentacles", nameKo: "펜타클 킹", arcana: "minor", suit: "펜타클", image: "/tarot/pentacles_king.jpg",
    keywords: ["물질적 성공", "안정된 부", "신뢰할 수 있는 조언자", "기업가"],
    keywordsReversed: ["물질주의", "완고함", "탐욕", "재정 위험"],
    description: "황소와 포도나무로 장식된 왕좌의 왕은 물질적 성공과 실용적 지혜를 상징합니다. 재정적으로 안정된 상태에서 현명한 결정을 내릴 때입니다. 당신의 경험과 자원을 활용해 확실한 성과를 만들어내세요.",
    descriptionReversed: "역방향 펜타클 킹은 재정적 위험을 감수하거나 탐욕스러운 결정을 내릴 위험을 경고합니다. 물질적 성공만을 추구하는 것이 진정한 행복을 보장하지 않는다는 것을 기억하세요." },
];

export function getRandomCard(): { card: TarotCard; isReversed: boolean } {
  const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  const isReversed = Math.random() < 0.5;
  return { card, isReversed };
}
