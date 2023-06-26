function changeTime()
        {
            let current = new Date();
            let seconds =  current.getSeconds();
            let minutes =  current.getMinutes();
            let hours =  current.getHours();

            let secondshand = document.getElementById("secondhand");
            secondshand.style.transform = `translate(-50%,-50%) rotate( ${seconds*6}deg)`;

            let minuteshand = document.getElementById("minutehand");
            minuteshand.style.transform = `translate(-50%,-50%) rotate( ${minutes*6}deg)`;

            let hourshand = document.getElementById("hourhand");
            hourshand.style.transform = `translate(-50%,-50%) rotate( ${(hours*30) + (minutes*0.5)}deg)`;
        }
        setInterval(() => {changeTime()}, 1000)