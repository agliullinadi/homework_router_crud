import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Main from './components/Main';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import SelectPost from './pages/SelectPost';
import Page404 from './pages/Page404';

import './App.css';

const url = 'http://localhost:7777/posts';

export default function App() {
  const navigate = useNavigate();
  const closeWindow = () => navigate('/posts', { replace: true });

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Posts url={url} />} />
          <Route path='posts' element={<Posts url={url} />} />
          <Route
            path='posts/new'
            element={
              <CreatePost
                url={url}
                title={'Напишите что думаете'}
                closeWindow={closeWindow}
              />
            }
          />
          <Route
            path='posts/:id'
            element={<SelectPost url={url} closeWindow={closeWindow} />}
          />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}