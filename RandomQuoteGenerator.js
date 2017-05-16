 $(document).ready(function() {
     
// loading quote at page load
   setTimeout(function() {
        $("#getQuote").trigger('click');
    },10);
    
     $("#getQuote").on("click", function(){

 //using API to get random quote
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {

//set quote and author values
        $(".quote").html(json.quoteText);
        $(".quoteAuthor").html(json.quoteAuthor);
         
//triggering new quote upon button click
        $('#quoteButton').trigger("click"); 
      
//creating URL for tweet button
        var twitter = "http://twitter.com/home?status="+ json.quoteText + " - " + json.quoteAuthor
//creating tweet button
        $("#tweet-btn").attr("href", twitter);
      
        });
    });
});  
