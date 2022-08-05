원티드 프리온보딩 5주차 과제 with 트립비토즈

# wan2trip

# 프로젝트 소개

트립비토즈 기업과제 팀프로젝트 입니다.

# 팀원


| 이름   |       팀 구성       |                                                           기능 구현 및 역할                                                            |
| ------ | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| 김수빈 | 팀원 </br> Frontend |                                            - 회원가입(정보입력) </br> - 회원가입 validation                                            |
| 김민주 | 팀원 </br> Frontend |                                      - 검색 결과 페이지,예약 확인 페이지 반응형 웹 구현 </br> - 무한스크롤에 옵저버 기능 추가                                       |
| 이상지 | 팀장 </br> Frontend |                                            - admin페이지 구현 </br> - Pagenation </br> 기획                                            |
| 이혜림 | 팀원 </br> Frontend |                  - headers, routing, interactive buttons </br> - mui & lottie & outter layout </br> - 반응형 웹 구현                   |
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
wan2trip
┣ public
┃ ┣ data
┃ ┃ ┣ booked.json
┃ ┃ ┣ hotels.json
┃ ┃ ┗ index.js
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ logo192.png
┃ ┣ logo512.png
┃ ┣ manifest.json
┃ ┗ robots.txt
┣ src
┃ ┣ api
┃ ┃ ┃ ┣ httpRequest.ts
┃ ┃ ┗ queries.ts
┃ ┣ common
┃ ┃ ┣ Button.tsx
┃ ┃ ┣ Card.tsx
┃ ┃ ┣ Confirm.tsx
┃ ┃ ┣ Modal.tsx
┃ ┃ ┣ Rating.tsx
┃ ┃ ┗ VirtualScroll.tsx
┃ ┣ components
┃ ┃ ┣ bookedList
┃ ┃ ┃ ┣ BookedList.tsx
┃ ┃ ┃ ┣ BookedMobile.tsx
┃ ┃ ┃ ┣ BookedWeb.tsx
┃ ┃ ┃ ┗ BookingButton.tsx
┃ ┃ ┣ calender
┃ ┃ ┃ ┣ Calender.tsx
┃ ┃ ┃ ┣ CalenderHeader.tsx
┃ ┃ ┃ ┣ Cell.tsx
┃ ┃ ┃ ┣ ProfileCard.tsx
┃ ┃ ┃ ┗ Table.tsx
┃ ┃ ┣ layout
┃ ┃ ┃ ┣ BackHeader.tsx
┃ ┃ ┃ ┣ Footer.tsx
┃ ┃ ┃ ┣ Header.tsx
┃ ┃ ┃ ┣ HomeBackground.tsx
┃ ┃ ┃ ┗ Layout.tsx
┃ ┃ ┣ result
┃ ┃ ┃ ┣ Checkbox.tsx
┃ ┃ ┃ ┣ ConfirmContent.tsx
┃ ┃ ┃ ┣ ResultList.tsx
┃ ┃ ┃ ┣ ResultMobile.tsx
┃ ┃ ┃ ┣ ResultWeb.tsx
┃ ┃ ┃ ┣ Sort.tsx
┃ ┃ ┃ ┗ Tag.tsx
┃ ┃ ┣ search
┃ ┃ ┃ ┣ dropdown
┃ ┃ ┃ ┃ ┗ Dropdown.tsx
┃ ┃ ┃ ┣ CalendarInput.tsx
┃ ┃ ┃ ┣ GuestCounter.tsx
┃ ┃ ┃ ┣ GuestInput.tsx
┃ ┃ ┃ ┣ SearchBar.tsx
┃ ┃ ┃ ┗ SearchInput.tsx
┃ ┃ ┗ HotelList.tsx
┃ ┣ hooks
┃ ┃ ┣ getMonth.tsx
┃ ┃ ┣ moveToTop.tsx
┃ ┃ ┣ useConfirm.tsx
┃ ┃ ┣ useHighlightDate.tsx
┃ ┃ ┣ useMediaQuery.tsx
┃ ┃ ┣ useModal.tsx
┃ ┃ ┣ useObserver.tsx
┃ ┃ ┗ useSearch.tsx
┃ ┣ page
┃ ┃ ┣ About.tsx
┃ ┃ ┣ BookedListPage.tsx
┃ ┃ ┣ Home.tsx
┃ ┃ ┣ NotFound404.tsx
┃ ┃ ┗ Result.tsx
┃ ┣ routes
┃ ┃ ┗ Routes.tsx
┃ ┣ static
┃ ┃ ┣ constant
┃ ┃ ┃ ┣ calenderValues.ts
┃ ┃ ┃ ┗ userInfo.ts
┃ ┃ ┣ icons
┃ ┃ ┃ ┣ LeftArrow.svg
┃ ┃ ┃ ┣ RightArrow.svg
┃ ┃ ┃ ┣ icon.ts
┃ ┃ ┃ ┗ spinner.png
┃ ┃ ┣ image
┃ ┃ ┃ ┣ .DS_Store
┃ ┃ ┃ ┣ Calendar.svg
┃ ┃ ┃ ┣ Cancel.svg
┃ ┃ ┃ ┣ CancelGray.svg
┃ ┃ ┃ ┣ Close.svg
┃ ┃ ┃ ┣ DownArrow.svg
┃ ┃ ┃ ┣ LeftArrow.svg
┃ ┃ ┃ ┣ Location.svg
┃ ┃ ┃ ┣ Minus.svg
┃ ┃ ┃ ┣ Noreserve.png
┃ ┃ ┃ ┣ Plus.svg
┃ ┃ ┃ ┣ SearchBlack.svg
┃ ┃ ┃ ┣ SearchWhite.svg
┃ ┃ ┃ ┣ User.svg
┃ ┃ ┃ ┣ background.jpg
┃ ┃ ┃ ┣ logo.png
┃ ┃ ┃ ┣ logoDark.png
┃ ┃ ┃ ┗ map.jpg
┃ ┃ ┗ .DS_Store
┃ ┣ store
┃ ┃ ┣ global.ts
┃ ┃ ┗ search.ts
┃ ┣ types
┃ ┃ ┗ types.d.ts
┃ ┣ utils
┃ ┃ ┣ changeInfiniteScrollDataToArray.ts
┃ ┃ ┗ priceToString.ts
┃ ┣ .DS_Store
┃ ┣ App.tsx
┃ ┣ index.css
┃ ┣ index.tsx
┃ ┣ react-app-env.d.ts
┃ ┣ tailwind.css
┃ ┗ tailwind.generated.css
┗ ┗ tailwind.generated.css
┣ .eslintrc.js
┣ .prettierrc
┣ package.json
┣ postcss.config.js
┣ tsconfig.json
┗ tsdx.config.js
```

</br>

# 상세 기능 구현 설명

## responsive

- tailwind를 이용하여 반응형을 구현하였습니다.

## modal

- 개별 컴포넌트와 모달 템플릿(backdrop과 display 구성요소 등), 로직을 각각 분리하여 재사용성을 높였습니다.

## search

- react-query를 사용하여 검색 키워드와 인원수를 파라미터로 받아 파라미터가 있을 경우에 데이터를 받아 올 수 있도록 했습니다. 엔터를 누르거나 검색 버튼을 클릭했을 경우 검색이 실행되고 홈에서 검색했을 경우엔 검색 결과 페이지로 이동됩니다.

- json-server `q=${keyword}&occupancyMax_gte=${peopleNum}` 입력한 키워드를 가진 데이터와 전달 받은 인원 수를 넘지 않는 데이터를 리턴해줍니다.

<img width="352" alt="search" src="https://user-images.githubusercontent.com/90506668/183038085-b7b7b9f6-3896-4d5f-b46a-9cb3a9055676.png"> <br>

- hooks/userSearch에 연관검색어 관련 fuzzy 문자열 검색 로직을 훅으로 분리해주고 키보드 이벤트가 발생했을 때 입력 받은 문자와 일치하는지 체크해주어 연관 검색어 리스트에 보여줍니다.

## Infinity Scroll

- 승연님의 무한스크롤

- 최초 10개의 카드를 불러온 뒤 사용자가 스크롤을 내려 마지막 카드에 도달하면 비동기로 옵저버를 실행해줍니다.

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
