import { Hotel } from "types/types";
import { priceToString } from "../utils/priceToString";
import BookingButton from "../components/bookedList/BookingButton";
import Rating from "./Rating";
import { useRecoilValue } from "recoil";
import { HideCard } from "store/global";

interface PropsType {
  data: Hotel;
  isBooked: boolean;
}

const IMAGE_URL =
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";

const BookedHotels: Hotel[] = [];

const Card = ({ data, isBooked }: PropsType) => {
  const {
    hotel_name: hotelName,
    address,
    rating,
    review,
    occupancyBase,
    occupancyMax,
    price,
  } = data;

  return (
    <div
      key={hotelName}
      className="flex justify-between w-full h-80 bg-white mt-5 mb-5 rounded-lg max-w-7xl  border-slate-300 drop-shadow-md "
    >
      <div className="w-1/3 h-full">
        <img
          src={IMAGE_URL}
          alt="hotel_image"
          className="bg-cover rounded-l-lg w-full h-full"
        />
      </div>
      <section className="flex flex-col flex-1  justify-between p-5">
        <div>
          <h2 className="text-lg font-bold">{hotelName}</h2>
          <p className="text-slate-600 text-sm">{address}</p>
          <div className="mb-5">
            <span className="font-bold text-slate-600 text-xs ">
              총 {review} 건의 리뷰{" "}
            </span>
            <span className="ml-2">
              <Rating rating={rating} />
            </span>
            {/* <span>평점: {rating} / 5 </span> */}
          </div>

          <p className="text-sm">기본 인원 {occupancyBase}</p>
          <p className="text-sm">최대 인원 {occupancyMax}</p>
        </div>
        <div className="self-end m-0 mt-3 text-2xl text-end">
          <p className="font-bold ">{priceToString(price)} 원</p>
          <p className="text-xs text-slate-400">세금 및 수수료 불포함</p>
          <BookingButton newData={data} isBooked={isBooked} />
        </div>
      </section>
    </div>
  );
};

export default Card;
