import useJsonFetch from '../hooks/useJsonFetch';
import Post from './Post';

export default function Posts(props) {
    const { url } = props;
    const [data, loading, error] = useJsonFetch(url);

    const elements = () => {
        if (data) {
            return data.map((post) => <Post post={post} key={post.id} />);
        }
    };

    return (
        <div>
            {loading && <div>Загрузка</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    {data.length < 1 ? (
                        <div className='posts-header'>
                            Что вы думаете?
                        </div>
                    ) : (
                            <ul className='posts-list'>{elements()}</ul>
                    )}
                </div>
            )}
        </div>
    );
}
