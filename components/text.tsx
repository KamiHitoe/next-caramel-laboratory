import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// define state
const textBox = atom({
  key: 'textBox',
  default: '',
})

function Text() {
  // define hook
  const [text, setText] = useRecoilState(textBox);

  // define event handler
  const onTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={onTextChange} />
      <br />
      Result: {text}
    </>
  )
}

export default Text;
