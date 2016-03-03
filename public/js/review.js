/**
 * Created by arnoldchen on 3/2/16.
 */
$(document).ready(function() {
    //console.log("cooool bro jkdsf;lfjs;ldjflsd");
    initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('#submitreview').click(submitReview);
    document.getElementById("file_input").onchange = function(){
        var files = document.getElementById("file_input").files;
        var file = files[0];
        if(file == null){
            alert("No file selected.");
        }
        else{
            get_signed_request(file);
        }
    };
}


function get_signed_request(file){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
    console.log("what");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log("Jake Success");
                var response = JSON.parse(xhr.responseText);
                upload_file(file, response.signed_request, response.url);
            }
            else{
                console.log("Jake Fail");
                alert("Could not get signed URL."+ xhr.status);
            }
        }
        //console.log("Hola Jake")
    };
    xhr.send();
}


function upload_file(file, signed_request, url){
    console.log(signed_request);
    //console.log("Jake poop");
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("review_url").value = url;
        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };
    xhr.send(file);
}


function submitReview(event) {
    event.preventDefault();

    var who = $('#who').val();
    var where = $('#where').val();

    var quality = $('input[name="quality"]:checked').val();
    var mood = $('input[name="mood"]:checked').val();
    var summary = $('#summary').val();
    var review = $('#review').val();

    var submit = $('#who').val() != "" && $('#where').val() != "" && $('#summary').val() != "" && $('#review').val() != "";
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
            "who"     : who,
            "where"   : where,
            "quality" : quality,
            "mood"    : mood,
            "summary" : summary,
            "review"  : review,
            "image"   : document.getElementById("review_url").value
        };

        $.post("/reviewSubmit", obj, null);
        alert("Review submitted Successfully! Redirecting to Music Review");
        location.reload();
    }

}
/**
 * Created by arnoldchen on 3/3/16.
 */
