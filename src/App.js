import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

  // state in react
  // [<condition>, <command>] = useState(<default condition>)
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  // regular js function to handle command
  const increment = () =>{
    setCount(count +1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    {name: "Kelvin", likes: "20K"}
    , {name: "Sao", likes: "20K"}
    , {name: "Timi", likes: "20K"}
    , {name: "Perfoo", likes: "20K"}
  ]);

  return(
    <div className='App'>
      {/* set name an likes props for tweet component */}
      {/* <Tweet name="Kelvin" likes="200K"/>
      <Tweet name="Sao" likes="50K"/>
      <Tweet name="Perfoo" likes="2K"/>
      <Tweet name="Timi" likes="102K"/> */}
      {/* <div>
        <h1 className ={isRed ? "red" : ""}>Change colour</h1>
        <button onClick={increment}>+</button>
        <h3>{count}</h3>
      </div> */}


      {users.map(user => (
        <Tweet name={user.name} likes={user.likes}/>
      ))}

    </div>
  );
}

export default App;