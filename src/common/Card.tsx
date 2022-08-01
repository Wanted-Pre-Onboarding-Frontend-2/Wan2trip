import React from "react";
import { Hotel } from "types/hotel";

// TODO: Card는 모바일일 때 height가 더 큼
// 1. 브라우저 크기에 따라 px 계산 (ResizeObserver 이용)
//    - Card 바깥에 계산 hook 정의 후 사용
//    - Result 페이지에서 해당 함수를 import해서 Virtual scroll에서 Card height 전달받게 구현
// 2. Virtual Scroll Dynamic height 설정
const Card = ({ item }: { item: Hotel }) => {
  return (
    <>
      <div
        className="w-full bg-red-300"
        style={{
          height: "300px",
          padding: "10px",
        }}
      >
        {JSON.stringify(item)}
      </div>
    </>
  );
};

export default Card;
