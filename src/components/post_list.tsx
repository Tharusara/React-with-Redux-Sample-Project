import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Step, StepGroup } from 'semantic-ui-react';
import { Post } from '../models/post';
import { User } from '../models/user';

interface Props {
    users: User[];
    posts: Post[];
}
const PostList = (props: Props) =>{
    return (
        <>  
            <Header color='blue'>Posts</Header>
            <div className="post_container">
                { props.posts && props.posts.length > 0 ?
                    props.posts.map( item => (
                    <Link to={`/post/${item.id}`} key={item.id} className="post_item" >                      
                        <StepGroup vertical >
                            <Step active>
                                <Step.Content className="post_item">
                                    <Step.Title>{item.title}</Step.Title>                                    
                                    <Step.Description><b>Email: </b>{props.users 
                                    ? item.email = props.users.find(u => u.id === item.userId).email 
                                    : null}</Step.Description>
                                </Step.Content>
                            </Step>
                        </StepGroup> <br />
                    </Link>
                    )) : null
                }    
            </div>
        </>
        
    )
}

export default PostList;