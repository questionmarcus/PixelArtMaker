/*
 * This function should read in the height and the width defined by the user,
 * and create a grid of that size.
 */

function createTable(width, height) {
    for (var y; y < height; y++) {
        $('#canvas').append("<tr>\n</tr>");
        for (var x; x < width; x++) {
            // $('tr').last().append("<td></td>");
        }
    }
}

$('#chooseSize').on('submit', function(e) {
    e.preventDefault();
    console.log("hello");
});
//$('createCanvas').on('click',createTable($('widthInput').val(), $('heightInput').val()));
