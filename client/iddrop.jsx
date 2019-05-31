import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.id{
  color:yellow;
  width: 15%;
  line-height: 21px;
}
`
const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]; 

const uid = ids.map((id)=>{
  return {
    value: id,
    text: id
  }
})

const Id = (props) => (
  <StyledDiv className="id" >
  <Dropdown className="id" onChange={props.onChange} placeholder='pick an item' search selection options={uid}/>
  </StyledDiv>
)
export default Id;