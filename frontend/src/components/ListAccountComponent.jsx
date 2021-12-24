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
                                <th scope="col">Action</th>
                                <th scope="col">userid</th>
                                <th scope="col">user_pass</th>
                                <th scope="col">sex</th>
                                <th scope="col">email</th>
                                <th scope="col">group_id</th>
                                <th scope="col">state</th>
                                <th scope="col">unban_time</th>
                                <th scope="col">logincount</th>
                                <th scope="col">lastlogin</th>
                                <th scope="col">last_ip</th>
                                <th scope="col">birthdate</th>
                                <th scope="col">character_slots</th>
                                <th scope="col">pincode</th>
                                <th scope="col">pincode_change</th>
                                <th scope="col">vip_time</th>
                                <th scope="col">old_group</th>
                                <th scope="col">web_auth_token</th>
                                <th scope="col">web_auth_token_enabled</th>
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