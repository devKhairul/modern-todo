
import { ButtonProps } from "../types/button";

export default function Button({onClick,buttonType, children} : ButtonProps) {

  return (
    <button className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`} onClick={onClick}>
        { children }
    </button>
  )
}
