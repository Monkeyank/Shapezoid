

(function() {
    var documentState = {
        loading: "loading",
        interactive: "interactive",
        complete: "complete"
    };
    var stringProcessorId = null;
    function readyStateChanged() {
        console.log(document.readyState);
        switch (document.readyState) {
        case documentState.loading:
            splash();
            break;
        case documentState.interactive:
            {
                if (document.getElementsByClassName("splash-screen-container")[0].style.display == "") {
                    splash();
                }
            }
            break;
        case documentState.complete:
            {
                setNameBannerViewport();
                unSplash();
            }
            break;
        }

    }
    function splash() {
        document.getElementsByClassName("splash-screen-container")[0].style.display = "block";
        document.getElementsByClassName("direction")[0].style.opacity = 0;
        document.getElementsByClassName("banner")[0].style.animation = "none";
        document.getElementsByClassName("content")[0].style.display = "none";
        document.getElementsByTagName('footer')[0].style.display = "none";
        stringProcessorId = window.setInterval(stringProcessor, 200);
    }
    function unSplash() {
        document.getElementsByClassName("splash-screen-container")[0].style.display = "none";
        document.getElementsByClassName("direction")[0].style.opacity = 1;
        document.getElementsByClassName("banner")[0].style.animation = "backgroundPulse 25s ease-out infinite alternate-reverse";
        document.getElementsByClassName("content")[0].style.display = "block";
        document.getElementsByTagName('footer')[0].style.display = "block";
        window.clearInterval(stringProcessorId);
        document.getElementsByClassName("name")[0].innerText = "Vijay Koushik, S.";
        document.getElementsByClassName("caption")[0].style.display = "none";
        document.getElementsByClassName("caption")[1].style.display = "block";
    }
    function processingString(length, charset) {
        charset = charset || "abcdefghijklmnopqrstuvwxyz|";
        var container = "";
        for (var i = 0; i < length; i++) {
            var pos = Math.floor(Math.random() * charset.length);
            container += charset.substring(pos, pos + 1);
        }
        return container;
    }
    function stringProcessor() {
        document.getElementsByClassName("name")[0].innerText = processingString(5) + " " + processingString(7) + processingString(1, "!@#$%^&*_+?|") + " " + processingString(1);
        document.getElementsByClassName("caption")[0].style.display = "block";
        document.getElementsByClassName("caption")[1].style.display = "none";
        document.getElementsByClassName("caption")[0].innerText = processingString(32);
    }
    function setNameBannerViewport() {
        document.getElementsByClassName("banner")[0].style.height = window.innerHeight + "px";
    }
    document.onreadystatechange = readyStateChanged;
    window.onresize = function() {
        setNameBannerViewport();
    }
    /*$(document).ready(function() {
        $(".content").removeClass("hidden");
        $(".direction").css("visibility", "visible");
    });
    $(document).on("readystatechange", function() {
        console.log(document.readyState);
        switch (document.readyState) {
        case documentState.loading:
            splash();
            break;
        case documentState.interactive:
            {
                if (document.getElementsByClassName("splash-screen-container")[0].style.display != "block") {
                    splash();
                }
            }
            break;
        case documentState.complete:
            unSplash();
            break;
        }
        function splash() {
            $("#splashScreen").css("display", "block");
        }
        function unSplash() {
            $("#splashScreen").css("display", "none");
        }

    });*/
})();
