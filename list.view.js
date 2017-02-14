(function(){
  var mold = uni.mold('list.view');
  mold.act('build', function(pack, done){
    var ent = this;
    var world = ent.world;
    var list = world.ent('list.model');
    list.watch(ent, 'insert', function(data, done){
      $("#list").append("<li>" + data + "</li>");
      console.log(data);
    });
  });
})();
