import axiosClient from "@aspida/axios";
import axios from "axios";
import api from "../api/$api";

const axiosConfig = { baseURL: "http//localhost:3000" };

export const apiClient = api(axiosClient(axios, axiosConfig));
