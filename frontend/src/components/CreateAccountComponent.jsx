import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AccountServices from '../services/AccountServices';

class CreateAccountComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: '',
            user_pass: '',
            user_pass2: '',
            sex: '',
            email: '',
            last_ip: '',
            birthdate: '',
            pincode: ''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeUserPassHandler = this.changeUserPassHandler.bind(this);
        this.changeUserPass2Handler = this.changeUserPass2Handler.bind(this);
        this.changeSexHandler = this.changeSexHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeLastIpHandler = this.changeLastIpHandler.bind(this);
        this.changeBirthdateHandler = this.changeBirthdateHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
    }

    changeUserIdHandler = (event) => {
        this.setState({ userid: event.target.value });
    }

    changeUserPassHandler = (event) => {
        this.setState({ user_pass: event.target.value });
    }

    changeUserPass2Handler = (event) => {
        this.setState({ user_pass2: event.target.value });
    }

    changeSexHandler = (event) => {
        this.setState({ sex: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeLastIpHandler = (event) => {
        this.setState({ last_ip: event.target.value });
    }

    changeBirthdateHandler = (event) => {
        this.setState({ birthdate: event.target.value });
    }

    changePincodeHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }


    saveAccount = (event) => {
        event.preventDefault();
        // validate that the passwords are the same
        if (this.state.user_pass !== '' && this.state.user_pass === this.state.user_pass2) {
            if (this.state.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                // check if user name exists
                AccountServices.getLoginAccountByUserId(this.state.userid).then((svcRes) => {
                    if (svcRes && svcRes.data && svcRes.data.userid) {
                        alert("Choose a different userid");
                    } else {
                        AccountServices.getClientData().then((svcRes) => {
                            let today = new Date();
                            let dd = today.getDate();
                            let mm = today.getMonth() + 1;
                            let yyyy = today.getFullYear();
                            if (dd < 10) dd = '0' + dd;
                            if (mm < 10) mm = '0' + mm;
                            today = yyyy + '-' + mm + '-' + dd;
                            this.state.last_ip = svcRes.data.IPv4;
                            this.state.character_slots = 9;
                            this.state.group_id = 1;
                            this.state.lastlogin = today;
                            this.state.logincount = 0;
                            this.state.old_group = 0;
                            this.state.pincode = "0000";
                            this.state.pincode_change = 0
                            this.state.sex = this.state.sex;
                            this.state.state = 0;
                            this.state.unban_time = 0;
                            this.state.vip_time = 0;
                            this.state.web_auth_token = 0;
                            this.state.web_auth_token_enabled = 0.

                            AccountServices.postLoginAccount(this.state).then((svcRes) => {
                                //redirect to some place
                                alert("Account added successfully");
                                <Redirect to="/accounts" />
                            });
                        });
                    }
                });
            }
        }
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Account Add</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Username: </label>
                                        <input placeholder="Username" name="userid" className="form-control"
                                            value={this.state.userid} onChange={this.changeUserIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input type="password" placeholder="Password" name="user_pass" className="form-control"
                                            value={this.state.user_pass} onChange={this.changeUserPassHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Re-Enter Password: </label>
                                        <input type="password" placeholder="Re-Enter Password" name="user_pass2" className="form-control"
                                            value={this.state.user_pass2} onChange={this.changeUserPass2Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Sex: </label>
                                        <input className="form-check-input" type="radio" name="sex" value="M" onChange={this.changeSexHandler} />
                                        <label className="form-check-label">M</label>
                                        <input className="form-check-input" type="radio" name="sex" value="F" onChange={this.changeSexHandler} />
                                        <label className="form-check-label">F</label>
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Birthday: </label>
                                        <input placeholder="Birthday" name="birthdate" className="form-control"
                                            value={this.state.birthdate} onChange={this.changeBirthdateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Pincode: </label>
                                        <input placeholder="Pincode" name="pincode" className="form-control"
                                            value={this.state.pincode} onChange={this.changePincodeHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveAccount}>Save</button>
                                    <Link to="/accounts">
                                        <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccountComponent;