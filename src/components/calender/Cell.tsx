import React from "react";

type CellType = {
  children: React.ReactNode | React.ReactNode[];
  value: number;
  className: string;
};

const Cell = (props: CellType) => {
  console.log(props.value);
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
};

export default Cell;
