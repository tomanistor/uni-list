(function(){
  var world = uni.world();
  var add = world.ent('add');
  var listview = world.ent('list.view');
  add.act('bind');
  listview.act('build');
})();
