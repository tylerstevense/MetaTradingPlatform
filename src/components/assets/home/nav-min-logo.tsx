import Image from "next/image";
import logo from './logo.png'
const NavLogo = () => {
    return (
        <>

            <Image className="max-w-[110px]" src="/images/logo.png" width={1000} height={1000} alt="Brand logo" />

        </>

    );
};

export default NavLogo;
