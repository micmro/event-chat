
(function(){
    var socket = io();

    var formEl = document.getElementsByTagName("form")[0]
    var m = document.getElementById("m")
    var msgs = document.getElementById("messages")

    formEl.addEventListener('submit', function (evt) {
        evt.preventDefault()
        socket.emit('chat message', m.value);
        return false;
    });
    socket.on('chat message', function (msg) {
        var newLi = document.createElement("li")
        newLi.textContent = msg
        msgs.appendChild(newLi)
    })
})();