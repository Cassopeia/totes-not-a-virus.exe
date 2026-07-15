const input = document.getElementById("nameInput");
const response = document.getElementById("response");


input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){


        let name = input.value.toLowerCase();


        if(name === "ale" || name === "alessandro"){


            response.innerHTML =
            "ACCESS GRANTED.";


            input.style.display = "none";


        }

        else {


            response.innerHTML =
            "NICE TRY.";


            input.value = "";

        }

    }

});
