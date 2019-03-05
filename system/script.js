

//******************************************************************************
// Init functions
//******************************************************************************

      function loadArea() {
        $.getJSON("areas/" + active_area + "/area.json", function( data ) {
            createMap(63.8256912, 20.2631702, 15);

            $.getJSON("areas/" + active_area + "/locations.json", function( data ) {
              $.each(data, function(key, item) {

                var buttons_object;
                if (item.buttons == "") { buttons_object = "false"; }
                else { buttons_object = item.buttons; }

                //create card in footer for each location
                createLocationCard(item.id, item.title, item.type, item.image, item.content, buttons_object);

                //create hiddens modals for each location
                createLocationModal(item.id, item.title, item.type, item.image, item.content, buttons_object);

                //create markers on map for each location
                setTimeout(function () { //Create markers at random intervals for scatter effects
                  createMarker(item.id, item.title, item.type, item.lat, item.long,);
                }, Math.floor((Math.random() * 1000)));


              });
            });

          });


          createMdModal();

          /*
          //Open modal from GET param
          var url_string = window.location.href;
          var url = new URL(url_string);
          var location = url.searchParams.get("location");
          if (location) {
            oldopenModal("areas/" + active_area + "/" + location);
          }
          */
      }



//******************************************************************************
// Menu functions
//******************************************************************************

$("#rm-button-left-2").click(function(){
  $("#select-area-modal").modal("show");
});





//******************************************************************************
// Settings functions
//******************************************************************************


$("#select-area-save").click(function(){
  saveSettings("settings_area", $("#select-area-input").val());
  $("#select-area-modal").modal("hide");
  location.reload();
});



function saveSettings(name, value) {
  localStorage.setItem(name, value);
}









//******************************************************************************
// Map functions
//******************************************************************************

      function createMap(setCenterLat, setCenterLong, setZoom) {
        var mapProp= {
          center:new google.maps.LatLng(setCenterLat, setCenterLong),
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          zoom:setZoom,
          disableDefaultUI: true
        };
        window.map = new google.maps.Map(document.getElementById("map"),mapProp);
      }

      function createMarker(targetID, targetTitle, targetTYPE, targetLAT, targetLONG) {
        var latlong = new google.maps.LatLng(targetLAT, targetLONG);
        var marker = new google.maps.Marker({
          position:latlong,
          animation:google.maps.Animation.DROP,
          title: targetTitle,
          icon: 'pin-'+ targetTYPE +'.png',
          map: map
        });


        marker.addListener('click', function() {
          openLocationModal(targetID);
        });
      }


//******************************************************************************
// Footer functions
//******************************************************************************

      function createLocationCard(card_id, card_title, card_type, card_image, card_content, card_buttons) {
        var new_card = document.createElement("DIV");
        new_card.setAttribute("id", "card_" + card_id);
        new_card.setAttribute("class", "card footer-cards bg-light");

        /*
        var new_card_header= document.createElement("DIV");
        new_card_header.setAttribute("class", "card-header");
        new_card_header.innerHTML = "";
        new_card.appendChild(new_card_header);
        */


        var new_card_image= document.createElement("IMG");
        new_card_image.setAttribute("class", "card-img-top");
        new_card_image.setAttribute("src", "areas/"+ active_area + "/" + card_image);
        new_card_image.setAttribute("onclick", "openLocationModal('"+ card_id +"')");
        new_card.appendChild(new_card_image);

        var new_card_body = document.createElement("DIV");
        new_card_body.setAttribute("class", "card-body black");
        new_card_body.setAttribute("onclick", "openLocationModal('"+ card_id +"')");

        var new_card_title = document.createElement("H6");
        new_card_title.setAttribute("class", "card-title");
        new_card_title.innerHTML = card_title;
        new_card_body.appendChild(new_card_title);

        var new_card_text = document.createElement("P");
        new_card_text.setAttribute("class", "card-text small");
        new_card_body.appendChild(new_card_text);

        new_card.appendChild(new_card_body);

        var new_card_footer = document.createElement("DIV");
        new_card_footer.setAttribute("class", "card-footer");
        new_card.appendChild(new_card_footer);


        if (card_buttons != "false") {
          for (var button_item in card_buttons) {
            var new_card_button = document.createElement("A");
            new_card_button.setAttribute("class", "btn text-white bg-"+ card_buttons[button_item][1]);
            new_card_button.setAttribute("onclick", "openMdModal('areas/"+ active_area + "/" + card_buttons[button_item][0] +"', '"+ card_id +"')");
            new_card_button.innerHTML = "<i class='material-icons'>stars</i>";
            new_card_footer.appendChild(new_card_button);
          }
        }


        $("#footer-content").append(new_card)

        $.get("areas/"+ active_area + "/" + card_content, function(response) {
          var markDown = new showdown.Converter();
          html = markDown.makeHtml(response);
          $('#card_'+card_id+' .card-body .card-text').append(html);
        });


      }
















