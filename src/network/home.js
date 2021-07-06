// import axios from './axios'
import {request} from "./request";

export function getHomeBlog() {
  return request({
    url: '/blog/?format=json'
  })
}

export function getHomeUsersJson() {
  return request({
    url: '/users.json'
  })
}

