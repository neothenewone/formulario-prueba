import * as React from 'react';
import {useForm} from "react-hook-form";


const Formulario =()=>{
const fechaMinima="1996-04-20"
const fechaMaxima="2006-04-20"
const titulo="Pre Inscripción Tecnico Superior en Seguridad Pública y Ciudadana"
const subTitulo="Cohorte 2024-2025"
var Nombre="ok"

const {register,formState:{ errors }, watch , handleSubmit}=useForm();

const onSubmit=(data)=>{
  console.log(data);
}

const incluirTelefono =  watch('incluirTelefono')
return <div>
 <div className="titulo">
 <h2>{titulo}</h2>
 <h2>{subTitulo}</h2>
  
 </div>
  
    <form onSubmit={handleSubmit(onSubmit)} >
    
    <div>
     <input type="text" placeholder="Nombre"{...register('nombre',{
      required:true,
      maxLength:50
    })} />
    {errors.nombre?.type === 'required' && <p className="bad">Es un campo requerido!!!</p>}
    {errors.nombre?.type === 'maxLength' && <p>Debe tener menos de 12 caracteres!!!</p>}
    </div>
    <div>
    <input type="text" placeholder="Apellido"{...register('apellido',{
      required:true,
      maxLength:50
    })} />
    {errors.apellido?.type === 'required' && <p>Es un campo requerido!!!</p>}
    {errors.apellido?.type === 'maxLength' && <p>Debe tener menos de 12 caracteres!!!</p>}
    </div>

    <div>
    
    <input type="text" placeholder="Email" {...register('email',{
      required:true,
      pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
     
    })}/>
    {errors.email?.type === 'required' && <p>Es un campo requerido!!!</p>}
    {errors.email?.type === 'pattern' && <p>Debe tener una direccion de correo valida!!!</p>}
    </div>

    <div>
    
    <input type="text" placeholder="Dirección" {...register('direccion')}/>
    </div>

    <div>
    <label>Fecha de Nacimiento</label>
    <input type="date" min={fechaMinima} max={fechaMaxima} {...register('fechaNacimiento', {
      required:true
    })//,{validate:edadValidator})
    }/>
    {errors.fechaNacimiento?.type==='required' && <p>Debe poner su fecha de nacimiento!</p>
    }
    </div>
    <div>
    <label>Departamento</label>
    <select className="deptos" {...register('departamento')}>
      <option value="01">La Capital</option>
      <option value="02">Rosario</option>
      <option value="03">Belgrano</option>
      <option value="04">Caseros</option>
      <option value="05">Castellanos</option>
      <option value="06">Constitución</option>
      <option value="07">Garay</option>
      <option value="08">General López</option>
      <option value="09">General Obligado</option>
      <option value="10">Iriondo</option>
      <option value="11">Las Colonias</option>
      <option value="12">Francia</option>
      <option value="13">San Cristóbal</option>
      <option value="14">San Javier</option>
      <option value="15">San Jerónimo</option>
      <option value="16">San Justo</option>
      <option value="17">San Lorenzo</option>
      <option value="18">San Martín</option>
      <option value="19">Vera</option>
      
      
    </select>

    
    
    <label>¿Incluir Telefono?</label>
    <input type="checkbox" {...register('incluirTelefono')} className="check"/>
    {incluirTelefono && (<div>
    <label>Telefono</label>
    <input type="text" {...register('telefono')}/>
    </div>
    )}
    


   
    

    </div>
    <input type="submit" value="Finalizar" className="botonEnviar" />
  </form>
</div>
}
export default Formulario;