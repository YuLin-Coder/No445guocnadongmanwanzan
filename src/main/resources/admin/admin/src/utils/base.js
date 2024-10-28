const base = {
    get() {
        return {
            url : "http://localhost:8080/guocnadongmanwanzan/",
            name: "guocnadongmanwanzan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/guocnadongmanwanzan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "国产动漫网站"
        } 
    }
}
export default base
