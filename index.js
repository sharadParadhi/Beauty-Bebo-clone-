


  let container=document.getElementById("product-container");
  
  let product=[{img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_10_5.jpg', name: 'Miss Claire Professional Eyeshadow Palette - 1', rating: '', price: 1230.00, catogory: 'Face'},
  
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/68caf778903487000186_1.jpg', name: 'Miss Claire Eyeshadow Kit 3716-11-1', rating: 'rating 2', price: 395.00, catogory: 'Face'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d28bf778903487024816_1.jpg', name: 'Miss Claire Blusher Kit - 3660-B-3', rating: '', price: 410.00, catogory: 'Face'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_10_1.jpg', name: 'Miss Claire Make Up Palette 9998-2 (Make Up Kit)', rating: '', price: 915.00, catogory: 'Face'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_10.jpg', name: 'Miss Claire Make Up Palette 9943 (Make Up Kit)', rating: '', price: 626.00, catogory: '5'},
  {img: '', name: 'Dr. Omar Denesik', rating: 'rating 7', price: 'price 7', catogory: 'Face'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/2/62_1_1.jpg', name: 'Miss Claire Eyebrow Cake', rating: '', price: 488.00 , catogory: 'EYE'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/1/11212.jpg', name: 'Blue Heaven 12 In 1 Fashion Eye Glitter', rating: '', price: 102.00, catogory: 'EYE'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_39.jpg', name: 'Nivea Micellar Cleansing Water - Skin Breathe Micellair', rating: '', price: 315.00, catogory: 'EYE'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/_/3_126.jpg', name: 'Faces Canada Ultimepro Twist Eye Kajal Liner', rating: 'rating 9', price: 539.00 , catogory: 'EYE'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/8/c8e8a268903380020496_2.jpg', name: 'Faces Canada Matte Addiction Lipstick', rating: '', price: 1139.00 , catogory: 'Lips'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/7/372f7ae8903380023404_11.jpg', name: 'Faces Canada Comfy Matte Pro Lip Color', rating: '', price: 643.00, catogory: 'Lips'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/0/806360197042_1.jpg', name: 'Lotus Make-Up Proedit Silk Touch Matte Lip Color', rating: 'rating 12', price: 605.00 , catogory: 'Lips'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be149.jpg', name: 'Beeone Manicure And Pedicure Kit 1040 Gms', rating: '', price: 1260.00, catogory: 'Nails'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/5/v54.jpg', name: 'Vega Manicure Set (Colour May Vary) (Ms-08)', rating: '', price: 399.00, catogory: 'Nails'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/9/19_12_4.jpg', name: 'Mamaearth Vitamin C Under Eye Cream For Dark Circles', rating: '', price: '', catogory: 'Eye Care'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg', name: 'Paris Youth Code Eye Serum', rating: 'rating 16', price:719.00 , catogory: 'Eye Care'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/n/anti-ageing_1.jpg', name: 'Lotus Herbals Youthrx Anti-Ageing Eye Contour Crème', rating: '', price: 380.00, catogory: 'Eye Care'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/c/ec35271o3-0953_7_.jpg', name: 'O3+ Derma Cult Retinol Cream Night Moisturizer', rating: '', price: 719.00, catogory: 'All Cream'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/e/aed2c248903380002515_3.jpg', name: 'Faces Canada Urban Glow Skin Brightening Day Cream', rating: '', price: 899.00, catogory: 'All Cream'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/b/3b741delotaa00000044_nv1.jpg', name: 'Lotus Professional Retemin Plant Retinol & Vitamin C Brightening Boost Night Cream', rating: '', price: 646.00 , catogory: 'SKIN'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/3/8383271o3-0954_7_.jpg', name: 'O3+ Derma Cult Triple Acid Oil-Free Brightening Moisturizer For All Skin Types + Adaptogen', rating: '', price: 592.00, catogory: 'SKIN'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/0/7/0740271o3-0950_7_.jpg', name: 'O3+ Derma Cult Salicylic + Adaptogen Mask For Acne Marks & Tan Removal', rating: '', price: 539.00, catogory: 'SKIN'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/c/9cd81598904352001291_1.jpg', name: 'Biotique Advanced Organics 24k Gold Concentrate Pure Gold Treatment Oil', rating: '', price: 504.00, catogory: 'FACE OIL'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/a/eabe72c806360008492_fi.jpg', name: 'Lotus Organics Youth Glow Facial Oil Moisturising & Nourishing', rating: 'rating 24', price: 972.00, catogory: 'FACE OIL'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/1/11e10b98994993016563_8.jpg', name: 'Paris Glycolic Bright Glowing Night Cream', rating: '', price:1701.00 , catogory: 'Night Cream'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/9/c9222298903487037205_1.jpg', name: 'Miss Claire Prestige Anti-Dust Daily Massage Cleansing Cream', rating: "", price: 675.00, catogory: '26'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/0/509cc6679400449344_2.jpg', name: 'Dove Fresh & Floral Dry Shampoo', rating: '', price: 563.00 , catogory: 'DRY SHAMPOO'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/w/e/we8.jpg', name: 'Wella Professionals INVIGO Color Brilliance Shampoo+Mask Combo', rating: '', price: 1184.00 , catogory: 'DRY SHAMPOO'}, 
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8901526102655_2bbb.jpg', name: '', rating: '', price: 563.00 , catogory: 'DRY SHAMPOO'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787232233_1.jpg', name: ' Label Strong Hold Hair Super Dry Fix Spray', rating: 'rating 30', price: 698.00, catogory: 'HAIR SPRAY'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787232233_1.jpg', name: ' Label Strong Hold Hair Super Dry Fix Spray', rating: 'rating 30', price: 698.00, catogory: 'HAIR SPRAY'},

  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787314908_1.jpg', name: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', rating: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', price: 856.00, catogory: 'OIL'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787314908_1.jpg', name: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', rating: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', price: 856.00, catogory: 'HAIR OIL'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787314908_1.jpg', name: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', rating: 'Schwarzkopf Professional Osis+ Flatliner Heat Protection Hair Spray', price: 856.00, catogory: 'OIL'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/0/90bcccctrese00000050_1.jpg', name: 'Tresemme Propure Moisture Boost - Shampoo + Conditioner + Serum Combo', rating: 'rating 37', price: 1300.00, catogory: 'CONDITIONER'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/0/90bcccctrese00000050_1.jpg', name: 'Tresemme Propure Moisture Boost - Shampoo + Conditioner + Serum Combo', rating: 'rating 37', price: 1300.00, catogory: 'CONDITIONER'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/0/90bcccctrese00000050_1.jpg', name: 'Tresemme Propure Moisture Boost - Shampoo + Conditioner + Serum Combo', rating: 'rating 37', price: 1300.00, catogory: 'CONDITIONER'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4_1.jpg', name: 'Kamasutra Woman Sparkle Perfume Body Spray', rating: '', price: 398.00, catogory: 'PERFUMES'}, 
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9fd2fca8906087777243__1_.jpg', name: 'Kamasutra Woman Sparkle Perfume Body Spray', rating: '', price: 398.00, catogory: 'PERFUMES'}, 
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/e/me-deodorant.jpg', name: 'Kamasutra Woman Sparkle Perfume Body Spray', rating: '', price: 398.00, catogory: 'PERFUMES'}, 
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4_3.jpg', name: 'Kamasutra Urge Power Series Perfume Spray- Pack Of 2', rating: '', price: 396.00, catogory: 'DEODORANTS-ROLL-ONS'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5.jpg', name: 'Kamasutra Urge Power Series Perfume Spray- Pack Of 2', rating: '', price: 396.00, catogory: 'DEODORANTS-ROLL-ONS'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_6.jpg', name: 'Kamasutra Urge Power Series Perfume Spray- Pack Of 2', rating: '', price: 396.00, catogory: 'DEODORANTS-ROLL-ONS'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo5.jpg', name: 'Kamasutra Urge Power Series Perfume Spray- Pack Of 2', rating: '', price: 396.00, catogory: 'DEODORANTS-ROLL-ONS'},
  {img: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e51.jpg', name: 'Kay Dickens', rating: 'rating 43', price: 'price 43', catogory: '43'},
 ]

  display(product)
  
  function display(data){
    data.forEach((element,index)=>{

      let productcontainer=document.createElement("div")
      productcontainer.setAttribute("id","productcontainer")
      let image=document.createElement("img")
      image.setAttribute("src",element.img)

      let name=document.createElement("p")
      name.innerText=element.name

      let rating=document.createElement("p")
      rating.innerText=element.rating;

      let price=document.createElement("p");
      price.innerText=element.price;
      let AddToCart=document.createElement("button");
      AddToCart.innerText="AddToCart"


      productcontainer.append(image,name,rating,price,AddToCart)
      container.append(productcontainer)

      
    })
  }