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
    //console.log("cooool bro");
    $('#submitreview').click(submitReview);


    $.get("/reviewLoad", insertReview);
    $.get("/editProfileLoad", insertProfile);

   // where.html()
}


function insertProfile(result){
    var where1 = $("#aboutme");
    var where2 = $("#favs");
    var where3 = $("#venues");
    var where4 = $("#genres");
    var where5 = $("#moods");

    //console.log(result["AboutMe"]);
    var AboutMe= '<p><span>H</span>ello! '+result["AboutMe"]+'</p>';
    var favorites= '<a href="'+result['Favorite1Link']+'"><u>'+result['Favorite1']+'</u></a><br>'+result['Favorite2']+'<br>'+result['Favorite3']+'<br>';
    var venues = result["Venue1"]+'<br>'+result["Venue2"]+'<br>'+result["Venue3"]+'<br>';
    var genres = result["Genre1"]+'<br>'+result["Genre2"]+'<br>'+result["Genre3"]+'<br>';
    var moods = result["Mood1"]+'<br>'+result["Mood2"]+'<br>'+result["Mood3"]+'<br>';


    where5.html(moods);
    where4.html(genres);
    where3.html(venues);
    where2.html(favorites);
    where1.html(AboutMe);
}

function insertReview(result){
   // console.log("vsdvdfv");
    //console.log(result['name']);
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









//kyle's practice bit

function submitReview(event) {
    event.preventDefault();

    // var review = mongoose.model('Experience', ExperienceSchema);


    // console.log($('form').serializeArray());
    var who = $('#who').val();
    var where = $('#where').val();
    // var rating = $('input[name=quality[25]]:checked').val();

    console.log(who);
    console.log(where);
    // console.log(rating);
}


