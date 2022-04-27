import React, { useState } from 'react';
import './Lunch.css'
import NairaSign from '../../src/Img-Icons/naira-removebg-preview.png'
import Minus from '../../src/Img-Icons/minus-removebg-preview.png'
import Plus from '../../src/Img-Icons/plus-symbol-button-removebg-preview.png'



export default function Breakfast() {
    const [isActive, setIsActive] = useState(false);
    const menus = 
      [
    {
          title: 'Banga Rice',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/BHBangaRice-320x416.PNG',
          price: '1000',
          id: 2
    },
    {
          title: 'Coconut Rice',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/BHCoconutRice-320x416.PNG',
          price: '1200',
          id: 3
    },
    {
          title: 'Fried Rice',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/Fried%20Rice-320x416.jpg',
          price: '800',
          id: 4
    },
    {
      title: 'Macaroni',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/Macoroni-320x416.JPG',
      price: '1200',
      id: 5
  },
  {
        title: 'Afang Soup',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/BHAfang-320x416.PNG',
        price:'800',
        id: 6
  },
  {
        title: 'Egusi Soup',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/BHEgusi-320x416.PNG',
        price: '700',
        id: 7
  },
  {
        title: 'Ewedu Soup',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/BHEwedu-320x416.PNG',
        price: '750',
        id: 8
  },
  {
      title: 'Okro Soup',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHSeafoodOkro-320x416.PNG',
      price: '850',
      id: 9
  },
  {
      title: 'Swallow',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHAmala-320x416.PNG',
      price: '300',
      id: 10
  },
  {
      title: 'Boiled Egg',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHEgg-320x416.PNG',
      price: '500',
      id: 11
  },
  {
      title: 'Moi Moi',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHMoiMoi-320x416.PNG',
      price: '400',
      id: 12
  },
  {
      title: 'Asun',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHAsun-320x416.PNG',
      price: '1200',
      id: 13
  },
  {
      title: 'Goat Meat Pepper Soup',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/Goatmeat%20Peppersou-320x416.JPG',
      price: '400',
      id: 14
  },
  {
      title: 'Nkwobi',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/BHNkwobi-320x416.PNG',
      price: '400',
      id: 15
  },
  
]
  
    

     
//     const accordionData = {
//         title: 'Breakfast',
//         content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
//           laborum cupiditate possimus labore, hic temporibus velit dicta earum
//           suscipit commodi eum enim atque at? Et perspiciatis dolore iure
//           voluptatem.`
//       };
    
      // const { title,imageUrl, price, id } = menu;
  return (
    <div>
        <React.Fragment>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title"
              onClick={() => setIsActive(!isActive)}>
                <h2>Main Dish</h2>
                <div>{isActive ? <img src={Minus} alt="" width={20}/> : <img src={Plus} alt="" width={20}/>}</div>
              </div>
              {isActive && <div className="lunch-grid">
              {
            menus.map((item) => 
            <div  className='lunch-grid-details'>
                <img className='lunch-grid-img' src={item.imageUrl} alt="" height={300} width={250}/> 
                <div className='lunch-grid-text'>
                    <h2>{item.title}</h2>
                    <h6><img src={NairaSign} alt="" width={15}/>{item.price}</h6>
                  </div>
            </div>
            )
        }
                    </div>}
            </div>
          </div>
        </React.Fragment>
    </div>
  )
}

