<template>
    <div class="wrapper" ref="wrapper">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>
<script>
// 解决移动端（已支持 PC）各种滚动场景需求
import BScroll from 'better-scroll';

export default {
    name:'Scroller',
    props:{
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1
        });

        this.scroll = scroll;

        // 滑动触发(上拉刷新，下拉加载)
        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        });

        // 滑动停止触发
        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        });
    },
    methods:{
        // 列表滑动
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        }
    }
}
</script>
<style scoped>
.wrapper{ height:100%; }
</style>
