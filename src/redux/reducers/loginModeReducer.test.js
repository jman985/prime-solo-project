import loginModeReducer from './loginModeReducer';

describe('Testing the loginModeReducer...', ()=> {

    test('test intial state is login', () => {

        const action = { type: 'test'};
        const previousState = undefined;
        let newState = loginModeReducer(previousState, action);
        expect (newState ).toEqual('login');

     })

    test('test switching to register mode', () => {

        const action = { type: 'SET_TO_REGISTER_MODE'};
        const previousState = 'login';
        let newState = loginModeReducer(previousState, action);
        expect (newState ).toEqual('register');
        
      })
})

