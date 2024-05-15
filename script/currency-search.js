 let searchField = document.getElementById("search-inp")
 let searchbtn = document.getElementById("search")
 let show = document.getElementById("show")

 searchbtn.addEventListener("click", ()=>{
    // alert("gfbfdb")


    if(searchField.value === ""){
        alert("Enter something")
    }else{
        $.getJSON("../data.json" , function(dataname){
            // alert("fvfd")
        let output = " <div> "
            $.each(dataname , function(key , val){
                if (val.name.search(searchField.value) != -1){
                    // alert("ggg")
                    output += `<img src="${val.img}"/>`
                    output += `<p> name : ${val.name} </p>`
                    output += `<p> price : ${val.price} </p>`
                }
            })
            output += "</div>"
            show.innerHTML = output
        })
    }
 })





















