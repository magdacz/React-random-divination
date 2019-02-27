class App extends React.Component {
    
    state = {
        options: ["Lepiej dobrze przemyśl swoje zamiary!", "Czasami żeby zrobić krok do przodu trzeba najpierw zrobić dwa kroki w tył!", "Pamiętaj, czasami najprostsze rozwiązania są najlepsze!", "Bądź dobrej myśli, nigdy nie wiesz co przyniesie nowy dzień!", "Odpocznij, w życiu potrzebna jest równowaga!"],
        option: "",
        value: ""
    }
    
   handleShowOption = () => {
       const index = Math.floor(Math.random() * this.state.options.length);
       
       this.setState({
           option: this.state.options[index]
       })
   }
   
   handleChangeInput = (e) => {
       this.setState({
           value: e.target.value
       })
   }
   
   
   handleAddOption = () => {
       if(this.state.value === "") return alert("Musisz wpisać tekst!")
       const options = [...this.state.options]
       options.push(this.state.value)
       
       this.setState({
           options,
           value: "",
       })
       
       alert(`Wróżba została dodana. Aktualnie dostępne wróżby: 
    ${options.join(" ,")}`)
   }
   
    render() {
        
        return (
            <React.Fragment>
                <button onClick={this.handleShowOption}>Losuj wróżbę</button>
                {this.state.option && <h1>{this.state.option}</h1>} <br/>
                <input type="text" value={this.state.value} onChange={this.handleChangeInput}></input>
                <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
            
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));