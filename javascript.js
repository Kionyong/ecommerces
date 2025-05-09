
//products item
const Products=[
    {id:1, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:2, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:3, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:4, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:5, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:6, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:7, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:8, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
    {id:9, proName:"Coca Cola" , proPrice:2.1 ,img:"./assete/..."},
];
//display Products item
var txt="";
Products.forEach((item,index)=>{
    txt+=`
        <div class="child-products">
            <img src="" alt="">
            <p>Proname</p>
            <p>proprice</p>
        </div>
    `;
    document.querySelector('.products-item').innerHTML=txt;
});