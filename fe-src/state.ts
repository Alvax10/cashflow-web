const API_BASE_URL = "http://localhost:3011";

const state = {
    data: {
        email: '',
        username: '',
        userExists: false,
        locationBefore: '/',
        token: null,
    },
    listeners: [],
    init() {
        const localData = JSON.parse(localStorage.getItem("user-data"));
        if (!localData) {
            return;
        }
        this.setState(localData);
    },
    getState() {
        return this.data;
    },
    async sendEmailWithInfo() {
        const currentState = this.getState();
        const { token } = currentState;

        const sendEmailToUser = await fetch(API_BASE_URL + "/send-email-to-user", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            },
            body: JSON.stringify({ }),
        })
        await console.log("Email enviado! :D");

    },
    
    async modifyUserInfo(oldEmail, newEmail?, password?) {
        const currentState = this.getState();
        const { token } = currentState;
        
        const updateUserInfo = await fetch(API_BASE_URL + "/user/data", {
            method: 'PATCH',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            },
            body: JSON.stringify({ oldEmail: oldEmail, newEmail: newEmail, newPassword: password }),
        });
        const data = await updateUserInfo.json();
        console.log("Esta es la data de modifyUserInfo: " + data);
    },
    async signUpUser(password) {
        const currentState = this.getState();
        const { email } = currentState;

        if (!email) {
            console.error('falta el email!');
        } else {

            await fetch(API_BASE_URL + '/auth', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
        }
    },
    async checkIfUserExists(callback) {
        const currentState = this.getState();
        const { email } = currentState;

        if (email) {

            const verifyUser = await fetch(API_BASE_URL + "/verify/user", {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
            const data = await verifyUser.json();
            console.log("User exists: ", data);
            currentState['userExists'] = data;
        }
        callback();
    },
    async signInUser(password, callback?) {
        const currentState = this.getState();
        const email = currentState['email'];

        if (email && password) {

            const authToken = await fetch(API_BASE_URL + '/auth/token', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            const token = await authToken.json();
            currentState["token"] = token;
            this.setState(currentState);

            callback();

        } else {
            if (callback) console.error('Falta email o contraseña');
        }

    },
    async getMe() {
        const currentState = this.getState();
        const { token } = currentState;

        if (token) {
            const res = await fetch(API_BASE_URL + "/me", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorizaton': `bearer ${token}`,
                    'Content-type': 'application/json',
                }
            });
            const data = await res.json();
            console.log(data);
        }
    },
    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
        console.log("Esto es this.data: ", this.data);
        localStorage.setItem("data", JSON.stringify(newState));
        console.log("Soy el state, he cambiado:", newState);
    },
    suscribe(callback: (any) => any) {
        this.listeners.push(callback);
    }
}

export { state };