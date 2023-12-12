// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import News from './news';
function App() {
 let[articles,setArticles] =useState([])
 let[category,setCategory]=useState("india")
 useEffect(()=>{
  fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-11-12&sortBy=publishedAt&apiKey=8e897dad8a5a42d4976882ede11962b3`)
  .then((response)=>response.json())
  .then((news)=>{
    setArticles(news.articles);
    console.log(news.articles)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[category])
  return (
    <div className='main'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <div className="Header">
          <h1>Make Your Day </h1>
          
          <input type="text" placeholder="Search News" className="search" onChange={(event)=>{
            event.target.value!==""?
            setCategory(event.target.value):
            setCategory("india")
            
          }}></input>
    
        </div>
      <div className='app'>
{
  articles.map((item,index)=>{
     return(
      <News author={item.author} url={item.urlToImage} title={item.title} desc={item.description}key={index} tot={item.url}></News>
     )
  })
}
</div>
    </div>
  );
}

export default App;
