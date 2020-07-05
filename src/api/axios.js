import axios from 'axios';
import config from '@/config';
const baseUrl=process.env.NODE_ENV==='development'?config.baseUrl.dev : config.baseUrl.pro

console.log("baseUrl",baseUrl,process.env.NODE_ENV)
class HttpRequest{
    constructor(baseUrl){
        this.baseUrl=baseUrl;
        this.queue={};
    }

    getInsideConfig(){
        const config={
            baseURL:this.baseUrl,
            header:{

            }
        }
        return config
    }

    interceptors(instance){
        instance.interceptors.request.use((config)=>{
            console.log("拦截请求处理")
            console.log("config",config)
            config.data={
                msg:"helloworld"
            }
          return config;
        })
        instance.interceptors.response.use((res)=>{
            console.log("处理响应")
            console.log("RES",res)
            return res
        },(error)=>{
           console.log(error)
           return {error:'网络出错！'}
        })
    }
    request(options){
        const instance =axios.create();
        options=Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}

const axiosObj =new HttpRequest(baseUrl)
export default axiosObj