(function(){
	var mold = uni.mold('add');
  mold.act('post', function(pack, done){
    var ent = this;
    var world = ent.world;
    var value = $('input[type="text"]').val();
    console.log('post', value);
    var list = world.ent('list.model');
    list.act('insert', value, done);
  });
  mold.act('bind', function(pack, done){
    var ent = this;
    $('input[type="text"]').on('keyup', function(e){
      if(e.keyCode == 13){
        ent.act('post');
				$('input[type="text"]').val("");
      }
    });
    $('button').on('click', function(e){
      ent.act('post');
			$('input[type="text"]').val("");
    });
    return done.pass();
  });
})();
