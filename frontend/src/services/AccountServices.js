import axios from "axios";

class AccountService {
    
    getLoginAccounts() {
        return axios.get("http://localhost:8080/api/v1/account/login");
    }
}

export default new AccountService()