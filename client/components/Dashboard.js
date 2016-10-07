import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {store} from '../store/store'
import {exit} from '../actions/actions'


class Dashboard extends Component {
    componentWillMount() {
    }

    render() {

        const styles = {
            center: {
                textAlign: 'center'
            }
        };


        return (<div style={styles.center}>
                <div>
                    <Button bsSize="large" bsStyle="default" onClick={() => {store.dispatch(exit())}}>
                        Logout
                    </Button>
                </div>
            </div>
        )

    }

}


const mapStateToProps = ({ userData }) => ({ userData });

export default connect(mapStateToProps, null, null, {pure: false})(Dashboard)
