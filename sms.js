
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.catapult.inetwork.com/v1/users/u-62ezq5xxxmelmsvqwsx4dti/messages",
  "method": "POST",
  "headers": {
    "authorization": "Basic dC1kZ2RydTVuejN6ZGZkemtlbGdkeXFrYTo0czJsY2xpcnNzZHFzajVkdHllbWdlaGZ1NW81ZXB6eXV3ZHVhZWE=",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "8f3311e3-eca1-84a3-7d75-721ef8550741"
  },
  "processData": false,
  "data": "{\n    \"from\": \"5122981573\",\n    \"to\": \"5127898565\",\n    \"jsonp\": \"Hello from Bandwidth!\"\n}"
}

var sendSMS = function(){
 $.ajax(settings).done(function (response) {
  console.log(response);
});
};

console.log('js loaded');

$("#send-sms").on("click", function(event) {
  console.log("you clicked");
  sendSMS();
});

