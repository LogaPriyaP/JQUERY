$(function(){
var searchvalue;
var name;
$('#search').on('click',function(){
  searchvalue=$('#movie').val();
   name='http://www.omdbapi.com/?s='+searchvalue;
    // alert(searchvalue);
     //alert(nam);
   $.ajax({
      type:'GET',
       url:name,
   success:function(name){
      $.each(name.Search,function(key,name){
        $('#response').append("<p>"+name.Title+"</p><br>")
        $('#response').append("<p>"+name.Year+"</p><br>")
        $('#response').append("<img src='"+name.Poster+"'><br>");
      });
   }
});
});
});