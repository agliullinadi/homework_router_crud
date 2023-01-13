import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useJsonFetch from '../hooks/useJsonFetch';
import PostPage from './PostPage';
import CreatePost from './CreatePost';

export default function SelectPost(props) {
    const { url, closeWindow } = props;
    const { id } = useParams();

    const [viewMode, setViewMode] = useState(true);
    const [data, loading, error] = useJsonFetch(url);

    let currentPost;
    if (data) {
        currentPost = data.find((item) => Number(item.id) === Number(id));
    }

    function deletePost(id) {
        fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => closeWindow());
    }

    const buttons = [
        {
            btnTitle: 'Изменить',
            btnOnClick: () => {
                setViewMode(false);
            },
            className: 'edit',
        },
        {
            btnTitle: 'Удалить',
            btnOnClick: () => {
                deletePost(id);
            },
            className: 'delete',
        },
    ];

    return (
        <>
            {loading && <div>Загрузка</div>}
            {error && <div>{error}</div>}
            {data && (
                <>
                    {viewMode ? (
                        <PostPage
                            title={'Просмотр'}
                            buttons={buttons}
                            closeWindow={closeWindow}
                        >
                            <p>{currentPost.content}</p>
                        </PostPage>
                    ) : (
                        <CreatePost
                            url={url}
                            title={'Изменить'}
                            post={currentPost}
                            closeWindow={closeWindow}
                        />
                    )}
                </>
            )}
        </>
    );
}
