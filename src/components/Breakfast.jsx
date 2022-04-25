import React, { useState } from 'react';
import './Breakfast.css'
import NairaSign from '../../src/Img-Icons/naira-removebg-preview.png'
import Minus from '../../src/Img-Icons/minus-removebg-preview.png'
import Plus from '../../src/Img-Icons/plus-symbol-button-removebg-preview.png'



export default function Breakfast() {
    const [isActive, setIsActive] = useState(true);
    const menus = 
      [
//             {
//         title: 'Akara',
//         imageUrl: 'https://bukkahut.com/image/cache/catalog/Akara-320x416.jpg',
//         price: '400',
//         id: 1
//     },
    {
          title: 'Custard',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/cu-320x416.jpg',
          price: '400',
          id: 2
    },
    {
          title: 'Boiled Plantain ',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/boiled%20p-320x416.jpg',
          price: '500',
          id: 3
    },
    {
          title: 'Sauce',
          imageUrl: 'https://bukkahut.com/image/cache/catalog/egg%20sauce-320x416.jpg',
          price: '700',
          id: 4
    },
    {
      title: 'Fried Potatoes',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/fried%20pot-320x416.jpg',
      price: '500',
      id: 5
  },
  {
        title: 'Pap',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/Pap%20and%20Akara-320x416.jpg',
        price:'400',
        id: 6
  },
  {
        title: 'Plantain & Beans',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/ewaagonyin-320x416.jpg',
        price: '900',
        id: 7
  },
  {
        title: 'Irish Potatoes',
        imageUrl: 'https://bukkahut.com/image/cache/catalog/irish%20p-320x416.jpg',
        price: '650',
        id: 8
  },
  {
      title: 'Fish Sauce',
      imageUrl: 'https://bukkahut.com/image/cache/catalog/Fish-sauce-320x416.png',
      price: '850',
      id: 9
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
          <div className="b-accordion">
            <div className="b-accordion-item">
              <div className="b-accordion-title"
              onClick={() => setIsActive(!isActive)}>
                <h2>BREAKFAST</h2>
                <div>{isActive ? <img src={Minus} alt="" width={20}/> : <img src={Plus} alt="" width={20}/>}</div>
              </div>
              {isActive && <div className="grid">
              {
            menus.map((item) => 
            <div  className='grid-details'>
                <img className='grid-img' src={item.imageUrl} alt="" height={300} width={250}/> 
                <div className='grid-text'>
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
