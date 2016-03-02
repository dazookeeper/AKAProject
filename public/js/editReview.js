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
    $('#editreview').click(editReviewSubmit);
}

function editReviewSubmit(event) {
    // event.preventDefault();

    var review = $('.review').val();
    var summary = $('#summary').val();
    var date = $('#date').val();
    var where = $('#where').val();
    var rating = $('#rating').val();
    var mood = $('#mood').val();

    var submit = review!=""&&summary!=""&&date!=""&&where!=""&&rating!=""&&mood!="";
    if (submit) {
        event.preventDefault();
        /*
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
        */
        var obj = 
        {
            "review"    : review,
            "summary" : summary,
            "date"    : date,
            "where"    : where,
            "rating"    : rating,
            "mood"    : mood
        };
        console.log(obj);
    
        $.post("/editSubmitReview", obj, null);
        alert("Review submitted Successfully! Refreshing the page now...");
        location.reload();
    }
    
}