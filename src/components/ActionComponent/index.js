import backgroundImage from './bckg.svg';
export default function Action(){
    return(
        <section className="Action_main">
            <div className="Action_page">
                <img src={backgroundImage} alt="Background" />
                <div className="Action_words">
                    <div className="Action_title">Ішкі тыныштықты бізбен бірге тап</div>
                    <div className="Action_text">Тыныштық – кез-келген сыртқы жағдайда ақыл-ойдың тазалығын сақтау. 
                    <br />Жан тыныштығы – ол адамға кез-келген жағдайдан шығуға көмектесетін күш.</div>
                    <button className="button" >
                        <a className="button-text" href='./login'>
                            Қосылу</a></button>
                </div>
                </div>
        </section>
    )
}