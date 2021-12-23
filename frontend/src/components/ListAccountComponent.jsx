import React, { Component } from 'react';
import AccountServices from '../services/AccountServices';

class ListAccountComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        AccountServices.getLoginAccounts().then((svcRes) => {
            this.setState({ accounts: svcRes.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Accounts List</h2>
                <div className="row">
                    <div className='col-lg'></div>
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>userid</th>
                                <th>user_pass</th>
                                <th>sex</th>
                                <th>email</th>
                                <th>group_id</th>
                                <th>state</th>
                                <th>unban_time</th>
                                <th>logincount</th>
                                <th>lastlogin</th>
                                <th>last_ip</th>
                                <th>birthdate</th>
                                <th>character_slots</th>
                                <th>pincode</th>
                                <th>pincode_change</th>
                                <th>vip_time</th>
                                <th>old_group</th>
                                <th>web_auth_token</th>
                                <th>web_auth_token_enabled</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accounts.map(
                                    account =>
                                        <tr key={account.account_id}>
                                            <td> </td>
                                            <td>{account.userid}</td>
                                            <td>{account.user_pass}</td>
                                            <td>{account.sex}</td>
                                            <td>{account.email}</td>
                                            <td>{account.group_id}</td>
                                            <td>{account.state}</td>
                                            <td>{account.unban_time}</td>
                                            <td>{account.logincount}</td>
                                            <td>{account.lastlogin}</td>
                                            <td>{account.last_ip}</td>
                                            <td>{account.birthdate}</td>
                                            <td>{account.character_slots}</td>
                                            <td>{account.pincode}</td>
                                            <td>{account.piincode_change}</td>
                                            <td>{account.vip_time}</td>
                                            <td>{account.old_group}</td>
                                            <td>{account.web_auth_token}</td>
                                            <td>{account.web_auth_token_enabled}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListAccountComponent;