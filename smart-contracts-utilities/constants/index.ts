import dotenv from "dotenv";
dotenv.config();

export const GOERLI_URL = process.env.GOERLI_URL;
export const MUMBAI_URL = process.env.MUMBAI_URL;
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
export const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;
