import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";
import { getMonth, add, getDay, format } from "date-fns";
import { dateArray, DayState } from "../store/global";
import { useRecoilState } from "recoil";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const [today, setToday] = useRecoilState(DayState);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={() => hide()} />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText onClick={() => setToday(new Date())}>
              {headerText}
            </HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
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
  fixed
  w-full h-full
  top-0 left-0
  z-50 
`;

export const StyledModal = tw.div`
  z-50  relative mx-auto rounded-md bg-white md:bg-transparent
  w-full h-full max-w-[58.9rem] md:h-fit top-0 bottom-3
`;

export const Header = tw.div`
flex justify-between p-1 bg-white md:bg-transparent
`;

export const HeaderText = tw.div`
text-start md:text-center mx-auto w-full cursor-pointer p-2 text-lg underline-offset-2 overline decoration-2 decoration-mainn tracking-wider font-sans ip:hover:text-main text-gray-700 font-redHat
`;

export const CloseButton = tw.button`
rounded-sm ml-2 md:hidden
  cursor-pointer
`;

export const Content = tw.div`
  overflow-y-auto w-full
  h-full
`;
