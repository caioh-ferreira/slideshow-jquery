$(function(){

$('#l1').click(function(){
    $('#i1').show(2000);
    $('#i2').hide(2000);
    $('#i3').hide(2000);
    $('#i4').hide(2000);
});

$('#l2').click(function(){
    $('#i1').hide(2000);
    $('#i2').show(2000);
    $('#i3').hide(2000);
    $('#i4').hide(2000);
});

$('#l3').click(function(){
    $('#i1').hide(2000);
    $('#i2').hide(2000);
    $('#i3').show(2000);
    $('#i4').hide(2000);
});

$('#l4').click(function(){
    $('#i1').hide(2000);
    $('#i2').hide(2000);
    $('#i3').hide(2000);
    $('#i4').show(2000);
});

$("#l5").click(function(){
  
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);
    
    if (count == 1){
      $('#i1').show(2000);
      $('#i2').hide(2000);
      $('#i3').hide(2000);
      $('#i4').hide(2000);
    }
    else if (count == 2){
      $('#i1').hide(2000);
      $('#i2').show(2000);
      $('#i3').hide(2000);
      $('#i4').hide(2000);
      
    }else if (count == 3){
      $('#i1').hide(2000);
      $('#i2').hide(2000);
      $('#i3').show(2000);
      $('#i4').hide(2000);
      
    }else if (count == 4){
      $('#i1').hide(2000);
      $('#i2').hide(2000);
      $('#i3').hide(2000);
      $('#i4').show(2000);
      
    }else{
       object.reload(forcedReload);
    }
  
  });
  

});