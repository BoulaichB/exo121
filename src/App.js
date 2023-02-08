import Header from './components/header/header';
import Search from './components/search/search';
import Cocktails from './components/cocktails/cocktails';

function App() {
  let dark = true;
  dark === true ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = '#f1f5f8';
  return (
    <div>
      <Header _dark={dark}/>
      <Search _dark={dark}/>
      <div class='flex flex-wrap justify-center'>
        <Cocktails _img={'./img/naruto.webp'} _name={'A1'} _type={'Cocktail glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/sasuke.webp'} _name={'ABC'} _type={'Shot glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/sakura.webp'} _name={'Ace'} _type={'Martini glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/kakashi.webp'} _name={'Adam'} _type={'Cocktail glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/hinata.webp'} _name={'AT&T'} _type={'Highball glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/shino.webp'} _name={'ACID'} _type={'Shot glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/kiba.webp'} _name={'A. J.'} _type={'Cocktail glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/lee.webp'} _name={'Karsk'} _type={'Highball glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/neji.webp'} _name={'Melya'} _type={'Coffee mug'} _alcohol={'Non alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/gaara.webp'} _name={'Affair'} _type={'Highball glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/temari.webp'} _name={'Boxcar'} _type={'Whiskey sour glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/orochimaru.webp'} _name={'Orgasm'} _type={'Cocktail glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/jiraya.webp'} _name={'Apello'} _type={'Collins Glass'} _alcohol={'Non alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/shikamaru.webp'} _name={'Avalon'} _type={'Highball glass'} _alcohol={'Alcoholic'} _dark={dark}/>
        <Cocktails _img={'./img/ino.webp'} _name={'Casino'} _type={'Cocktail glass'} _alcohol={'Alcoholic'} _dark={dark}/>
      </div>
      
    </div>
  );
}

export default App;
