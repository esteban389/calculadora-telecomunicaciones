import AutoForm, {AutoFormSubmit} from '../components/ui/auto-form';
import * as z from "zod";
import {  scientificNumber } from '../lib/utils';
import { useState } from 'react';
import { ResultadoAlert } from '../components/resultadoAlert';

const formSchema = z.object({
  anchoBanda: scientificNumber,
  temperatura: scientificNumber,
});

export default function RuidoTermico(){
  
  const [resultado, setResultado] = useState(0);

  const calcularConFrecuencia = (data) => {
    let constante = 1.380649*(10**(-23));
    let result = constante*data.anchoBanda*data.temperatura;
    setResultado(result);
  }

  return (
    <>
      <h1 className='text-center font-bold text-4xl mb-6'>Ruido térmico</h1>
      <AutoForm
      formSchema={formSchema}
      onSubmit={(data)=> calcularConFrecuencia(data)}
      fieldConfig={{
        anchoBanda:{
          unidades: "Hz"
        },
        temperatura:{
          unidades: "K"
        }
      }}
    >
      <ResultadoAlert unidades="W">{resultado}</ResultadoAlert>

      <div className='text-center'>
        <AutoFormSubmit>Calcular</AutoFormSubmit>
      </div>
    </AutoForm>
    </>
  )
}
