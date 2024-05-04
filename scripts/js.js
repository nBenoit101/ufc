let intIndex = 0;

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot')

    for(n=0; n < images.length; n++){
        images[n].style.display = 'none';
        dots[n].className = dots[n].className.replace(' active', '')
    }

    if(intIndex>images.length - 1){
        intIndex = 0;
    }

    if(intIndex<0){
        intIndex = images.length-1
    }

    images[intIndex].style.display = 'block';
    dots[intIndex].className += ' active'

}

    // Set the date we're counting down to
    var countDownDate = new Date("May 4, 2024 00:00:00").getTime();
    
    var countDownDateThree = new Date("Jun 29, 2024 00:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an html element
      document.getElementById("displaytimer").innerHTML = days + " days, " + hours + " hours, "
      + minutes + " minutes, " + seconds + " seconds ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("displaytimer").innerHTML = "Happening Now";
      }
    }, 1000);


    var countDownDateTwo = new Date("Jun 1, 2024 00:00:00").getTime();
    var y = setInterval(function() {
    
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDateTwo - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an html element
        document.getElementById("displaytimerTwo").innerHTML = days + " days, " + hours + " hours, "
        + minutes + " minutes, " + seconds + " seconds ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(y);
          document.getElementById("displaytimerTwo").innerHTML = "Happening Now";
        }
      }, 1000);


      var z = setInterval(function() {
    
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDateThree - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an html element
        document.getElementById("displaytimerThree").innerHTML = days + " days, " + hours + " hours, "
        + minutes + " minutes, " + seconds + " seconds ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(z);
          document.getElementById("displaytimerThree").innerHTML = "Happening Now";
        }
      }, 1000);


const d = new Date();
document.getElementById('copyrightyear').innerHTML = d.getFullYear();