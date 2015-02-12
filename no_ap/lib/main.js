var self = require("sdk/self");
var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: {
        "16": "./16.png",
        "32": "./32.png",
        "64": "./64.png"
       },
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      contentScript: '$("a").each(function(index){var blocking=$(this).text();if( blocking.toLowerCase().indexOf("aap") >= 0 || blocking.toLowerCase().indexOf("kejriwal") >= 0){ $(this).hide();}});',
    	contentScriptFile: self.data.url("jquery-2.1.3.min.js")
    });
  }
});