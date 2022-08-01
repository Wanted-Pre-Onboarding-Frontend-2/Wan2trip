import React, { ReactNode, useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use";

type Props = {
  Item: React.ElementType;
  itemList: Array<object>; // TODO: Array<object>말고도 다르게 type 지정하는 방법 고민
  itemHeight: number;
  rowGap?: number;
  columnGap?: number;
  renderAhead?: number;
};

// TODO: Padding 추가
const VirtualScroll = ({
  Item,
  itemList,
  itemHeight,
  rowGap = 0,
  columnGap = 0,
  renderAhead = 1,
}: Props) => {
  const itemCount = itemList.length;

  const { width, height } = useWindowSize();
  const { y } = useWindowScroll();

  const containerHeight = (itemHeight + columnGap) * itemCount - columnGap;

  const startIndex = Math.max(
    Math.floor(y / (itemHeight + columnGap)) - renderAhead,
    0
  );

  const endIndex = Math.min(
    Math.floor(height / itemHeight + startIndex) + renderAhead,
    itemCount
  );

  const visibleItem = itemList.slice(
    Math.max(startIndex, 0),
    Math.min(endIndex + 1, itemList.length)
  );

  const translateY = Math.max((itemHeight + columnGap) * startIndex, columnGap);

  return (
    <div
      className="will-change-transform"
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <div style={{ transform: `translateY(${translateY}px)` }}>
        {visibleItem.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VirtualScroll;
