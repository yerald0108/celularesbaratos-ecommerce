import { useForm } from "react-hook-form";
import { InputAddress } from "./InputAddress";
import { AddressFromValues, addressSchema } from "../../lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ItemsCheckout } from "./ItemsCheckout";

export const FormCheckout = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AddressFromValues>({
        resolver: zodResolver(addressSchema),
    });

    const onSubmit = handleSubmit( data => {
        console.log(data);
        
    })

    return (
        <div>
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold tracking-normal">
                        Entrega
                    </h3>

                    <InputAddress 
                        register={register}
                        errors={errors}
                        name="addressLine1"
                        placeholder="Dirección principal"
                    />

                    <InputAddress 
                        register={register}
                        errors={errors}
                        name="addressLine2"
                        placeholder="Dirección adicional(Opcional)"
                    />

                    <InputAddress 
                        register={register}
                        errors={errors}
                        name="state"
                        placeholder="Estado / Provincia"
                    />

                    <InputAddress 
                        register={register}
                        errors={errors}
                        name="city"
                        placeholder="Ciudad"
                    />

                    <InputAddress 
                        register={register}
                        errors={errors}
                        name="postalCode"
                        placeholder="Código Postal (Opcional)"
                    />

                    <select className="border border-slate-200 rounded-md p-3" {...register('country')}>
                        <option value="Cuba">Cuba</option>
                    </select>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium">Métodos de envío</p>

                    <div className="flex justify-between items-center text-sm border border-slate-600 bg-stone-100 py-4 rounded-md px-6">
                        <span className="font-normal">Standard</span>
                        <span className="font-semibold">Gratis</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between items-center text-sm border border-slate-600 bg-stone-100 rounded-ss-md
                    rounded-se-md px-6">
                    <span>Depósito Bancario</span>
                </div>

                <div className="bg-stone-100 text-[13px] p-5 space-y-0.5 border border-gray-200 rounded-es-md rounded-ee-md">
                    <p>Compra a traves de transferencia bancaria</p>
                    <p>BANCO METROPOLITANO</p>
                    <p>Razón Social: CelularesBaratos</p>
                    <p>RUC: 123456789000</p>
                    <p>Tipo de cuenta: Corriente</p>
                    <p>Número de cuenta: 56835698</p>
                    <p>
                        La información será compartida nuevamente una vez que se halla finalizado la compra
                    </p>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-semibold text-3xl">Resumen del pedido</h3>
                    <ItemsCheckout />
                </div>

                <button
                    type="submit"
                    className="bg-black text-white py-3.5 font-bold tracking-wide rounded-md mt-2"
                >
                    Finalizar Pedido
                </button>
            </form>
        </div>
    );
};