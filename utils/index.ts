import axios from 'axios';



export async function getMotorcycles() {
    const  headers = {
        'X-RapidAPI-Key': 'd98721bc8amshd6cd8182202e57ap1c4c96jsnc4d53bc20925',
        'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
      }

      const url ='https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=kawasaki'
      const response = await axios.get(url, {headers})
      return response.data
    }
