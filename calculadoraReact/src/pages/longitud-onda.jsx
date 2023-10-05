import AutoForm, {AutoFormSubmit} from '../components/ui/auto-form';
import * as z from "zod";
import {  scientificNumber } from '../lib/utils';
import { useState } from 'react';
import { ResultadoAlert } from '../components/resultadoAlert';


const formSchema = z.object({
  Frecuencia: scientificNumber,
});

export default function LongitudOnda() {
  
  const [resultado, setResultado] = useState(0);

  const calcularConFrecuencia = (data) => {
    let v = 3e8;
    let result = v/data.Frecuencia;
    setResultado(result);
  }

  return (
    <>
      <h1 className='text-center font-bold text-4xl mb-6'>Longitud de onda</h1>
      <AutoForm
      formSchema={formSchema}
      onSubmit={(data)=> calcularConFrecuencia(data)}
      fieldConfig={{
        Frecuencia:{
          unidades: "Hz"
        }
      }}
    >
      <ResultadoAlert unidades="m">{resultado}</ResultadoAlert>

      <div className='text-center'>
        <AutoFormSubmit>Calcular</AutoFormSubmit>
      </div>
    </AutoForm>
    </>
  )
}


