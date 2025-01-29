eval(UrlFetchApp.fetch('https://rawgit.com/medialize/URI.js/gh-pages/src/URI.js').getContentText());
function urlPath(url){
  return URI(url).path()
} 
let $ = Cheerio.load('<p></p>');

let date = new Date().toISOString();

let target = "https://anoboy.icu";

let blog = "https://jutsuterlarang.blogspot.com";

var bid = "7218564943211424238";

var urlApi = "https://www.googleapis.com/blogger/v3/blogs/" + bid + "/posts?fields=kind,id,title";



const fburl = "https://mbasic.facebook.com";
const kuki = "datr=kB1oYtb1sNMA4BmQhrTm3kkZ; sb=kB1oYicPURggACDxt_JSijq4; m_pixel_ratio=2.700000047683716; c_user=100010592445432; xs=12:FDbfK5Ojfk3ipw:2:1650990514:-1:11123; fr=0I1vrxLedGnaZlimA.AWXV7SnpXJLmjZM0hNvYcbK-c_4.BiaB2Q.GI.AAA.0.0.BiaB2_.AWV1lRNdOeE; wd=400x583"

var a = '';
function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}


    var hdr = {
      "muteHttpExceptions": true,
      "method": "GET",
      "followRedirects": false,
      "headers": {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en,id-ID;q=0.9,id;q=0.8,en-US;q=0.7",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": kuki
    }
      }

function fb() {

  
    
    const data = UrlFetchApp.fetch(fburl, hdr);
  
     $ = Cheerio.load(data.getContentText())
    
   var url = $('a:contains("Suka") ~ a');

   url.each(  (i, link) => {
        const href = $(link).attr("href")
  
  if(href.search("recommendation") == -1){
    
     const reac = UrlFetchApp.fetch(fburl+href,hdr);
     $ = Cheerio.load(reac.getContentText())
     let type = ["Suka","Peduli","Super","Sedih","Haha","Marah","Wow"]
     let rec = $(`a:contains('${get_random(type)}')`).attr("href")
     if(rec){
      UrlFetchApp.fetch(fburl+rec,hdr);
      
          a += i
          }
      }
      

   }); 
 
     log( a )
     /*
  const tm = UrlFetchApp.fetch("https://mbasic.facebook.com/friends/center/mbasic/?mfl_act=4&_rdr#last_acted", hdr)
   var b = ""
     $ = Cheerio.load(tm.getContentText())
    b = $("a:contains('Tambah Teman')").last().attr("href")
                                      UrlFetchApp.fetch(fburl+b, hdr);
  
    */
}


