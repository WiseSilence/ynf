// import axios from './axios'
import {request} from "./request";

export function getHomeUserJson() {
  return request({
    // url: '/blog/?format=json'
    url: '/users.json'
  })
}

