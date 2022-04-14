import { useState } from 'react';

interface AppProps {
  id: number,
  name: string,
}

const Child = (props: AppProps) => {
  return (
    <div>
      <p>id is {props.id}</p>
      <p>name is {props.name}</p>
    </div>
  )
};

const Test = () => {
  return (
    <div>
      <Child id={1} name='miyuki' />
    </div>
  )
};

const TestState = () => {
  const [cnt, setCnt] = useState<number>(0);
  const incr = () => setCnt(cnt + 1);

  return (
    <div>
      <button onClick={incr}>incr</button>
      <p>{cnt}</p>
    </div>
  )
};

export default Test;


