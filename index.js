document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('captcha');
  var ctx = canvas.getContext('2d');
  var captchaText = generateCaptchaText(6);
  const captchaStart = document.getElementById ('captcha-status');
  drawCaptcha(captchaText);
  
  function varifyCaptcha(){
      var inputText = document.getElementById('captcha-input').value.toLowerCase();

      if(inputText === captchaText.toLowerCase()){
        captchaStatus.textContent = 'captcha Correct!';
        captchaStart.style.color = 'green';
      }else if (inputText.length < 6){
        
      }
  }

})