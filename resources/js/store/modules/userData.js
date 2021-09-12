import axios from "axios";

//state list
const state = {
    message:'welcome to dashboard',
    user: {},

}

//get state
const getters = {
    get_message: state=> state.message,
    get_user: state=> state.user,
}

//action
const actions ={
   /* fetch_blog_details: function(state,blog){
        this.commit('set_blog_details',blog);
        this.commit('set_comments',blog.id);
    },
    post_blog_comment: function(state, comment){
        comment.blog_id = this.state.blog.blog_details.id;
        this.commit('set_post_comment',comment);
        this.commit('set_comments',comment.blog_id);

    } */


}
//mutation
const mutations ={
     set_user: function(state,data){
       state.user = data;
    },

}
export default{
    state,
    getters,
    actions,
    mutations
}
