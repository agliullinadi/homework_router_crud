import { useState, useEffect, useRef } from 'react';

import PostPage from './PostPage';

export default function CreatePost(props) {
    const { title, url, post, closeWindow } = props;

    const [form, setForm] = useState({ id: post.id, content: post.content });

    const textAreaRef = useRef();

    useEffect(() => {
        textAreaRef.current.focus();
        textAreaRef.current.selectionStart = textAreaRef.current.value.length;
    }, []);

    function addPost(form) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }).then(() => closeWindow());
    }

    function handleInput(e) {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    function handleSubmit() {
        if (form.content === '') {
            closeWindow();
            return;
        }
        addPost(form);
        setForm({ id: 0, content: '' });
    }

    const buttons = [
        {
            btnTitle: 'Сохранить',
            btnOnClick: handleSubmit,
            className: 'publish',
        },
    ];

    return (
        <>
            <PostPage title={title} buttons={buttons} closeWindow={closeWindow}>
                <textarea
                    ref={textAreaRef}
                    name='content'
                    cols='4'
                    rows='4'
                    value={form.content}
                    onChange={handleInput}
                ></textarea>
            </PostPage>
        </>
    );
}

CreatePost.defaultProps = {
    post: {
        id: 0,
        content: '',
    },
};

