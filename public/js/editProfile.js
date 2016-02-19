/**
 * Created by arnoldchen on 2/18/16.
 */
$(document).ready(function() {
    //console.log("cooool bro jkdsf;lfjs;ldjflsd");
    initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    //console.log("cooool bro");

    //console.log("hi2");
    $('#submit').click(changeValue);
    //$.get("/editSubmit", insertReview);
    // where.html()
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
