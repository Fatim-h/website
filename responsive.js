function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
   
  }

  function toggleVisibility() {
    var div = document.getElementById("bottomnavresponsive");
    var div2 = document.getElementById("bottomnav");
    var partner = document.getElementById("tab");
    var partner1 = document.getElementById("tabresponsive");
    var partner3 = document.getElementById("partnersslider");
    var about = document.getElementById("aboutnews");
    var about1 = document.getElementById("aboutnewsres");
    var sidenav = document.getElementById("sidenav");
  
    if (window.innerWidth <= 768) {
      div.style.display = 'block';
      div2.style.display = 'none';
      partner.style.display = 'none';
      partner1.style.display = 'flex';
      partner3.style.display = 'none';
      about.style.display = 'none';
      about1.style.display = 'block';
    } else {
      div.style.display = 'none';
      div2.style.display = 'flex';
      partner.style.display = 'flex';
      partner1.style.display = 'none';
      partner3.style.display = 'block';
      about1.style.display = 'none';
      about.style.display = 'block';
      sidenav.style.display = 'none';
    }
  }
  
  // Wait for the DOM content to be fully loaded before setting up the event listener
window.addEventListener('DOMContentLoaded', function() {
  // Event listener for resize
  window.addEventListener('resize', toggleVisibility);
  
  // Initial call to handle initial state based on current screen size
  toggleVisibility();
});
