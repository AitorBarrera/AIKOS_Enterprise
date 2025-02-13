import Boton from "./Boton"
import Input from "./Input"
import InputDateTime from "./InputDateTime"
import Textarea from "./Textarea"

function Formulario() {
  return (
    <form className="bg-p_ruby w-[50%] p-8 h-auto">
        <h3 className="text-4xl mb-6">Tu información</h3>
        <div className="flex flex-col items-center gap-8">
            <InputDateTime/>
            <Input type="text" placeholder="Nombre *"/>
            <Input type="text" placeholder="Apellidos *"/>
            <Input type="text" placeholder="Direccion *"/>
            <Textarea rows={8} placeholder="¿En qué podemos ayudar?"/>
            <Boton text="Enviar" variant="blanco2" ancho="40%"/>
        </div>
    </form>
  )
}

export default Formulario