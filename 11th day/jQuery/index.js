$("h1").css("color","white");
$("button").click(function () { 
    $("h2").css("color","gold");
    
});

$("input").keydown(function (event) { 
    console.log(event.key);
});

$(document).keydown(function (event) { 
    $("h1").text(event.key);

});

$("h1").before("<button>new</button>");
$("h2").after("<button>among</button>");
$("h2").prepend("<button>before</button>");
$("h2").append("<button>after</button>");
$("h3").remove();
$("h2").on("mouseover",function(){$("h2").css("backgroundColor","red");})

$("button#pablo").on("click",function(){$("h2").hide();});
$("button#tablo").on("click",function(){$("h2").show();});

$("button").on("click",function(){
    $("h1").toggle();})

$("button#pablo").on("click",function(){$("h3").fadeIn();});
$("button#tablo").on("click",function(){$("h3").fadeOut();});

$("button").on("click",function(){
    $("h1").fadeToggle();
})

$("button").on("click",function(){
    $("div#slide").slideToggle();
})

$("button#toggle").on("click",function(){
    $("div#slide").slideToggle();
})

$("button#down").on("click",function(){
    $("div#slide").slideDown();
})

$("button#up").on("click",function(){
    $("div#slide").slideUp();
})

$("button").on("click",function(){
    $("div#slide").slideUp().slideDown().animate({opacity:0.5});
})