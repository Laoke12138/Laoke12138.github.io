var posts=["read/这是一篇新的博文/","read/新文章/","read/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };