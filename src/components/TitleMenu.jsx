import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TitleMap from './TitleMap';
import Modal from './Modal';


const TitleMenu = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, content) => {
    setModalData({ title, content });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="main__title">
          ИНФОРМАЦИОННАЯ СИСТЕМА ЭКОЛОГИЧЕСКОЙ ОЦЕНКИ И МОНИТОРИНГА ОЗЕРА ИССЫК-КУЛЬ
        </h1>
        <div className="main__map">
          <div className="map" id="map">
            <TitleMap />
          </div>
          <div className="sidebar">
            <button 
              className="button" 
              onClick={() => openModal(
                'ФУНКЦИОНАЛ', 
                'Прибрежные буферные зоны являются важным элементом поддержания водного объекта в устойчивом состоянии. Для каждого водного объекта, в зависимости от его природных, климатических и социально-экономических характеристик, размер прибрежных буферных зон варьируется. Современные тенденции преобразования прибрежных территорий в городские зоны лишь усиливают данную проблему. Информационная Система Экологической Оценки и Мониторинга Озера Иссык-Куль (ИСЭОМ) позволяет мониторить водный объект учитывая современные экологические критерии. В рамках данной системы можно определить такие параметры, как TSI, TLI и ширине буферной зоны.'
              )}
            >
              ФУНКЦИОНАЛ
            </button>

                <Link to="/main" className="link-button">
            <button className="button">
                    ПРОГРАММА
            </button>
                </Link>

            <button 
              className="button" 
              onClick={() => openModal('РУКОВОДСТВО', 'Здесь содержание для руководства.')}
            >
              РУКОВОДСТВО
            </button>

            {modalData && <Modal title={modalData.title} content={modalData.content} onClose={closeModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleMenu;
