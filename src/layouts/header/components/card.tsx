import { BasketLogo } from "../../../assets/svg/basket-logo";

interface CartProps {
  itemCount: number;
}

const Cart = ({ itemCount }: CartProps) => {
  return (
    <div className="relative">
      {/* Savatcha ikonka */}
      <button className="text-white rounded-full cursor-pointer transition">
        <BasketLogo />
      </button>

      {/* Mahsulotlar soni belgilari */}
      {itemCount > 0 && (
        <span className="absolute top-1 -right-0 text-white text-[10px] font-medium rounded-[100%]  bg-[#46a358] px-[4px]">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
