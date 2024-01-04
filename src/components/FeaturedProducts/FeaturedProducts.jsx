import React from 'react'
import "./FeaturedProducts.scss"

const FeaturedProducts = () => {
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque aperiam eum obcaecati laudantium error eius voluptatibus praesentium, fugit tempore nesciunt deserunt iusto cum vero recusandae quod iure ea modi!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