//******************************************************************************
// Modal functions
//******************************************************************************


      function createMdModal() { //Create one modal used as container for all markdown content
        var new_modal = document.createElement("DIV");
        new_modal.setAttribute("class", "modal fade");
        new_modal.setAttribute("id", "md-modal");
        new_modal.setAttribute("tabindex", "-1");
        new_modal.setAttribute("role", "dialog");
        new_modal.setAttribute("aria-hidden", "true");

        var new_modal_dialog = document.createElement("DIV");
        new_modal_dialog.setAttribute("class", "modal-dialog modal-dialog-centered modal-lg");
        new_modal_dialog.setAttribute("role", "document");

        var new_modal_content = document.createElement("DIV");
        new_modal_content.setAttribute("class", "modal-content");

        var new_modal_header = document.createElement("DIV");
        new_modal_header.setAttribute("class", "modal-header");

        var new_modal_close = document.createElement("A");
        new_modal_close.setAttribute("class", "btn btn-light ml-auto");
        new_modal_close.setAttribute("data-dismiss", "modal");
        new_modal_close.setAttribute("data-target", "md-modal");
        new_modal_close.innerHTML = "<i class='material-icons'>close</i>";
        new_modal_header.appendChild(new_modal_close);

        new_modal_content.appendChild(new_modal_header);

        var new_modal_body = document.createElement("DIV");
        new_modal_body.setAttribute("class", "modal-body");
        new_modal_body.setAttribute("id", "md-modal-body");


        new_modal_content.appendChild(new_modal_body);

        new_modal_dialog.appendChild(new_modal_content);

        new_modal.appendChild(new_modal_dialog);

        $("body").append(new_modal)

      }

      function loadMdModal(md_file) {
        $.get(md_file, function(response) {
          var markDown = new showdown.Converter();
          html = markDown.makeHtml(response);
          $("#md-modal-body").empty();
          $("#md-modal-body").append(html);
        });


        $("#footer").collapse("hide");
        $("#md-modal").modal("show");
      }


      //Create separate modals for all locations
      function createLocationModal(modal_id, modal_title, modal_type, modal_image, modal_content, modal_buttons) {
        var new_modal = document.createElement("DIV");
        new_modal.setAttribute("class", "modal fade");
        new_modal.setAttribute("id", "modal_" + modal_id);
        new_modal.setAttribute("tabindex", "-1");
        new_modal.setAttribute("role", "dialog");
        new_modal.setAttribute("aria-hidden", "true");

        var new_modal_dialog = document.createElement("DIV");
        new_modal_dialog.setAttribute("class", "modal-dialog modal-dialog-centered modal-lg");
        new_modal_dialog.setAttribute("role", "document");

        var new_modal_content = document.createElement("DIV");
        new_modal_content.setAttribute("class", "modal-content");

        var new_modal_header = document.createElement("DIV");
        new_modal_header.setAttribute("class", "modal-header");

        var new_modal_close = document.createElement("A");
        new_modal_close.setAttribute("class", "btn btn-light ml-auto");
        new_modal_close.setAttribute("data-dismiss", "modal");
        new_modal_close.setAttribute("data-target", modal_id);
        new_modal_close.innerHTML = "<i class='material-icons'>close</i>";
        new_modal_header.appendChild(new_modal_close);

        new_modal_content.appendChild(new_modal_header);

        var new_modal_image = document.createElement("IMG");
        new_modal_image.setAttribute("class", "card-img-top");
        new_modal_image.setAttribute("src", "areas/"+ active_area + "/" + modal_image);
        new_modal_content.appendChild(new_modal_image);

        var new_modal_body = document.createElement("DIV");
        new_modal_body.setAttribute("class", "modal-body");

        var new_modal_title = document.createElement("H4");
        new_modal_title.setAttribute("class", "modal-title");
        new_modal_title.innerHTML =modal_title;
        new_modal_body.appendChild(new_modal_title);

        var new_modal_text = document.createElement("P");
        new_modal_text.setAttribute("class", "modal-text");
        new_modal_body.appendChild(new_modal_text);


        if (modal_buttons != "false") {
          for (var button_item in modal_buttons) {
            var new_modal_button = document.createElement("A");
            new_modal_button.setAttribute("class", "btn text-white btn-block bg-"+ modal_buttons[button_item][1]);
            new_modal_button.setAttribute("onclick", "openMdModal('areas/"+ active_area + "/" + modal_buttons[button_item][0] +"', '"+ modal_id +"')");
            new_modal_button.innerHTML = button_item;
            new_modal_body.appendChild(new_modal_button);
          }
        }

        new_modal_content.appendChild(new_modal_body);

        new_modal_dialog.appendChild(new_modal_content);

        new_modal.appendChild(new_modal_dialog);

        $("body").append(new_modal)

        $.get("areas/"+ active_area + "/" + modal_content, function(response) {
          var markDown = new showdown.Converter();
          html = markDown.makeHtml(response);
          $('#modal_'+modal_id+' .modal-body .modal-text').append(html);
        });

      }

      function openLocationModal(id) {
        $("#footer").collapse("hide");
        $("#md-modal").modal("hide");
        $("#modal_"+id).modal("show");
      }


      function openMdModal(md, m_id) {
        $("#footer").collapse("hide");
        $("#modal_"+ m_id).modal("hide");

        setTimeout(function(){ //Must wait for previus hide to avoid bugs
          loadMdModal(md);
        },500);
      }
