function tesf() {

var set = [
{a : "https://anoboy.icu/2022/04/yu-gi-oh-go-rush/",
 b: "https://jutsuterlarang.blogspot.com/2021/07/downloadstreaming-episode-3-genjitsu_19.html"},
{a: "https://anoboy.icu/2017/04/boruto-naruto-next-generations-indonesia/",
 b: "https://jutsuterlarang.blogspot.com/2021/01/boruto-episode-184-subtitle-indonesia.html?m=1"}
]
var datapost = 
        { 
          a: "",
          desc: "",
          info: "",
          img: "",
          lbl: "",
          id: "",
          title: "",
          content: ""
        }
          
         
 set.forEach( key => {
 
  $ = Cheerio.load( 
                   geturl( 
                          target + urlPath(key.a) 
                         ) 
                   )
  
  /*
 if( $(".contentdeks").html() == null ) {
   
    $(".write-rata > p").eq(0).remove()
    datapost.desc = $(".write-rata").html()
    
    } else {
        $("tbody tr").first().remove()
        datapost.desc =  $(".contentdeks").html() 
        datapost.info = $(".contenttable").html()  
  } */
  
   if ( $("amp-img").last().attr("src").startsWith("https:") ){
    datapost.img = $("amp-img").last().attr("src")
    } else {
        datapost.img = target + $("amp-img").last().attr("src")
        }
 datapost.lbl = $("div.pagetitle h1").text()
 datapost.desc = $("div.unduhan").first().html()
 datapost.info = $("table").first().html()
 datapost.id = JSON.parse(geturlD(`https://www.googleapis.com/blogger/v3/blogs/${bid}/posts/bypath?path=${ urlPath(key.b) }&fields=id`)).id
                        
 datapost.title = $(".pagetitle h1").eq(0).text() 
 datapost.content = `
  <div data-nosnippet="true">
  <p style="display:none">Lihat juga eps lain anime <b>${ datapost.title }</b> </p>
  
  <div data-samurl="err" data-anurl="" class="vid"></div>
  </div>
  <div id="eps">
  <div class="eps row" data-s="${ urlPath(key.a) }">
    
  </div>
  </div>
  <div style="text-align:center">Download</div>
  <div class="separator" style="clear: both; text-align: center;">
  <a href="#" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img loading="lazy" border="0" src="${   datapost.img   }" />
  </a></div>
  
  <div class="row">
    <div class="col-12 col-md-6 sinopsis">
     Sinopsis: ${ datapost.desc }
    </div>
    <div class="col-12 col-md-6 info">
     <table>
     ${ datapost.info }
     </table>
    </div>
   </div>
  `;
  
  
  
  
  var push = {
        content: `${ datapost.content }`,
        title: `semua episode ${ datapost.title } subtitle indonesia`,
        labels: ["anime", datapost.lbl],
        published: date
      }
  post(
        "patch",
        `https://www.googleapis.com/blogger/v3/blogs/${ bid }/posts/${datapost.id}?fields=kind,title`,
        push
      ) 
  })
  return "ok"
}
