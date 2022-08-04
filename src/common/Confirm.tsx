import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";
import { getMonth, add, getDay, format } from "date-fns";
import { dateArray, DayState } from "../store/global";
import { useRecoilState } from "recoil";
import { Hotel } from "types/types";
import { Link } from "react-router-dom";

export interface ConfirmProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
  newdata: Hotel;
}

export const Confirm: FunctionComponent<ConfirmProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  newdata,
}) => {
  const Confirm = (
    <React.Fragment>
      <Backdrop onClick={() => hide()} />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>
            <img src={newdata.image} alt="" className="w-56" />
            <div className="flex flex-col justify-between">
              {newdata.hotel_name}
              {modalContent}
            </div>
          </Content>
          <Footer>
            <Link to="/booked">예약 보러가기</Link>
            <button onClick={hide}>좀더 둘러보기</button>
          </Footer>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(Confirm, document.body) : null;
};

export const Wrapper = tw.div`
fixed md:top-[25%] left-0 top-0
  transform duration-200
  transition-all ease-in-out
  z-50
  w-full
  h-full
  outline-none 
`;

export const Backdrop = tw.div`
  fixed bg-slate-200 opacity-50
  w-full h-full
  top-0 left-0
  z-50 
`;

export const StyledModal = tw.div`
  z-50  relative mx-auto rounded-md bg-white md:bg-transparent
  w-full h-full max-w-[58.9rem] md:h-fit top-0 bottom-3 
`;

export const Header = tw.div`
flex justify-between p-1 bg-main
`;

export const HeaderText = tw.div`
text-start md:text-center mx-auto w-full cursor-pointer p-2 text-lg tracking-wider text-gray-700 font-redHat
`;

export const CloseButton = tw.button`
rounded-sm cursor-pointer mr-2
`;

export const Content = tw.div`
  overflow-y-auto w-full bg-white flex flex-col md:flex-row items-center
  h-[80%] min-h-max
`;

export const HotelData = tw.div`
bg-white
`;

export const Footer = tw.div`
bg-white flex justify-center gap-4 md:-mt-10 md:absolute md:right-5
`;
