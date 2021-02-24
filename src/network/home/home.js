import {requestInstance} from "@/network/request";

export function getHomeData(){
  return requestInstance({
    url:"/index"
  })
}

