var getData = function(){
  var putioKey = "skorecky"
  var puytioSecret = "558tastes653"
  $.getJSON('http://api.put.io/v1/transfers?method=list&request={"api_key":"'+putioKey+'","api_secret":"'+puytioSecret+'","params":{}}', function(data) {
    var results = data.response.results;
    $("ul li").remove();
    for (var i=0; i < results.length; i++) {
      var name = results[i].name;
      var percent_done = results[i].percent_done;
      var status = results[i].status;
      $("ul").append("<li><div class='progress' style='width:"+percent_done+"%;'></div><div class='text'>"+name+"</div></li>");
    };
  });
}

$(function(){
  getData();
  setInterval("getData()",5000);
});