


  let container=document.getElementById("product-container");

  fetch("https://6398974efe03352a94d6e5fd.mockapi.io/product/beauty")
  .then((resObj)=>{
    return resObj.json()
  })
  .then((actData)=>{
    console.log(actData)
  })
  .catch((error)=>{
    console.log(error)
  })

  function display(data){
    data.forEach((element,index)=>{

      let productcontainer=document.createElement("div")
      let img=document.createElement("img")
      
    })
  }