var getData = function(){
  var putioKey = "skorecky"
  var puytioSecret = "558tastes653"
  // var putioKey = safari.extension.secureSettings.key
  // var puytioSecret = safari.extension.secureSettings.secret
  // http://developer.apple.com/library/safari/#documentation/Tools/Conceptual/SafariExtensionGuide/ExtensionSettings/ExtensionSettings.html
  $.getJSON('http://api.put.io/v1/transfers?method=list&request={"api_key":"'+putioKey+'","api_secret":"'+puytioSecret+'","params":{}}', function(data) {
    var results = data.response.results;
    $("ul li").remove();
    for (var i=0; i < results.length; i++) {
      var name = results[i].name;
      var percent_done = results[i].percent_done;
      var status = (results[i].status === "Completed")? "completed" : "";
      $("ul").append("<li class='"+status+"'><div class='progress' style='width:"+percent_done+"%;'></div><a href='https://put.io/transfers' class='text'>"+name+"<span>"+status+"</span></a></li>");
    };
  });
}

$(function(){
  getData();
  setInterval("getData()",5000);
});