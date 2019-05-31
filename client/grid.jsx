import React from 'react'
import { Grid, Image, Divider} from 'semantic-ui-react' 
import Drop from "./dropdown.jsx";
import Drops from "./drops.jsx"; 
import styled from 'styled-components';

const StyledDiv = styled.div`
.main{
  background-color: white; 
  margin:0%;
}
.textarea {  
  max-width: 500px;
  line-height: 1.2em;
    overflow: visibl;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 185px; 
    color: #000000;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    margin: 0;
    box-sizing: border-box;
    letter-spacing: 0.05em;
    cursor: pointer;
    font-size: 1.17em;
    margin-left: -20px;
}
.pricearea {  
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; 
  padding-top:90px;
  background-color: white;
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 400; 
  font-size: 17px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 500px;
}
.remove{
  color:red; 
  background-color: white;
  width: 300px;
  height: 100px;
}  
.price{ 
  background-color: white;
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.05em;
  line-height: 1.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 500px;

} 
.far{
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  font-size: 19px;
  cursor: pointer;
}
.row{
  margin: 2%;
  background-color: white; 
  padding: 0%;
} 


`;


const GridExampleCelledInternally = (props) => {
  
  if (props.products) {
    
    return (
    <StyledDiv className="main">
  <Grid className="main">
      
      <Grid.Row className ='row'> 

      <Grid.Column width={5}>
      <Image src={props.products.image} />
      </Grid.Column>

      <Grid.Column width={5} className='textarea'>{props.products.name}  
      <Drops id={props.products.id} onAlter={props.onAlter}></Drops>
      <Drop clickedSize={props.clickedSize} price={props.products.price} size = {props.products.size} onChange={props.onChange}></Drop>
      </Grid.Column>

       <Grid.Column width={5} className='pricearea'>
      <div className='price'> ${props.products.price} USD </div>
      </Grid.Column>

      <Grid.Column width={1} className='textarea'>
      <a className="remove" alt="Remove item"><i className='removeitem' class="far fa-times-circle" onClick={()=>{props.handledelete(props.index)}}></i></a>  
      </Grid.Column>

      {/* <Grid.Column width={3} className='textarea'>
      <div className='price'> ${props.products.price} </div>
      </Grid.Column> */}

      </Grid.Row>

          <Divider></Divider>
  </Grid>

  </StyledDiv>
      )
    } else {
      return null
    }
  }

export default GridExampleCelledInternally