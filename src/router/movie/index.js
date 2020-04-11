export default {
    path:'/movie',
    component : () => import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component:()=>import('@/components/ComingSoon')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            // 正在热映
            path:'/movie/detail/1/:movieId',
            // 命名视图
            components :{
                default : ()=>import('@/components/NowPlaying'),
                detail:()=>import('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            // 即将上映
            path:'/movie/detail/2/:movieId',
            // 命名视图
            components :{
                default : ()=>import('@/components/ComingSoon'),
                detail:()=>import('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}