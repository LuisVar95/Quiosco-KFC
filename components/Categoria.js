import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({ categoria }) => {

    const {categoriaActual, handleClickCategoria} = useQuiosco();

    const { nombre, id } = categoria;

    return (
        <div className={`${categoriaActual?.id === id ? "bg-red-700 text-white" : "" } text-xl flex flex-col  w-full border p-7 font-bold hover:bg-red-700 hover:text-white transition-all duration-600`}>
            <button
                type="button"
                className="uppercase"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria;