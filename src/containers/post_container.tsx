import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { postDetail, clearUserDetail } from '../actions';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { Post } from '../models/post';
import { Grid, Step } from 'semantic-ui-react';

interface Props {
    posts: any;
    post: Post;
    match: any;
    postDetail: (id: number) => void;
    clearUserDetail: () => void;
}
class PostContainer extends Component<Props> {

    // can replace with componentDidMount() to avoid the warnings
    componentWillMount() {
        this.props.postDetail(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearUserDetail();
    }

    postTemplate = (data: any, user: User) => (   
        data.post ? 
            <div className="post_view">
                <div className="post_background">
                    <Link to="/" style={{color: 'green'}}>
                        Back home
                    </Link>
                </div>
                <div className="post_description">                    
                    <Step.Group vertical>
                        <Step active>
                            <Step.Content>
                                <Step.Title>Post Details</Step.Title>
                                <Step.Description><b>Post Id :</b> {data.post[0].id}</Step.Description>
                                <Step.Description><b>Name :</b>  {data.post[0].title} </Step.Description>
                                <Step.Description><b>Bio :</b>  {data.post[0].body} </Step.Description>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </div>
                <div className="post_album_list">
                    {user ?
                        
                        <Grid>
                            <Grid.Column width='8'>
                                <Step.Group vertical>
                                    <Step active>
                                        <Step.Content>
                                            <Step.Title>User Details</Step.Title>
                                            <Step.Description><b>User Name :</b> {user.username}</Step.Description>
                                            <Step.Description><b>Name :</b>  {user.name} </Step.Description>
                                            <Step.Description><b>Email :</b>  {user.email} </Step.Description>
                                            <Step.Description><b>Phone No:</b>  {user.phone} </Step.Description>
                                            <Step.Description><b>Website :</b>  {user.website} </Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step active>
                                        <Step.Content>
                                            <Step.Title>Company Details</Step.Title>
                                            <Step.Description><b>Company :</b> {user.company.name}</Step.Description>
                                            <Step.Description><b>CatchPhrase :</b> {user.company.catchPhrase}</Step.Description>
                                            <Step.Description><b>Bs :</b> {user.company.bs}</Step.Description>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Step.Group>
                                    <Step active>
                                        <Step.Content>
                                            <Step.Title>Adress :</Step.Title>
                                            <Step.Description><b>street :</b> {user.address.street}</Step.Description>
                                            <Step.Description><b>suite :</b> {user.address.suite}</Step.Description>
                                            <Step.Description><b>city :</b> {user.address.city}</Step.Description>
                                            <Step.Description><b>zipcode :</b> {user.address.zipcode}</Step.Description>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </Grid.Column>
                        </Grid>
                    : null
                    }
                </div>
            </div>
        :null

    )
    
    render(){
        let user: User = this.props.posts.post && this.props.posts.usersList 
        ? this.props.posts.usersList.find(u => u.id === this.props.posts.post[0].userId) 
        : null;
        return (
            <div>
                {this.postTemplate(this.props.posts, user)}
            </div>
        );
    }
};

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postDetail,clearUserDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PostContainer)