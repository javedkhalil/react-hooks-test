import React from 'react'
import './App.css'
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/UseEffectHook'
import UseRefHook from './components/UseRefHook'
import UseCallBackHook from './components/UseCallBackHook'
import UseMemoHook from './components/UseMemoHook'
import ShowPostsFromContext from './components/ShowPostsFromContext'
import { PostsContextProvider } from './components/postsContext'
import UseReducerHook from './components/UseReducerHook'
import CustomHook from './components/CustomHook'

function App() {
  return (
    <div className="App">
      <br />
      React Hooks ...
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseCallBackHook />
      <UseMemoHook />
      {/* posts here from postsContext - context component is wrapping child */}
      <PostsContextProvider>
        <ShowPostsFromContext />
      </PostsContextProvider>
      {/* posts here from postsContext */}
      <UseReducerHook />
      <CustomHook />
    </div>
  );
}

export default App
