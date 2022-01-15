let iframe_created = false;
let pages = 0
let all_pages = 3
let current_page = 1
let games_created = 0
let games_played = 0
let current_game = ""
var frame = document.createElement("iframe");
frame.scroll = false
let headerContainer = document.querySelector(".headerContainer");

const games = [
    {
        gamename: "Retro Bowl",
        gameIMG: "images/rb.jpg",
        link: "moyaimoment.github.io/games/retro-bowl/",
        viewed_on: 0,
        genre: "Sports"
    },
    {
        gamename: "Clumsy Bird",
        gameIMG : "images/clum.jpg",
        link: "ellisonleao.github.io/clumsy-bird/",
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Duck Hunt",
        gameIMG : "images/dh.jpg",
        link: "duckhuntjs.com/",
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Chrome Dinosaur Game",
        gameIMG : "images/dino.jpg",
        link: "bandruf.github.io/dinosaur-game/" ,
        viewed_on: 0  ,                genre: "Endless"
    },
    {
        gamename: "Astray",
        gameIMG : "images/as.jpg",
        link: "bandruf.github.io/astray/"   ,
        viewed_on: 0,                genre: "Horror"
    },
    {
        gamename: "MineKhan",
        gameIMG : "images/khan.jpg",
        link: "bandruf.github.io/minecraft/"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "BreakLock",
        gameIMG : "images/lock.png",
        link: "bandruf.github.io/BreakLock/"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Doodle Jump",
        gameIMG : "images/dood.jpg",
        link: "bandruf.github.io/Doodle-Jump/"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Hextris",
        gameIMG : "images/hex.jpg",
        link: "bandruf.github.io/Hextris"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Chroma",
        gameIMG : "images/chrome.png",
        link: "bandruf.github.io/friendlyfire"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "RooftopSnipers",
        gameIMG : "images/rooftop-snipers.jpg",
        link: "bandruf.github.io/rooftopsnipers"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Slope",
        gameIMG : "images/slope.png",
        link: "sloped.yodacode.repl.co/ubgo/aHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20=/scheng123321/tmm-html5-cdn1/master/slope/index.html"   ,
        viewed_on: 0,                genre: "Endleses"
    },
    {
        gamename: "Trigger Rally",
        gameIMG : "images/car.png",
        link: "codeartemis.github.io/TriggerRally/server/public/"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Stack Bump 3D",
        gameIMG : "images/3dballs.png",
        link: "bandruf.github.io/sb/",
        viewed_on: 0,                   genre: "Action"
    },
    {
        gamename: "Box Shooter",
        gameIMG : "images/Screenshot 2021-12-14 203642.png",
        link: "bandruf.github.io/sb/"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Basket Slam Dunk 2",
        gameIMG : "images/unnamed.png",
        link: "script.google.com/macros/s/AKfycbxC3f2yG-ZwWEve9jC4v_NpAelxseRc9Hnz2TtffpyShycbjgI/exec"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Dont Fall!",
        gameIMG : "images/dont.jpg",
        link: "script.google.com/macros/s/AKfycbxt0SlXENvwCsHIvL_BX8wWdG-mdZUxUwwt7smRK0bwEhD8l0s/exec"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Google Feud",
        gameIMG : "images/fued.jpg",
        link: "script.google.com/macros/s/AKfycbwsZ8H_YdcS9zu7gsGcgpY67QDa94RpbNL4OH0OlPvuunzwiNGd/exec"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Wheelie Bike",
        gameIMG : "images/wheelie-challenge-2-game.png",
        link: "script.google.com/macros/s/AKfycbzNSwtKXjTyHdQaHz2NZIIdWjc61GWuX86FAa2TwJZICvDc9wk/exec"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Geometry Neon Dash",
        gameIMG : "images/geometry-neon-dash-game.png",
        link: "script.google.com/macros/s/AKfycbzTzTK_AZkEg-fdreQUOgkPtqUljp2NGULqWeFKBYoG0yMnHQ/exec"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Basket Bros",
        gameIMG : "images/r7xClHeUcJ2ENl-400-300.jpg",
        link: "basketballtips.info"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Get On Top",
        gameIMG : "images/3078616e30ecc5f326bd8e6cad728a03.png",
        link: "script.google.com/macros/s/AKfycbyj2EuRyNJT_Nd_0dRFwkd1LRIFfNzlPwzbhYu14vblDAkBdMY/exec"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Tank Mayhem",
        gameIMG : "images/Tank_Struggle.jpg",
        link: "script.google.com/macros/s/AKfycbx-xrx7Y-kPAXkmYJeeu4l8IRFO6AXozSKV0bph_8cPetPWrQ/exec"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Minicars Soccer",
        gameIMG : "images/9263_5eb3ef12bf936.jpg",
        link: "script.google.com/macros/s/AKfycbyAY5iDomb7jUu7TPmtJ0Ufv6b6Jpr7sIuj4-9ATWlkT6I2xcU/exec"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Tunnel Rush 2",
        gameIMG : "images/tunnel-rush-2-game-315x237.jpg",
        link: "script.google.com/macros/s/AKfycbzJk4wpOC3HuBtvpCz2xdeXOcYEsgBzv3svEevIxSJtp5aGjY_nIdPW/exec"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Football Legends 2019",
        gameIMG : "images/228454_2.jpg",
        link: "script.google.com/macros/s/AKfycbxHGjinyF8a754fOQFShH17Ti4rYlTyGBRONth86eB0PS-3VfZw/exec"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Burrito Bison Launcha Libre",
        gameIMG : "images/launch.png",
        link: "moyaimoment.github.io/games/burrito/"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Park The Car",
        gameIMG : "images/park-my-car-2.jpg",
        link: "moyaimoment.github.io/games/park-the-car/"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Paper.io2",
        gameIMG : "images/d2708e8aa31df3fe7b211bca36405d6d.jpg",
        link: "script.google.com/macros/s/AKfycbxO8jKpDOwFYpSGrGbReR4Mv2e1-6T4uHsWBphygjzyG8Qqpvij/exec"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "FNAF-2",
        gameIMG : "images/fnaf2.png",
        link: "scratch.mit.edu/projects/466964675/embed"   ,
        viewed_on: 0,                genre: "Horror"
    },
    {
        gamename: "FNAF-3",
        gameIMG : "images/fnaf3.png",
        link: "scratch.mit.edu/projects/431671044/embed"   ,
        viewed_on: 0,                genre: "Horror"
    },
    {
        gamename: "Cookie Clicker",
        gameIMG : "images/cookie.jpg",
        link: "eli-schwartz.github.io/cookieclicker/"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Uno",
        gameIMG : "images/uno.png",
        link: "www.hoodamath.com/mobile/games/four-colors/game.html?nocheckorient=1"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Connect 4",
        gameIMG : "images/connect.png",
        link: "www.hoodamath.com/mobile/games/connect-4/game.html?nocheckorient=1"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Drift Boss",
        gameIMG : "images/5064_5eb3e5f28588b.jpg",
        link: "www.mathplayground.com/drift-boss-v2/index.html"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Mini Golf 2D",
        gameIMG : "images/mini-golf-2d-180x180.png",
        link: "www.mathplayground.com/mini-golf-2d/index.html"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Puppet Hockey Battle",
        gameIMG : "images/puppet-hockey-battle-180x180.png",
        link: "www.mathplayground.com/puppet-hockey/index.html"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "Lows Adventure 2",
        gameIMG : "images/lows-adventure-2-180x180.png",
        link: "www.mathplayground.com/lows-adventures-2a/index.html"   ,
        viewed_on: 0,                genre: "Action"
    },
    {
        gamename: "Duck Life Space",
        gameIMG : "images/ducklifespace.png",
        link: "www.mathplayground.com/duck5/index.html"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Duck Life 4",
        gameIMG : "images/ducklife4.png",
        link: "www.mathplayground.com/duck4/index.html"   ,
        viewed_on: 0,                genre: "None"
    },
    {
        gamename: "Motocross Hero",
        gameIMG : "images/motocross-180x180.png",
        link: "www.mathplayground.com/motocross-hero/index.html"   ,
        viewed_on: 0,                genre: "Sports"
    },
    {
        gamename: "X-Trench Run",
        gameIMG : "images/xtrenchrun_lg.png",
        link: "www.mathplayground.com/x-trench-run/index.html"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Paper Minecraft",
        gameIMG : "images/WNYRYXU05UfhtN-400-300.jpg",
        link: "bandruf.github.io/ggg/"   ,
        viewed_on: 0,                genre: "Endless"
    },
    {
        gamename: "Terraria(SCRATCH)",
        gameIMG : "images/322341152_480x360.png",
        link: "scratch.mit.edu/projects/322341152/embed"   ,
        viewed_on: 0,
        genre:"Endless"
    },
    {
        gamename: "8 Ball",
        gameIMG : "images/pool.jpeg",
        link: "isgames.github.io/8ball/"   ,
        viewed_on: 0,
        genre: "Action"
    },
    {
        gamename: "1v1 LOL",
        gameIMG : "images/download (1).jpg",
        link: "degeneracy.dazaseal.repl.co/go/hvtrs8%2F-1t1%2Clml/"   ,
        viewed_on: 0,
        genre: "Action"
    },
    {
        gamename: "The Open House",
        gameIMG : "images/KEnve9.png",
        link: "v6p9d9t4.ssl.hwcdn.net/html/2049913/The%20Open%20House%20WebGL/index.html?v=1591302211"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "make sure its closed",
        gameIMG : "images/LCV4CG.png",
        link: "v6p9d9t4.ssl.hwcdn.net/html/1342653/MSIC-WEBGL/index.html?v=1574335785"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "LeftOvers",
        gameIMG : "images/leftovers.png",
        link: "v6p9d9t4.ssl.hwcdn.net/html/4826476/Leftovers_WebGL/index.html"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "Burger & Frights",
        gameIMG : "images/burger-frights.jpg",
        link: "v6p9d9t4.ssl.hwcdn.net/html/5033568/index.html"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "78 Hour Rain",
        gameIMG : "images/GffS8p.gif",
        link: "v6p9d9t4.ssl.hwcdn.net/html/5033568/index.html"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "ON.OFF",
        gameIMG : "images/download (2).jpg",
        link: "v6p9d9t4.ssl.hwcdn.net/html/1366873/index.html?v=1574335727"   ,
        viewed_on: 0,
        genre: "Horror"
    },
    {
        gamename: "MIDNIGHT CAMPING",
        gameIMG : "images/eel1wX.png",
        link: "v6p9d9t4.ssl.hwcdn.net/html/5077060/index.html"   ,
        viewed_on: 0,
        genre: "Horror"
    },
]

