import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MotorList } from "./app/data";

interface Filters {
  location?: string;
  color?: string;
  brands: string[];
  owners?: string;
  budget?: string;
  transmission?: string;
}

const View: React.FC = () => {
  const motorsData = useSelector((state: any) => state.motor.motorsData);

  const [filteredData, setFilteredData] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState<any[]>([]);

  const [filter, setFilter] = useState<Filters>({
    location: "",
    color: "",
    brands: [],
    owners: "",
    budget: "",
    transmission: "",
  });

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setFilter((prevState) => {
      return { ...prevState, color: value };
    });
    // onSearch(value);
  };

  const handleCheckboxChange = (option: any) => {
    debugger;

    const updatedOptions = filter.brands?.includes(option)
      ? filter.brands.filter((selectedOption) => selectedOption !== option)
      : [...filter?.brands, option];

    setFilter((prevState) => {
      return { ...prevState, brands: updatedOptions };
    });

    // onFilterChange(updatedOptions);
  };

  const handleRadioChange = (option: any) => {
    setFilter((prevState) => {
      return { ...prevState, owners: option };
    });
  };

  const filterDataHandler = () => {
    console.log(filter, filteredData);

    const filteredMotorsData = motorsData.filter((motor: any) => {
      return (
        (filter.location === "" || motor.location === filter.location) &&
        (filter.color === "" || motor.color === filter.color) &&
        (filter.brands.length === 0 || filter.brands.includes(motor.model)) &&
        (filter.owners === "" || motor.noOfOwners === filter.owners) &&
        true
      );
    });

    // Use the filtered data as needed
    setFilteredData(filteredMotorsData);
  };

  useEffect(() => {
    filterDataHandler();
  }, [filter]);

  useEffect(() => {
    setLocationOptions(
      Array.from(
        new Set(
          motorsData
            .map((motor: any) => motor.location)
            .filter((motors: any) => motors.length > 0)
        )
      )
    );
    motorsData && setFilteredData(motorsData);
  }, [motorsData]);

  useEffect(() => {
    const brandsList = MotorList && MotorList.map((motor: any) => motor.name);
    brandsList && setBrandOptions(brandsList);
  }, [MotorList]);

  return (
    <div>
      <div className="filters">
        <div>
          <label htmlFor="location">Select Location:</label>
          <select
            id="location"
            onChange={(e) =>
              setFilter((prevState) => {
                return { ...prevState, location: e.target.value };
              })
            }
          >
            <option value="">-- All Locations --</option>
            {locationOptions.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* Search */}
        <div>
          <label htmlFor="search">Color:</label>
          <input
            type="text"
            id="search"
            value={filter?.color || ""}
            onChange={handleInputChange}
            placeholder="Type to search..."
          />
        </div>
        {/* Brands */}
        <div>
          <label htmlFor="brands">Brand:</label>
          {brandOptions &&
            brandOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={filter.brands?.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
        </div>

        {/* Owner */}
        <div>
          <label htmlFor="owners">Owners:</label>
          {[
            { label: "1st Owner", value: "1" },
            { label: "2nd Owner", value: "2" },
            { label: "3rd Owner", value: "3" },
          ].map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option.value}
                name="ownership"
                value={option.value}
                checked={filter.owners === option.value}
                onChange={() => handleRadioChange(option.value)}
              />
              <label htmlFor={option.label}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        {filteredData.length > 0 &&
          filteredData.map((motor: any) => (
            <div className="motor-data">
              <div>
                <b>Model</b> : {motor.model}
              </div>
              <div>
                <b>Color</b> : {motor.color}
              </div>
              <div>
                <b>Manufacture Year</b> : {motor.year}
              </div>
              <div>
                <b>Insurance</b> : {motor.insurance}
              </div>
              <div>
                <b>Kms</b> : {motor.kms}
              </div>
              <div>
                <b>Location</b> : {motor.location}
              </div>
              <div>
                <b>No of owners</b> : {motor.noOfOwners}
              </div>
              <div>
                <b>Transmission</b> : {motor.transmission}
              </div>
              <div>
                <b>External fitments</b> : {motor.externalFitments}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default View;
