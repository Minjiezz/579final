
import React from 'react';
import './App.css';
import { useEffect, useState} from "react";
import tete from "./tete.png"
import AddTitle from "./components/AddTitle";
import AddFooter from "./components/AddFooter";
import { StarTwoTone, HeartTwoTone } from '@ant-design/icons';
import { motion } from "framer-motion";


function App() {

    const [catlist, setCatlist] = useState([]);
    const [cat, setCat] = useState('');
    const [catresult, setCatresut] = useState([])
    const [getimage, setGetimage] = useState([])
    const [savewords, setSavewords] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                "x-api-key": "62753c72-debe-4445-bb45-011e3d69ea59"
            }
        })
            .then(response => response.json())
            .then(data => setCatlist(data),
                (err) => {
                    console.error(err);
                })
    },[])

    // console.log(catlist);

    function SearchCat () {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat}`, {
            headers: {
                "x-api-key": "62753c72-debe-4445-bb45-011e3d69ea59",
            }
        })
            .then(res => res.json())
            .then(data => {
                setCatresut(data[0]["breeds"][0]);
                setGetimage(data[0]);
            })
        console.log(getimage);
    }


  return (
      <div className="gradient">
        <AddTitle/>

          <motion.div
              initial={{x: -1000}}
              animate={{x: [0, 30, -30, 30, -30, 0]}}
              whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(225, 225, 225)",
              }}
              className="card favorite">
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><HeartTwoTone/> Favorite cats: {savewords.join(', ')}</li>
              </ul>
          </motion.div>

          <motion.div
              initial={{x: 1000}}
              animate={{x: [0, -20, 20, -20, 20, 0]}}
              className="input-group">
              <motion.select
                  whileFocus={{
                      scale:1.2,
                      boxShadow: "0px 0px 8px rgb(225, 225, 225)",
                  }}
                  className="custom-select" id="inputGroupSelect04" defaultValue="search" onChange={(e) => setCat(e.target.value)}>
                  <option selected>Choose...</option>
                  {
                      catlist && catlist.length>0 && catlist.map((item)=><option value={item.id} key={item.name}>{item.name}</option>)
                  }
                  {/*<option value="1">One</option>*/}
                  {/*<option value="2">Two</option>*/}
                  {/*<option value="3">Three</option>*/}
              </motion.select>
              <div className="input-group-append">
                  <motion.button
                      whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(138,43,226)",
                          boxShadow: "0px 0px 8px rgb(225, 225, 225)",
                  }}
                      className="btn btn-outline-light" type="button" onClick={SearchCat}>Search</motion.button>
                  <motion.button
                      whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(225, 225, 225)",
                          boxShadow: "0px 0px 8px rgb(225, 225, 225)",
                      }} className="btn btn-outline-dark" type="button"
                          onClick={() => {
                              setSavewords((savewords) => {
                                  const theWordList = savewords.concat();
                                  theWordList.push(catresult.name);
                                  console.log(setSavewords);
                                  return theWordList
                              })}}>Add to favorite list</motion.button>
              </div>
          </motion.div>

          <motion.div
              initial={{
                  // x: -1000,
                  y: 1000,
              }}
              animate={{
                  // x: 0,
                  y: 0,
              }}
              whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 16px rgb(225, 225, 225)",
              }}
              className="card">
              <img alt='cat images' width='440' src={getimage.url ? getimage.url : tete}/>
                  <div className="card-body">

                      <h3 className="card-title"><StarTwoTone twoToneColor="#FFE900FF"/>{catresult.name ? catresult.name : "Tete"}</h3>
                      <h5 className="card-text">{catresult.description ? catresult.description : "Minjie's cat, purr.."}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#6600ff", textShadow: "0px 0px 8px #6600ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Temperament: {catresult.temperament ? catresult.temperament : "Tail chaser???"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#5500ff", textShadow: "0px 0px 8px #5500ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Origin: {catresult.origin ? catresult.origin : "China"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#4800ff", textShadow: "0px 0px 8px #4800ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Affection Level: {catresult.affection_level ? catresult.affection_level : "?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#2f00ff", textShadow: "0px 0px 8px #2f00ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Adaptability: {catresult.adaptability ? catresult.adaptability : "?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#1900ff", textShadow: "0px 0px 8px #1900ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Child Friendly: {catresult.child_friendly ? catresult.child_friendly : "?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0800ff", textShadow: "0px 0px 8px #0800ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Dog Friendly: {catresult.dog_friendly ? catresult.dog_friendly :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#000dff", textShadow: "0px 0px 8px #000dff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Energy Level: {catresult.energy_level ? catresult.energy_level :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0022ff", textShadow: "0px 0px 8px #0022ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Grooming: {catresult.grooming ? catresult.grooming :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#003cff", textShadow: "0px 0px 8px #003cff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Health Issues: {catresult.health_issues ? catresult.health_issues :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0048ff", textShadow: "0px 0px 8px #0048ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Intelligence: {catresult.intelligence ? catresult.intelligence :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0059ff", textShadow: "0px 0px 8px #0059ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Shedding Level: {catresult.shedding_level ? catresult.shedding_level :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0077ff", textShadow: "0px 0px 8px #0077ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Social Needs: {catresult.social_needs ? catresult.social_needs :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#0095ff", textShadow: "0px 0px 8px #0095ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Stranger Friendly: {catresult.stranger_friendly ? catresult.stranger_friendly :"?"}</motion.li>
                      <motion.li
                          whileHover={{scale: 1.2, originX: 0, color: "#00b2ff", textShadow: "0px 0px 8px #00b2ff", boxShadow: "0px 0px 8px #ffffff"}}
                          transition={{type: "spring", stiffness: 300}}
                          className="list-group-item">Vocalisation: {catresult.vocalisation ? catresult.vocalisation :"?"}</motion.li>
                  </ul>
                  <div className="card-body">
                      <a href={catresult.wikipedia_url} className="card-link">Wikipedia</a>
                      {/*<a href="#" className="card-link">CFA</a>*/}
                  </div>
          </motion.div>

        <AddFooter/>
      </div>
  );
}

export default App;

