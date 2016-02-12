/**
 * Created by arnoldchen on 2/11/16.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    //console.log("cooool bro jkdsf;lfjs;ldjflsd");
    initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("cooool bro");

    $.get("/reviewLoad", insertReview);

   // where.html()
}

function insertReview(result){
    console.log("vsdvdfv");
    console.log(result['name']);
    var i;
    var x=1;
    var where = $("#review"+x);
    var review = result['reviews'];

    for (i = 0; i < 4; i++) {
        var first = review[i];
        var theBody = first['body'];
        var string = '<h4>Experience '+x+'</h4>'+'<p>'+theBody+'</p>';
        where.html(string);
        x++;
        where = $("#review"+x);

    }
    /*var first  = review[0]
    var theBody   = first['body'];
    var string = '<h4>Experience 1 </h4>'+'<p>'+theBody+'</p>';
    where.html(string);*/

}

