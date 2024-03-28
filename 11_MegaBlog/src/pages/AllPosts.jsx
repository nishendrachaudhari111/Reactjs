import React,{useState, useEffect} from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";


function AllPosts(){
  const [Posts, setPost] = useState([])
  useEffect(() => {}, [])
  appwriteService.getPost([]).then((posts) => {
     if (posts){
         setPost(posts.documents)
    }
}) 
    return  (
      <div className="w-full py-8">
        <Container>
           <div className="flex flex-wrap">
            {Posts.map((Post) => (
                <div key={Post.$id}>
                    <PostCard Post={Post} />
                </div>
            ))}
           </div>
        </Container>

      </div>
    )
}

export default AllPosts