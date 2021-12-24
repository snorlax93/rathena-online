import axios from "axios";

const DOMAIN_NAME = "localhost";
class AccountService {
    
    getLoginAccounts() {
        return axios.get("http://"+DOMAIN_NAME+":8080/api/v1/account/login");
    }

    getLoginAccountsById(id) {
        return axios.get("http://"+DOMAIN_NAME+":8080/api/v1/account/login/"+id);
    }

    getLoginAccountByUserId(userId) {
        return axios.get("http://"+DOMAIN_NAME+":8080/api/v1/account/login/"+userId);
    }

    postLoginAccount(account) {
        return axios.post("http://"+DOMAIN_NAME+":8080/api/v1/account/login/new", account);
    }

    getClientData() {
        return axios.get("https://geolocation-db.com/json/");
    }
}

export default new AccountService()