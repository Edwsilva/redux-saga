// Store e AnyAction usar como tipagem
// AppliMiddleware aplica o Saga na nossa store. O Saga intercepta nossas ações.
import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
// Cria nosso middleware SAGA
import createSagaMiddleware from 'redux-saga'

// Root para juntar os reducers
import rootReducer from './reducers'

// Root para juntar os SAGAS
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = createStore(
    rootReducer,
    
    // Intercepta as ações.
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// Para facilitar as importações
export * from './actions'
export * from './types'