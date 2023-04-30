window.onload = function() {
    
    var typed = new Typed('#typed', {
        strings: ["Developer", "Freelancer", "Student"],
        typeSpeed: 100,
        backSpeed: 50,
        // startDelay: 1200,
        // backDelay: 1200,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: "|",
        onComplete: function(self) {
            self.cursorChar = "";
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });  

    $('#language').change(function() {
        var langCode = $(this).val();
        window.location.href = 'index' + langCode + '.html';
    });
    
}


  