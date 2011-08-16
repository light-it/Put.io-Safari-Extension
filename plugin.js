// var putioRefresh = safari.extension.settings.refresh;
// safari.self.height = 200
// safari.application.addEventListener("command", performCommand, false);  

// alert(mySettingKey);
var putioKey = safari.extension.secureSettings.key;
var puytioSecret = safari.extension.secureSettings.secret;
var getData = function(){
  $.getJSON('http://api.put.io/v1/transfers?method=list&request={"api_key":"'+putioKey+'","api_secret":"'+puytioSecret+'","params":{}}', function(data) {
    var results = data.response.results;
    $("ul li").remove();
    for (var i=0; i < results.length; i++) {
      var name = results[i].name;
      var percent_done = results[i].percent_done;
      var statusClass = (results[i].status === "Completed")? "completed" : "";
      var statusIcon = (results[i].status === "Completed")? "2" : "";
      $("ul").append("<li class='"+statusClass+"'><div class='progress' style='width:"+percent_done+"%;'></div><div class='text'>"+name+"<span>"+statusIcon+"</span></div></li>");
    };
  });
}

$(function(){
  getData();
  setInterval("getData()", 5000);
});