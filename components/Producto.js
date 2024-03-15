import Image from "next/image"
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco"

const Producto = ({producto}) => {
   
    const { handleSetProducto, handleChangeModal } = useQuiosco();
    const {nombre, imagen, precio, contenido} = producto;


  return (
    <div className="border p-3">
        <Image  
            src={`/assets/img/${imagen}.png`}
            alt={`Imagen Producto ${nombre}`}
            width={400}
            height={500}
        />
        <div className="p-5 ">
            <div className="h-56">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-2 text-xl ">{contenido}</p>
                <p className="text-center mt-6 font-black text-4xl text text-yellow-500">{formatearDinero(precio)}</p>
            </div>

            <button
                type="button"
                className="bg-red-700 hover:bg-red-800 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleChangeModal();
                    handleSetProducto(producto);
                }}
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto