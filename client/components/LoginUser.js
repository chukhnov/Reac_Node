import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {store} from '../store/store'
import {login} from '../actions/actions'


class LoginUser extends Component {

    componentWillMount() {
    }

    render() {
        const styles = {
            wellStyles: {
                maxWidth: 400, margin: '0 auto 10px', textAlign: 'center'
            },
            texts: {
                fontSize: '20px'
            },
            textArea: {
                marginTop: '12px',
                height: '35px',
                textAlign: 'center'
            }
        };


        return (
            <form className="well" style={styles.wellStyles}>
                <span style={styles.texts}>Please Log In, or&nbsp;
                    <Link to="/register">Sign Up</Link>
                </span>
                <div>
                    <input style={styles.textArea} type='text' ref='username' defaultValue="admin"/>
                </div>
                <div>
                    <input style={styles.textArea} type='password' ref='password' defaultValue="admin"/>
                </div>
                <div>
                    <br/>
                    <Button type="submit" bsStyle="primary" bsSize="small" onClick={(e) => this.handleClick(e)}>
                        Login
                    </Button>
                </div>
            </form>
        )
    }

    handleClick(e) {
        e.preventDefault();
        const username = this.refs.username;
        const password = this.refs.password;
        const dataUsername = username.value.trim();
        const dataPassword = password.value.trim();
        const obj = {
            username: dataUsername,
            password: dataPassword
        };
        store.dispatch(login(obj));
        username.value = '';
        password.value = '';

    }
}


const mapStateToProps = ({ userData }) => ({ userData });

export default connect(mapStateToProps, null, null, {pure: false})(LoginUser)