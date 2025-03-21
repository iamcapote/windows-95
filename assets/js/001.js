// Collect all elements with class "btn"
var btns = document.getElementsByClassName("btn");
if (btns.length >= 3) {
    var max = btns[1];
    var min = btns[2];

    function maximize () {
        var post = document.getElementsByClassName("content")[0];
        var cont = document.getElementsByClassName("post_content")[0];
        var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

        if (wid > 900) {
            var widf = wid * 0.9;
            post.style.width = widf + "px";

            if (wid < 1400) {
                cont.style.width = "99%";
            } else {
                cont.style.width = "99.4%";
            }
        }
    }

    function minimize () {
        var post = document.getElementsByClassName("content")[0];
        var cont = document.getElementsByClassName("post_content")[0];
        var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

        if (wid > 900) {
            post.style.width = "800px";
            cont.style.width = "98.5%";
        }
    }

    max.addEventListener('click', maximize, false);
    min.addEventListener('click', minimize, false);
}
