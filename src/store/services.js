import axios from "axios"
const newConnectorsdsd = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/15313/storyboard/14686/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
