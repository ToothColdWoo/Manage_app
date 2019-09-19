import React, { Component} from 'react';

class Customer extends Component{
    render(){
        return (
            <div>
                <CustomerProfile id = {this.props.id} name = {this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gende}r job = {this.props.job} />
            </div>
        )
    }
}

class CustomerProfile extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>

            </div>
        )
    }
}
export default Customer;