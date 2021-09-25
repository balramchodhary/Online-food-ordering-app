import axios from "axios";
import Style from './Register.css';
import { Component } from "react";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            address:'',
            phone:''
        };
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fname, lname, email ,address,phone} = this.state;

        axios.post('http://localhost:9000/testApi', { fname, lname, email,address,phone })
            .then((result) => {

            });
    }

    render() {
        const { fname, lname, email,address,phone} = this.state;
        return (
            <form onSubmit={this.onSubmit} style={Style}>
                <div>
                    <input
                        type="text"
                        placeholder='Fill First name'
                        name="fname"
                        value={fname}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Fill lastname'
                        name="lname"
                        value={lname}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Fill Email'
                        name="email"
                        value={email}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Fill address'
                        name="address"
                        value={address}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Fill Phone number'
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Register;