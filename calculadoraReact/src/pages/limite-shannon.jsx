import * as z from "zod"

import { useState } from "react"
import { ResultadoAlert } from '../components/resultadoAlert';
import AutoForm, {AutoFormSubmit} from '../components/ui/auto-form';
import { scientificNumber } from "../lib/utils"

// Create your form schema with the scientificNumber schema
const formSchema = z.object({
  anchoBanda: scientificNumber,
  señal: scientificNumber,
  ruido: scientificNumber,
});



export default function LimiteShannon() {
  const [resultado, setResultado] = useState(0);


  function onSubmit(data) {
    let constante=3.32;
    let result = constante*data.anchoBanda*Math.log10(1+(data.señal/data.ruido));
    console.log(result)
    setResultado(result);
  }

  return (
    <>
      <h1 className='text-center font-bold text-4xl mb-6'>Longitud de onda</h1>
      <AutoForm
        formSchema={formSchema}
        onSubmit={(data)=> onSubmit(data)}
        fieldConfig={{
          anchoBanda:{
            unidades: "Hz"
          },
          señal:{
            unidades: "Hz"
          },
          ruido:{
            unidades: "Hz"
          }
        }}
      >
        <ResultadoAlert unidades="bps">{resultado}</ResultadoAlert>

        <div className='text-center'>
          <AutoFormSubmit>Calcular</AutoFormSubmit>
        </div>
      </AutoForm>
    </>
  )
}
