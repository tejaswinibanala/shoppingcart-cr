import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
  useTitle("Home");
  const products = [
    {
        id: 1,  
        title: 'Apple Watch Series 7',
        image: 'https://www.sony.com/image/da7db4e4146227125dd3955de4755dd6?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
        price: 599,
        rating: 4.5
    },
    {
        id: 2,  
        title: 'Samsung Galaxy Watch 5',
        image: 'https://www.sony.com/image/da7db4e4146227125dd3955de4755dd6?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
        price: 399,
        rating: 4.7
    },
    {
        id: 3,  
        title: 'Fitbit Versa 4',
        image: 'https://www.sony.com/image/da7db4e4146227125dd3955de4755dd6?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
        price: 249,
        rating: 4.2
    }
];

  return (
    <div className='container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => (
        <ProductCard
            key={product.id}
            product={product}/>
      ))}
    </div>
  )
}
