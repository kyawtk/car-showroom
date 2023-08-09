"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BikeInterface } from "@/types";
import CustomButton from "./CustomButton";
import { BikeDetails } from ".";
import { AnimatePresence } from "framer-motion";
export interface BikeCardProps {
  bike: BikeInterface;
}
const BikeCard = ({ bike }: BikeCardProps) => {
  const {
    make,
    model,
    year,
    type,
    engine,
    gearbox,
    wheelbase,
    transmission,
    fuel_capacity,
    starter,
  } = bike;

  const [isOpen ,setIsOpen] = useState(false)
  return (



    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt={bike.model}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full text-gray justify-evenly">
          <div className="flex flex-col justify-center items-center  gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{transmission} </p>
          </div>
          <div className="flex flex-col justify-center items-center  gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">{fuel_capacity} </p>
          </div>
          <div className="flex flex-col justify-center items-center  gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{wheelbase} </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            handleClick={()=>setIsOpen(true)}
            title={"View more"}
            containerStyles="bg-blue-500 w-full rounded-lg text-white"
          ></CustomButton>
        </div>
      </div>
      
        <BikeDetails
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          bike={bike}
        ></BikeDetails>
    
    </div>
  );
};

export default BikeCard;
