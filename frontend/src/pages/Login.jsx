import Form from "../components/Forms"

function Login() {
    return (
        <div>
            <Form route = "/api/login/" method = "login"/>
        </div>
    )
}

export default Login