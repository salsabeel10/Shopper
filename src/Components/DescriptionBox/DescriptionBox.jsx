import React from 'react'
import'./DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
               <p>
                    An e-commerce clothing website offers a convenient online platform for users to browse, select, and purchase a diverse range of apparel from the comfort of their homes. These platforms typically provide detailed product information, secure payment options, and efficient delivery services, enhancing the overall shopping experience for customers
                </p>
                <p>
                    An e-commerce clothing website enables users to explore and buy a wide array of fashion items seamlessly, blending convenience with a diverse selection</p> 
        </div>
    </div>
    
  )
}

export default DescriptionBox