import axios from '@/api/axios';

export const getBannerData=()=>{
    return axios.request({
        url:"banner",
        method:'get'
    })
}

export const getUserData=()=>{
    return axios.request({
        url:"user",
        method:'get'
    })
}

export const getPosiData=()=>{
    return axios.request({
        url:"posi",
        method:'get'
    })
}