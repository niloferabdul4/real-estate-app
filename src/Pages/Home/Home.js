import React,{useContext} from 'react'
import { onSnapshot,collection } from '@firebase/firestore';
import { db } from '../../Firebase/firebase';
//import  housesData  from '../../data';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Categories from '../../Components/Categories/Categories';
import Featured from '../../Components/Featured/Featured';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Agents from '../../Components/Agents/Agents';
import ToggleBar from '../../Components/ToggleBar/ToggleBar';



const Home = () => {

 
  return (
    <div>
      <Header/>
      <ToggleBar/>
      <Banner /> 
      <Categories />
      <Featured />
       <Agents/>
       <Footer/>
       
    </div>
  )
}

export default Home
