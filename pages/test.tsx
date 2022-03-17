import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// main React component
function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

// function component
function CharacterCounter() {
  return (
    <div>
      <h1>Test Recoil</h1>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

// stateの定義, store的な？
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

// stateの定義
function TextInput() {
  const [text, setText] = useRecoilState(textState);

  // define event handler
  const onChange = (event) => {
    setText(event.target.value); // input value
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default App


