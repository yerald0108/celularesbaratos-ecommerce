import {  FieldErrors, UseFormRegister } from "react-hook-form";
import { AddressFromValues } from "../../lib/validator";

interface Props {
    register: UseFormRegister<AddressFromValues>;
    errors: FieldErrors<AddressFromValues>;

    name: keyof AddressFromValues;
    className?: string;
    placeholder: string;
}

export const InputAddress = ({
    register,
    errors,
    name,
    className,
    placeholder,
}: Props) => {
    return (
        <>
            <div 
                className={`border border-slate-200 rounded-md overflow-hidden py-2 ${
                    errors[name] && 'border-red-500'
                } ${className}`}
            >
                <input 
                    type="text" 
                    className="w-full px-3 py-1 text-sm focus:outline-none"
                    placeholder={placeholder}
                    {...register(name)}
                />
            </div>
            {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
        </>
    );
}; 