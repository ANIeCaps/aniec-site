function check(){
  let c = document.getElementById("code").value;
  if(c === "!QAZAnIeC=OKM"){
    document.getElementById("area").style.display="block";
  } else {
    alert("Codice errato");
  }
}
