import React, { useState } from 'react';

export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


  const handleLogin = () => {
    if (username === 'example' && password === 'password') {
      setError('');
      alert('Қош келдіңіз!');
    } else {
      setError('Жарамсыз электрондық пошта немесе құпия сөз');
    }
  };
    return(
        <div className="container_rs">
            <div className="form_registation">
                <form>
                    <h1 className='SingIn_text'>Жеке парақшаға кіру</h1>
                    <input className="button_s SingIn_email" type="text" placeholder="Электрондық пошта" 
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className="button_s SingIn_password" type="password" placeholder="Құпия сөз"
                     value={password} onChange={(e) => setPassword(e.target.value)}/>
                     {error && <p className="error-message">{error}</p>}
                    <button className="SingIn_btn" type="submit" onClick={handleLogin}>Кіру</button>
                    <div className="SingIn_action_text">Сізде әлі парақша жоқ па? &nbsp;<a className="SingIn_link" href='./register'>Тіркелу</a></div>
                </form>
            </div>
        </div>
    )
}