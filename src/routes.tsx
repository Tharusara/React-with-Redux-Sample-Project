import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Grid} from 'semantic-ui-react';

import Home from './components/home';
import NavBar from './components/NavBar';
import Post from './components/post_detail';

const Routes = () => {
        return(
            <>
                <NavBar></NavBar>
                <Container style={{marginTop: '7em'}}>        
                    <Grid centered>
                        <Grid.Column width='11'>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/post" exact component={Home}/>
                                <Route path="/post/:id" exact component={Post}/>
                            </Switch>
                        </Grid.Column>         
                    </Grid>
                </Container>

            </>
        )
}

export default Routes;