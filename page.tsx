'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface ItemRowProps {
  rowClassName?: string;
  name: string;
  price?: string;
}

// Component = '재사용성' or 보기예쁜형태
interface RowType {
  name: string;
  price?: string;
}

interface ItemTableProps {
  tableClassName?: string;
  rowClassName?: string;
  items?: RowType[];
}

const ItemTable = ({
  tableClassName = '',
  rowClassName = '',
  items = [],
}: ItemTableProps) => {
  return (
    <div className={`${tableClassName} flex flex-col gap-2`}>
      {items.map((item, index) => (
        <ItemRow
          key={item.name + index}
          name={item.name}
          price={item.price}
          rowClassName={rowClassName}
        />
      ))}
    </div>
  );
};

const ItemRow = ({ name, price = '$0', rowClassName }: ItemRowProps) => {
  return (
    <div className={`${rowClassName} flex justify-between`}>
      <span className="text-gray-500">{name}</span>
      <span className="font-bold">{price}</span>
    </div>
  );
};

const Home: NextPage = () => {
  // const items: RowType[] = [{ name: 'Hello' }, { name: 'Aaron', price: '$10' }];
  const [items, setItems] = useState<RowType[]>([]);

  useEffect(() => {
    // ccxsdsadasdjaskldjaskldjakld
    const apiresult = [
      { name: 'Hello' },
      { name: 'Aaron', price: '$10' },
      { name: 'Hello' },
      { name: 'Aaron', price: '$10' },
      { name: 'Hello' },
      { name: 'Aaron', price: '$10' },
      { name: 'Hello' },
      { name: 'Aaron', price: '$10' },
    ];
    setItems(apiresult);
  }, []);

  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <span className="font-bold text-2xl">Select Item</span>
        <ItemTable tableClassName="mt-2" items={items} />
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed font-bold">
          <span>Total</span>
          <span>$38</span>
          ItemTable
        </div>
        <button
          className="flex justify-center w-2/4 mt-5 mx-auto bg-blue-500
              rounded-2xl p-3 text-white
              hover:bg-blue-400  active:bg-teal-500  disabled:bg-blue-200"
          type="button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Home;
