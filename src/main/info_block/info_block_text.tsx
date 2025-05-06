import React from 'react';

interface Props {
  text: string; // Пропс для текста
}

const InfoBlockTxt: React.FC<Props> = ({ text }) => {
return (
    <div className="info_head">
      {text} {/* Вставляем переданный текст */}
    </div>    
);
};

export default InfoBlockTxt;