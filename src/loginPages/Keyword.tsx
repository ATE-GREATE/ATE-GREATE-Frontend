import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../loginPages/Keyword.css';
import '../index1.css';

const keywordList: string[] = [
  "#신중한", "#체계적인", "#열정적인", "#사교적인", "#독립적인", "#빈틈없는",
  "#꼼꼼한", "#논리적인", "#단호한", "#예측할수없없는", "#솔직한", "#감성적인",
  "#용기있는", "#깔끔한", "#느긋한", "#쾌활한", "#파워P", "#즉흥적인",
  "#경쟁심있는", "#진지한", "#사려깊은", "#의지가강한", "#완벽주의자", "#성실한"
];

export default function Keyword() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleKeyword = (keyword: string) => {
    if (selected.includes(keyword)) {
      setSelected(selected.filter(k => k !== keyword));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, keyword]);
      }
    }
  };

  const handleSubmit = () => {
    if (selected.length === 3) {
      navigate('/HomeKorea');
    }
  };

  {keywordList.map((keyword) => (
  <button
    key={keyword}
    className={`keyword-btn ${selected.includes(keyword) ? 'selected' : ''}`}
    onClick={() => toggleKeyword(keyword)}
    data-length={keyword.replace('#', '').length}
  >
    {keyword}
  </button>
))}


  return (
    <div className="container">
      <h3 className="title">자신을 표현할 수 있는 3가지 키워드를 골라주세요!</h3>
      <div className="keywords">
        {keywordList.map((keyword) => (
          <button
            key={keyword}
            className={`keyword-btn ${selected.includes(keyword) ? 'selected' : ''}`}
            onClick={() => toggleKeyword(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
      <button
        className={`submit-btn ${selected.length === 3 ? 'active' : 'disabled'}`}
        onClick={handleSubmit}
        disabled={selected.length !== 3}
      >
        완료
      </button>
    </div>
  );
}