/*
 * This function should read in the height and the width defined by the user,
 * and create a grid of that size.
 */

function createTable(width, height) {
    $('#canvas').empty();
    for (var y = 0; y < height; y++) {
        $('#canvas').append("<tr>\n</tr>");
        for (var x = 0; x < width; x++) {
            $('tr').last().append("<td></td>");
        }
    }
}

$('#chooseSize').on('submit', function(e) {
    e.preventDefault();
    var userInput = $(this).serialize();
    var height = userInput.split("&")[0].split("=")[1];
    var width = userInput.split("&")[1].split("=")[1];
    if (height === "" || width === "") {
        alert("Invalid Canvas Size");
    } else {
        createTable(width, height);
    }
});
//$('createCanvas').on('click',createTable($('widthInput').val(), $('heightInput').val()));
