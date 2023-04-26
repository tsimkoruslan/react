import Posts from "./components/CommentAndPosts/Posts";
import Comments from "./components/CommentAndPosts/Comments";
import CatForm from "./components/CatAndDog/CatForm";

function App() {
    return (
        <div>
            <CatForm/>
            <br/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;
