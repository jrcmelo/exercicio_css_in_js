import { FormEvent, useState } from 'react'
import { F } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <F.Form onSubmit={aoEnviarForm}>
      <F.InputField
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <F.BtnSearch type="submit">Pesquisar</F.BtnSearch>
    </F.Form>
  )
}
export default FormVagas
