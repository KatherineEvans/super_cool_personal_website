function showNotify() {
    var x = document.getElementById("notify-form");
    var y = document.getElementById("join-button");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
    
}

function showThanks() {
    var x = document.getElementById("notify-form");
    var y = document.getElementById("thankyou-message");
    var z = document.getElementById("fall-2020");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }

    var first_name = document.getElementById("form_first_name").value;
    var last_name = document.getElementById("form_last_name").value;
    var email = document.getElementById("form_email").value;

    let data = {'first_name': first_name, 'last_name': last_name, 'email': email}
    fetch('https://hooks.zapier.com/hooks/catch/8116619/ofo7jap/', {
      method: 'post',
      body: JSON.stringify(data)
    }).then(function(response) {
    })
}