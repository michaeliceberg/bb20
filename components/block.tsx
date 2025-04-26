import { motion, MotionProps } from 'framer-motion';
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';


type Props = {
    className?: string;
} & MotionProps

export const Block = ({className, ...rest}: Props) => {
    return (
        <motion.div 
            className={twMerge(
                'col-span-3  bg-gray-100 rounded-xl', 
                className
            )}
            {...rest}
        />
            
        
    )
}





