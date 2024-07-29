document.querySelector('.user-chat').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'block';
  document.querySelector('.main-ui').style.display = 'none';
});

document.getElementById('chatBack').addEventListener('click', function(){
  
  document.querySelector('.chat-page').style.display = 'none';
  document.querySelector('.main-ui').style.display = 'block';
});





document.getElementById('chatCard-close').addEventListener('click', function() {
    document.querySelector('.new-chat-card').style.top = '100%';
    document.getElementById('phoneInput').value = "";
    phoneInput.classList.remove('valid');
});

        document.querySelector('.action-btn').addEventListener('click', function() {
            document.querySelector('.new-chat-card').style.top = '0';
            
            
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


// input fild validation
const phoneInput = document.getElementById('phoneInput');
const requiredNumber = document.getElementById('requiredNumber');
const saveButton = document.getElementById('saveButton');

function validatePhoneNumber() {
    const phoneNumber = phoneInput.value.trim();

    if (phoneNumber === '') {
        phoneInput.classList.add('error'); // Add error class for red border
        phoneInput.classList.remove('valid'); // Remove valid class
        requiredNumber.style.display = 'block'; // Show error message
        requiredNumber.textContent = 'Phone number is required'; // Set default error message
        requiredNumber.style.color = 'red'; // Set error message color to red
        phoneInput.focus(); // Focus on input field
    } else if (phoneNumber.length < 11) {
        phoneInput.classList.add('error'); // Add error class for red border
        phoneInput.classList.remove('valid'); // Remove valid class
        requiredNumber.style.display = 'block'; // Show error message
        requiredNumber.textContent = 'Invalid number'; // Set invalid number message
        requiredNumber.style.color = 'red'; // Set error message color to red
        phoneInput.focus(); // Focus on input field
    } else {
        phoneInput.classList.remove('error'); // Remove error class
        phoneInput.classList.add('valid'); // Add valid class for green border
        requiredNumber.style.display = 'block'; // Show success message
        requiredNumber.textContent = 'Number completed'; // Set number completed message
        requiredNumber.style.color = 'green'; // Set success message color to green
    }
}

phoneInput.addEventListener('input', function () {
    const phoneNumber = phoneInput.value.trim();
    
    // Limit input to maximum 11 digits
    if (phoneNumber.length > 11) {
        phoneInput.value = phoneNumber.slice(0, 11);
    }
    
    if (phoneInput.value.length === 11) {
        phoneInput.classList.add('valid'); // Add valid class for green border
        phoneInput.classList.remove('error'); // Remove error class
        requiredNumber.style.display = 'block'; // Show success message
        requiredNumber.textContent = 'Number completed'; // Set number completed message
        requiredNumber.style.color = 'green'; // Set success message color to green
    } else if (phoneInput.value !== '') {
        phoneInput.classList.remove('error'); // Remove error class
        requiredNumber.style.display = 'none'; // Hide error message
    } else {
        phoneInput.classList.remove('valid'); // Remove valid class
    }
});

saveButton.addEventListener('click', function (event) {
    validatePhoneNumber();
    // Prevent default form submission if the input is invalid
    if (phoneInput.classList.contains('error')) {
        event.preventDefault();
    }
});
