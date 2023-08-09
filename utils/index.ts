import axios from "axios";
import { BikeInterface } from "@/types";
export async function getMotorcycles() {
  const headers = {
    "X-RapidAPI-Key": "d98721bc8amshd6cd8182202e57ap1c4c96jsnc4d53bc20925",
    "X-RapidAPI-Host": "motorcycles-by-api-ninjas.p.rapidapi.com",
  };

  const url =
    "https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=kawasaki";
  const response = await axios.get(url, { headers });
  return response.data;
}

export const generateBikeImageUrl = async (bike) => {
  const url =
    `https://motorcycle-specs-database.p.rapidapi.com/article/${bike.year}/${bike.make}/${bike.model}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d98721bc8amshd6cd8182202e57ap1c4c96jsnc4d53bc20925",
      "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json()
    console.log(result.articleCompleteInfo.articleID)
    const imgresponse = await fetch(`https://motorcycle-specs-database.p.rapidapi.com/article/${articleID}/image/link`)
    const data = await imgresponse.json()
    return data.link

  } catch (error) {
    console.error(error);
  }
};
