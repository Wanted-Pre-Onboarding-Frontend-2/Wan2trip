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
          {/* <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header> */}
          <Content>
            <div className="pt-10 border-b w-full pb-5 justify-center items-center flex flex-col text-center">
              <p className="text-2xl">{newdata.hotel_name}</p>
              <p className="text-gray-400">{newdata.address}</p>
              {modalContent}
            </div>
            <Footer>
              <div className="h-14 border-r w-36 flex justify-center items-center text-center pr-10 font-bold">
                <Link to="/booked" className="">
                  이동
                </Link>
              </div>
              <div
                onClick={hide}
                className="h-14  w-32 flex justify-center items-center text-center pl-7 font-bold"
              >
                <button>취소</button>
              </div>
            </Footer>
          </Content>
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
  w-full max-w-[58.9rem] h-fit top-0 bottom-3 
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
  overflow-y-auto w-full bg-white flex flex-col items-center
  h-[80%] min-h-max max-w-sm mx-auto border border-main rounded-md 
`;

export const HotelData = tw.div`
bg-white
`;

export const Footer = tw.div`
bg-white flex justify-center gap-4 max-w-lg mx-auto
`;
