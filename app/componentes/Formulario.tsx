import Boton from "./Boton";
import Input from "./Input";
import InputDateTime from "./InputDateTime";
import Textarea from "./Textarea";

function Formulario() {
  return (
    <form className="bg-p_ruby w-[50%] p-8 h-auto text-white">
      <h3 className="mb-6 text-4xl">Tu información</h3>
      <div className="flex flex-col items-center gap-8">
        <InputDateTime />
        <Input type="text" placeholder="Nombre *" />
        <Input type="text" placeholder="Apellidos *" isDisabled={true} />
        <Input
          type="text"
          placeholder="Direccion *"
          hasError={true}
          errorMessage="Error: Necesita al menos 10 caracteres."
        />
        <Textarea rows={8} placeholder="¿En qué podemos ayudar?" />
        <Boton text="Enviar" variant="blanco2" ancho="40%" />
      </div>
    </form>
  );
}

export default Formulario;
