import Page from '../components/page';
import { initializeStore } from '../store/store';
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
export default function SSR(props) {
    // const {
    //     count,
    //     light,
    //     lastUpdate,
    //     mama,
    //     increment,
    //     decrement,
    //     reset,
    // } = useCounter();
    const count = useSelector((state) => state.counterReducer.count);
    console.log(props.initialReduxState);
    console.log('count', count);

    return (
        <div>
            {}
            <Page />
        </div>
    );
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    dispatch({
        type: 'INCREMENT',
        payload: 0,
    });

    return {
        props: {
            initialReduxState: reduxStore.getState(),
            // ekhane specific konu state niya nile amra onno kothao theke state pabo nah
        },
    };

    // return {
    //     props: {
    //         // initialReduxState: {
    //         //   lastUpdate: Date.now(),
    //         //   light: false,
    //         //   bb: 'myName'
    //         // },
    //     },
    // };
}
