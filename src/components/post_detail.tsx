import React from 'react';

import PostContainer from '../containers/post_container';

const PostDetail = (props) =>{
    return(
        <>
            <PostContainer {...props}/>
        </>
    )
}

export default PostDetail;