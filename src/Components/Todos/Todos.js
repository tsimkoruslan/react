import React, {useEffect, useState} from 'react';
import userServices from "../../services/user.services";

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        userServices
            .getTodos()
            .then(value => value.data)
            .then(value => setTodos(value))
    }, [])

    return (
        <div>
            {
                todos.map(value => (
                    <div key={value.id}>
                        {value.id} - {value.completed.toString() } -  {value.title}
                    </div>
                ))
            }
        </div>
    );
};

export default Todos;