import axios, { AxiosResponse, AxiosStatic } from "axios";
import { Story } from "./interfaces/story";

export default class HttpRequest {
    public axios: AxiosStatic = axios;

    async getData(url: string, Cookie: string): Promise<AxiosResponse<Story>> {
        return this.axios.get<Story>(url, {
            headers: {
                authority: "i.instagram.com",
                accept: "*/*",
                "accept-language": "th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7",
                origin: "https://www.instagram.com",
                referer: "https://www.instagram.com/",
                "sec-ch-ua":
                    '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
                "x-asbd-id": "198387",
                "x-ig-app-id": "936619743392459",
                Cookie,
            },
        });
    }
}
