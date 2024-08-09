import axios from "axios";

import { Response } from "./types";

export async function fetchPhotos(
  query: string,
  page: number
): Promise<Response | never> {
  const API_KEY = "RSuD8NjPnNPwk96VN3D55Gw9p6myIuy3DBNlEDRa_mc";

  axios.defaults.baseURL = "https://api.unsplash.com";
  axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

  const response = await axios.get<Response>("/search/photos", {
    params: {
      query,
      per_page: 16,
      page,
      orientation: "landscape",
    },
  });

  return response.data;
}
