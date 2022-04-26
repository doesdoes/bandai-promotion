export function getViewData(id) {
  return [
    { 
      viewStateId: 1,
      qTit: '질문 1',
      qDesc: '꼬르륵... 배가 고프네. \n어떤 밥을 먹을까?',
      links: [
        {
          next: 2,
          nextTxt: 'A. 음식은 정성이지. 요리를 시작해볼까?' 
        }, {
          next: 3,
          nextTxt: 'B. 빨리 먹는게 최고지! 배달 시키자'
        }
      ]
    }, { 
      viewStateId: 2,
      qTit: '질문 2',
      qDesc: '애니메이션을 시청중인 당신. \n지금 보고 있는 애니메이션은?',
      links: [
        {
          next: 4,
          nextTxt: 'A. 멋진 로봇이 등장하는 애니메이션' 
        }, {
          next: 5,
          nextTxt: 'B. 로봇이 등장하지 않는 애니메이션'
        }
      ]
    }, {
      viewStateId: 3,
      qTit: '질문 2',
      qDesc: '용돈을 20만원 받아서 옷을 사러 나왔다. \n내가 사려는 옷은?',
      links: [
        {
          next: 6,
          nextTxt: 'A. 한벌에 20만원인 고급 브랜드' 
        }, {
          next: 7,
          nextTxt: 'B. 1벌에 5만원정도인 대중적 브랜드'
        }
      ]
    }, { 
      viewStateId: 4,
      qTit: '질문 3',
      qDesc: '나를 반겨주는 우리집 강아지는?',
      links: [
        {
          next: 8,
          nextTxt: 'A. 골든리트리버 멍!' 
        }, {
          next: 9,
          nextTxt: 'B. 포메라니안 으르르'
        }
      ]
    }, { 
      viewStateId: 5,
      qTit: '질문 3',
      qDesc: '나를 반겨주는 우리집 강아지는?',
      links: [
        {
          next: 10,
          nextTxt: 'A. 뽀실뽀실 푸들' 
        }, {
          next: 11,
          nextTxt: 'B. 카리스마 도베르만'
        }
      ]
    }, { 
      viewStateId: 6,
      qTit: '질문 3',
      qDesc: '위기의 상황...! 나를 지켜준 영웅은',
      links: [
        {
          next: 12,
          nextTxt: 'A. 위잉-척. 삐리릭 \n"괜찮으신가요." 라고 하는 로봇' 
        }, {
          next: 13,
          nextTxt: 'B. "어이! 괜찮나!? \n다친곳은 없고?" 라고 하는 사람'
        }
      ]
    }, { 
      viewStateId: 7,
      qTit: '질문 3',
      qDesc: '내 눈앞에 돈이 나오는 버튼이 있다.',
      links: [
        {
          next: 14,
          nextTxt: 'A. 100% 확률로 1억 받기' 
        }, {
          next: 15,
          nextTxt: 'B. 1% 확률로 100억 받기'
        }
      ]
    }, { 
      viewStateId: 8,
      qTit: '질문 4',
      qDesc: '퍼즐을 선물 받았다. 몇피스일까?',
      links: [
        {
          result: 1,
          nextTxt: 'A. 10,000 PCS' 
        }, {
          result: 2,
          nextTxt: 'B. 1,000 PCS'
        }
      ]
    }, { 
      viewStateId: 9,
      qTit: '질문 4',
      qDesc: '퍼즐을 선물 받았다. 몇피스일까?',
      links: [
        {
          result: 3,
          nextTxt: 'A. 500 PCS' 
        }, {
          result: 4,
          nextTxt: 'B. 108 PCS'
        }
      ]
    }, { 
      viewStateId: 10,
      qTit: '질문 4',
      qDesc: '눈앞에 꿈에 그리던 동물이 나타났다면?',
      links: [
        {
          result: 5,
          nextTxt: 'A. 무조건 잡아야지!' 
        }, {
          result: 6,
          nextTxt: 'B. 아니야. 풀어줄거야'
        }
      ]
    }, { 
      viewStateId: 11,
      qTit: '질문 4',
      qDesc: '유튜버가 된 당신. 어떤 유튜버인가요?',
      links: [
        {
          result: 7,
          nextTxt: 'A. 얼굴은 공개하지 않아. 버츄얼 유튜버' 
        }, {
          result: 8,
          nextTxt: 'B. 친구들과 다함께 재미있게 촬영할래!'
        }
      ]
    }, { 
      viewStateId: 12,
      qTit: '질문 4',
      qDesc: '소설을 원작으로 나온 드라마를 \n시청하기 전 나의 자세는?',
      links: [
        {
          result: 9,
          nextTxt: 'A. 리메이크 드라마도 한 작품이야! \n이거 먼저 볼래!' 
        }, {
          result: 10,
          nextTxt: 'B. 원작 먼저 공부해야지! 소설을 읽는다'
        }
      ]
    }, { 
      viewStateId: 13,
      qTit: '질문 4',
      qDesc: '가족과 다함께 떠나는 여행. 어디로 갈까?',
      links: [
        {
          result: 11,
          nextTxt: 'A. 장비들을 준비하고 등산을 떠난다' 
        }, {
          result: 12,
          nextTxt: 'B. 조용한 박물관에서 작품을 관람한다'
        }
      ]
    }, { 
      viewStateId: 14,
      qTit: '질문 4',
      qDesc: '내가 그린 그림, 친구 반응은?',
      links: [
        {
          result: 13,
          nextTxt: 'A. 이거 진짜같은데? 그린거라고?' 
        }, {
          result: 14,
          nextTxt: 'B. 꺅! 너무 귀여워!! 나도 갖고싶어'
        }
      ]
    }, { 
      viewStateId: 15,
      qTit: '질문 4',
      qDesc: '운명은 00000',
      links: [
        {
          result: 15,
          nextTxt: 'A. 개척하는거야!' 
        }, {
          result: 16,
          nextTxt: 'B. 흐르는대로'
        }
      ]
    }
  ].find(x => x.viewStateId === id)
}