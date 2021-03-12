import React from 'react';

const PostData = () => {
    const [post,setPost] = useState([])

        useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res =>res.json())
            .then(data => setPost(data));
  
    },[])
    return (
        <div>
                
        </div>
    );
};

export default PostData;