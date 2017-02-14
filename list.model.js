(function(){
  var mold = uni.mold('list.model');
  var items = [];
  mold.act('insert', function(pack, done){
    var ent = this;
    if(!pack){
      return done.fail("No value entered");
    };
    items.push(pack);
    mold.signal(ent, 'insert', pack);
    console.log(items);
    return done.pass();
  });
})();
