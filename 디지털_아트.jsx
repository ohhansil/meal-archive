
import { useState } from "react";

export default function MealArchiveSite() {
  const entries = [
    { trigger:"너무 덜익은 반숙란은 씹기도 전에 넘어간다.", food:"반숙란과 요거트 소스, 바게트", detail:"" },
    { trigger:"바로 신호가 오는 편.", food:"곱창 볶음밥에 김", detail:"너무 맵다.." },
    { trigger:"나는 바삭보다 눅눅파.", food:"딸기 크레페에 누텔라 추가", detail:"" },
    { trigger:"1인 파스타 양조절은 풀리지 않는 난제다.", food:"고춧가루 파스타, 바게트에 버터", detail:"적으면 적은대로, 적절하면 너무 적당해서, 많으면 그래도 다먹어서 항상 기분이 별로다." },
    { trigger:"엄마가 챙겨주지 않으면 귀찮은 것.", food:"소고기, 냉동밥, 후라이, 김치", detail:"김치 러버." },
    { trigger:"따뜻한 쫄면.", food:"온쫄면, 김밥", detail:"나는 뭐든 다대기는 잘 안넣는 편이다." },
    { trigger:"가끔 촉촉한 것보다 마른 것들이 땡길 때가 있다.", food:"돼지고기 두루치기", detail:"(만두도)" },
    { trigger:"치킨 값이 금 값이다..", food:"치킨", detail:"" },
    { trigger:"올드보이 최민식의 입장이 된다면 난 라면을 줬으면 좋겠다.", food:"라면, 맥주", detail:"" },
    { trigger:"비계같은 식감은 싫어하지만 족발에 콜라겐은 좋아한다.", food:"불족에 보쌈", detail:"" },
    { trigger:"가짜의 그냥 자극만 남은 맛.", food:"마라엽떡", detail:"작년에 훠궈 먹고 토한 이후로 마라를 못먹는데 마라 엽떡은 괜찮다." },
    { trigger:"사실 주력은.", food:"말차시루", detail:"성심당은 케잌도 케잌이지만 작은메아리(퀸아망)이 아주 맛있다." },
    { trigger:"바로 뚜껑닫아 버렸다.", food:"콘스프, 바게트에 피스타치오 참치 스프레드", detail:"로마 식료품점에서 샀던 스프레드 개봉." },
    { trigger:"국민대 빵집에 파는 4개입에 오천 원 하는 빵.", food:"앙금찹쌀소보루빵", detail:"완두 앙금과 팥 앙금, 찹쌀. 지난 겨울 즈음에 나왔는데 그 이후로 최애 빵이 되었다.꽤 달아서 먹으면 식욕이 떨어진다." },
    { trigger:"삼겹살로 제육을 하면 씹을 때부터 풍족함이 다르다.", food:"삼겹살 제육", detail:"실제로 삼겹살이 더 비싸기도 하고." },
    { trigger:"술을 별로 안좋아해서.", food:"리몬첼로", detail:"탄산수와 섞어 마시면 괜찮다." },
    { trigger:"(매일)", food:"라떼", detail:"10이면 10 라떼를 마신다." },
    { trigger:"동거인의 친구가 선물해준 아주 비싼 것.", food:"바닐라빈 딸기, 마롱 밀푀유", detail:"바닐라는 귀 뒤가 아리게 좋아하는 맛이지만 먹고나면 라면이 땡긴다." },
    { trigger:"손에 버터가 묻으니 휴지를 꼭 챙겨오자.", food:"소금빵", detail:"경복궁역 근처 애소아. 가볍고 바삭하고 고소하고 쫄깃하고 부드럽다." },
    { trigger:"체부동 잔치집은 오천 원에 국수를 먹을 수 있다.", food:"잔치국수, 해물파전", detail:"" },
    { trigger:"세븐일레븐은 디저트 라인을 굉장히 퀄리티 있게 만드는 편인 것 같다.", food:"두쫀쿠", detail:"" },
    { trigger:"제목에 충실한 음식.", food:"비빔밥", detail:"편식이 심한 나를 위해 엄마는 고추장과 후라이만 들어간 야채없는 비빔밥을 해줬다." },
    { trigger:"버터가 녹기까지 잘 기다리지 못하는 편이다.", food:"펜네 알리오올리오, 바질페스토 바게트 샌드위치", detail:"덩어리 버터 샌드위치." },
    { trigger:"두번째 샌드위치를 먹을 때면 버터는 잘 녹아있다.", food:"바질페스토 바게트 샌드위치", detail:"한 번 만들 때 다음날 먹을 것도 만들어두기 좋다." },
    { trigger:"삶은 당근은 절대 먹지 않는데 오늘은 도전하는 행위를 하고 싶은 날.", food:"비프 스튜, 고구마 샐러드, 웨지 감자", detail:"한 입. 별로다." },
    { trigger:"이렇게 고소할수가.", food:"농축유 라떼", detail:"" },
    { trigger:"(최강록 유튜브 참조)", food:"두부 정식", detail:"밥 위에 두부 조림, 튀긴 두부 스튜, 순두부, 두부 장국. 두부 조림을 해보려는데 조리고 식히는데만 여섯 시간 이상이 걸린다네." },
    { trigger:"가게를 잘못 들어갔는데 나가기 뭐해서 그냥 먹었다.", food:"스프카레", detail:"나는 스프카레를 안좋아한다." },
    { trigger:"라떼 한 잔에 만 육천 원 하는 프리미엄 커피숍.", food:"라떼", detail:"인 줄 몰랐다." },
    { trigger:"최대한 얇고 뜨거운 걸로.", food:"버섯 버터 볶음", detail:"나는 버섯을 안좋아하는데 별로 안친한 친구가 날 위해 해줘서 그냥 먹었다." },
    { trigger:"메론빵은 자고로 식후 배부른 상태에서 먹고 배불러서 아쉽다고 하는 것 까지가 레시피이다.", food:"메론빵", detail:"" },
    { trigger:"저렴하면 용서가 쉬운 편.", food:"소금빵", detail:"" },
    { trigger:"탄 맛이 많이 나고 그닥 친절하지 않은 집.", food:"라떼", detail:"" },
    { trigger:"소는 어디까지 맛있으려나.", food:"우설", detail:"" },
    { trigger:"역사에서 배나 채우려고 산 모형같은 타르트.", food:"농축유 라떼와 치즈타르트", detail:"촉촉 바삭 완벽한 타르트였다." },
    { trigger:"아 두부 조림이 여섯시간 이상이라니..", food:"두부 정식", detail:"" },
    { trigger:"휘핑 크림을 좋아하는 친구와 가까이 지내다보니 나도 휘핑을 좋아하게 되었다.", food:"비엔나 커피, 식빵", detail:"" },
    { trigger:"욕심내서 두개를 샀는데 둘 다 맛없다.", food:"도넛과 라떼", detail:"" },
    { trigger:"라멘집에 가면 왠지 모르게 공손해져서 더 열심히 먹게된다.", food:"라멘", detail:"내어주셔서 감사합니다." },
    { trigger:"아닌데 이거 진짜 맛있는데..", food:"피자", detail:"친구들이랑 먹던 피자를 가족들에게 소개해주면 뭔가 그 맛이 아니다." },
    { trigger:"그 이상을 넣으면 물을 한바가지 먹게 될거다.", food:"시오콘부 파스타", detail:"시오콘부는 손톱 만큼 넣어도 된다. 이게 맞다고? 정도의 양." },
    { trigger:"치즈스틱은 무조건 추가.", food:"햄버거", detail:"" },
    { trigger:"학과 정리 후에 엽떡은 공식이 되었다.", food:"엽떡", detail:"" },
    { trigger:"스스로 정 떨어지기도 하니 조심하자.", food:"모닝글로리 볶음, 쌀국수", detail:"모닝글로리는 입에 가득 넣고 우적우적 씹어야 맛있다." },
    { trigger:"1분 커리.", food:"치킨 커리에 바게트", detail:"" },
    { trigger:"경훈이가 사줬다.", food:"크림치즈 페이스트리", detail:"" },
    { trigger:"샐러드 드레싱은 직접 만들기 쉽다.", food:"양배추 샐러드에 구운 두부, 생선까스", detail:"" },
    { trigger:"모양이 예쁜 파스타는 집기 힘들다.", food:"샐러드 파스타", detail:"" },
    { trigger:"내 요리에 모두가 마중나왔다.", food:"닭안심 파스타(화재경보기)", detail:"파기름에 닭을 볶다가 화재경보기가 울렸다. 꼭 환기시키면서 요리하자." },
    { trigger:"과식은 좋지 않다.", food:"오꼬노미야끼, 야끼소바", detail:"" },
    { trigger:"매니저님 짱.", food:"폐기 케이크", detail:"" },
    { trigger:"애기 돌잔치.", food:"중식 파티", detail:"" },
    { trigger:"냉동바게트는 가성비가 좋고 생각보다 먹을만하다.", food:"바게트(소분)", detail:"" },
    { trigger:"탕수육만 땡기는 날이 있다.", food:"탕수육", detail:"" },
    { trigger:"조합이 좋다.", food:"티라미수, 디저트 와인", detail:"" },
    { trigger:"바게트는 몇초 차이로 딱딱해진다.", food:"바게트에 에그마요", detail:"" },
    { trigger:"우영이는 스프 없이 면만 먹는다.", food:"신라면 과자", detail:"" },
    { trigger:"뱐다넴은 일반 라이스페이퍼보다 얇다.", food:"월남쌈", detail:"물에 적시지 않고 먹는다. 바삭바삭하다." },
    { trigger:"자취생의 김밥이다.", food:"김, 밥", detail:"한 때 엄마가 해주던 등교 식단이기도 하다." },
    { trigger:"월남쌈에는 쌀국수 면을 넣자.", food:"월남쌈", detail:"" },
    { trigger:"식후 바로 잠을 청하자.", food:"라면", detail:"찜질방에서 먹는 라면." },
    { trigger:"같은 양념.", food:"상추 겉절이, 도삭면", detail:"전자레인지로 만드는 양념." },
    { trigger:"가루 고기가 절반이다.", food:"월남쌈, 상추 겉절이", detail:"우삼겹 털이." },
    { trigger:"크림 떠먹는 스푼이 이상하게 생겼다.", food:"아인슈페너", detail:"" },
    { trigger:"당근 싫어하는 사람, 오이 싫어하는 사람, 둘 다 먹는 사람", food:"월남쌈", detail:"" },
    { trigger:"수제비 추가.", food:"닭한마리", detail:"" },
    { trigger:"귀찮더라도 토마토 씨를 제거한 게 식감이 좋다.", food:"토마토 샐러드 샌드위치", detail:"" },
    { trigger:"맛보기 스푼으로 먹은 라벤더맛.", food:"바나나 푸딩 젤라또", detail:"" },
    { trigger:"참외 철이 다가온다.", food:"애플 브리치즈, 참외 샌드위치, 라떼", detail:"" },
    { trigger:"좋은 라떼.", food:"베이글 잠봉뵈르, 라떼", detail:"" },
    { trigger:"홍제천 바위에 앉아서 먹기.", food:"레몬타르트", detail:"" },
    { trigger:"엄마랑 먹으려고 일주일동안 참았다.", food:"피자", detail:"" },
    { trigger:"이모집에서 얻어온 것.", food:"곤드레밥, 총각김치", detail:"" },
    { trigger:"22년도부터 먹은 류수영의 장칼국수.", food:"장칼국수", detail:"" },
    { trigger:"피타브레드 보다는 바게트같은 단단한 빵이 먹기 편하다.", food:"애플 브리치즈 샌드위치", detail:"사과가 흘러내려서.." },
    { trigger:"정릉에 당도 최고 수박집이 있다.", food:"수박", detail:"매년 가는 가게." },
    { trigger:"1인분은 적고 2인분은 많은 짜파게티같은 것.", food:"도삭면", detail:"" },
    { trigger:"시장 떡볶이 맛을 내고 싶다면 간장을 넣지 않으면 된다.", food:"라이스페이퍼 떡볶이", detail:"" },
    { trigger:"전자레인지에 물 한컵을 넣고 같이 돌리면 촉촉해진다.", food:"보쌈", detail:"대자를 시켜서 며칠동안 보쌈만 먹었다." },
    { trigger:"냉동 비비큐 황올.", food:"치킨", detail:"" },
    { trigger:"고수다다익선.", food:"타코, 보울", detail:"" },
    { trigger:"도넛을 구워 먹는 게 유행이라는데..", food:"구운 도넛", detail:"그냥 먹는 게 낫다." },
    { trigger:"일주일 내내 먹은 것.", food:"아인슈페너", detail:"크림과 에스프레소를 먼저 먹고 우유를 마시는 것에 빠졌다." },
    { trigger:"육천 원에 삼계탕을 주는 곳.", food:"삼계탕", detail:"한울 식당" }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white px-8 py-20 text-neutral-800">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-neutral-400 mb-16">26/3/26 — 26/6/3</p>
        <div className="space-y-8">
          {entries.map((e, i) => (
            <button key={i} onClick={() => setSelected(e)} className="block w-full text-left border-b border-neutral-100 pb-6">
              <p className="text-lg text-neutral-600 leading-relaxed">{e.trigger}</p>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-white/85 backdrop-blur-sm flex items-center justify-center p-8" onClick={() => setSelected(null)}>
          <div className="max-w-md w-full bg-white border border-neutral-200 p-10" onClick={(e)=>e.stopPropagation()}>
            <p className="text-lg leading-relaxed mb-6">{selected.trigger}</p>
            <p className="text-sm text-neutral-400 mb-4">{selected.food}</p>
            {selected.detail && <p className="text-neutral-600 leading-relaxed">{selected.detail}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
