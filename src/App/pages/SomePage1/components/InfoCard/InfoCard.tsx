import Button from '@/App/components/Button';
import { log } from '@/utils/log';

const InfoCard = () => (
  <div>
    InfoCard <Button onClick={() => log('I am clicked!')}>Click me</Button>
  </div>
);

export default InfoCard;
