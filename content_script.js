// The background page is asking us to find an address on the page.
if (window == top) {
    chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
  //need to go and get the page here..., subject and body etc...
 
 //$('a').css({'background-color': 'yellow'});
 var ifr = $('[name="to"]', $($("#canvas_frame")[0].contentDocument));
 sendResponse(ifr.parent().children()[1].innerHTML);
 //document.getElementsByName("to")[0].nextSibling.innerHTML
  });
  }
