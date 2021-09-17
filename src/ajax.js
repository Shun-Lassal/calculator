import jQuery from './jQuery.js';

$("save").click(function(){
    $.ajax({
        type: 'POST',
        url: 'rec_calcul.php',

        success: function(data) {
            $("p").text(data);
        }
    });
});