let pageIndex = 1

function fullscreen() {
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) { /* Safari */
        frame.webkitRequestFullscreen();
    } else if (frame.msRequestFullscreen) { /* IE11 */
        frame.msRequestFullscreen();
    }
  }

function change_page(bof){
    if (bof == "+") {
        document.getElementById("pg"+current_page).style.display = "none"
        current_page += 1
    } else {
        document.getElementById("pg"+current_page).style.display = "none"
        current_page -= 1
    }

    destroy_frame()

    if (!document.getElementById("pg"+current_page)) {
        console.log("change page script : "+current_page)

        if (document.getElementById("page-count")) {
            document.getElementById("page-count").innerHTML = "Page : "+current_page
        }
    
        let new_page = document.createElement("div")
        new_page.id = "pg"+current_page
        new_page.classList.add("page")
        console.log("213 : "+current_page)
    
        games.map(function(p){
            console.log(p.viewed_on,p.gamename)
            if (p.viewed_on == current_page) {
                new_page.style.display = "flex"
                document.getElementById(p.gamename).style.display = "flex"
                new_page.appendChild(document.getElementById(p.gamename))
            }
        })
        document.body.appendChild(new_page)
    } else{
        document.getElementById("pg"+current_page).style.display = "flex"
    }
}

frame.classList.add("frame")

