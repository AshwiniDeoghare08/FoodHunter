var menulist = [
    {
        category : "southindian",
        image : "./images/southindian/idli.png",
        name : "Idli-Sambar",
        details : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        price : "80",
        veg : false,
    },
    {
        category : "maharashtrian",
        "image" : "./images/southindian/idli.png",
        "name" : "Idli-Sambar",
        "details" : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        "price" : "80",
        "veg" : true,
    },
    {
        category : "ALL",
        "image" : "./images/southindian/idli.png",
        "name" : "Idli-Sambar",
        "details" : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        "price" : "80",
        "veg" : true,
    },
    {
        category : "ALL",
        "image" : "./images/southindian/idli.png",
        "name" : "Idli-Sambar",
        "details" : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        "price" : "80",
        "veg" : true,
    },
    {
        category : "ALL",
        "image" : "./images/southindian/idli.png",
        "name" : "Idli-Sambar",
        "details" : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        "price" : "80",
        "veg" : false,
    },
    {
        "image" : "./images/southindian/idli.png",
        "name" : "Idli-Sambar",
        "details" : "Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.",
        "price" : "80",
        "veg" : false,
    }
]

function createCardUi(element,index,isFirst){

    if(index==-1 || element==null){
        return document.getElementById("allMenuItems").innerHTML = "<div class='text-center'>NO ITEM</div>"
    }

    console.log(element["name"]+" "+index+" "+element["veg"])
    if(index==0 || isFirst){
        document.getElementById("allMenuItems").innerHTML = 
        "<div class='all "+element["category"]+" parentbox' onclick='clickItem("+index+")'>"+
           "<div class='image'>"+
             "<img class='img' heigt='150px' width='150px' src='"+ element["image"] +"' alt='' />"+
           "</div>"+
           "<div class='details'>"+
             "<h5>"+element["name"]+"</h5>"+
             "<p>"+element["details"]+"</p>"+
             "<div class='options'>"+
               "<h6>"+
                 "Rs. "+element["price"]+"/-"+
                 (element["veg"] ? "<img src='images/veg.png' alt='' style='height: 20px; width: 20px; background-color: aliceblue; margin-left: 200px;' />" : "<img src='images/nveg.png' alt='' style='height: 20px; width: 20px; background-color: aliceblue; margin-left: 200px;' />") +
                 "<a href=''>"+
                 "<i class='fa-solid fa-cart-shopping' style='margin-left: 20px'></i>" +
               "</a>"+
                 "</h6>"+
               
             "</div>"+
           "</div>"+
         "</div>";
    }else{
        document.getElementById("allMenuItems").innerHTML += 
     "<div class='all "+element["category"]+" parentbox' onclick='clickItem("+index+")'>"+
        "<div class='image'>"+
          "<img class='img' heigt='150px' width='150px' src='"+ element["image"] +"' alt='' />"+
        "</div>"+
        "<div class='details'>"+
          "<h5>"+element["name"]+"</h5>"+
          "<p>"+element["details"]+"</p>"+
          "<div class='options'>"+
            "<h6>"+
              "Rs. "+element["price"]+"/-"+
              (element["veg"] ? "<img src='images/veg.png' alt='' style='height: 20px; width: 20px; background-color: aliceblue; margin-left: 200px;' />" : "<img src='images/nveg.png' alt='' style='height: 20px; width: 20px; background-color: aliceblue; margin-left: 200px;' />") +
              "<a href=''>"+
              "<i class='fa-solid fa-cart-shopping' style='margin-left: 20px'></i>" +
            "</a>"+
              "</h6>"+
            
          "</div>"+
        "</div>"+
      "</div>";
    }
}

function clickItem(index){
alert(menulist[index]["name"])
}
var globalcategory = ""
function loadMenuItem(category){
    globalcategory = category;
    var itemfound = false;
    var isFirst = true;
    var count = 0;
   for (let index = 0; index < menulist.length; index++) {
    const element = menulist[index];
    console.log(category +" == "+element["category"] );
    if(category == element["category"] || category=="ALL"){
        createCardUi(element,index, isFirst);
        isFirst = false;
        itemfound = true;
        count++;
        if(count==3){
            document.getElementById("showmore").hidden = false;
            return;
        }
    }
   }

   if(!itemfound){
    createCardUi(null,-1);
   }
}

function onShowMore(isMoreClick){
    if(!isMoreClick){
        loadMenuItem(globalcategory)
        document.getElementById("showmore").hidden = false;
        document.getElementById("showless").hidden = true;
    }else{
        document.getElementById("showless").hidden = false;
        document.getElementById("showmore").hidden = true;
        for (let index = 3; index < menulist.length; index++) {
            const element = menulist[index];
            console.log(globalcategory +" == "+element["category"] );
            if(globalcategory == element["category"] || globalcategory=="ALL"){
                createCardUi(element,index, false);
            }
           }
    }
}