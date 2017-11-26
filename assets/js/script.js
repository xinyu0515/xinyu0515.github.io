
// Some code I got from Seth
function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

$(document).ready(function() {

  var params = getAllUrlParams();
  console.log(params);

  var $enlarge = $('#enlarge');
  if ($enlarge.slick) $enlarge.slick({
    prevArrow: $("#left-arrow"),
    nextArrow: $("#right-arrow"),
    initialSlide: params.image ? parseInt(params.image) - 1 : 0
  });


  $("#illustration").click(function(){
      setTimeout(()=>{
        window.open("illustration.html","_self")
      },1000);
      setTimeout(()=>{
      $("#boxes2").css('opacity','0');
      $("#boxes3").css('opacity','0')},400);
      setTimeout(()=>{
      $("#boxes1").css('opacity','0')},600);
      setTimeout(()=>{
        $(".info").css('opacity','0')
      },200);
      

  });  
  /*$(".interest").hover(function(){
     
    $(this).css('opacity','1'),
  }, function() {
    $(this).css("opacity", "");
  });*/
  $(".interest").hover(function() {
    $(this).css("opacity", "1");
    $(this).css("font-weight","500");
  }, function() {
    $(this).css("opacity", "");
    $(this).css("font-weight","");
  });


  $("#illustration").hover(function() {
    $("#animate").css('animation-duration','6s');
    $("#animate").css('animation-direction','reverse');
  }, function() {
    $("#animate").css('animation-duration','');
    $("#animate").css('animation-direction','');
  });



  $(".info-item2 a").hover(function() {
    $(this).css("opacity", "1");
    $(this).css("font-weight","500");
  }, function() {
    $(this).css("opacity", "");
    $(this).css("font-weight","");
  });
 

  $("#name").mouseover(function() {
     $(this).css("text-shadow", "1px 1px 3px #898888");
  }).mouseleave(function(){
    $(this).css("text-shadow", "");
 });


  $(".img").hover(function(){
    $(this).css("opacity", ".7");
  }, function() {
    $(this).css("opacity", "");
  });
  

  $(".footer img").hover(function(){
    $(this).css('opacity','.6');
  }, function() {
    $(this).css("opacity", "");
  });
  

});