function create_iframe(link,r){
    let page234242 = document.querySelector(".game-holder")
    let gameButton = document.querySelectorAll(".game-button")
    let holder = document.querySelectorAll(".holder")

    if (!iframe_created == true){
        page234242.style.display = "flex"
        games_played = games_played + 1;
        frame.src = "https://"+link;
        //document.getElementById("bottom-settings").style.visibility = "visible"

        holder.forEach(removeBtn => { 
            removeBtn.style.display = "none"
        })

        //headerContainer.style.visibility= "hidden";
        document.getElementById("bottom-settings").style.display = "flex"
        page234242.appendChild(frame)
        iframe_created = true; 
    }
}

function destroy_frame(){
    let gameButton = document.querySelectorAll(".game-button")
    let holder = document.querySelectorAll(".holder")

    if (iframe_created == true) {
        //headerContainer.style.visibility= "visible";

        holder.forEach(removeBtn => { 
            removeBtn.style.display = "flex"
        })

        document.getElementById("bottom-settings").style.display = "none"
        frame.remove();
        iframe_created = false;
    }
}
// end of iframe




function u(i){
    i.viewed_on = pageIndex
    let div = document.createElement("div")
    div.id = i.gamename
    div.classList.add("holder")
    let div_game_name = document.createElement("button")
    div_game_name.innerHTML = i.gamename
    div_game_name.classList.add("game-button")

    div_game_name.onclick = function() {
        create_iframe(i.link,i.rom_game)
    };

    let image = document.createElement("img")
    image.classList.add("game-image")
    image.src = i.gameIMG
    div.appendChild(image)
    div.appendChild(div_game_name)
    document.getElementById("pg"+current_page).appendChild(div)
    games_created += 1

    if (i.viewed_on != current_page) {
        div.style.display = "none"
    }

    if (games_created > 25){
        pages += 1
        pageIndex += 1
        games_created = 0
    }
}

document.getElementById("nextPage").addEventListener("click", function() {
    if (current_page != all_pages) {
        change_page("+")
    }
});

document.getElementById("previousPage").addEventListener("click", function() {
    if (current_page > 1) {
        change_page("-")
    }
});

games.map(function(i){
    u(i)
})

window.addEventListener('keydown', function (e) {
    if (e.key == ":") {
        window.location.href = "visitcounter.html"
    }
}, false);

if (current_page == 1) {
    document.getElementById("pg"+current_page).style.display = "flex"
}