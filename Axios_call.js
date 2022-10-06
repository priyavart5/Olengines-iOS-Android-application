import axios from "axios";

const BASE_URL = "http://localhost:20003/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTdiNjA5YzFhZTllMzA3M2VkNzBjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDM3Mjc3MSwiZXhwIjoxNjUwNjMxOTcxfQ.RTb-66wiHXmoelRD0QTuLAof1Zk3M_54Rq3VYmjzOpY";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    Headers: {token:`JWT ${TOKEN}`}
});