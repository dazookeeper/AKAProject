/**
 * Created by kylezhu on 2/23/16.
 */
 'use strict';

$(document).ready(function() {
    // console.log("cooool bro jkdsf;lfjs;ldjflsd");
    initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    //console.log("cooool bro");

    //console.log("hi2");
    // $('#submit').click(changeValue);
    //$.get("/editSubmit", insertReview);
    // where.html()
    $('#submitprofile').click(editProfileSubmit);
}

function editProfileSubmit(event) {
    // event.preventDefault();
    var aboutme = $('#aboutme').val();
    var fav1 = $('#fav1').val();
    var fav2 = $('#fav2').val();
    var fav3 = $('#fav3').val();
    var gen1 = $('#gen1').val();
    var gen2 = $('#gen2').val();
    var gen3 = $('#gen3').val();


    var submit = aboutme!=""&&fav1!=""&&fav2!=""&&fav3!=""&&gen1!=""&&gen2!=""&&gen3!="";
    if (submit) {
        event.preventDefault();
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;

        var obj = 
        {
            "date"    : output,
            "user"    : "temporary",
            "aboutme" : aboutme,
            "fav1"    : fav1,
            "fav2"    : fav2,
            "fav3"    : fav3,
            "gen1"    : gen1,
            "gen2"    : gen2,
            "gen3"    : gen3
        };
        console.log(obj);
    
        $.post("/editSubmit", obj, null);
        alert("Review submitted Successfully! Refreshing the page now...");
        location.reload();
    }

}































function changeValue() {


    $.getJSON( 'profile.json', function( data ) {
        jsonObject=data;
        //console.log(data);
        var fav2= document.getElementById('fav2').value;

        $.ajax({
            type: "PUT",
            url: '/editProfileLoad',
            contentType: "application/json",
            data: {"Favorite2": fav2 }
        });

        data.Favorite2=fav2;
        console.log(data.Favorite2)
    })

  //  console.log(jsonObject);

    //var fav2= document.getElementById('fav2').value;
    //jsonObject.put("Favorite2", fav2);
    //console.log("hi");
}
