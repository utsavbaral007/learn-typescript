import { useState } from "react";

const TickedBooking = () => {
  interface seatData {
    section: string;
    row: number;
    col: number;
  }

  const [selectedSeat, setSelectedSeat] = useState([]);

  const sections = [
    {
      section: "VIP",
      rows: 5,
      seatsPerRow: 5,
    },
    {
      section: "General",
      rows: 6,
      seatsPerRow: 6,
    },
    {
      section: "Economy",
      rows: 8,
      seatsPerRow: 8,
    },
  ];

  let count = 0;

  const selectSeat = (seatData: seatData) => {
    console.log(seatData);
    // count += 1;
    // if (count > 5) {
    //   console.log("You can only select 5 seats");
    // } else {
    //   console.log("select more seats");
    // }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {sections?.map((data, index) => (
          <div key={index} className={`w-[${70 * data.rows}px] text-center`}>
            <h1 className="mb-4 text-2xl">{data.section}</h1>
            <div className="flex items-center flex-wrap gap-4">
              {Array.from({ length: data.rows * data.seatsPerRow })
                .fill(data.seatsPerRow)
                .map((_, i) => (
                  <button className={`py-1 w-[50px] bg-green-500`} key={i}>
                    {(i % data.rows) + 1}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TickedBooking;
