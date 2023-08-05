window.addEventListener("load", () => {
    var discord = document.getElementById("discord");
    var github = document.getElementById("github");

    anime({
        targets: '#discord',
        backgroundColor: '#818181',
        borderRadius: '10%',
        duration: 200,
        easing: 'easeInOutQuad'
    });

    discord.onmouseenter = function(){
        anime({
            targets: '#discord',
            backgroundColor: '#414141',
            borderRadius: '75%',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    };

    discord.onmouseleave = function(){
        anime({
            targets: '#discord',
            backgroundColor: '#818181',
            borderRadius: '10%',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    };

    discord.onclick = function(){
        window.open("https://discordapp.com/users/597426724208246807", "_self");
    };

    anime({
        targets: '#github',
        backgroundColor: '#818181',
        borderRadius: '10%',
        duration: 200,
        easing: 'easeInOutQuad'
    });

    github.onmouseenter = function(){
        anime({
            targets: '#github',
            backgroundColor: '#414141',
            borderRadius: '75%',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    };

    github.onmouseleave = function(){
        anime({
            targets: '#github',
            backgroundColor: '#818181',
            borderRadius: '10%',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    };

    github.onclick = function(){
        window.open("https://github.com/wionzu", "_self");
    };
});