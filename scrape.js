var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.statetheatretc.org/schedule"

request(url, function(error, response, html) {
  if (error) {
    console.log(error);
    return;
  }
  var $ = cheerio.load(html)
  var table = $("td[valign=top]").first().closest("table")
  console.log(table);
})
