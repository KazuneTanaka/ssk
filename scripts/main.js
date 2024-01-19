//キーボードの操作をトリガーに動作する
$(window).keyup(function(e){
  if(e.keyCode == 17){
    if(prevhref) {
      window.location.href = prevhref;
    }
  } else if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 16) {
    if(nexthref) {
        window.location.href = nexthref;
    }
  } else if (e.keyCode == 27) {
    if(endhref) {
        window.location.href = endhref;
    }
  }
});