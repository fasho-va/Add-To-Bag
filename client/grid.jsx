import React from 'react'
import { Grid, Image,Divider} from 'semantic-ui-react' 
import Drop from "./dropdown.jsx";
import Drops from "./drops.jsx"; 
import styled from 'styled-components';

const StyledDiv = styled.div`
.main{
  background-color: white; 
  margin:0%;
}
.textarea { 
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
.remove{
  color:red; 
  background-color: white;
} 
.removeitem{
  border-radius: 5px;
}
.row{
  margin: 2%;
  background-color: white;
} 
.sizes{ 
  background-color: pink;
  height: 10%;
  line-height: 21px;
}
.quantity{
  color:yellow;
  width: 15%;
  line-height: 21px;
}
`;

const GridExampleCelledInternally = () => (

  <StyledDiv className="main">
  <Grid className="main">
   
   <Grid.Row className ='row'> 
      <Grid.Column width={5}>
        <Image src='https://cdn.shopify.com/s/files/1/0293/9277/products/05-01-19_Studio_2_MA_09-56-13_7_JD35548_Mustard_23300_KS.jpg?v=1556931386' />
      </Grid.Column>
      <Grid.Column width={8} className='textarea'>
     Here For The Moment Floral Maxi Dress - Green Floral
      <Drop className="sizes"></Drop>
      <Drops className="quantity"></Drops>
      </Grid.Column>
      <Grid.Column width={2} className='textarea'>
      <a className="remove" alt="Remove item"><i className='removeitem' class="far fa-times-circle"></i></a> 
      </Grid.Column>
    </Grid.Row>


<Divider></Divider>

 <Grid.Row className ='row'> 
       <Grid.Column width={5}>
        <Image src='https://cdn.shopify.com/s/files/1/0293/9277/products/05-01-19_Studio_2_MA_09-56-13_7_JD35548_Mustard_23300_KS.jpg?v=1556931386' />
       </Grid.Column>
       <Grid.Column width={8} className='textarea'>
      Here For The Moment Floral Maxi Dress - Green Floral
      <Drop className="sizes"></Drop>
       <Drops className="quantity"></Drops>
       </Grid.Column>
       <Grid.Column width={2} className='textarea'>
       <a className="remove" alt="Remove item"><i className='removeitem' class="far fa-times-circle"></i></a> 
       </Grid.Column>
    </Grid.Row>

  </Grid>
  </StyledDiv>
)

export default GridExampleCelledInternally