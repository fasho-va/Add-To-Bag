import data from './data'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react' 
import styled from 'styled-components';

// const numbers = [1,2,3,4,5,6,7,8,9]; 

console.log(data,'this is data')
const sizes = data[0].sz.map((size)=> {
  return {
    text: 'Size: ' + size + '- $' + data[0].price + ' USD'

  }
}) 
 

const Drop = () => {
  return <Dropdown className="sizes" placeholder='S' search selection options={sizes}/>
}


export default Drop;
