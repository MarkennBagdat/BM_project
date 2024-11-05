import { ReactComponent as Logo } from 'C:/Users/marke/my-bosi/my-first-react-application/BM_project/src/mainpage/NavigationBar/Logo.svg';
import React, { useState } from 'react';
import Img1 from './Group 4.svg';

export default function MainPage(){
    const [goal, setGoal] = useState('');
  const [date, setDate] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [customEmotions, setCustomEmotions] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedAction, setSelectedAction] = useState('');
  const [customAction, setCustomAction] = useState('');
  const [customEmotion, setCustomEmotion] = useState('');
  const predefinedActions = ['ұйқы', 'спорт', 'тамақ', 'кітап оқу'];
  const predefinedEmotions = ['Happy', 'Sad', 'Excited', 'Angry'];

  const handleAddEmotion= () => {
    if (
      !customEmotions.includes(selectedEmotion) &&
      selectedEmotion !== '' &&
      selectedEmotion !== 'Other'
    ) {
      setActivities([...customEmotions, selectedEmotion]);
    } else if (selectedEmotion === 'Other' && customEmotion.trim() !== '') {
      setCustomEmotions([...customEmotions, customEmotion]);
      setCustomEmotion('');
    }
  };

  const handleEmotionChange  = (e) => {
    setSelectedEmotion(e.target.value);
  };

  const handleCustomEmotionChange = (e) => {
    setCustomEmotion(e.target.value);
  };

  const handleAddActivity = () => {
    if (
      !activities.includes(selectedAction) &&
      selectedAction !== '' &&
      selectedAction !== 'Other'
    ) {
      setActivities([...activities, selectedAction]);
    } else if (selectedAction === 'Other' && customAction.trim() !== '') {
      setActivities([...activities, customAction]);
      setCustomAction('');
    }
  };

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
  };

  const handleCustomActionChange = (e) => {
    setCustomAction(e.target.value);
  };

  /*COLOOR*/
  const colors = ['#E6E6FA', '#FFF0F5', '#E6D690', '#E4717A', '#CCCCFF', '#A8E4A0', 'A8E4A0'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  /*NOTION*/

  const [noteTexts, setNoteTexts] = useState(['', '', '', '', '', '']);

  const handleNoteChange = (index, value) => {
    const updatedNoteTexts = [...noteTexts];
    updatedNoteTexts[index] = value;
    setNoteTexts(updatedNoteTexts);
  };


    return(
        <div>
        <header>
        <nav>
          <div className="logo">
            <a href='./'>
            <Logo />
            </a>
          </div>
          <ul className="menu_bar">
            <li className='nav_bar'>Біз жәйлі</li>
            <li className='nav_bar'>Контактілер</li>
            <li className='nav_bar'>Іздеу</li>
          </ul>
        </nav>
        </header>


        <section className='Section1'>
            <div className='tracker_main'>
                <div className='Tracker_text'>
                <div className="goal">
        <label htmlFor="goal">Мақсат:</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className='input_text'
        />
      </div>

      <div className="activities">
        <label htmlFor="activities_text" className='activities_text'>Әрекетіңіз:</label>
        <ul className="ul_option">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="option_css input_text"
            style={{ backgroundColor: getRandomColor() }}
          >
            {activity}
          </li>
        ))}
      </ul>
      <div className="activity_in">
        <select id="action" value={selectedAction} onChange={handleActionChange} className='input_text select_option'>
          <option value="" className='select_option'>Таңдау</option>
          {predefinedActions.map((action, index) => (
            <option key={index} value={action}>
              {action}
            </option>
          ))}
          <option value="Other">Басқа</option>
        </select>
{selectedAction === 'Other' && (
          <input
            type="text"
            value={customAction}
            onChange={handleCustomActionChange}
            placeholder="Өз нұсқаңызды жазыңыз"
            className='other_variant'
          />
        )}
      <button onClick={handleAddActivity} className='btn_select'><img src={Img1}/></button>
    </div>
      </div>

      <div className="date">
        <label htmlFor="date" >Күн:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} className='input_text'
        />
      </div>

      <div className="emotions">
        <label htmlFor="emotions" className='activities_text'>Көңіл-күй:</label>
                <ul className="ul_option">
        {customEmotions.map((reaction, index1) => (
          <li
            key={index1}
            className="option_css input_text"
            style={{ backgroundColor: getRandomColor() }}
          >
            {reaction}
          </li>
        ))}
      </ul>
        <div className="activity_in">
        <select id="emotions" value={selectedEmotion} onChange={handleEmotionChange} className='input_text select_option'>
          <option value="" className='select_option'>Таңдау</option>
          {predefinedEmotions.map((reaction, index1) => (
            <option key={index1} value={reaction}>
              {reaction}
            </option>
          ))}
          <option value="Other">Басқа</option>
        </select>
        {selectedEmotion === 'Other' && (
          <input
            type="text"
            value={customEmotion}
            onChange={handleCustomEmotionChange}
            placeholder="Өз нұсқаңызды жазыңыз"
            className='other_variant'
          />
        )}
          <button onClick={handleAddEmotion} className='btn_select'><img src={Img1}/></button> 
        </div>
      </div>
                </div>
                </div>
        </section>


        <section className='section2'>
      <div className='notion_main'>
        <div className='Two_note'>
          <div className="note-container">
            <div className="question_note">Қазіргі уақытта қандай эмоцияларды сезініп отырсыз?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[0]}
              onChange={(e) => handleNoteChange(0, e.target.value)}
            />
          </div>
          <div className="note-container">
            <div className="question_note">Қандай оқиға немесе жағдай бұл эмоцияларды тудырды?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[1]}
              onChange={(e) => handleNoteChange(1, e.target.value)}
            />
          </div>
        </div>
        <div className='Two_note'>
          <div className="note-container">
            <div className="question_note">Бұл эмоциялар қашаннан бері жалғасып келеді?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[2]}
              onChange={(e) => handleNoteChange(2, e.target.value)}
            />
          </div>
          <div className="note-container">
            <div className="question_note">Қандай физикалық сезімдер осы эмоциялармен бірге жүреді (мысалы, жүрек соғуы, бұлшықет кернеуі)?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[3]}
              onChange={(e) => handleNoteChange(3, e.target.value)}
            />
          </div>
        </div>
        <div className='Two_note'>
          <div className="note-container">
            <div className="question_note">Өткендегі ұқсас жағдайларды еске түсіріңіз. Сол кезде қандай эмоциялар пайда болды және неге?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[4]}
              onChange={(e) => handleNoteChange(4, e.target.value)}
            />
          </div>
          <div className="note-container">
            <div className="question_note">Сіз әдетте бұл эмоцияларға қалай қарайсыз? Оларды басқару үшін қандай стратегияларды қолданасыз?</div>
            <textarea
              className="note-textarea"
              placeholder="Сұрақтарға жауап беруге тырысып көріңіз (міндетті емес)..."
              value={noteTexts[5]}
              onChange={(e) => handleNoteChange(5, e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
    )
}