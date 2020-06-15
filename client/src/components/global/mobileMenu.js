import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import $  from 'jquery';

class Mobile extends Component {
    componentDidUpdate(){
        if(!this.props.isLoading){
            $(".mobile-nav li").click(function(){
                $(".mobile-nav").toggleClass('active');
            })
        }
    }

    render() {
        const {user} = this.props;

        return (
            <div className="mobile-nav">
                <div className="close">
                   
                </div>

                <ul>
                    <ul className="header-nav mob">
                        <li>
                            <NavLink exact className="nav-item" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/faq">FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/contacts">Contacts</NavLink>
                        </li>
                        {(user.isAdmin) && (
                            <li>
                                <NavLink className="nav-item" to="/admin">Panel</NavLink>
                            </li>
                        )}
                    </ul>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({user: state.auth.user,isLoading:state.auth.isLoading})

export default connect(mapStateToProps)(Mobile)