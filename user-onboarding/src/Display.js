import React from 'react'
// import App from './App'


const Display = (props) =>{
console.log('Display.js -> %cprops:', 'color: cyan', props)


        
    return (
      <div>
        
       <h2> {props.name}</h2>
       <p> {props.login}</p>
       <p> {props.location}</p>
       <p> {props.bio}</p>
       <p> {props.url}</p>
    
     {/* <div>
      {props.followers.map(follower => 
        <div key={follower.id}>
            {follower.login}
      </div>)}
          
     </div>   */}
     </div>      
        )
    
    
    
    }
    
    
    export default Display;