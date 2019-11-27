const axios = require("axios");

const AuthContext = React.createContext();

const onLogin = (login, password, saveCredentials) => {
  const [error, setError] = useState("");
  const [authentified, setAuthentified] = useState("");
  axios
    .post("/signin", {
      username: login,
      password: password,
    })
    .then(function(response) {
      if (saveCredentials) {
        var cred = {
          user: response.data.username,
          password: response.data.password,
        };
      }
      console.log("test : " + response);
      setAuthentified(true);
    })
    .catch(function(err) {
      setError(err.response.data.message);
    });
};
const AuthProvider = props => (
  <AuthContext.Provider
    value={{
      onLogin,
    }}>
    {props.children}
  </AuthContext.Provider>
);

export { AuthProvider, AuthContext };
