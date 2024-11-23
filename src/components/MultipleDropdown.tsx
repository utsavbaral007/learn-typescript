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

  const filteredCities = countries.filter(
    (data) => data.code === selectedCountry
  );

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
        {filteredCities?.map((data, _) =>
          data.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default MultipleDropdown;
