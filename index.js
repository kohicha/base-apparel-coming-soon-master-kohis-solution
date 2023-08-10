function validateEmail(value) {
    var input = document.createElement('input');
  
    input.type = 'email';
    input.required = true;
    input.value = document.getElementById('test-email').value;

    if (input.checkValidity()) {
        document.querySelector('.error').classList.add('hidden');
        document.querySelector('.email-input').classList.add('bg-none');
      } else {
        document.querySelector('.error').classList.remove('hidden');
        document.querySelector('.email-input').classList.remove('bg-none');
      }
        
      return false;
  }