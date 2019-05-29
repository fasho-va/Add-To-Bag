import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.quantity{
  color:yellow;
  width: 15%;
  line-height: 21px;
}
`
const numbers = [0,1,2,3,4,5,6,7,8,9]; 
const howMany = numbers.map((number)=>{
  return {
    text: number
  }
})

const Drops= () => (
  <StyledDiv className="quantity" >
  <Dropdown className="quantity" placeholder='1' search selection options={howMany}/>
  </StyledDiv>
)
export default Drops;