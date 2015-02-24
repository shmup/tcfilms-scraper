let request = require('request')
let cheerio = require('cheerio')
let url = "http://www.statetheatretc.org/schedule"
var $$;
var movies = [];

function Movie(data) {
  this.title = data.title
  this.theater = ""
  this.rating = ""
}

request(url, (error, response, html) => {
  $$ = cheerio.load(html)
  let table = $$("td[valign=top]").first().closest("table")
  let days = $$(table).find("tr:not(:first-child)").find("td")
  days.each((i, elem) => {
    let movies = $$(this).find("p").each(() => {
      if ($$(this).text().trim() === "") return;
      let theater = $$(this).find("strong").html().split("<br>")
      console.log(theater[0])
    })
  })
})
