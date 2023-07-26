import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [

    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"pan-fried masala paneer",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FuZHdpY2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"onion | green capscium | mushroom | blackn olives | sweet corn | oregano | cheese|red pepper",
      foodPrice:180,
      foodImg:"https://images.unsplash.com/photo-1604382353954-7d61d1db1f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      foodName:"Chicken Burger with Fries",
      foodDetails:"fried chicken | potato fries",
      foodPrice:210,
      foodImg:"https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      foodName:"Veg Roll with Naan",
      foodDetails:"mashed potato and veggies, seasoned with indian spicy masala and rotti",
      foodPrice:170,
      foodImg:"https://media.istockphoto.com/id/1051064870/photo/vegetable-indian-rolls-are-filled-with-a-tasty-concoction-of-carrots-potatoes-pepper-and-peas.webp?b=1&s=170667a&w=0&k=20&c=SwCdECQYfbqZ1zCoH2Kh8Cs2jrkkFlhHxyesnIrFsPE="
    },
    {
      id:5,
      foodName:"Brownie with icecream",
      foodDetails:"brownie cake with vanilla and chocolate icecream with some choco chips",
      foodPrice:240,
      foodImg:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJvd25pZSUyMHdpdGglMjBpY2UlMjBjcmVhbXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      foodName:"Oreo Cadboury Milkshake",
      foodDetails:"cold milk| vanilla icecream|choco syrup|vanilla essence| choco powder and some choco chips| oreo biscuts",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlsa3NoYWtlJTIwY2hvY29sYXRlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:7,
      foodName:"Lime Mojito",
      foodDetails:"soda|mint|lime and some salt",
      foodPrice:80,
      foodImg:"https://images.unsplash.com/photo-1622322331040-088df8424c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
 
  ]

}

