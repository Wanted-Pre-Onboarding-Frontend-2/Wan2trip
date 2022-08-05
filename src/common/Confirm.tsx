import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";

import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IsBookingButton } from "store/global";

export interface ConfirmProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Confirm: FunctionComponent<ConfirmProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const isBookingButton = useRecoilValue(IsBookingButton);
  const Confirm = (
    <React.Fragment>
      <Backdrop onClick={() => hide()} />
      <Wrapper>
        <StyledModal>
          <Content>
            {modalContent}
            {isBookingButton ? (
              <Footer>
                <Link to="/booked" className="">
                  <button className="flex items-center justify-center pr-10 font-bold text-center border-r h-14 w-36">
                    이동
                  </button>
                </Link>
                <button
                  onClick={hide}
                  className="flex items-center justify-center w-32 font-bold text-center h-14 pl-7"
                >
                  취소
                </button>
              </Footer>
            ) : (
              <Footer>
                <button
                  onClick={() => {
                    location.reload();
                  }}
                  className="flex items-center justify-center pr-10 font-bold text-center border-r h-14 w-36"
                >
                  삭제
                </button>
                <div
                  onClick={hide}
                  className="flex items-center justify-center w-32 font-bold text-center h-14 pl-7"
                >
                  <button>취소</button>
                </div>
              </Footer>
            )}
          </Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(Confirm, document.body) : null;
};

export const Wrapper = tw.div`
fixed top-[25%] left-0 
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
