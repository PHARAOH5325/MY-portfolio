// download cc
function downloadCV() {
    var link = document.createElement('a');
    link.href = 'cv.pdf';  
    link.download = 'CV.pdf'; 
    link.click();
 }
 


//  contact section
 function submitForm() {
    // استخراج البيانات المدخلة
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // التحقق من الحقول
    if (fname && lname && tel && email  && message) {
        // إظهار رسالة تأكيد بعد الإرسال
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
}

 


// skills section 
const divs = ['#modeling', '#uiux', '#graphic', '#general'];
                    let currentIndex = 0;
                
                    function switchContent() {
                      // إخفاء الديف الحالي
                      gsap.to(divs[currentIndex], { opacity: 0, duration: 1 });
                
                      // التبديل إلى الديف التالي
                      currentIndex = (currentIndex + 1) % divs.length;
                
                      // إظهار الديف التالي
                      gsap.to(divs[currentIndex], { opacity: 1, duration: 1 });
                    }
                
                    // تبديل المحتوى كل 3 ثوانٍ
                    setInterval(switchContent, 6000);
  