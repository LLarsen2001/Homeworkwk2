import logo from './logo.svg';
import'./App.css';
import PostCard from "./PostCard"
let allPosts = [
  {id:1, username:"apple90", post:'Fun day at the beach!'},
  {id:2, username:"CoxNews", post:'News update...'},
  {id:3, username:"jimbeans", post:'likes to Code and Paint'},
  {id:4, username:"Wraith23433", post:'Has anyone tried that new burger shop down on the corner'},
  {id:5, username:"alex'smom384", post:'something new that i have never tired is cliff jumping'},
  {id:6, username:"remmmyre", post:'I ran 10 miles today for my work and i am tired'},
  {id:7, username:"horsreisbeautty", post:'anyone know how to fix a dryer?'},
  {id:8, username:"whatisthat20", post:'Whats the funniest thing that has ever happened to you?'},
  {id:9, username:"lamaxooxox", post:'Im running out of things to write in this post lol'},
  {id:10, username:"turtlrbeachs", post:'I only made a few more... '},
  {id:11, username:"howtoshoot", post:'====================>> one more'},
  {id:12, username:"helloyours", post:'you made it!!!!!!!'},
  ]
  
  function App() {
    const renderAllPosts = () =>{
      return allPosts.map((posts)=>{
        return <PostCard
         key={posts.id}
         username={posts.username} 
         post={posts.post} />
      })
    }
    
    return (
      <div className="background">
      <>
        <h2 className="post">Posts</h2>
        {renderAllPosts()}
        {/* <Card />
        <CardInline /> */}
        {/* <JSXDemo /> */}
      </>
      </div>
    );
  }
  export default App;