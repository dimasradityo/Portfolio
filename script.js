$(function(){
  $("button").addClass("animated zoomIn "); 
  $('.error').hide();
  
  var name_Error = false;
  var comment_Error = false;
  
  function checkName(){
    var length = $('#nameForm').val().length;
    if (length === 0){
      $('#nameError').html('Field cannot be empty');
      $('#nameError').show();
    }
    else{
      $('#nameError').hide();
      name_Error = true;      
    }
  }
  
  function checkComment(){
    var length = $('#commentForm').val().length;
    if (length === 0){
      $('#commentError').html('Field cannot be empty');
      $('#commentError').show();
    }
    else{
      $('#commentError').hide();
      comment_Error = true;      
    }
  }
  $('#submitForm').on('click', function(){
    checkName();
    checkComment();
    if (name_Error == true && comment_Error == true){
      alert('Thanks!');
      $('#nameForm').val('');
      $('#commentForm').val('');
      name_Error = false;
      comment_Error = false;
    }
    
  });
});