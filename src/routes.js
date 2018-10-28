import BlogGet from './Pages/Blogget.vue'
import BlogSingle from './Pages/Blogsingle.vue'
import BlogPost from './Pages/Blogpost.vue'
import Material from './Pages/Material.vue'

export default [

  {
    path: '/list',
    component: BlogGet
  },
  {
    path: '/list/:id',
    component: BlogSingle
  },
  {
    path: '/post',
    component: BlogPost
  },
  {
    path: '/material',
    component: Material
  }

]
