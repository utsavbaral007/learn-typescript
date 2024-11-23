import { useState } from "react";

const MultipleDropdown = () => {
  let countries = [
    {
      name: "Nepal",
      code: "NP",
      cities: ["Kathmandu", "Bharatpur"],
    },
    {
      name: "India",
      code: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "England",
      code: "UK",
      cities: ["Manchester", "London"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>("NP");

  return (
    <div>
      <select
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="border-2 outline-none border-gray-400 px-2 py-1 rounded-lg me-2"
      >
        {countries?.map((data, index) => (
          <option key={index} value={data.code}>
            {data.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="border-2 outline-none border-gray-400 px-2 py-1 rounded-lg"
      >
        {countries
          .filter((data) => data.code === selectedCountry)[0]
          .cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default MultipleDropdown;
