import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import dongman from '@/views/modules/dongman/list'
    import dongmanCollection from '@/views/modules/dongmanCollection/list'
    import dongmanLiuyan from '@/views/modules/dongmanLiuyan/list'
    import forum from '@/views/modules/forum/list'
    import guomanzhizui from '@/views/modules/guomanzhizui/list'
    import guomanzhizuiCollection from '@/views/modules/guomanzhizuiCollection/list'
    import guomanzhizuiLiuyan from '@/views/modules/guomanzhizuiLiuyan/list'
    import lishiyange from '@/views/modules/lishiyange/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhishuchang from '@/views/modules/zhishuchang/list'
    import config from '@/views/modules/config/list'
    import dictionaryDongman from '@/views/modules/dictionaryDongman/list'
    import dictionaryDongmanCollection from '@/views/modules/dictionaryDongmanCollection/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGuomanzhizui from '@/views/modules/dictionaryGuomanzhizui/list'
    import dictionaryGuomanzhizuiCollection from '@/views/modules/dictionaryGuomanzhizuiCollection/list'
    import dictionaryLishiyange from '@/views/modules/dictionaryLishiyange/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhishuchang from '@/views/modules/dictionaryZhishuchang/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryDongman',
        name: '国漫先驱类型',
        component: dictionaryDongman
    }
    ,{
        path: '/dictionaryDongmanCollection',
        name: '收藏表类型',
        component: dictionaryDongmanCollection
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGuomanzhizui',
        name: '国漫之最类型',
        component: dictionaryGuomanzhizui
    }
    ,{
        path: '/dictionaryGuomanzhizuiCollection',
        name: '收藏表类型',
        component: dictionaryGuomanzhizuiCollection
    }
    ,{
        path: '/dictionaryLishiyange',
        name: '内容类型',
        component: dictionaryLishiyange
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhishuchang',
        name: '知识类型',
        component: dictionaryZhishuchang
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '动漫类型',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/dongman',
        name: '国漫先驱',
        component: dongman
      }
    ,{
        path: '/dongmanCollection',
        name: '国漫先驱收藏',
        component: dongmanCollection
      }
    ,{
        path: '/dongmanLiuyan',
        name: '国漫先驱留言',
        component: dongmanLiuyan
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/guomanzhizui',
        name: '国漫之最',
        component: guomanzhizui
      }
    ,{
        path: '/guomanzhizuiCollection',
        name: '国漫之最收藏',
        component: guomanzhizuiCollection
      }
    ,{
        path: '/guomanzhizuiLiuyan',
        name: '国漫之最留言',
        component: guomanzhizuiLiuyan
      }
    ,{
        path: '/lishiyange',
        name: '历史沿革',
        component: lishiyange
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhishuchang',
        name: '知识窗',
        component: zhishuchang
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
