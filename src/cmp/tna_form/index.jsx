import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Select } from "antd";

const processesList = [
  "Dyeing",
  "Shiffly",
  "Printing",
  "Embroidery",
  "Washing",
  "Finishing",
];

const accessoriesList = [
  "Button",
  "Zipper",
  "Hook",
  "Elastic",
  "Ribbon",
  "Lace",
];

const fabricNamesList = [
  "Cotton",
  "Polyester",
  "Silk",
  "Wool",
  "Nylon",
  "Linen",
];

const trimsList = ["Label", "Tag", "Hook", "Wash Care"];
const select = [
  "Purchase",
  "Submissions",
  "Fob",
  "Bulk",
  "Trims Acessories",
  "Buyer Approvels",
  "Fit",
  "Pp",
  "Top Web Dates",
  "Fabric audit dates",
  "Production time",
  "Inspection",
  "Intial",
  "Mid",
  "Final",
];
const DynamicFabricForm = () => {
  const [fabrics, setFabrics] = useState([{ name: "", id: Date.now() }]);
  const [usage, setUsage] = useState([{ value: "", unit: "meter" }]);
  const [fabricProcesses, setFabricProcesses] = useState([[]]);
  const [fabricColors, setFabricColors] = useState([[]]);
  const [accessories, setAccessories] = useState([
    { name: "", id: Date.now() },
  ]);
  const [trims, setTrims] = useState([{ name: "", id: Date.now() }]);
  const [orderDate, setOrderDate] = useState("");
  const [shipDate, setShipDate] = useState("");
  const [machinesAvailable, setMachinesAvailable] = useState("");

  const handleAccessoryChange = (index, event) => {
    const newAccessories = accessories.map((accessory, i) => {
      if (i === index) {
        return { ...accessory, name: event.target.value };
      }
      return accessory;
    });
    setAccessories(newAccessories);
  };

  const handleTrimChange = (index, event) => {
    const newTrims = trims.map((trim, i) => {
      if (i === index) {
        return { ...trim, name: event.target.value };
      }
      return trim;
    });
    setTrims(newTrims);
  };

  const addAccessoryField = () => {
    setAccessories([...accessories, { name: "", id: Date.now() }]);
  };

  const addTrimField = () => {
    setTrims([...trims, { name: "", id: Date.now() }]);
  };

  const handleFabricChange = (index, event) => {
    const newFabrics = fabrics.map((fabric, fabricIndex) => {
      if (fabricIndex === index) {
        return { ...fabric, name: event.target.value };
      }
      return fabric;
    });
    setFabrics(newFabrics);
  };

  const addFabricField = () => {
    setFabrics([...fabrics, { name: "", id: Date.now() }]);
    setUsage([...usage, { value: "", unit: "meter" }]);
    setFabricProcesses([...fabricProcesses, []]);
    setFabricColors([...fabricColors, []]);
  };

  const handleUsageChange = (index, event) => {
    const newUsage = usage.map((use, useIndex) => {
      if (useIndex === index) {
        return { ...use, value: event.target.value };
      }
      return use;
    });
    setUsage(newUsage);
  };

  const handleUnitChange = (index, unit) => {
    const newUsage = usage.map((use, useIndex) => {
      if (useIndex === index) {
        return { ...use, unit };
      }
      return use;
    });
    setUsage(newUsage);
  };

  const handleProcessChange = (fabricIndex, processIndex, event) => {
    const newFabricProcesses = fabricProcesses.map((processes, i) => {
      if (i === fabricIndex) {
        const newProcesses = processes.map((process, j) => {
          if (j === processIndex) {
            return event.target.value;
          }
          return process;
        });
        return newProcesses;
      }
      return processes;
    });
    setFabricProcesses(newFabricProcesses);
  };

  const addProcessField = (index) => {
    const newFabricProcesses = fabricProcesses.map((processes, i) => {
      if (i === index) {
        return [...processes, ""];
      }
      return processes;
    });
    setFabricProcesses(newFabricProcesses);
  };

  const handleColorChange = (fabricIndex, colorIndex, event) => {
    const newFabricColors = fabricColors.map((colors, i) => {
      if (i === fabricIndex) {
        const newColors = colors.map((color, j) => {
          if (j === colorIndex) {
            return { ...color, name: event.target.value };
          }
          return color;
        });
        return newColors;
      }
      return colors;
    });
    setFabricColors(newFabricColors);
  };

  const handleQuantityChange = (fabricIndex, colorIndex, event) => {
    const newFabricColors = fabricColors.map((colors, i) => {
      if (i === fabricIndex) {
        const newColors = colors.map((color, j) => {
          if (j === colorIndex) {
            return { ...color, quantity: event.target.value };
          }
          return color;
        });
        return newColors;
      }
      return colors;
    });
    setFabricColors(newFabricColors);
  };

  const addColorField = (index) => {
    const newFabricColors = fabricColors.map((colors, i) => {
      if (i === index) {
        return [...colors, { name: "", quantity: "" }];
      }
      return colors;
    });
    setFabricColors(newFabricColors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine fabric, usage, processes, and colors into a single array of objects
    const fabricDetails = fabrics.map((fabric, index) => ({
      name: fabric.name,
      usage: usage[index],
      processes: fabricProcesses[index],
      colors: fabricColors[index],
    }));

    // Now you can log everything together, including fabrics with their related details
    console.log({
      orderDate,
      shipDate,
      machinesAvailable,
      fabricDetails, // Contains the fabric-related information grouped together
      accessories,
      trims,
    });
  };

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const options = select.map((process) => ({
    label: process,
    value: process,
  }));

  
  return (
    <div className="max-w-7xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 font-serif">
        T & A Garments Production Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Order and Shipping Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <label className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold font-serif">
              Order Received Date:
            </span>
            <input
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              required
              className="border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold font-serif">
              Shipping Date:
            </span>
            <input
              type="date"
              value={shipDate}
              onChange={(e) => setShipDate(e.target.value)}
              required
              className="border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>
        </div>

        {/* Production per Machine */}
        <label className="flex flex-col">
          <span className="text-lg md:text-xl font-semibold font-serif">
            Production per Machine per day:
          </span>
          <input
            type="number"
            value={machinesAvailable}
            onChange={(e) => setMachinesAvailable(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </label>

        {/* Fabrics Section */}
        {fabrics.map((fabric, fabricIndex) => (
          <div key={fabric.id} className="border-t border-gray-200 pt-4">
            <label className="text-lg md:text-xl font-semibold font-serif mb-2">
              Select Fabric:
              <select
                value={fabric.name}
                onChange={(e) => handleFabricChange(fabricIndex, e)}
                required
                className="block w-full border border-gray-300 rounded p-2 mt-1"
              >
                <option value="">Choose Fabric</option>
                {fabricNamesList.map((fabricName) => (
                  <option key={fabricName} value={fabricName}>
                    {fabricName}
                  </option>
                ))}
              </select>
            </label>

            <div className="space-y-4 mt-4">
              {/* Fabric Usage */}
              <div>
                <span className="text-lg md:text-xl font-semibold font-serif">
                  Fabric Required for making a single piece of Garments (in{" "}
                  {usage[fabricIndex]?.unit || "meter"}):
                </span>
                <div className="mt-2 flex flex-col md:flex-row space-y-2 md:space-x-4 items-center">
                  <input
                    type="number"
                    value={usage[fabricIndex]?.value || ""}
                    onChange={(e) => handleUsageChange(fabricIndex, e)}
                    required
                    className="border border-gray-300 rounded p-2 w-full md:w-32"
                  />
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`unit-${fabricIndex}`}
                        value="meter"
                        checked={usage[fabricIndex]?.unit === "meter"}
                        onChange={() => handleUnitChange(fabricIndex, "meter")}
                      />
                      <span className="text-lg md:text-xl font-semibold font-serif">
                        Meter
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`unit-${fabricIndex}`}
                        value="kg"
                        checked={usage[fabricIndex]?.unit === "kg"}
                        onChange={() => handleUnitChange(fabricIndex, "kg")}
                      />
                      <span className="text-lg md:text-xl font-semibold font-serif">
                        Kg
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Fabric Processes */}
              <div>
                <span className="text-lg md:text-xl font-semibold font-serif">
                  Processes:
                </span>
                {fabricProcesses[fabricIndex].map((process, processIndex) => (
                  <div key={processIndex} className="mt-2">
                    <select
                      value={process}
                      onChange={(e) =>
                        handleProcessChange(fabricIndex, processIndex, e)
                      }
                      required
                      className="border border-gray-300 rounded p-2 mt-1 w-full"
                    >
                      <option value="">Choose Process</option>
                      {processesList.map((process) => (
                        <option key={process} value={process}>
                          {process}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addProcessField(fabricIndex)}
                  className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded w-full md:w-48 text-lg md:text-xl font-semibold font-serif"
                >
                  Add Process <i className="ri-add-circle-line"></i>
                </button>
              </div>

              {/* Fabric Colors */}
              <div>
                <span className="text-lg md:text-xl font-semibold font-serif">
                  Colors:
                </span>
                {fabricColors[fabricIndex].map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="mt-2 flex flex-col md:flex-row space-y-2 md:space-x-4 items-center"
                  >
                    <input
                      type="text"
                      value={color.name}
                      onChange={(e) =>
                        handleColorChange(fabricIndex, colorIndex, e)
                      }
                      placeholder="Color"
                      required
                      className="border border-gray-300 rounded p-2 w-full md:w-auto"
                    />
                    <input
                      type="number"
                      value={color.quantity}
                      onChange={(e) =>
                        handleQuantityChange(fabricIndex, colorIndex, e)
                      }
                      placeholder="Quantity"
                      required
                      className="border border-gray-300 rounded p-2 w-full md:w-24"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addColorField(fabricIndex)}
                  className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded w-full md:w-48 text-lg md:text-xl font-semibold font-serif"
                >
                  Add Color <i className="ri-add-circle-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Stage to be Skipped */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold font-serif">
            Stage to be Skipped
          </h1>
          <Select
            mode="tags"
            style={{ width: "100%", height: "50px" }}
            placeholder="Tags Mode"
            onChange={handleChange}
            options={options}
            className="text-lg md:text-xl font-semibold font-serif uppercase"
          />
        </div>

        {/* Add More Fabrics */}
        <button
          type="button"
          onClick={addFabricField}
          className="bg-cyan-500 text-white px-4 py-2 rounded w-full text-lg md:text-2xl font-semibold font-serif"
        >
          Add More Fabrics <i className="ri-add-circle-line"></i>
        </button>

        {/* Accessories Section */}
        <div className="mt-8 space-y-4">
          <div>
            <span className="text-lg md:text-xl font-semibold font-serif">
              Accessories:
            </span>
            {accessories.map((accessory, accessoryIndex) => (
              <div key={accessory.id} className="mt-2">
                <select
                  value={accessory.name}
                  onChange={(e) => handleAccessoryChange(accessoryIndex, e)}
                  required
                  className="border border-gray-300 rounded p-2 mt-1 text-lg md:text-xl font-semibold font-serif"
                >
                  <option value="">Choose Accessory</option>
                  {accessoriesList.map((accessoryName) => (
                    <option key={accessoryName} value={accessoryName}>
                      {accessoryName}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              type="button"
              onClick={addAccessoryField}
              className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded w-full md:w-56 text-lg md:text-xl font-semibold font-serif"
            >
              Add Accessory <i className="ri-add-circle-line"></i>
            </button>
          </div>

          {/* Trims Section */}
          <div>
            <span className="text-lg md:text-xl font-semibold font-serif">
              Trims Use In Garments:
            </span>
            {trims.map((trim, trimIndex) => (
              <div key={trim.id} className="mt-2">
                <select
                  value={trim.name}
                  onChange={(e) => handleTrimChange(trimIndex, e)}
                  required
                  className="border border-gray-300 rounded p-2 mt-1 text-lg md:text-xl font-semibold font-serif"
                >
                  <option value="">Choose Trim</option>
                  {trimsList.map((trimName) => (
                    <option key={trimName} value={trimName}>
                      {trimName}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              type="button"
              onClick={addTrimField}
              className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded w-full md:w-56 text-lg md:text-xl font-semibold font-serif"
            >
              Add Trim <i className="ri-add-circle-line"></i>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded mt-4 text-lg md:text-2xl font-semibold font-serif uppercase"
        >
          Submit{" "}
          <span className="text-xl font-semibold ml-2 ">
            <i className="ri-send-plane-fill text-3xl"></i>
          </span>
        </button>
      </form>
      {/* Back to Home Page Code */}
      <div className=" flex justify-center mt-4">
        <button
          class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p class="translate-x-2 font-serif"><a href="tna_form">GO BACK HOME</a></p>
        </button>
      </div>
    </div>
  );
};

export default DynamicFabricForm;
