import { useSelector, useDispatch } from 'react-redux';

const useCounter = () => {
    const count = useSelector((state) => state.counterReducer.count);
    const light = useSelector((state) => state.clockReducer.light);
    const lastUpdate = useSelector((state) => state.clockReducer.lastUpdate);
    const mama = useSelector((state) => state.counterReducer.mama);
    const dispatch = useDispatch();
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        });
    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        });
    const reset = () =>
        dispatch({
            type: 'RESET',
        });
    return { count, light, lastUpdate, mama, increment, decrement, reset };
};

const Counter = () => {
    const {
        count,
        light,
        lastUpdate,
        mama,
        increment,
        decrement,
        reset,
    } = useCounter();
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <h2>
                light: <span>{light}</span>
            </h2>
            <h2>
                lastUpdate: <span>{lastUpdate}</span>
            </h2>
            <h2>
                mama: <span>{mama}</span>
            </h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
