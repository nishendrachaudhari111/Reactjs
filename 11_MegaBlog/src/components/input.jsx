import React, {useId} from "react";


const Input = React.forwardRef( function Input({
  lable,
  type = "text",
  className = "",
  ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
            {lable && <lable 
            className='block md-1 pl-1' 
            htmlfor={props.id}>
                {lable}
            </lable>
            }
            <input
            type={type}
            className={'px-3 py-1 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}'} 
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input