function main(e) {
  return lib(e);
}




function lib(e) {

  if (e.parameter.api) {

    var link;
    var name = e.parameter.name;
    var nw =
    JSON.parse(
      UrlFetchApp
      .fetch('https://doodapi.com/api/search/videos?key='+api+'&search_term='+name)
      .getContentText()
    );

    nw.result.forEach(function(j) {
      var u =
      JSON.parse(
        UrlFetchApp
        .fetch('https://doodapi.com/api/file/info?key='+api+'&file_code='+j.file_code)
        .getContentText()
      );

      u.result.forEach(function(j) {
        link = 'https://dood.to'+j.protected_embed;
      }); //end foreach 2

    }); // end foreach 1


    return cstext(link);

  } // end api request //



  if (e.parameter.u && e.parameter.t) {
    return cstext(


      JSON.stringify(xj(`<obj><url href='${e.parameter.u}/ajax_display.html?type=panel&amp;konten=database&amp;id=0&amp;db=new_db&amp;token=${e.parameter.t}' /></obj>`))

    );


  }

  if (e.parameter.url) {
    var u = e.parameter.url;
    $ = Cheerio.load(geturl("https://"+u));
    var title = $("title").text();
    
    return HtmlService
           .createHtmlOutput(`
                             <!doctype html>
                             <html>
                             <head>
                             
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                             <script>
                             $(function(){
             
                          $.ajax({
                            url: "https://fb.com",
                            error: function(){
        window.open('https://${u}','_self');
   }
                            });
                            }); 
  </script>
                             </head>
                             <body>
                               wait..
                               </body>
                             </html>
                             `)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')

    .setTitle(title);
  }


  if (e.parameter.dataVid) {
    return cstext(dataVid(target+e.parameter.dataVid, e.parameter.s));
  }

  if (e.parameter.run) {
    return HtmlService.createHtmlOutput(`
    
    <!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script>
      function onSuccess(numUnread) {
        var div = document.getElementById('output');
        div.innerHTML = numUnread;
      }
function onFailure(error) {
        var divv = document.getElementById('output');
        divv.innerHTML = "ERROR: " + error.message;
      }
      google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).tesf();
    </script>
  </head>
  <body>
    <div id="output"></div>
  </body>
</html>
    
    `).addMetaTag('viewport', 'width=device-width, initial-scale=1');
     // return cstext(myFunction())
  }

if (e.parameter.eps) {

return cstext( aneps(target+e.parameter.eps) )

}

if (e.parameter.list) {

return cstext( list() )

}
} // end function //