import Img1 from './img1.svg';
import Img2 from './img2.svg';
import Img3 from './img3.svg';
import Img4 from './img4.svg';
import Img5 from './img5.svg';
import Img6 from './img6.svg';

export default function Article(){
    return(
        <section className="article">
            <div className="article_main">
                <div className="Article_hearder">Психология туралы мақалалар</div>
                <div className="article_cards">
                    <div className="cards_one">
                        <div className="cards">
                            <div className="cards_img"><img src={Img1} alt="image" /></div>
                            <div className='Cards_text'>
                            <div className='emotions'>
                                <div className='em_card em_text'>Психология</div>
                                <div className='em_card em_text'>Көңіл-күй</div>
                            </div>
                            <div className='cards_title'>Ішкі уайымды қалай жеңуге болады</div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="cards_img"><img src={Img4} alt="image" /></div>
                            <div className='Cards_text'>
                            <div className='emotions'>
                                <div className='em_card em_text'>Психология</div>
                                <div className='em_card em_text'>психология  түрлері</div>
                            </div>
                            <div className='cards_title'>Когнитивтік психология деген не?</div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_two">
                        <div className="cards">
                            <div className="cards_img"><img src={Img2} alt="image" /></div>
                            <div className='Cards_text'>
                            <div className='emotions'>
                                <div className='em_card em_text'>Психология</div>
                                <div className='em_card em_text'>Талпыныс</div>
                            </div>
                            <div className='cards_title'>Мен кіммін? Неге мен ...</div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                        <div className="cards">
                        <div className="cards_img"><img src={Img5} alt="image" /></div>
                        <div className='Cards_text'>
                        <div className='emotions'>
                                <div className='em_card em_text'>Эмоция</div>
                                <div className='em_card em_text'>Отбасы</div>
                            </div>
                            <div className='cards_title'>Ата-ана үміті. Қорқыныш</div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_three">
                        <div className="cards">
                            <div className="cards_img"><img src={Img3} alt="image" /></div>
                            <div className='Cards_text'>
                            <div className='emotions'>
                                <div className='em_card em_text'>Интуиция</div>
                                <div className='em_card em_text'>Эмоция</div>
                            </div>
                            <div className='cards_title'>Ішкі түйсікті тыңдай білу</div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                        <div className="cards">
                        <div className="cards_img"><img src={Img6} alt="image" /></div>
                        <div className='Cards_text'>
                        <div className='emotions'>
                                <div className='em_card em_text'>Психология</div>
                                <div className='em_card em_text'>Fomo</div>
                            </div>
                            <div className='cards_title'>FOMO деген не? </div>
                            <div className='more_info' src="" href=''>Тағы оқу</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}