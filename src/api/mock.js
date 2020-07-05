import Mock from 'mockjs';
import position from '@/api/mockServerData/position'
import index_entry from '@/api/mockServerData/index_entry'
import restaurants from '@/api/mockServerData/restaurants'
//配置请求延时

Mock.setup({
    timeout:1000
})


Mock.mock('/api/posi',position)
Mock.mock('/api/index_entry',position)
Mock.mock('/api/restaurants',position)


















// Mock.mock('/api/user',{
//     username:"老陈",
//     age:18,
//     gender:"男",
//     type:'帅'
// })

//@xxx 随机生成
// Mock.mock(/\/api\/user/igs,{
//     username:"老陈",
//     age:18,
//     "mtime":"@datetime",
//     "score|1-800":800,
//     "rank|1-100":100,
//     "nickname":"@cname",
//     "address":"@url",
//     "imgUrl":"@image",
//     "email":"@email"

// })


