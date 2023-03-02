
chrome.contextMenus.create({
    id: "google",
  title: "Copy Page Content",
  contexts:["page"],
});

chrome.contextMenus.onClicked.addListener(function(info,tab){
    if(info.menuItemId =="google"){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: function() {
              var pageContent = document.documentElement.outerHTML;
              navigator.clipboard.writeText(pageContent);
            }
          });
    }
});
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         id: "some-command",
//       title: "Copy Page Content",
//       contexts:["page"],
//       onclick: copyPageContent
//     });
//   });
  
//   function copyPageContent(info, tab) {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       func: function() {
//         var pageContent = document.documentElement.outerHTML;
//         navigator.clipboard.writeText(pageContent);
//       }
//     });
//   }
  