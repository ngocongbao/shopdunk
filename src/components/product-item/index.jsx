import React, { useMemo } from "react";

import formatCurrency from "../../utils/number";

const ProductItem = ({ name, img, price, oldPrice, tag }) => {
  const salePercent = useMemo(() => {
    if (oldPrice && price) {
      return ((oldPrice - price) / oldPrice) * 100;
    }
    return 0;
  }, [oldPrice, price]);

  return (
    <div className="border-2 rounded-xl bg-slate-200  flex flex-col items-center p-2">
      <div className="self-end w-[100px]">
        {tag && <img src={tag} alt="" className="w-full object-cover h-full" />}
      </div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-center">{name}</h3>
        <div className="flex justify-between items-center">
          <h4 className="text-blue-700 font-bold">{formatCurrency(price)}</h4>
          <h5 className="line-through text-gray-400">
            {formatCurrency(oldPrice)}
          </h5>
          {salePercent && <h5 className="text-gray-400">-{salePercent}%</h5>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
