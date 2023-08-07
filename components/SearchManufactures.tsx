"use client";
import { manufacturers } from "@/constants";
import { useState } from "react";
import { Fragment } from "react";
import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufactureProps } from "@/types";
import Image from "next/image";
const SearchManufactures = ({
  manufacturer,
  setManufacturer,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState(
    manufacturers[0]
  );

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="search-manufacturer">
      <Combobox value={selectedManufacturer} onChange={setSelectedManufacturer}>
        <div className=" relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  No results found for {query}
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    value={manufacturer}
                    className={"search-manufacturer__option"}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            active ? "font-bold" : "font-normal"
                          }`}
                        >
                          {manufacturer}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufactures;
