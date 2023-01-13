import { Outlet, Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <div className='header'>
        <Link to='/posts/new'>
          <button>Создать пост</button>
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
 