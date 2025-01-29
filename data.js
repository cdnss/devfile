function gdata() {
  var a = ""
  var r = ""
  $ = Cheerio.load(geturl(target));
  $("table, div.home_index a:not(:contains('Episode'))").remove();

  var last = JSON.parse(
    geturl(
      `https://www.blogger.com/feeds/${ bid }/pages/default/6756114174399056977?alt=json`
    )
  );
  var page = JSON.parse(last.entry.content.$t);

$("div.home_index a")

  .each( function(){
  log( $(this).attr("href") +'\n')
  r += $(this).attr("href") + '\n hhh  return ggg \n'
  if ($(this).attr("href") == page.an) {

      var ano = $(this).prev().attr("href");
      
      if(ano){
        
      var path = urlPath(ano)
      var cc = path.split("/")[3].split("-episode")[0].replace(/-/g, " ")+ " sub indo"
      $ = Cheerio.load(geturl(ano))
      log( $("title").html() )
      var cat = $("title").html().split(" Epi")[0]
      var eps = $("title").html().split("Episode ")[1].split(" Subt")[0]
      var dates = $("time")
      .attr("datetime")
      .split(" ")[0]
      .replace(/\//g, "-")
      var time = $("time")
      .attr("datetime")
      .split(" ").pop();
      var dIso = `${dates}T${time}:00+07:00`;


          $ = Cheerio.load(geturl(`${blog}/feeds/posts/default?q=${cc}`))
          $("entry").each(function() {


            if ($(this).find("category").eq(1).attr("term") == cc) {


              var id = $(this).find("id").text().split('post-')[1]
              var htm = JSON.parse(geturl(`${blog}/feeds/posts/default/${id}?alt=json`))

              $ = Cheerio.load(htm.entry.content.$t, null, false)
              $("p[style='display:none']").html(`Lihat juga eps lain anime <b>${cc}</b> `)
              $("div.eps").prepend(`\n<div class="col-4"><button class="eps btn border text-center text-truncate p-1" data-eps="${path}">
                Episode ${eps}
                </button></div>\n`)

              var ct = {
                title: `${cat} Episode ${eps} Sub Indo`,
                content: $.html(),
                published: dIso
              };
              a += $.html()

              post(
                'patch',
                `https://www.googleapis.com/blogger/v3/blogs/${ bid }/posts/${id}?fields=kind,title`,
                ct)
              log("ok")

              return false
            }


          }) // end eachXML

        


      var push = {
        content: `{
        "an":"${ano}",
        "id":"crot"
        }`
      };

      
        
        post(
          "patch",
          `https://www.googleapis.com/blogger/v3/blogs/${ bid }/pages/6756114174399056977?fields=kind,title`,
          push
        )
          
      } else {
        log("no "+ano)
        }
      

      return false

    } //end if


  }) // end for
  return r
} // end func