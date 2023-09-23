import { useState, useEffect } from "react";


const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [bimestre1, setBimestre1] = useState(0);
    const [bimestre2, setBimestre2] = useState(0);
    const [bimestre3, setBimestre3] = useState(0);
    const [bimestre4, setBimestre4] = useState(0);

    // useEffect(() => {
        
    // }, [props.bimestre4])

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAterior => {
            return evento.target.value;
        })
    }

    const renderResult = () => {
        const soma = bimestre1 + bimestre2 + bimestre3 + bimestre4;
        const media = soma/4;
        if (media >= 70) {
            return(
                <p>
                    Aluno {nome} aprovado!
                    <br />
                    <strong>Média {media}</strong>
                </p>
            )
        } else if (media < 70 && media > 0){
            return(
                <p>
                    Aluno {nome} reprovado.
                    <br />
                    <strong>Média {media}</strong>
                </p>
            )
        } else {
            return(
                <p></p>
            )
        }
    }
    
    return (
        <div className="container">
            <h2> Calculadora de médias</h2>
        <ul>
            {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
            <form>
                <input type="text" placeholder="Digite o nome do Aluno" onChange={alteraNome}/>
                <input type="number" placeholder="Nota 1º bimeste 0~100" onChange={({target}) => setBimestre1(parseInt(target.value))}/>
                <input type="number" placeholder="Nota 2º bimeste 0~100" onChange={({target}) => setBimestre2(parseInt(target.value))}/>
                <input type="number" placeholder="Nota 3º bimeste 0~100" onChange={({target}) => setBimestre3(parseInt(target.value))}/>
                <input type="number" placeholder="Nota 4º bimeste 0~100" onChange={({target}) => setBimestre4(parseInt(target.value))}/>
                {renderResult()}
            </form>
        </div>
    )
}

export default Formulario;