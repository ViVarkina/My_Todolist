import * as axios from "axios";
import {BASE_URL} from "./constans.ts";

export const apiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
})
