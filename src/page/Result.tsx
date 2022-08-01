import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";
// import tw from "tailwind-styled-components";
import Header from "../components/layout/Header";
import Card from "../common/Card";
import VirtualScroll from "common/VirtualScroll";
import Tag from "../components/result/Tag";
import Checkbox from "../components/result/Checkbox";
import Sort from "../components/result/Sort";
import { ReactComponent as Location } from "../static/image/Location.svg";
import { ReactComponent as LeftArrow } from "../static/image/LeftArrow.svg";

// TODO: fetch 데이터로 변경
const DUMMY_DATA = [
  {
    hotel_name: "에코랜드 호텔",
    occupancy: {
      base: 2,
      max: 3,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 320337,
    review: 1807,
    rating: 1,
  },
  {
    hotel_name: "파르나스 호텔 제주",
    occupancy: {
      base: 2,
      max: 2,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 120077,
    review: 1189,
    rating: 2,
  },
  {
    hotel_name: "고창 웰파크시티 힐링카운티",
    occupancy: {
      base: 2,
      max: 2,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 536383,
    review: 1835,
    rating: 2,
  },
  {
    hotel_name: "사우 베이 리조트",
    occupancy: {
      base: 2,
      max: 2,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 378996,
    review: 374,
    rating: 2,
  },
  {
    hotel_name: "알다프와 빌라스",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 560194,
    review: 386,
    rating: 4,
  },
  {
    hotel_name: "Heron's Nest by Sea Scape Properties",
    occupancy: {
      base: 2,
      max: 2,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 535431,
    review: 89,
    rating: 1,
  },
  {
    hotel_name: "Coastal Soul by Sea Scape Properties",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 484260,
    review: 1434,
    rating: 3,
  },
  {
    hotel_name: "Gwangmyeong Hotel Noblesse",
    occupancy: {
      base: 2,
      max: 2,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 586405,
    review: 221,
    rating: 2,
  },
  {
    hotel_name: "Seongnam Je Motel",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 424709,
    review: 868,
    rating: 3,
  },
  {
    hotel_name: "Gumi Indong Zaza",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 348434,
    review: 455,
    rating: 3,
  },
  {
    hotel_name: "Gunsan Clover",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 402013,
    review: 304,
    rating: 3,
  },
  {
    hotel_name: "Haenam Ttohareune Pension",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 324071,
    review: 890,
    rating: 5,
  },
  {
    hotel_name: "Pohang Yeongildae Hotel A1",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 586401,
    review: 133,
    rating: 2,
  },
  {
    hotel_name: "Busan Yeondong-dong Hotel Smith",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 115103,
    review: 1402,
    rating: 3,
  },
  {
    hotel_name: "Busan Guest House Urban",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 313257,
    review: 684,
    rating: 5,
  },
  {
    hotel_name: "Gyeongju Pungdengi Hostel",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 254485,
    review: 136,
    rating: 1,
  },
  {
    hotel_name: "Yeosu Glow Floor Pension",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 358163,
    review: 1947,
    rating: 2,
  },
  {
    hotel_name: "Busan Gwangalli Pico Blue",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 334107,
    review: 1071,
    rating: 2,
  },
  {
    hotel_name: "마이티 트와이스 호텔 드레스덴",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 376780,
    review: 966,
    rating: 5,
  },
  {
    hotel_name: "플라노스 비치",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 256668,
    review: 87,
    rating: 1,
  },
  {
    hotel_name: "아파트먼트 베스나",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 365227,
    review: 263,
    rating: 5,
  },
  {
    hotel_name: "아쿠아비스타 비치 리조트 바이 팬핸들 겟어웨이즈",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 540869,
    review: 1216,
    rating: 3,
  },
  {
    hotel_name: "OYO  시티 호텔, 쿠리치바",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 406810,
    review: 417,
    rating: 2,
  },
  {
    hotel_name: "Busan Gwangalli Hotel Mango",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 396357,
    review: 854,
    rating: 2,
  },
  {
    hotel_name: "OYO  호텔 몬테스, 아틀릭스코",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 352737,
    review: 1234,
    rating: 3,
  },
  {
    hotel_name: "이스트 게이트 부티크 호텔",
    occupancy: {
      base: 2,
      max: 4,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 405544,
    review: 567,
    rating: 5,
  },
];

const Result = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <Layout>
      <Header />
      <div className="-mt-10">
        <SearchBar />
      </div>
      <div className="flex p-10 bg-white">
        <div className="flex-col w-5/12">
          <div
            className="flex h-16 text-base font-medium text-center border rounded cursor-pointer w-72 border-slate-300 bg-zinc-200"
            onClick={() => {
              setIsMapActive(!isMapActive);
            }}
          >
            {isMapActive ? (
              <div className="flex items-center justify-center w-full h-full bg-map">
                <Location />
                지도보기
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full ">
                <LeftArrow />
                목록으로 돌아가기
              </div>
            )}
          </div>
          <Tag />
          <div className="my-6 text-lg font-medium">가격 범위</div>
          <div className="pb-10 border-b-2 border-slate-200">
            <input
              type="range"
              id="price"
              name="price"
              min="0"
              max="99999999"
              defaultValue="Initial value"
              step="10"
              className="accent-[#FF375C] w-10/12"
            />
          </div>
          <Checkbox title="등급" />
          <Checkbox title="리뷰 평가" />
        </div>
        <div className="w-9/12 border-black px-50">
          <div className="relative h-24 bg-white divide-y rounded shadow-md divide-slate-200">
            <Sort />
          </div>
          {isMapActive ? (
            <div className="">
              <div className="flex flex-col items-center justify-center max-w-3xl gap-10 pt-10 mx-auto">
                <VirtualScroll
                  Item={Card}
                  itemList={DUMMY_DATA} // fetch한 length로 변경할 예정
                  itemHeight={300}
                  columnGap={10}
                />
              </div>
            </div>
          ) : (
            <div className="">지도API?</div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Result;
