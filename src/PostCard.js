import React, { useState } from "react";
//import{usestate} from "react";
const PostCard = (props) => {
    let [likes, setLikes] = useState(props.initialLikes || 0);
    const like = () => {
        setLikes(likes + 1);
      };
      const disLike = () => {
        if (likes == 0) {
          return;
        }
        setLikes(likes - 1);
      };
    return(
   <div className="background">
        <div className="container">
            <div className="bio">
                 <h3 className="user-name">{"Posted by " + props.username || "no name prop given"}</h3>
                 <p className="post">{props.post || "no about prop given"}</p>
                 <p className="post"> Likes: {likes}</p>
                 <button onClick={like}>Like</button>
                 <button onClick={disLike}>Dislike</button>
             </div>
        </div>
      </div>
  )
  
};

export default PostCard;