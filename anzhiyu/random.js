var posts=["read/2024年度总结—指条明路吧/","read/Pytorch入门-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };