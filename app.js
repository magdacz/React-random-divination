class App extends React.Component {
    
    state = {
        options: ["Lepiej dobrze przemyśl swoje zamiary!", "Czasami żeby zrobić krok do przodu trzeba najpierw zrobić dwa kroki w tył!", "Pamiętaj, czasami najprostsze rozwiązania są najlepsze!", "Bądź dobrej myśli, nigdy nie wiesz co przyniesie nowy dzień!", "Odpocznij, w życiu potrzebna jest równowaga!"],
        option: "",
    }
    
   handleShowOption = () => {
       const index = Math.floor(Math.random() * this.state.options.length);
       
       this.setState({
           option: this.state.options[index]
       })
       
   }

    render() {
        
        return (
            <React.Fragment>
                <button onClick={this.handleShowOption}>Losuj wróżbę</button>
                { this.state.option && <h1>{this.state.option}</h1> }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));