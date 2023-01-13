export default function PostPage(props) {
    const { title, buttons, closeWindow } = props;

    const elements = buttons.map((button) => {
        return (
            <button
                key={button.btnTitle}
                className={button.className}
                onClick={button.btnOnClick}
            >
                {button.btnTitle}
            </button>
        );
    });

    return (
        <div className='card'>
            <div className='card-header'>
                <div>{title}</div>
                <div>
                    <button onClick={closeWindow}>
                        ×
                    </button>
                </div>
            </div>
            <div className='card-body'>{props.children}</div>
            <div className='card-footer'>{elements}</div>
        </div>
    );
}
