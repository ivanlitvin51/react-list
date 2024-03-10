import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('Text')

    return (
        <div className="App">
            <PostItem/>
        </div>
    );
}

export default App;
