import React from 'react';

import Button from '@/App/components/Button';
import Deletable from '@/App/pages/KeysDemo/components/Deletable';

import './KeysDemo.css';

type Item = {
  id: number;
  isDeleted: boolean;
};

const KeysDemo = () => {
  const [items, setItems] = React.useState<Item[]>([
    {
      id: 0,
      isDeleted: false,
    },
  ]);

  const handlePrepend = () => {
    setItems([{ id: items[0].id - 1, isDeleted: false }, ...items]);
  };

  const handleAppend = () => {
    setItems([
      ...items,
      { id: items[items.length - 1].id + 1, isDeleted: false },
    ]);
  };

  const handleDelete = (idToDelete: number) => {
    setItems((items) =>
      items.map((item) =>
        (item.id === idToDelete
          ? { ...item, isDeleted: item.id === idToDelete }
          : item),
      ),
    );
  };

  const itemsToShow = items.filter((it) => !it.isDeleted);

  return (
    <div>
      <Button onClick={handlePrepend}>Добавить в начало</Button>

      {itemsToShow.map((it) => (
        <React.Fragment key={it.id}>
          <Deletable id={it.id} onDelete={handleDelete}>
            Элемент #{it.id}
          </Deletable>
        </React.Fragment>
      ))}

      <Button onClick={handleAppend}>Добавить в конец</Button>
    </div>
  );
};

export default KeysDemo;
