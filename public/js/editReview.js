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
    $('#submiteditreview').click(editReviewSubmit);
}

function editReviewSubmit(event) {
    console.log("Initialize");
    event.preventDefault();

    var review = $('#review').val();
    console.log(review);
    var summary = $('#summary').val();
    console.log(summary);
    var date = $('#date').val();
    console.log(date);
    var where = $('#where').val();
    console.log(where);

    var submit = review!=""||summary!=""||date!=""||where!="";
    if (submit) {
        var obj = 
        {
            "review"    : review,
            "summary" : summary,
            "date"    : date,
            "where"    : where
        };
        console.log(obj);
    
        $.post("/editSubmitReview", obj, null);
        alert("Successfully made review changes! Refreshing the page now...");
        location.reload();
    };
    
}