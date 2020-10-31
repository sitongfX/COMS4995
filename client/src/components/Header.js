import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Landing.scss';
import { FcSurvey } from "react-icons/fc";
import Payments from './Payments';
import { background } from '../libs/landingbg';



class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];  
    }
  }
    render() {
      background();

      // console.log(this.props);
        return (
            <nav className="nav">
            <div className="nav-wrapper"> 
              <div className="container">
              <Link to={this.props.auth ? '/surveys' : '/'} 
              className="left brand-logo">    
                  <div className="left icon" style={{ margin:'4px 2px'}}><FcSurvey /></div>
                  Servey</Link></div>
              <ul className="right" >
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }
}

function mapStateToProps({ auth }){
  return { auth };
}
export default connect(mapStateToProps) (Header);