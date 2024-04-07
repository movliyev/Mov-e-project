var row=document.getElementsByClassName("row")[0]

function FillHtml(data){
    data.forEach(element=>{
        row.innerHTML+=`<div class="car col-3" style="width: 18rem;">
        <img src="${element.image.medium}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.rating.average}</p>
          <a href="details.html?id=${element.id}" class="btn btn-primary">Check Details</a>
        </div>
       </div>`
    });

}


$.ajax({
  method:"GET",
  url:"https://api.tvmaze.com/shows"
}).done(data=>FillHtml(data))
 