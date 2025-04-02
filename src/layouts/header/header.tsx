import { Link } from "react-router-dom"
import { SearchLogo } from "../../assets/svg/search-logo"
import { SiteLogo } from "../../assets/svg/site-logo"
import { nawbarData } from "./data"
import { BasketLogo } from "../../assets/svg/basket-logo"
import Cart from "./components/card"
import { useState } from "react"

export const Header = () => {
    const [cartItems, setCartItems] = useState(5);
    return (
        <div className="flex justify-between bg-amber-300 max-h-[53px]">
            <figure>
                <SiteLogo />
            </figure>
            <div className="flex gap-12.5">
                {nawbarData.map((item) => (
                    <Link key={item.name} to={item.link}>
                        {item.name}
                    </Link>))}
            </div>
            <div className="flex gap-7.5">
                <SearchLogo />
                {/* <BasketLogo /> */}
                <Cart itemCount={cartItems} />
            </div>
        </div>
    )
}