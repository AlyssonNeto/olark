Drupal.behaviors.olark = function() {
  olark.extend(function(api){
    api.chat.updateVisitorNickname({
      snippet: Drupal.settings.olark.name,
      hidesDefault: true
    });
    api.chat.updateVisitorStatus({
      snippet: Drupal.settings.olark.userpage,
    });
  }); 
}