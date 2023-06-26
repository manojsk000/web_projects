console.log(typeof(document.getElementById("display").value));
function displayValue()
        {
            // console.log(event.target.innerText);
            let inputTag = document.getElementById("display");
            inputTag.value = inputTag.value + event.target.innerText
        }

        function calculateValue()
        {
            let inputTag = document.getElementById("display")
            // console.log(eval(inputTag.value)); //eval is used to convert
            inputTag.value = eval(inputTag.value)
        }
        function clearScreen()
        {
            let inputTag = document.getElementById("display")
            inputTag.value = ""
        }

        function backSpace()
        {
            let inputTag = document.getElementById("display")
            // inputTag.value = Math.floor(inputTag.value)
            inputTag.value = inputTag.value.substr(0, inputTag.value.length-1)
            console.log(inputTag.value);
        }