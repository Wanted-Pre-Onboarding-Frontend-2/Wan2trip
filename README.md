원티드 프리온보딩 5주차 과제 with 트립비토즈

# wan2trip

# 프로젝트 소개

트립비토즈 기업과제 팀프로젝트 입니다.

# 팀원

| 이름   |       팀 구성       |                                          기능 구현 및 역할                                          |
| ------ | :-----------------: | :-------------------------------------------------------------------------------------------------: |
| 김수빈 | 팀원 </br> Frontend |                       - 검색 api, 조회</br> - 검색 UI</br>-검색창 연관검색어                        |
| 김민주 | 팀원 </br> Frontend |      - 검색 결과 페이지,예약 확인 페이지 반응형 웹 구현 </br> - 무한스크롤에 옵저버 기능 추가       |
| 이상지 | 팀장 </br> Frontend |                                                                                                     |
| 이혜림 | 팀원 </br> Frontend | - modal, responsive calenders </br> - custom hooks, global layout </br> - tailwindCSS 플러그인 설정 |
| 홍승연 | 팀원 </br> Frontend |                          - virtual scroll 구현</br> - 무한스크롤 api 구현                           |

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

- react-query를 사용하여 검색 키워드(keyword)와 인원수(peopleNum)를 파라미터로 받아 파라미터가 있을 경우에 데이터를 받아 올 수 있도록 했습니다. 
- 엔터를 누르거나 검색 버튼을 클릭했을 경우 검색이 실행됩니다. 
- 홈에서 검색했을 경우엔 검색 결과 페이지로 이동됩니다.

- json-server `q=${keyword}&occupancyMax_gte=${peopleNum}` 입력한 키워드를 가진 데이터와 전달 받은 인원 수를 넘지 않는 데이터를 리턴해줍니다.

<img width="352" alt="search" src="https://user-images.githubusercontent.com/90506668/183038085-b7b7b9f6-3896-4d5f-b46a-9cb3a9055676.png"> <br>

- 연관검색어 관련 fuzzy 문자열 검색 로직을 훅으로 분리해주었습니다. (hooks/userSearch.tsx)
- 키보드 이벤트가 발생했을 때 입력 받은 문자(keyword)와 데이터의 `hotels_name`가 일치하는지 체크해주어 연관 검색어 리스트에 보여줍니다.

## Infinity Scroll

- 승연님의 무한스크롤api + 버츄얼

- 무한스크롤 api를 사용해 호텔 데이터를 10개씩만 호출합니다. 
- 리스트가 출력된 페이지에서 사용자가 스크롤을 내려 마지막 카드에 도달하면 비동기로 옵저버를 실행해줍니다.

## Virtual scroll

- Virtual scroll를 이용해 viewport의 카드들만 DOM tree에 렌더하게끔 구현하였습니다.
  - DOM tree에 붙여진 card list의 개수를 줄임으로써 렌더링 시간을 줄였습니다. (특히 모바일에서 퍼포먼스 성능이 저하되는 이슈를 방지할 수 있습니다.)
  - 무한스크롤 limit인 10을 node padding으로 설정하여 사용자가 끊김없이 컨텐츠를 볼 수 있도록 구현했습니다.
  - 렌더링하고자 하는 데이터의 item list와 Virtual scroll간의 종속성을 제거함으로서 다른 컴포넌트도 Virtual scroll을 사용할 수 있도록 했습니다.


## calender

전제조건 : 반응형 캘린더, 오늘 일자로부터 12개월까지만 보여주기
- 트립비토즈 사이트의 경우 모바일일때는 스크롤로, 데스크탑일때는 2개월씩으로 캘린더를 보여주고 있습니다.
- 그래서 우선 1개월을 만들수 있는 로직을 짜고, 그 1개월을 반복하는 방식이면 12개월을 다 만들 필요가 없겠다고 생각이 들었습니다.
- `useMediaquery`를 이용하여 모바일에서는 스크롤로 내리며 캘린더가 보여지도록, 데스크탑에서는 캘린더가 2개월로 고정되어 노출되도록 구현했습니다. 

### recoil

- (오늘 날짜에 해당하는 today?) `today`(Date객체)를 가져오면 1개월치 Date테이블(즉 캘린더)을 반환하는 getMonth Hook을 구현한 후, `today`는? 전역으로 관리하기로 했습니다.
- 데스크탑의 경우: today, today +1 로 2개를 세팅합니다. (무엇이 두개?)
- 모바일의 경우: `today`(Date객체)를 배열로 만든 후 초기값으로 today ~ today + 3까지 세팅해놓습니다.

- 또한 캘린더에서 사용자가 선택한 값을 다른 컴포넌트(다른 어떤 컴포넌트?)로 전달하기 위해 `pickedDate`도 전역 객체로 관리하고 있습니다.
- `pickedDate`의 구성요소는 startDate, endDate입니다. (각각 checkIn, checkOut 날짜에 해당합니다.)

### useObserver

- 모바일의 경우 모든 캘린더를 한번에 노출하면 스크롤이 불필요하게 길어집니다.
- 따라서 useObserver를 활용해 무한스크롤을 구현했고 이를 Hook으로 분리하여 사용성을 높였습니다. (어떤 Hook인가요)

### cell

- 각 셀에서 [사용자가 날짜를 선택 시] 비교작업(무엇과 무엇을 비교)을 해서 해당 일자에 색깔을 달리하여 강조표시를 해두었습니다.
