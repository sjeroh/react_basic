import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Children from './components/Children';

function App() {
  const name='노똥땅';
  const footProps={
    name:"노길똥",
    location:"머구"
  };
  function handleClick(){
    console.log('함수형클릭')
  };
  const arrowClick=()=>{
    console.log('화살표함수실행')
  };

  return (
    <>
    <Header name={name}/>
    <Body name= {name} location='푸싼풀코스'/>
    <Footer {...footProps}/>
    <Children>
      <div>children 컴포넌트</div>
    </Children>
    <button onClick={handleClick}>함수형클릭 </button>
    <button onClick={arrowClick} style={{display:'block'}}>화살표함수클릭</button>
    </>
  );
}

export default App;
