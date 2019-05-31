import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.quantity{
  color:yellow;
  width: 10px;
  line-height: 25px;
}
`
const numbers = [0,1,2,3,4,5,6,7,8,9]; 
const howMany = numbers.map((number)=>{
  return {
    value: number,
    text: number
  }
})

const Drops= (props) => (
  <div className= "quantity">
  <Dropdown  className="quantity" placeholder='1' value={props.id} onChange={props.onChange} search selection options={howMany}/>
  </div>
)
export default Drops;