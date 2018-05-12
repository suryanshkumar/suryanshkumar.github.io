(function() {
  $(function() {
    var printPub;
    return printPub = function(p) {
      var author, i, len, ref, text;
      text = p.title + "<br>";
      ref = p.authors;
      for (i = 0, len = ref.length; i < len; i++) {
        author = ref[i];
        text += author + ", ";
      }
      text += "<br>";
      return text;
    };
  });

}).call(this);
