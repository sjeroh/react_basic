import './App.css';
import Header from './components/header';
import Menu from './components/Menu';

function App() {
  return (
   <div>
    <Menu name="그린" />
    <Menu name="학원"/>
   <Header color="빨강" num={1}/>
   <Header color="파랑" num={2}/>
   <Header color="노랑" num={3}/>
   <Header color="댕청한" num={99}/>
   </div>
  );
}

export default App;
