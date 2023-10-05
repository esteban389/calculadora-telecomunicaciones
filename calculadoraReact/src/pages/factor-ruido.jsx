import AutoForm, {AutoFormSubmit} from '@/components/ui/auto-form';
import * as z from "zod";
import {  scientificNumber } from '@/lib/utils';
import { useState } from 'react';
import { ResultadoAlert } from '@/components/resultadoAlert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const formSchema = z.object({
  señalEntrada: scientificNumber,
  ruidoEntrada: scientificNumber,
  señalSalida: scientificNumber,
  ruidoSalida: scientificNumber,
});




export default function FactorRuido() {
    const [resultado, setResultado] = useState({factor:0,indice:0});
    const formSchemaIndice = z.object({
      factor: scientificNumber.default(resultado.factor.toString()),
    });
    console.log(formSchemaIndice)
    const calcularFactor = (data) => {
      let result = (data.señalEntrada/data.ruidoEntrada)/(data.señalSalida/data.ruidoSalida);
      setResultado(prev => ({...prev,factor:result}));
    }
    const calcularIndice = (data) =>{
      let result = 10*Math.log10(data.factor)
      setResultado(prev => ({...prev,indice:result}))
    }
  
    return (
      <>
        <h1 className='text-center font-bold text-4xl mb-6'>Factor de ruido</h1>
        <Tabs defaultValue="factor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="factor">Factor de ruido</TabsTrigger>
            <TabsTrigger value="indice">Índice de ruido</TabsTrigger>
          </TabsList>
          <TabsContent value="factor">
            <AutoForm
              formSchema={formSchema}
              onSubmit={(data)=> calcularFactor(data)}
              fieldConfig={{
                  señalEntrada:{unidades:"W"},
                  ruidoEntrada:{unidades:"W"},
                  señalSalida:{unidades:"W"},
                  ruidoSalida:{unidades:"W"},
              }}
            >
              <ResultadoAlert unidades="">{resultado.factor}</ResultadoAlert>
        
              <div className='text-center'>
                <AutoFormSubmit>Calcular</AutoFormSubmit>
              </div>
            </AutoForm>
          </TabsContent>
          <TabsContent value="indice">

            <AutoForm
              formSchema={formSchemaIndice}
              onSubmit={(data)=> calcularIndice(data)}
              fieldConfig={{
                  factor:{
                    unidades:"",
                  },
              }}
            >
              <ResultadoAlert unidades="dB">{resultado.indice}</ResultadoAlert>
        
              <div className='text-center'>
                <AutoFormSubmit>Calcular</AutoFormSubmit>
              </div>
            </AutoForm>
          </TabsContent>
        </Tabs>

      </>
    )
}
