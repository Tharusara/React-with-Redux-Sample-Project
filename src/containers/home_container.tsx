import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsListAll, usersListAll } from '../actions';
import { bindActionCreators } from 'redux';
import PostList from '../components/post_list';


interface Props {
    posts: any;
    postsListAll: () => void;
    usersListAll: () => void;
}
class HomeContainer extends Component<Props> { 

    // componentDidMount() can be use instead to resolve the warnings
    componentWillMount() {
        this.props.postsListAll()
        this.props.usersListAll()
    }


    render(){
        return (
            <div>
                <PostList posts={this.props.posts.postsList} users={this.props.posts.usersList}/>
            </div>
        )
    }
    
}


function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postsListAll, usersListAll},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)