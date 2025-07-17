import SmartInput from './components/SmartInput';
import Toast from './components/Toast';
import SidebarMenu from './components/SidebarMenu';
import { twoLevelMenu } from './data/menuItems';

function App() {
  return (
    <>
      <SmartInput type="password" clearable={true} />
      <Toast type="success" text="Hello World!" duration={4000} />
      <br />
      <SidebarMenu items={twoLevelMenu} />
    </>
  );
}

export default App;
