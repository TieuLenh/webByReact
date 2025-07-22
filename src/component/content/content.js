import './content.css'
import Slider from './slider/slider'
import { cards } from './product/product'
import Product from './product/product'
import { useState } from 'react'


 
const Content = () => {
    return (
        <div className="content">
            <Slider />
            <Product list={cards}/>
        </div>
    )
}

export default Content;