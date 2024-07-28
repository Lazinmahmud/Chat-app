document.querySelector('.user-chat').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'block';
  document.querySelector('.main-ui').style.display = 'none';
});

document.getElementById('chatBack').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'none';
  document.querySelector('.main-ui').style.display = 'block';
});





document.getElementById('chatCard-close').addEventListener('click', function() {
    const bg = document.querySelector('.new-chat-card');
    const opacityBg = document.querySelector('.opachity-bg');

    bg.style.transform = 'scale(0)';
    bg.style.opacity = '0';
    setTimeout(() => {
        bg.style.display = 'none';
        opacityBg.style.display = 'none'; // Add this line
    }, 300);
});

        document.querySelector('.action-btn').addEventListener('click', function() {
            const bg = document.querySelector('.new-chat-card');
            document.querySelector('.opachity-bg').style.display = 'flex'
            bg.style.display = 'block';
            setTimeout(() => {
                bg.style.transform = 'scale(1)';
                bg.style.opacity = '1';
            }, 10);
        });
        
        
        
        
        
document.querySelector('.header-menu').addEventListener('click', function() {
       document.querySelector('.side-menu-opachity').style.display = 'block'
       document.querySelector('.side-menu-opachity').style.opacity = '1'
       setTimeout(() => {
       document.querySelector('.side-menu').style.marginLeft = '0'
   }, 2);
});

document.querySelector('.side-menu-opachity').addEventListener('click', function() {
       document.querySelector('.side-menu').style.marginLeft = '-100%'
       
       setTimeout(() => {
       document.querySelector('.side-menu-opachity').style.display = 'none'
       document.querySelector('.side-menu-opachity').style.opacity = '1'
   }, 290);
});
