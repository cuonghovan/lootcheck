import React from 'react';

class Login extends React.Component {
  loginByFacebook() {
    console.log('logging in...');
  }

  render() {
    return (
      <div className='login'>
        <button onClick={this.loginByFacebook}>Login with Facebook</button>
      </div>
    );
  }
}

export default Login;
