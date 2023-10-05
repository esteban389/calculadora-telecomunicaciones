import AutoForm, {AutoFormSubmit} from '../components/ui/auto-form';
import * as z from "zod";
import {  scientificNumber } from '../lib/utils';
import { useState } from 'react';
import { ResultadoAlert } from '../components/resultadoAlert';

const formSchema = z.object({
  resistencia: scientificNumber,
  ruido: scientificNumber,
});

export default function voltajeRuido() {
    const [resultado, setResultado] = useState(0);

    const calcularConFrecuencia = (data) => {
      let result = Math.sqrt(data.resistencia*data.ruido);
      setResultado(result);
    }
  
    return (
      <>
        <h1 className='text-center font-bold text-4xl mb-6'>Voltaje de ruido térmico</h1>
        <AutoForm
        formSchema={formSchema}
        onSubmit={(data)=> calcularConFrecuencia(data)}
        fieldConfig={{
          resistencia:{
            unidades: "Ω"
          },
          ruido:{
            unidades: "W"
          }
        }}
      >
        <ResultadoAlert unidades="V">{resultado}</ResultadoAlert>
  
        <div className='text-center'>
          <AutoFormSubmit>Calcular</AutoFormSubmit>
        </div>
      </AutoForm>
      </>
    )
}
