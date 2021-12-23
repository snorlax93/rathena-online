import axios from "axios";

class AccountService {
    
    getLoginAccounts() {
        return axios.get("http://snorlaxx-server.ddns.net:8080/api/v1/account/login");
    }
}

export default new AccountService()