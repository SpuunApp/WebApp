 function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
   

    function onDeviceReady() {
        document.addEventListener("pause", onPause, false);
    }

    // Handle the pause event
    //
    function onPause() {
    }