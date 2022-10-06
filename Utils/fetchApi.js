import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {

  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '935d3e0ad4msh0adb6b8eab5c80ap15d702jsncb246441823c',
    }
  });

  return data;
}