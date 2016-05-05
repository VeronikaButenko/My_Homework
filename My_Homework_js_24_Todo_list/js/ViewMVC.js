define('ViewMVC', ['jquery', 'template', 'model'], function (){
    var viewMvc = 
function View(model){
  var self = this;

  self.init = function () {
    var wrapper = tmpl($('#wrapper-template').html());
    $('body').append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.item-list')
    };
    self.renderList(model.data);
  };
    self.renderList = function (data) {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  self.init();
};

return viewMvc;

});