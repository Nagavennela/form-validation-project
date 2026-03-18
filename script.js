<script>
  function submitorm(){
    let username = document.getElementById("msg1").value;
    let usernumber = document.getElementById("msg2").value;
    let usermail = document.getElementById("msg3").value;

    if (username == ""){
      document.getElementById("err1").innerHTML = "kindly enter the Name";
      return false;
    } else {
      document.getElementById("err1").innerHTML = "";
    }

    if (usernumber == ""){
      document.getElementById("err2").innerHTML = "kindly enter the Number";
      return false;
    } else {
      document.getElementById("err2").innerHTML = "";
    }

    if (usermail == ""){
      document.getElementById("err3").innerHTML = "kindly enter the mail";
      return false;
    } else {
      document.getElementById("err3").innerHTML = "";
    }

    alert("Form is submitted");
    return true;
  }
</script>
