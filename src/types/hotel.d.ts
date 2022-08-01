interface Hotel {
  hotel_name: string;
  occupancy: {
    base: number;
    max: 2 | 3 | 4 | 5 | 6;
  };
  image: string;
  address: string;
  price: number;
  review: number;
  rating: number;
}

type HotelList = Hotel[];

export { Hotel, HotelList };
