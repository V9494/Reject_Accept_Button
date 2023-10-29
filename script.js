var add = document.querySelector("h2");

var acceptFriend = document.querySelector("#accept");

var count = 0;

acceptFriend.addEventListener("click", function () {
    if (count == 0) {
        add.innerHTML = "Friends 💚";
        add.style.color = "green";
        acceptFriend.innerHTML="Reject"
        count = 1;
  
    }
    else
    {
        add.innerHTML = "Stranger 🤔";
        add.style.color = "red";
        acceptFriend.innerHTML="Accept"
        count = 0;
    }  
    
  });



