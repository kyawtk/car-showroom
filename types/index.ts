import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }


  export interface SearchManufactureProps{
    manufacturer : string;
    setManufacturer : (manufacturer : string) => void;
  }

export interface BikeInterface{
  make: string,
  model: string,
  year: string,
  type: stringstring,
  displacement: string
  engine: string,
  compression: string,
  bore_stroke: string,     
  valves_per_cylinder: string,
  fuel_system: string,
  fuel_control: string, 
  ignition: string,
  lubrication:string,
  cooling: string,
  gearbox: string,
  transmission: string,
  frame: string,
  front_suspension: string,
  front_wheel_travel: string,
  rear_suspension: string ,
  rear_wheel_travel:string,
  front_tire: string,
  rear_tire: string,
  front_brakes: string,
  rear_brakes: string
  dry_weight: string
  seat_height: string,
  total_height: string,
  total_length:string,
  total_width: string,
  ground_clearance: string,
  wheelbase: string,
  fuel_capacity: string      ,
  starter:stringstring,
}
