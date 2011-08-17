const global = safari.extension.globalPage.contentWindow;

// var putioKey = safari.extension.secureSettings.putioKey;
// var puytioSecret = safari.extension.secureSettings.putioSecret;
// var putioRefresh = safari.extension.settings.refresh;

var updateHeight = function(totalTransfers){
  safari.self.height = totalTransfers*42;
}

var getData = function(){
  $.getJSON('http://api.put.io/v1/transfers?method=list&request={"api_key":"'+window.putioKey+'","api_secret":"'+window.puytioSecret+'","params":{}}', function(data) {
    var results = data.response.results;
    $("ul li").remove();
    for (var i=0; i < results.length; i++) {
      var name = results[i].name;
      var percent_done = results[i].percent_done;
      var statusClass = (results[i].status === "Completed")? "completed" : "";
      var statusIcon = (results[i].status === "Completed")? "2" : "";
      $("ul").append("<li class='"+statusClass+"'><div class='progress' style='width:"+percent_done+"%;'></div><div class='text'>"+name+"<span>"+statusIcon+"</span></div></li>");
    };
    var totalTransfers = $("ul li").length;
    updateHeight(totalTransfers);
    if (totalTransfers > 0) {
      $("h2").hide();
    } else {
      $("h2").show();
    };
  });
}

$(function(){
  getData();
  setInterval("getData()", 30000);
});