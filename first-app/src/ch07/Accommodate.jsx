import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

// 의존성 배열이 없는 경우
// 마운트 된 직후 호출되고, 업데이트 될 때마다 호출됨
  useEffect(() => {
    console.log('================');
    console.log('useEffect() called.');
    console.log('isFull: ', isFull);
  });

  // 마운트 된 직후 호출되고, count가 변경될 때마다 호출됨
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log('current count: ', count);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: 'red' }}>정원이 가득 찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
