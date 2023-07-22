import React, { useState } from 'react';

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
  
    const handleRegistration = () => {
      if (!email || !validateEmail(email)) {
        setError('Өтінеміз қолданыстағы электронды пошта адресін енгізіңіз');
      } else if (!fullName) {
        setError('Толық аты-жөніңізді енгізіңіз');
      } else if (!password || password.length < 6) {
        setError('Құпия сөз кемінде 6 таңбадан тұруы керек');
      } else if (password !== confirmPassword) {
        setError('Құпия сөздер сәйкес келмеді');
      } else {
        setError('');
        alert('Тіркеу сәтті аяқталды!');
      }
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    return(
        <div className="container_rs">
            <div className="form_register">
                <form>
                    <h1 className='Register_text'>Жеке парақшаға тіркелу</h1>
                    <input className="button_s SingIn_email" type="text" placeholder="Аты-жөніңіз"
                    value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                    <input className="button_s SingIn_password" type="email" placeholder="Электрондық пошта" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <input className="button_s SingIn_password" type="password" placeholder="Құпия сөз"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className="button_s SingIn_password" type="password" placeholder="Құпия сөзді қайталау"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {error && <p className="error-message">{error}</p>}
                    <button className="SingIn_btn" type="submit" onClick={handleRegistration}>Тіркелу</button>
                    <div className="Register_action_text">Сіз тіркелгенсіз бе? &nbsp;<a className="SingIn_link" href="./login">Кіру</a></div>
                </form>
            </div>
        </div>
    )
}