import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.sizes{
  height: 49px;
  border: 1px solid #C7C7C7;
  width: 100%;
  background-color:white;
  background-attachment: scroll; 
  color: black
  text-align: center; 
  margin: 0 18.5px;
  border: 1px solid black; 
  float: left;
  padding: 5px 25px 5px 15px;
  margin-right: 10px;
  width: 532px !important;
  margin-top: 0;
  background-color: #fff;
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #eee;
  min-width: 1px;
  color: #000000;
  overflow: hidden;
  background: transparent url(//cdn.shopify.com/s/files/1/0293/9277/t/253/assets/select.png?496498) no-repeat 96% center;
  background-size: auto 75%;
  box-shadow: none;
  font-family: 'Oswald', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
}
.text{ 
  opacity:0;
  width: 300px;
  height: 30px;
  z-index: 100%;

}
`
const sizes = ['S','M','L','XL','1X','2X','3X']; 

// const uid = ids.map((id)=>{

//   return <option value={id} text={id}>{id}</option>;
// });

const Sizes = (props) => ( 
  <StyledDiv>
  <div className="sizes" >
  <select className="text" onChange={props.onChange}>
  {
    sizes.map((size)=>{
    return <option value={size}>{size}</option>
    })
  }
  </select>
  </div>
  </StyledDiv>
)

export default Sizes;