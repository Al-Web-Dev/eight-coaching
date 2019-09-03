window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.height = "55px";
    } else {
      document.getElementById("logo").style.height = "90px";
    }
    }