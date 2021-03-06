﻿function sendSwitchParamAjax(id, command) {
    debugger;
    $.ajax({
        url: '/api/values/' + id + '/' + command,
        type: 'PUT',
        success: function (data) {
            debugger;
            $.ajax({
                url: '/SmartHouse/RenderState' + $("#deviceName-" + id).val(),
                type: 'POST',
                data: JSON.stringify(data),
                dataType: 'html',
                contentType: 'application/json',
                success: function (partial) {
                    debugger;
                    $("#result-" + id).html(partial);
                }
            });
        }
    });
}

//HandSetParams
function sendSetParamAjax(id, command) {
    debugger;
    $.ajax({
        url: '/api/values/' + id + '/' + command + '/' + $('#handSetPar-' + command + id).val(),
        type: 'PUT',
        success: function (data) {
            debugger;
            $.ajax({
                url: '/SmartHouse/RenderState' + $("#deviceName-" + id).val(),
                type: 'POST',
                data: JSON.stringify(data),
                dataType: 'html',
                contentType: 'application/json',
                success: function (partial) {
                    debugger;
                    $("#result-" + id).html(partial);
                }
            });
        }
    });
}

//DELETE
function sendDelAjax(id) {
    debugger;
    $.ajax({
        url: '/api/values/Delete/' + id,
        type: 'DELETE',
        success: function () {
            $("#result-" + id).remove();
        }
    });
}

////AC Mode
//function sendAjaxSetMode(id, command) {
//    //debugger;
//    $.ajax({
//        url: '/api/values/SetMode/' + $('#wMode').val(),
//        type: 'PUT',
//        success: function (result) {
//            //debugger;
//            $.ajax({
//                url: '/SmartHouse/RenderState' + $("#deviceName-" + id).val(),
//                type: 'POST',
//                contentType: 'application/html; charset=utf-8',
//                data: result,
//                success: function (partial) {
//                    $("#result-" + id).html(partial);
//                }
//            });
//        }
//    });
//}

//Bright MODE
//function sendAjaxSetBright(id) {
//    //debugger;
//    $.ajax({
//        url: '/api/values/SetBright/' + $("#brMode option:selected").text(),
//        type: 'PUT',
//        success: function (result) {
//            //debugger;
//            $.ajax({
//                url: '/SmartHouse/RenderState' + $("#deviceName-" + id).val(),
//                type: 'POST',
//                contentType: 'application/html; charset=utf-8',
//                data: result,
//                success: function (partial) {
//                    $("#result-" + id).html(partial);
//                }
//            });
//        }
//    });
//}