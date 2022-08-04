import { Hotel } from "types/types";
import { uid } from "react-uid";
import Noreserve from "../../static/image/Noreserve.png";
import Card from "common/Card";
import VirtualScroll from "common/VirtualScroll";
import Spinner from "../../static/icons/spinner.png";

type Props = {
  hotel: Hotel[];
  isLoading: boolean;
};

const BookedMobile = ({ hotel, isLoading }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-center w-full h-16 py-2 bg-white border-b-4 border-slate-200">
          예약된 내역
        </div>
        <div className="flex w-full h-16 py-2 bg-white rounded cursor-pointer text-slate-500">
          <div className="flex items-center justify-center w-1/3 border-b-2 border-black">
            예정된 예약
          </div>
          <div className="flex justify-center items-center w-1/3  bl-[#FF375C]">
            취소된 예약
          </div>
          <div className="flex justify-center items-center w-1/3  bl-[#FF375C]">
            투숙 완료
          </div>
        </div>
        <BookedMobileContent hotel={hotel} isLoading={isLoading} />
      </div>
    </>
  );
};

const BookedMobileContent = ({ hotel, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full py-2 bg-white h-[60vh]">
        <div className="flex flex-col items-center text-center">
          <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      {!!hotel.length && (
        <div className="flex items-center justify-center w-full py-2 bg-white">
          <VirtualScroll itemHeight={20} columnGap={0.625}>
            {hotel.map((hotel, index) => (
              <Card key={uid(index)} data={hotel} isBooked={true} />
            ))}
          </VirtualScroll>
        </div>
      )}
      {!!hotel.length || (
        <div className="flex items-center justify-center w-full py-2 bg-white h-[60vh]">
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

export default BookedMobile;
