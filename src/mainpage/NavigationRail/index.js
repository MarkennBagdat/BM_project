import Img1 from './logo/menu.svg';
import Img2 from './logo/search.svg';
import Img3 from './logo/update.svg';
import Img4 from './logo/settings.svg';
import Img5 from './logo/delete.svg';
import Img6 from './logo/push_pin.svg';
import Img7 from './logo/person.svg';
import Img8 from './logo/list_alt.svg';
import Img9 from './logo/download.svg';
import Img10 from './logo/auto_stories.svg';
import Img11 from './logo/add.svg';
import Img12 from './logo/switch_account.svg';

export default function NavRail(){
    return(
        <div className='Rail_part'>
           <div className='Menu_pic'><img src={Img1} alt='Image' className='Img_menu'/></div>

           <div className='All_icons'>
            <div className='Icons Search_div'><img src={Img2} alt='Search' className='Img_search'/></div>
            <div className='Icons Update_div'><img src={Img3} alt='Update' className='Img_update'/></div>
            <div className='Icons Settings_div'><img src={Img4} alt='Settings' className='Img_settings'/></div>
            <div className='Icons Delete_div'><img src={Img5} alt='Delete' className='Img_delete'/></div>
            <div className='Icons Push_pin_div'><img src={Img6} alt='Push_pin' className='Img_push_pin'/></div>
            <div className='Icons Person_div'><img src={Img7} alt='Person' className='Img_person'/></div>
            <div className='Icons List_alt_div'><img src={Img8} alt='List_alt' className='Img_list_alt'/></div>
            <div className='Icons Download_div'><img src={Img9} alt='Download' className='Img_download'/></div>
            <div className='Icons Auto_stories_div'><img src={Img10} alt='Auto_stories' className='Img_auto_stories'/></div>
            <div className='Icons Add_div'><img src={Img11} alt='Add' className='Img_add'/></div>
            <div className='Icons Switch_account_div'><img src={Img12} alt='Switch_account' className='Img_switch_account'/></div>
           </div>
        </div>
    )
}