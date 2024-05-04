import { useStopWatch } from './userStopWatch';
import Button from '@/App/components/Button';

const StopWatch = () => {
  const { handleReset, handleStart, value } = useStopWatch();

  return (
    <div>
      <div>Прошло секунд: {value}</div>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default StopWatch;
