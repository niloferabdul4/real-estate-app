import React,{useContext} from 'react'
import { onSnapshot,collection } from '@firebase/firestore';
import { db } from '../../Firebase/firebase';
//import  housesData  from '../../data';
import PropertyCard from '../PropertyCard/PropertyCard';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { PropContext } from '../../Context/PropContextProvider';
import Featured from '../Featured/Featured';

const Home = () => {

 
  return (
    <div>
     <Banner /> 
     <Categories />
    <Featured />
    
      
    </div>
  )
}

export default Home
