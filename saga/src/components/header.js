import { useSelector } from "react-redux";

const Header = () => {
    const result = useSelector((state) => state?.cartData);

    console.log('result', result);

    return (
        <div>
            <span>
                {result?.length}
            </span>
        </div>
    )
}

export default Header;