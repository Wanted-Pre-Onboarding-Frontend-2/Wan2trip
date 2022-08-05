import tw from "tailwind-styled-components";
import { Hotel } from "types/types";
import Card from "common/Card";
import Noreserve from "../../static/image/Noreserve.png";
import VirtualScroll from "common/VirtualScroll";
import { uid } from "react-uid";
import Spinner from "../../static/icons/spinner.png";

type Props = {
  hotel: Hotel[];
  isLoading: boolean;
};

const BookedWeb = ({ hotel, isLoading }: Props) => {
  return (
    <BookedWebContainer>
      <BookedWebAside />
      <BookedWebContent hotel={hotel} isLoading={isLoading} />
    </BookedWebContainer>
  );
};

const BookedWebContainer = tw.div`flex h-full`;

const BookedWebAside = () => {
  return (
    <div className="flex flex-col w-1/4 h-40 py-2 bg-white rounded cursor-pointer">
      <div className="flex items-center w-full h-1/3 border-l-4 border-[#FF375C] bg-[#FEEEF1] pl-6 ">
        예정된 예약
      </div>
    </div>
  );
};

const BookedWebContent = ({ hotel, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-3/4 py-2 ml-4 bg-white h-[60vh]">
        <div className="flex flex-col items-center text-center">
          <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      {!!hotel.length && (
        <div className="flex items-center justify-center w-full py-2 ml-4 bg-white">
          <VirtualScroll itemHeight={20} columnGap={0.625} renderAhead={5}>
            {hotel.map((hotel, index) => (
              <Card key={uid(index)} data={hotel} isBooked={true} />
            ))}
          </VirtualScroll>
        </div>
      )}
      {!!hotel.length || (
        <div className="flex items-center justify-center w-3/4 py-2 ml-4 bg-white h-[60vh]">
          <div className="flex flex-col items-center text-center">
            <img src={Noreserve} className="w-20 mb-5" />
            아직 준비된 예약이 없어요. <br />
            함께 새로운 스테이를 찾아봐요.
          </div>
        </div>
      )}
    </>
  );
};

export default BookedWeb;
