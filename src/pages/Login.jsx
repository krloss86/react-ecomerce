const Login = ({loginGoogle}) => {
    return (
        <div className='col'>
            <h3>
                Iniciar Sesión
            </h3>
            <button onClick={loginGoogle}>
                Iniciar Sesión con Google
            </button>
        </div>
    );
};

export default Login;