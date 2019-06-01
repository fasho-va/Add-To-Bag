import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.main{

}
.quantity{
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
.option{
  width: 60px;
  padding: 8px 5px;
  background-color: #fff;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 11px system-ui;
  
}

`
const numbers = [1,2,3,4,5,6,7,8,9]; 
const howMany = numbers.map((number)=>{
  return {
    value: number,
    text: number
  }
})

const Drops= (props) => (
  <StyledDiv className= "main"> 
  <div class="custom-select">
<select  className="quantity" value={props.selected} onChange={props.onAlter} > 
<option selected>{props.selected}</option>
   { numbers.map((number)=>{
  return (<option className= "option" value= {number}> {number}</option>)})
  } 
</select>
  </div>
  </StyledDiv>
)
export default Drops;