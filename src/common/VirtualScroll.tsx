import React from "react";
import { useWindowScroll, useWindowSize } from "react-use";

type Props = {
  Item: React.ElementType;
  itemList: Array<object>;
  itemCount: number;
  itemHeight: number;
  rowGap?: number;
  columnGap?: number;
  renderAhead?: number;
};

const VirtualScroll = ({
  Item,
  itemList,
  itemCount,
  itemHeight,
  rowGap = 0,
  columnGap = 0,
  renderAhead = 0,
}: Props) => {
  const { height } = useWindowSize();
  const { y } = useWindowScroll();

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [viewportY, setViewportY] = React.useState<number>(0);
  const offsetY = y - viewportY;
  React.useEffect(() => {
    const viewportY = scrollRef.current?.getBoundingClientRect().y ?? 0;
    setViewportY(viewportY);
  }, []);

  // console.log(y, offsetY);
  // issue: 스크롤 내린 다음 새로고침 시 y축이 살아있어 empty box 생성
  // TODO: => scroll to top시키거나 scroll restoration(얘는 이슈 해결 못할 수 있음) 하기

  const containerHeight = (itemHeight + columnGap) * itemCount + columnGap * 2;

  const startIndex = Math.max(
    Math.floor(offsetY / (itemHeight + columnGap)) - renderAhead,
    0
  );

  const endIndex = Math.min(
    Math.ceil(height / (itemHeight + columnGap) + startIndex) + renderAhead,
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
      ref={scrollRef}
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
