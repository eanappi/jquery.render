/**
 * Application name: jquery.render.
 * Render Json to template script.
 * 
 * Author: Ernesto Alejandro Nappi.
 *
 * templateId: 'selector'
 * dataJson: {'key1': 'value1', 'key2': 'value2'}
 *
 * Template Script:
 *   Variable replace format:  {{ key }}
 *   Note: Respect the spaces between the keys
 */

(function($){
  $.fn.extend({
    render: function(templateId, dataJson) {
      var template = $(templateId).html();
      $.each(dataJson, function(key, value) {
        template = template.replace('{{ '+key+' }}', value);
      });
      return this.append(template);
    }
  });
})(jQuery);
