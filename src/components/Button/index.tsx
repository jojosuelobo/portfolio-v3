import { tv } from 'tailwind-variants';
import { ComponentProps, ElementType } from "react"


type ButtonVariantProps = 'primary' | 'outline'


type ButtonProps = ComponentProps<'button'> & {
    state: ButtonVariantProps,
    iconLeft?: ElementType
}

 
const button = tv({
  base: 'text-sm flex max-[430px]:w-full items-center justify-center h-full white-space font-medium rounded-xl py-3 max-[430px]:px-4 px-10 transition dark:opacity-80 dark:hover:opacity-90 hover:opacity-80 font-extrabold h-full',
  variants: {
    state: {
      primary: 'bg-linear-button-light dark:bg-linear-red dark:text-red-dark-200 text-gray-light-100 font-bold',
      outline: 'dark:text-red-dark-100 border dark:border-red-dark-200 border-[#ff3131] text-red-light-200',

    },
  defaultVariants: {
    state: 'primary'
  }
}
});
 

export const Button = ({children, state, className, iconLeft: IconLeft, ...props}: ButtonProps) => {
    return(
        <button {...props} className={button({state, className})}>
            {IconLeft && <IconLeft size={18} className="mr-2"/>}
            {children}
        </button>
    )
}