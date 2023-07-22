import backgroundImage from './bckg.svg';

export default function ActionTwo(){
    return(
        <section className="Action_main">
            <div className="ActionTwo_page">
                <img src={backgroundImage} alt="Background" />
                <div className="ActionTwo_words">
                    <div className="ActionTwo_title">Tüpsana jazbalary-мен ішкі әлеміңіздің 
                    <br />есігін ашып, рухани тыныштық табыңыз!</div>
                    <button className="button">
                        <a className="button-text" href='./login'>Қосылу</a></button>
                </div>
                </div>
        </section>
    )
}