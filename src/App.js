import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Carlos", age: 34, id: 'ghvhgvhgkvhg'},
            {name: "Carlos2", age: 36, id: 'ghvhgvhgkvhkjhkjhhhjhkhkhjkhkg'}
        ],
        otherStates: 'other sates  for the object state',
        showPersons: false
    }

    deletePerson = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    switchNameHandler = (name) => {
        this.setState({
            persons: [
                {name: name, age: 34},
                {name: "Carlos2", age: 6}
            ]
        })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(x => x.id === id);
        const person= {...this.state.persons[personIndex]};
        person.name=event.target.value;
        const persons =[...this.state.persons]
        persons[personIndex]=person;
            this.setState({
                    persons: [
                        {name: "Max", age: 34, id: 'ghvhgvhgkvhg'},
                        {name: event.target.value, age: 16, id: 'ghvhgvhgkvhkjhkjhhhjhkhkhjkhkg'}
                    ]
                }
            )
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'gray',
            border: '5px solid black',
            borderRadius: '15px'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                clickDelete={() => this.deletePerson(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        }
                    )
                    }
                </>
            );
        }

        return (
            <div className="App">
                <h1>Working with Lists and Conditionals FINAL TASK</h1>
                <input type="text" defaultValue={"click here"}/>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Show or not the person list
                </button>
                <p>This is really working</p>
                <div>
                    {this.state.showPersons ? persons : null}
                </div>
            </div>
            //React.createElement('div', {className:'App'},React.createElement('h1',null,"Hello every one")));
        )
    }
}

export default App;
