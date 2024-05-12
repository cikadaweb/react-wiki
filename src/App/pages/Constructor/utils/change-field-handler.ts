import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

const changeFieldHandler = (
  event: ChangeEvent<HTMLInputElement>,
  func: Dispatch<SetStateAction<string>>
) => {
  func(event.target.value);
};

export default changeFieldHandler;
