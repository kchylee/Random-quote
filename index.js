$(document).ready(() => {
    $("#getQuote").hover(() => {
        $("#getQuote").animate({"font-size": "2.1vw"}, 100);
    }, () => { 
        $("#getQuote").animate({"font-size": "2vw"}, 100);
    });

    $("#getQuote").click(() => {
        $("#getPerson").css("display", "none");
        let firstName;
        let req = new XMLHttpRequest(),
            method = "GET",
            url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
        req.open(method, url, true);
        req.setRequestHeader("X-Mashape-Key", "rvDRHtqfpxmsh3Vrk3SdZRPd6aUop1lXt5fjsnNrDvbdJnVPhU");
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE && req.status === 200){
                let resObj = JSON.parse(req.responseText);
                $("#quote").html(resObj.quote);
                $("#person").html(resObj.author);
                $("#quote-with-person").css("display", "block");
                $(".messages").scrollTop(1000);
                firstName = resObj.author.replace(/(\w+)(\s.+)+/, '$1');                       
                window.setTimeout(()=>{
                    $("#getPerson").css("display", "block").html(firstName + " Who?");
                    $(".messages").scrollTop(1000);
                }, 2000);
            }else{
                $("#quote").html("An Error Occurred: " + req.status);
            }
        };
        req.send()
    })

    $("#getPerson").hover(() => {
        $("#getPerson").animate({"font-size": "2.1vw"}, 100);
    }, () => { 
        $("#getPerson").animate({"font-size": "2vw"}, 100);
    });

    $("#getPerson").click(() => {
        let name = document.getElementById("person").innerHTML.replace(/\s/g, "+");
        window.location.href = "https://www.google.ca/#q=" + name;
    })
})