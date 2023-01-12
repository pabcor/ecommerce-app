import CartAction from "./CartAction";
import CustomerAction from "./CustomerAction";
import WishlistAction from "./WishlistAction";

export default function Actions() {
  return (
    <>
      <div className="flex flex-1 lg:hidden justify-end space-x-2.5">
        <CustomerAction />
        <WishlistAction />
        <CartAction />
      </div>
      <div
        className="
        hidden
        lg:flex
        flex-1
        justify-end
        space-x-4
      "
      >
        <CustomerAction />
        <WishlistAction />
        <CartAction />
      </div>
    </>
  );
}
