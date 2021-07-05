// import axios from './axios'
import {request} from "./request";

export function getHomeBlog() {
  return request({
    url: '/blog/?format=json'
    // url: '/users.json'
  })
}

