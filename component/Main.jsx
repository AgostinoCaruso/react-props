import Post from "./Post";
import postDB from "../src/assets/postDB";
function Main() {
    return (
        <main className=" container">
            <div className="row">
                <Post posts={postDB} />
            </div>
        </main>
    );
}

export default Main;