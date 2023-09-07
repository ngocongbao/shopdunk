import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Input from "./Input";
function Header(){
    return(
        <div>
            <Logo/>
            <Navigation/>
            <Input/>
        </div>
    )
}
export default Header