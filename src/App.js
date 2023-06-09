import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Footer from "./components/Footer";
import BtnHide from "./components/BtnHide";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Desing",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time;
    }));
  }

  const cadastrarTime = (novoTime) => {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  const toHide = () => {
    const form = document.querySelector(".formulario").classList

    form.contains("hide") 
      ? form.remove("hide")
    
      : form.add("hide")
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrar={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
        times={times.map((time) => time.nome)}
        cadastrarTime={cadastrarTime}
        toHide={toHide}
      />
        <BtnHide
          toHide={toHide}
        />

      {times.map((time, index) => (
        <Time
          key={index}
          mudarCor={mudarCorDoTime}
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
