import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            name="Servey"
            description="$5 for 5 survey credits"
            amount={500} //in cents
            token={token => this.props.handleToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>

        );
    }
}
export default connect(null, actions) (Payments);