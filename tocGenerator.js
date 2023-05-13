document.getElementById('markdown-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var markdown = document.getElementById('markdown').value;
  var lines = markdown.split('\n');
  var toc = [];
  for (var i = 0; i < lines.length; i++) {
    var match = lines[i].match(/^(#{1,6})\s(.+)/);
    if (match) {
      var level = match[1].length;
      var text = match[2];
      var link = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, '-');
      toc.push({ level: level, text: text, link: link });
    }
  }
  var tocHTML = '';
  for (var i = 0; i < toc.length; i++) {
    var indent = '- ';
    if (toc[i].level > 1) {
      indent = Array(toc[i].level).join('  ') + '* ';
    }
    tocHTML += indent + '[' + toc[i].text + '](#' + toc[i].link + ')\n';
  }
  document.getElementById('toc').value = tocHTML;
});
