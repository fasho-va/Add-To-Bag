// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'
// import styled from 'styled-components';


// const StyledDiv = styled.div`
// .id{
//   color:yellow;
//   width: 15%;
//   line-height: 21px;
// }
// .main{
//   color: pink
//   width:10%
// }
// `
// const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]; 

// const uid = ids.map((id)=>{
//   return {
//     value: id,
//     text: id
//   }
// })

// const Id = (props) => (
//   <StyledDiv className="id" >
//   <Dropdown className="main" onChange={props.onChange} placeholder='pick an item' search selection options={uid}/>
//   </StyledDiv>
// )
// export default Id;


import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components';


const StyledDiv = styled.div`
.id{
  background-color:white;
  width: 188px;
  height: 30px;
  background-attachment: scroll; 
  color: black
  text-align: center; 
  margin: 0 18.5px;
  border: 1px solid black; 
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
.text{ 
  opacity:0;
  width: 188px;
  height: 30px;
  

}
`
const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]; 

// const uid = ids.map((id)=>{

//   return <option value={id} text={id}>{id}</option>;
// });

const Id = (props) => ( 
  <StyledDiv>
  <div className="id" > 
  <select  name= "pickitem" className="text" onChange={props.onChange}>
  <option selected></option>
  {
    ids.map((id)=>{
    return <option value={id}>{id}</option>
    
    })
  }
  </select>
 
  </div>
  </StyledDiv>
)

export default Id;