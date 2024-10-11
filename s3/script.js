
var API_ENDPOINT = "https://ohwd3s4w87.execute-api.us-east-1.amazonaws.com/items"
//AJAX GET REQUEST
document.getElementById("getitem").onclick = function(){  
    $.ajax({
          url: API_ENDPOINT,
          type: 'GET',
           contentType: 'application/json; charset=utf-8',
          success: function (response) {

            $('#itemTable tr').slice(1).remove(); // Elimina todas las filas de la tabla excepto la primera (encabezado)
            
            // Recorre el array de arrays
            response.forEach(function(innerArray) {
                // Recorre cada array interno (que contiene un objeto)
                innerArray.forEach(function(item) {
                    // Agrega una fila a la tabla para cada objeto
                    $("#itemTable").append("<tr> \
                        <td>" + item.price + "</td> \
                        <td>" + item.id + "</td> \
                        <td>" + item.name + "</td> \
                        </tr>");
                });
            })
          },
          error: function () {
              alert("error");
          }
      });
    }

    //AJAX PUT REQUEST
document.getElementById("saveitem").onclick = function(){
    var inputData = {
      "price":$('#itprice').val(),
          "id":$('#itid').val(),
          "name":$('#itname').val()                
        };
    $.ajax({
          url: API_ENDPOINT,
          type: 'PUT',
          data:  JSON.stringify(inputData)  ,
          contentType: 'application/json; charset=utf-8',
          success: function (response) {
            document.getElementById("itemSaved").innerHTML = "Item Saved!";
          },
          error: function () {
              alert("error");
          }
      });
  }