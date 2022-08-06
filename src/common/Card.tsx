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
      className="flex justify-between w-full mt-5 mb-5 bg-white rounded-lg h-80 max-w-7xl border-slate-300 drop-shadow-md "
    >
      <div className="w-1/3 h-full">
        <img
          src={IMAGE_URL}
          alt="hotel_image"
          className="w-full h-full bg-cover rounded-l-lg"
        />
      </div>
      <section className="flex flex-col w-full ml-2 mr-6 mt-9 h-1/2">
        <h2 className="text-2xl font-bold">{hotelName}</h2>
        <p className="text-slate-600">{address}</p>
        <div className="mt-3 mb-5 ">
          <span className="font-bold text-slate-600 ">
            총 {review} 건의 리뷰{" "}
          </span>
          <span>
            <Rating rating={rating} />
          </span>
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
