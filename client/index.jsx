import React from 'react';
import ReactDOM from 'react-dom';
import GridExampleCelledInternally from './grid.jsx'; 
import styled from 'styled-components'; 
import axios from 'axios'; 
import Id from "./iddrop.jsx";

const StyledDiv = styled.div` 
.checkout {
  width: 90% !important;
  height:45px;
  color: white;
  margin:0;
  padding: 0px;
  border: 1px solid black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.05em;
  border-radius: 5px;
  background-color: black;
  box-sizing: border-box;
  font-size: 17px;
  vertical-align: middle;
  font-weight:bold
  position:relative
} 
.shoppingbag{
  background-color: #d0c6bb;
  color: black;
  border-color: transparent;
  display: block;
  width: 100%;
  padding: 15px 16px;
  font-size: 14px;
  line-height: 19px;
}
.sidebar {
  width: 31.5% !important; 
  backgrounnd-color: pink;
  color: blue;
}

.inyourbag{
  border: none;
  background-color: #d0c6bb;
  color: black;
  border-color: transparent;
  display: inline-block;
  width: 384px;
  padding: 15px 16px;
  font-size: 15px;
  line-height: 21px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s linear;
  box-sizing: border-box;
  -webkit-appearance: button;
}
.amazonholder{
  background-color:white;
  color:white;
}
.amazonbutton{ 
  width: 90% !important;
  height:45px;
  cursor:pointer; 
  background-color: #fad676;
  display: inline-block !important;
  // height: 3.5em !important;
  margin: 0 !important;
  vertical-align: middle !important;
  // width: auto !important; 
  box-sizing: border-box;
}
.amazonimg{
  height: 72%;
  width:30%
}
.paypal-button{
  width: 90% !important;
  height:45px;
  cursor:pointer; 
  background-color: #FFB500;
  display: inline-block !important;
  // height: 3.5em !important;
  margin: 0 !important;
  vertical-align: middle !important;
  // width: auto !important; 
  box-sizing: border-box;
}
.paypalimg{
  height: 92%;
  width:40%
}
.mybag{
  background-color: black;
  color: white; 
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  text-align: center;
}
.subtotal{
  background-color: grey;
  color: black;
  border-color: transparent;
  display: block;
  width: 100%;
  padding: 15px 16px;
  line-height: 19px;
  padding: 15px 16px;
  font-size: 20px;
  text-decoration: none;
  // text-transform: uppercase;
  font-weight: 990;
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  text-align: left;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  vertical-align: top;
  width: 100%;
  padding-left: 20px;
} 

.totalicon{
  background-color:grey;
  text-align:right;
  line-height: 22px;
  box-sizing: border-box;
  float: right;
  min-height: 1px;
  vertical-align: top;
  width: 100%;
  padding-right: 20px;

}
`;

import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Dropdown
} from 'semantic-ui-react'

class AddToBag extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        visible: false,
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        size:['medium','small', 'large'], 
        currentItem: "",
        shoppingbag: [], 
        subtotal: 0, 
        count: 0
      };
      this.handleShowClick = this.handleShowClick.bind(this);
      this.handleSidebarHide = this.handleSidebarHide.bind(this); 
      this.handleid= this.handleid.bind(this);  
      this.handledelete = this.handledelete.bind(this);
      this.handleCount= this.handleCount.bind(this);
    }
    
    // componentDidMount(){ 
    
      
    // }
     handleShowClick(){  
        this.setState({visible:true}) 
      //  event.preventDefault(); 
      console.log(this.state.currentItem, 'herrerererere')
       axios.get(`/currentitem${this.state.currentItem}`,{
        params: {
          id: this.state.currentItem
        }
      })
      .then((response)=> {
        console.log('this is the response',response.data.rows[0])
        let bag = this.state.shoppingbag;  
        console.log('moneeeeyyyy priceeeee',response.data.rows[0].price)
        bag.push(response.data.rows[0]);
        let price = parseFloat(response.data.rows[0].price);
        let currentTotal = this.state.subtotal += price; 
        this.setState({shoppingbag:bag}) 
        this.setState({subtotal: currentTotal})  
        console.log('this is the current total after being set',currentTotal)
      })
      .catch((error)=> {
        console.log('this is the error',error);
      });
     } 
     handleSidebarHide(){
      this.setState({ visible: false })
    }  
    handleid(event, {currentItem: value}){  
      // event.preventDefault();
      event.persist();

      // console.log('this is the event =>>', event)
      // console.log('this is the event.target.textcontent =>>', event.target.textContent) 
      // const num = parseInt(event.target.textContent)
      this.setState({currentItem:event.target.textContent})  
      // this.setState({subtotal:event.target.})
    } 
    handledelete(index){ 
     let arr = this.state.shoppingbag;  
     let currentTotal = this.state.subtotal; 
     arr.splice(index,1)
     this.setState({shoppingbag: arr})  
    } 
    handleCount(event,{currentItem:value}){
      let count = event.target.value;
     console.log('this is the count of an item', event.target.value)
    }

    render(){
      const { animation, dimmed, direction, visible, size } = this.state
      const sizes = this.state.size 

      
        return (
    <StyledDiv id="add-to-bag"> 

        <Sidebar.Pushable className="something" as={Segment}>
          <Sidebar
            className='sidebar'
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            direction= "right"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
          >
            <Menu.Item as='a'>
             <i className="mybag" aria-hidden="true"> MY BAG </i>
            </Menu.Item>

            <Menu.Item > {this.state.shoppingbag.map((product,index)=>{
              return <GridExampleCelledInternally index={index} onChange={this.handleCount} handledelete={this.handledelete} products={product}/>
            })
            } 
            </Menu.Item> 

              <div as='a'className="subtotal">
              <div className="totalicon">
              <Icon name='dollar sign'>{this.state.subtotal}</Icon>
              </div>
              Subtotal
            </div>

             <Menu.Item as= 'a' >
               <Button className='checkout'>CHECKOUT</Button>
             </Menu.Item>

             <Menu.Item as= 'a' > 
               <Button className='paypal-button'>
               <img className = "paypalimg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg=="></img>
               <img className='paypalimg' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg=="></img></Button>
               
             </Menu.Item>

             <Menu.Item className="amazonholder" >
               <Button className= 'amazonbutton'>
               <img className='amazonimg' src="//cdn.shopify.com/s/assets/checkout/easy-checkout-btn-amazon-pay-72091bddbea7788c02d934d95d97fe6a0da7618cadc5838c40f44f190fa24442.png" >
               </img>
               </Button>
             </Menu.Item> 

          </Sidebar>


          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header className='header'as='h1'>Fashova Content</Header>

              <Button.Group>
        
          <Button className="inyourbag" disabled={visible} active={direction === 'right'} onClick={this.handleShowClick} >
          In Your Bag!
          </Button> 
          
          
        </Button.Group>
        <Id onChange={this.handleid}></Id>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>
              <div>-   </div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </StyledDiv>
        )
    }
};

ReactDOM.render(<AddToBag/>, document.getElementById('add-to-bag'))

