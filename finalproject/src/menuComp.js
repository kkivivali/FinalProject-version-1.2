/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import {carProductList, pcProductList, motorCycleProductList} from './products.js'
import './index.css';

function navMenu() {
return(
    <div className='navMenu'>
      <div className='menuContent'><h3>Spare Parts For Cars</h3>{carProductList.map((carproduct) => (<div className='card'><a href="#">{carproduct.carproductGroup}</a></div>))}</div>
		  <div className='menuContent'><h3>Spare Parts For Motorcycles</h3>{motorCycleProductList.map((motorcycleproduct) => (<div className='card'>{motorcycleproduct.motorcycleproductGroup}</div>))}</div>
      <div className='menuContent'><h3>Spare Parts For PCs</h3>{pcProductList.map((pcproduct) => (<div className='card'>{pcproduct.pcproductGroup}</div>))}</div> 
    </div>
    )
}
export default navMenu;