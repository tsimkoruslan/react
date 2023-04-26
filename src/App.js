import Posts from "./components/CommentAndPosts/Posts";
import Comments from "./components/CommentAndPosts/Comments";
import CatForm from "./components/CatAndDog/CatForm";
import DogForm from "./components/CatAndDog/DogForm";

function App() {
    return (
        <div>
            <CatForm/>
            <DogForm/>
            <br/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;
