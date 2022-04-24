
const Tweeter = function(){
    let postIdCounter = 3;
    let commentIdCounter = 6;

    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    const getPosts = () => posts

    const addPost = function(post){
        let newId = "p" + postIdCounter;
        let obj = {text: post, id: newId, comments:[]}
        posts.push(obj);
        postIdCounter++;
    }
    const removePost = function(postId){
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id == postId){
                posts.splice(i, 1);
            }
        }
        postIdCounter--;
    }

    const addComment = function(postId, comment){
        let newComment = "c" + commentIdCounter;
        let obj = {id: newComment, text: comment}
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id == postId){
                posts[i].comments.push(obj)
            }
        }
        commentIdCounter++;
    }
    const removeComment = function(postId, commentId){
         for(let i = 0; i < posts.length; i++){
            if(posts[i].id == postId){
                for(let j = 0; j < posts[i].comments.length; j++){
                    if(posts[i].comments[j].id == commentId){
                        posts[i].comments.splice(j,1)
                    }
                }
            }
        }
        commentIdCounter--;
    }

    return {getPosts: getPosts, 
            addPost: addPost,
            addComment: addComment,
            removeComment: removeComment,
            removePost: removePost
        }


}