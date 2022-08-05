원티드 프리온보딩 5주차 과제 with 트립비토즈
# wan2trip

# 프로젝트 소개

트립비토즈 기업과제 팀프로젝트 입니다.

# 팀원

| 이름   |       팀 구성       |                                                           기능 구현 및 역할                                                            |
| ------ | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| 김수빈 | 팀원 </br> Frontend |                                            - 회원가입(정보입력) </br> - 회원가입 validation                                            |
| 김민주 | 팀원 </br> Frontend |                                      - 회원가입(정보입력) </br> - 회원가입 정보 json server 전송                                       |
| 이상지 | 팀장 </br> Frontend |                                            - admin페이지 구현 </br> - Pagenation </br> 기획                                            |
| 이혜림 | 팀원 </br> Frontend |                  - modal, responsive calenders </br> - custom hooks, global layout </br> - tailwindCSS 플러그인 설정               |
| 홍승연 | 팀원 </br> Frontend | - 전체데이터 fetch 및 필터링 api 구축 </br> - 당첨여부 체크박스 toggle callback 구현 </br> - search bar 구현 </br> - csv 다운로드 구현 |

</br>
</br>

# 기술 스택

`React.js`
`TypeScript`

`recoil`
`axois`
`date-fns`
`react-query`
`react-use`
`react-uid`
`tailwindCSS`
`fullhuman/postcss-purgecss`
`tailwind-styled-components`

``
</br>
</br>

# 구현 조건

1. 예약페이지 개발
2. 캘린더
3. 호텔 조회 / 검색

</br>

# 폴더 구조

```text

```

</br>

# 상세 기능 구현 설명

### 이상지

### 김수빈

### 김민주

### 이혜림

## modal
- 개별 컴포넌트와 모달 템플릿(backdrop과 display 구성요소 등), 로직을 각각 분리하여 재사용성을 높였습니다.

## calender
- 전제조건 : 반응형 캘린더, 해당 일자로부터 12개월까지만 보여주기
- 트립비토즈 사이트의 경우 모바일일때는 스크롤, 데스크탑일때는 2개월씩 보여주고 있습니다.
- 그래서 우선 1개월을 만들수 있는 로직을 짜고, 그걸 몇개씩 뿌려주는 식으로 하면 12개를 다 만들 필요가 없겠다고 생각이 들었습니다.
- useMediaquery를 이용하여 같은 로직이 모바일에서는 스크롤로 뿌려지게, 데스크탑에서는 fixed되게 구현했습니다.

### recoil
- today(Date객체)를 갖다주면 1개월치 Date테이블을 반환하는 getMonth 훅을 완성한 후 today는 전역으로 관리하기로 했습니다.
- 데스크탑의 경우 : today, today +1 로 2개를 세팅합니다.
- 모바일의 경우 : today(Date객체)를 배열로 만들고 초기값으로 today ~ today +3까지 세팅해놓습니다.

- 또한 캘린더에서 선택한 값을 다른 컴포넌트로 전달하기 위해 pickedDate도 객체 - 전역으로 관리하고 있습니다.
- pickedDate의 구성요소는 startDate, endDate입니다.

### useObserver
- 모바일의 경우 모든 달을 한번에 표시하면 스크롤이 쓸데없이 길어지므로 옵저버를 활용해 무한스크롤을 구현하고 이를 훅으로 분리하여 사용성을 높였습니다.

### cell
- 각 셀에서 비교작업을 해서 highlight 여부를 표시해줍니다.


### 홍승연
