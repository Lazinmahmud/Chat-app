document.querySelector('.user-chat').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'block';
  document.querySelector('.main-ui').style.display = 'none';
});


document.getElementById('chatBack').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'none';
  document.querySelector('.main-ui').style.display = 'block';
});

