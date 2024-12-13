function Post({ posts }) {

    const filtred = [...posts].filter((ele) => ele.published === true);

    let stringa = "";
    stringa = filtred.length < 2 
    ? "col-12" 
    : filtred.length > 1 && filtred.length < 3 
    ? "col-6" 
    : "col-4";   
    
     return (


        filtred.map((post) =>
            <div key={post.id} className={` card myCard my-5 ${stringa}`}>
                <img className="card-img-top" src={post.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <span className="badge p-2 text-bg-danger">buu</span>
                </div>
            </div>
        )
    )
}

export default Post;