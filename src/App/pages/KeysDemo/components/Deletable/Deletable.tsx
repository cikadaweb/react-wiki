import React from 'react';

import Button from '@/App/components/Button';

type DeletableProps = React.PropsWithChildren<{
  id: number;
  onDelete: (id: number) => void;
}>;

const Deletable: React.FC<DeletableProps> = ({ id, onDelete, children }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      {children}
      <Button onClick={handleDelete}>Добавить в начало</Button>
    </>
  );
};

export default Deletable;
