import React,{useState } from 'react'
//https://hindi-jokes-api.onrender.com/jokes?api_key=7e8a5b8bc8cd46bf9e25a7f5618f
//https://api.quotable.io/random?tags=love
//https://api.quotable.io/random
export default function Content() {

const [data ,settype]=useState("");

async function apiData(url) {
    let response = await fetch(url);
    let jdata = await response.json();
    
    return jdata;
}
const quotesData = () => {
    let url="https://api.quotable.io/random";
    let res = apiData(url);
    res.then(jdata => {
        document.getElementById("actionselect").innerText="Quote";
        document.getElementById("genratedtxt").innerText=jdata.content;
        document.getElementById("author").innerText=jdata.author;
        settype("Quote")
    })
    
}
const jokesData = () => {
    let url="https://hindi-jokes-api.onrender.com/jokes?api_key=7e8a5b8bc8cd46bf9e25a7f5618f";
    let res = apiData(url);
    res.then(jdata => {
        document.getElementById("actionselect").innerText="Joke";
        document.getElementById("genratedtxt").innerText=jdata.jokeContent;
        document.getElementById("author").innerText="";
        settype("Joke")
    })
    
}
const shyariData = () => {
    let url="https://api.quotable.io/random?tags=love";
    let res = apiData(url);
    res.then(jdata => {
        document.getElementById("actionselect").innerText="Shyari";
        document.getElementById("genratedtxt").innerText=jdata.content;
        document.getElementById("author").innerText=jdata.author;
        settype("Shyari")
    })
    
}
function copytxt() {

    if (document.getElementById('genratedtxt').innerText !== "") {
        let copyText = document.getElementById('genratedtxt');


        // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.innerText);

        // Alert the copied text
        alert("Copied the text: " + copyText.innerText);
    }
}


const another=()=>{
      if (data==="Quote") {
        quotesData();
      }
      else if (data==="Joke") {
        jokesData();
      }
      else if (data==="Shyari") {
        shyariData();
      }
}

  return (
    <div>
      <div className="container main-item">


<h2 id="title" className="my-3">Quotes😍, Jokes😄, and Shayaris💗 to Brighten Your Day</h2>
<hr/>
<div className="actions ">
    <button type="button" className="btn btn-danger quotesbtn "  onClick={quotesData} id="quotesbtn" value="Quotes">Quotes</button>
    <button type="button" className="btn btn-danger quotesbtn ml-3 m-1"  onClick={jokesData} id="quotesbtn" value="Joke">Jokes</button>
    <button type="button" className="btn btn-danger ml-3 m-1 Shayarbtn"  id="Shayarbtn" 
    onClick={shyariData} value="Shayari">Shayari</button>
    

    <div className="apitext container my-3 ">
        <center>
           <u> <p id="actionselect"></p></u>
            <p id="genratedtxt">Select options</p>
            <p id="author"></p>
        </center>
        
    </div>
    <center> <button type="button" className="btn btn-danger center  m-2" onClick={another} id="anotherbtn">Tell me another 😅</button>
    <button type="button" className="btn btn-danger center  m-2" onClick={copytxt} id="copybtn">Copy Clipboard 📋</button>
    </center>
</div>
</div>
    </div>
  )
}
