window.onload = function(){
    
    var search = document.getElementById("btn-search");
    var inputfield = document.getElementById("search");
    var result = document.getElementById("result");
    
    search.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("click");

        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET','http://localhost:8888/info2180-lab4/superheroes.php' ); 
        httpRequest.send();
   
        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status == 200) {
                    var results = httpRequest.responseText;
                   
                   alert(results);
                } 
                else{
                alert("Error");
                }
            }
        }
    })
}