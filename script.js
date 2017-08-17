
$(function(){
    $("#openPp").click(function(){
        $("#pp").show();
        $(this).mouseleave(function(){
            $("#pp").hide();
        });
        
    });
    
     $('a[href^="#"]').on('click',function (e) {
               e.preventDefault();
               var target = this.hash;
               var $target = $(target);
               // scroll and dont show hash
               $('html, body').animate({
                   'scrollTop': $target.offset().top
               }, 1000,'linear');
           });
     $("#sandwich").click(function(){
        $("#mobileMenu").css("left", "0px").toggle()
        
    });
      $('.grey img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});
