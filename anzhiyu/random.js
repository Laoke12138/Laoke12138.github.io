var posts=["read/请回答，我的2024/","read/Pytorch入门-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };