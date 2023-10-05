import { Check,Copy } from 'lucide-react';
import {
  Alert,
  AlertTitle,
} from "../components/ui/alert"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '../components/ui/button';

export function ResultadoAlert({children, unidades}) {
    return (
      <Alert className='flex items-center'>
        <Check className="h-4 w-4" style={{ position: "initial" }} />
        <AlertTitle className='w-full flex justify-between items-center'>
          El resultado es: {children} {unidades}
          <CopyToClipboard text={children}
            onCopy={() => console.log(children)}>
            <Button variant={"ghost"} size={"cpb"} onClick={(e) => e.preventDefault()}>
              <Copy className="h-3 w-3" />
            </Button>
          </CopyToClipboard>
        </AlertTitle>
      </Alert>
    );
  }