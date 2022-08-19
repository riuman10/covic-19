import { useState } from "react";

const Button = ({title} : any) => {
    const [show, setShow] = useState()
    return (
        <div>
            <button className="text-purple">
            {title}
            </button> 
        </div>
    )
}

export default Button;