import moment from 'moment';
import 'moment/locale/ru';

import { Link } from 'react-router-dom';

moment.locale('ru');

export default function Post(props) {
    const { post } = props;

    return (
        <Link
            key={post.id}
            to={`/posts/${post.id}`}
            style={{ textDecoration: 'none' }}
        >
            <li>
                <div className='card'>
                    <div className='card-header'>
                        <p>{post.content}</p>
                    </div>
                    <div className='card-body'>
                        <p>{moment(post.created).fromNow()}...</p>
                    </div>
                </div>
            </li>
        </Link>
    );
}
