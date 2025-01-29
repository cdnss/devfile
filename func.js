const test = () => {
	log(dataVid("https://anoboy.monster/2022/05/pokemon-2019-episode-108/","https://194.163.183.129/boruto-episode-247/"))
}

function runFunction(){
	return gdata();
	}

  function dataVid(x,y) {

  $ = Cheerio.load(geturl(x))
    
    $(".vmiror:contains('Btube') a, .vmiror:contains('AC') a").attr({"class":"s1 dropdown-item", "style":"", "href":"#script"})
   
    $(".vmiror:contains('Btube') a, .vmiror:contains('AC') a").wrap('<li>')
    
   
    var src = $("iframe").attr("src")
    if(src){
      $(".vmiror:contains('Btube') a").first().attr("data-video", src)
      }
    var s1 = $(".vmiror:contains('B-tube')").html()
    .replace("B-tube", "<li><h5 class='dropdown-header'>Server 1</h5></li>")
    var s2 = ''
    try {
    s2 = $(".vmiror:contains('AC')").html()
    .replace("AC", "<li><h5 class='dropdown-header'>Server 2</h5></li>")
    .replace(/\/uploads/g, target+"/uploads")
    
    } catch (e){
    s2 = 'err'
    }
    
    var strim = s1.replace(/\|/g,"")+s2.replace("|","")
  
  
	$ = Cheerio.load($("div#colomb").html(), null, false);
	$("amp-social-share,br:last-child, b").remove();
    var dl =''
    $("p > span").each((i,ii) =>{
              $(ii).find("a").wrapAll("<div class='d-flex flex-wrap'>")
              $(ii).find("a").addClass("p-1")
   dl = $("p").html().replace(/\|/g,"")
  })
  
return `
    cback({ "strim": ${JSON.stringify(strim) },
            "dl": ${JSON.stringify(dl) },
            
          });
    `
}
  
  
const cstext = (e) => ContentService.createTextOutput(e).setMimeType(ContentService.MimeType.JAVASCRIPT);
const css = (e) => ContentService.createTextOutput(e).setMimeType(ContentService.MimeType.CSS);
const geturl = (a) => UrlFetchApp.fetch(a, {muteHttpExceptions: true}).getContentText();
const log = (e) => Logger.log(e);

function geturlD(a) {
	var rah = {
		method: "get",
		contentType: "application/json",
		headers: {
			Authorization: "Bearer " + ScriptApp.getOAuthToken(),
			Accept: "application/json"
		},
		muteHttpExceptions: true
	};
	return UrlFetchApp.fetch(a, rah).getContentText();
}

function post(m, url, data) {
  try {
	var rah = {
		method: m,
		contentType: "application/json",
		headers: {
			"Authorization": "Bearer " + ScriptApp.getOAuthToken(),
			"Accept": "application/json",
            "Accept-Encoding": "gzip",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0,gzip(gfe)"
		},
		muteHttpExceptions: true,
		payload: JSON.stringify(data)
	};

	return UrlFetchApp.fetch(url, rah).getContentText();
} catch (e){
  
  return JSON.stringify(e);
  }
}





function aneps(x) {

	$ = Cheerio.load(geturl(x), null, false);
	var list = $("div.singlelink a")
	
	var c = ""
	var b = ""
	var d = ""
	if ( $("ul.lcp_paginator").html() != null ){
	    
	    for (var i = 0; i < $("ul.lcp_paginator a").length; i++){
	        
	        var n = i+1
		    $ = Cheerio.load(geturl(x+"?lcp_page0="+n), null, false);
		    $("a:contains(']')").remove() 
		    $("ul.lcp_catlist a").each( function(i, val){

		    c += `\n<button class="eps btn btn-secondary border text-center p-1" data-eps="${ urlPath( $(this).attr("href") ) }">
    ${ $(this).html() }
    </button>\n`
		    
		    })
	    }
	 
	  } else {
	  	    $("a:contains(']')").remove() 
		    $("ul.lcp_catlist a").each( function(i, val){

		    c += `\n<button class="eps btn btn-secondary border text-center p-1" data-eps="${ urlPath( $(this).attr("href") ) }">
    ${ $(this).html() }
    </button>\n`
		    
		    })
	    
	  }

/*
$ = Cheerio.load(c)
for(var i = 0; i < $("a").length; i+=12){
   var a = ""
   for(var k = i; k < i+12; k++){
      $("a:contains(']')").remove()
      if( $("a").eq(k).html() != null ){
      a += `\n<button class="eps btn btn-secondary border text-center p-1" data-eps="${ urlPath( $("a").eq(k).attr("href") ) }">
    ${ $("a").eq(k).html() }
    </button>\n`
      }
   
   }
    
   b += `<div class="carousel-item"><div class="d-block w-100">${a}</div></div>`
   
  
 
 
 }
    $ = Cheerio.load(b, null, false)
    $("div.carousel-item").first().addClass("active")
*/
	return `
    cback({ 
            "eps": ${JSON.stringify(c) },
            
          });
    `

}

function list() {
	$ = Cheerio.load(geturl("https://anoboy.icu/anime-list/"), null, false);
   var list = ""
   
   $("p.post.type-post.status-publish a").each( function(x,y){
   
 
   var url = $(this).attr("href") 
   
   
   list += `"${urlPath(url)}",`
   
   })
return `[${list}]`
}



const repl = (x) => {
      var xx = x.toLowerCase()
      .split(" sub")[0];
      xx = xx.replace(/[^\w\s]/gi, ' ');
      xx = xx.trim();
      xx = xx.replace(/  |   /gi, " ");
      xx = xx.replace(/  |   /gi, " ");
      xx = xx.replace(/ /gi,"-");
      return xx;
}



function jsn(){

return IMPORTJSONAPI(JSON.stringify(list()) ,"$.*", "@")
}