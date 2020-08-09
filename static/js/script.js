$(document).ready(function() {

  $('.box-item').draggable({
    cursor: 'move',
    helper: 'clone',
    revert: true,
    revertDuration: 0
  });

  $("#container1").droppable({

    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      console.log(itemid);
      $("#result").html('');
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container1");
        }
      });
    }
  });

  $("#container2").droppable({

    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $("#result").html('');
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container2");
        }
      });
    }
  });


  $( "#action" ).click(function() {
      var rels = [];
      $("#result").html('');

      $('#container2 div').each(function (i) {

        var index = $(this).index();
        var text = $(this).text();
        var value = $(this).attr('value');
        console.log(text);
        //$(this).attr('contenteditable','true');
        rels.push(text);
      });

      if ( ! rels.length) {
          $("#result").html('<h1>Please select some drone actions.</h1>');
          return
      }

      //alert(rels);
      var action = rels.toString()

      $.ajax({
          url: '/sendData',
          data: {"droneData": action},
          dataType: 'json',
          type: 'POST',
          success: function(response){
            console.log(response.result);

            if (response.result == 'failure') {

                console.log(response.result);

            }

            $("#result").html(response.html);

          }
      });

    });

});
