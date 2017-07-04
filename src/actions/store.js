import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions'
console.log(store.getStare())

// store.subscribe()函数返回的是一个 可以解除监听的函数
let unsubscribe = store.subscribe(() => console.log(store.getStare()))

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// 停止监听 state 更新
unsubscribe();
