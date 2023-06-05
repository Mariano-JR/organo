import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

  const aoSalvar = (event) => {
    event.preventDefault()
    aoCadastrar({
      id: uuidv4(),
      favorito: false,
      nome,
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={ times }
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
            Criar Card
        </Botao>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault()
        cadastrarTime({ nome: nomeTime, cor: corTime })
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          type="color"
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>
            Criar um novo time
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
