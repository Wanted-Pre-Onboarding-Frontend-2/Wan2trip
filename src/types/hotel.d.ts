interface Hotel {
  hotel_name: string;
  occupancy: {
    base: number;
    max: number;
  };
  image: string;
  address: string;
  price: number;
  review: number;
  rating: number;
}

type HotelList = Hotel[];

export { Hotel, HotelList };
