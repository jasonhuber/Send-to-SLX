// The background page is asking us to find an address on the page.
if (window == top) {
    chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
  //need to go and get the page here..., subject and body etc...
 
 //$('a').css({'background-color': 'yellow'});
 
 var $canvasframe = $($("#canvas_frame")[0].contentDocument);
 
 
 var ifr = $('[name="to"]', $canvasframe);
 
 //use this for standard gmail (1):
 //var gmailquote = $($canvasframe.find('iframe')[1].contentDocument).find('div.gmail_quote')[0];
 
 //use this for google apps gmail (0)
 var gmailquote = $($canvasframe.find('iframe')[0].contentDocument).find('div.gmail_quote')[0];
 
 sendResponse(ifr.parent().children()[1].innerHTML + "~" + gmailquote.innerHTML);
 //document.getElementsByName("to")[0].nextSibling.innerHTML
  });
  }
