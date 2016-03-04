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

    $('.potato').click(collapseIt);
    // $('.tomato').click(googleAnalyticsClick);
    $('.view-ninth').click(googleAnalyticsClick);

    // $(':text').keyup(function() {
    //     if($('#who').val() != "" && $('#where').val() != "" && $('#summary').val() != "" && $('#review').val() != "") {
    //        $('#submitreview').removeAttr('disabled');
    //     } else {
    //        $('#submitreview').attr('disabled', true);   
    //     }
    // });





    $.get("/reviewLoad", insertReview);
    // $.get("/editProfileLoad", insertProfile);

   // where.html()
}


function collapseIt(event){
    event.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');

    console.log($this.closest('.pomme').val());





    $collapse.collapse('toggle');
    console.log("sending google analytics artist");
    ga("send", "event", "review", "click" );
    // console.log("FINISHED sending google analytics");
    
}

function googleAnalyticsClick(event) {
    // event.preventDefault();
    console.log("sending google analytics artist2");
    ga("send", "event", "review", "click" );
    // console.log("FINISHED sending google analytics");
}


// function insertProfile(result){
//     var where1 = $("#aboutme");
//     var where2 = $("#favs");
//     var where3 = $("#venues");
//     var where4 = $("#genres");
//     var where5 = $("#moods");

//     //console.log(result["AboutMe"]);
//     var AboutMe= '<p><span>H</span>ello! '+result["AboutMe"]+'</p>';
//     var favorites= '<a href="'+result['Favorite1Link']+'"><u>'+result['Favorite1']+'</u></a><br>'+result['Favorite2']+'<br>'+result['Favorite3']+'<br>';
//     var venues = result["Venue1"]+'<br>'+result["Venue2"]+'<br>'+result["Venue3"]+'<br>';
//     var genres = result["Genre1"]+'<br>'+result["Genre2"]+'<br>'+result["Genre3"]+'<br>';
//     var moods = result["Mood1"]+'<br>'+result["Mood2"]+'<br>'+result["Mood3"]+'<br>';


//     where5.html(moods);
//     where4.html(genres);
//     where3.html(venues);
//     where2.html(favorites);
//     where1.html(AboutMe);
// }

function insertReview(result){

    //console.log("vsdvdfv");
    //console.log(result[0]);
    var artistUrl=window.location.href.split('/')[4];
    //console.log(artistUrl);

    var j;
    /*if (artistUrl=="taylor-swift"){j=0;}
    else if (artistUrl=="kanye-west"){j=1;}
    else if (artistUrl=="porter-robinson") {j=2;}
    else if (artistURL=="rl-grime") {j=3;}*/
   // var jsonArray=result.toArray;
    console.log(result.length);
    for (j=0; j<result.length; j++){
        if (result[j].name.toLowerCase()===artistUrl.split('-')[0]+' '+artistUrl.split('-')[1]){ break;}
    }

    var i;
    var x=1;
    var firstname=$("#biggreen");
    var lastname =$("#biggray");
    var whereabout=$("#about");
    var whereImg = $("#profileImg");
    var where = $("#review"+x);
    var hold = result[j];
    var review = hold['reviews'];
    var image = hold["image"];
    image='<img id="PFP" class="thumbnail" src="../img/'+image+'">';
    whereImg.html(image);
    firstname.html(hold['name'].split(' ')[0].toUpperCase());
    lastname.html(hold['name'].split(' ')[1].toUpperCase());

    var about = hold["about"];
    var firstchar=about.slice(0,1);
    about= '<p><span>'+firstchar+'</span>'+about.slice(1)+'</p>';
    whereabout.html(about);


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




