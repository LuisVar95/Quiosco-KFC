import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {

    const { categorias } = useQuiosco();

    return (
        <>
        <div className="flex justify-center mt-4">
            <Image 
                width={150}
                height={200}
                src="/assets/img/kfc-logo1.png"
                alt="imagen logotipo"
            />
        </div>

        <nav className="mt-10">
            {categorias.map((categoria) => (
                <Categoria key={categoria.id} categoria={categoria}/>
            ))}
        </nav>
        </>
    )
};

export default Sidebar;