import data from './data'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react' 
import styled from 'styled-components';

// const numbers = [1,2,3,4,5,6,7,8,9]; 

const StyledDiv = styled.div`
.sizes{
  width: 10px;
  line-height: 21px;
}
.select{
  width: 70px;
  float: left;
  padding: 5px 25px 5px 15px;
  margin-right: 10px;
  width: 120px !important;
  margin-top: 0;
  background-color: #fff;
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #eee;
  min-width: 1px;
  width: 190px;
  color: #000000;
  overflow: hidden;
  background: transparent url(//cdn.shopify.com/s/files/1/0293/9277/t/253/assets/select.png?496498) no-repeat 96% center;
  background-size: auto 50%;
  box-shadow: none;
  font-family: 'Oswald', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
`

 
 
const sizes= ['XS','S','M','L','XL','1X','2X','3X'];

const Drop = (props) => (
  <StyledDiv className= "style" >
  <div className= 'div'>
   <select  className="select"  options={sizes}>
   <option selected>{props.clickedSize}</option>
   {sizes.map((size)=> {
  return ( 
    <option className = "option"> 
     Size:  {size} - $ {props.price} USD
     </option>
  )
})} 
   </select>
   </div>
  </StyledDiv>
)
export default Drop;
