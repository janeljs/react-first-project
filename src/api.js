export const posts = [
    {
        id: 1,
        title: "티스토리 블로그 글 1",
        content: `티스토리 블로그를 시작한지 약 4개월 지나고 있습니다. 

 

        블로그를 시작하기 전에는 글을 쓰는 일은 저와는 전혀 상관없는 일이라고 생각만하고 살아왔습니다. 
        
         
        
        공대에서 공학을 공부하면서, 글쓰는 것은 문과 사람들 그리고 작가들 혹은 기자들이나 쓰는 것이라는 고정관념 속에서 살아 온 것 같습니다. 
        
         
        
        "나에게는 글쓰는 재주는 없어!"
        
         
        
        라고 단정지으면 자신에게 한계를 먼저 설정해 버렸던 것이죠. 
        
         
        
        하지만, 블로그를 시작한지 4개월이 지난 지금을 돌이켜 보면 이렇게 미천한 실력의 글이지만 누군가에게는 도움이 되는 글을 쓸 수 있구나 하고 느끼게 됩니다. 아주 더디게 블로그가 성장하고 있지만, 최근에는 하루에 200명이상 방문하는 블로그로 성장하고 있습니다. 
        
         
        
        그래서, 아직도 블로그를 시작하지 못하신 분들 혹은 이제 블로그를 막 시작하신 분들에게 도움이 될 만한 글을 시작해 볼까 합니다. `
    },
    {
        id: 2,
        title: "티스토리 블로그 글 2",
        content: `글을 쓰는게 먼저냐, 읽는게 먼저냐는 논란의 여지가 조금있겠지만 저는 블로그로 글 쓰기를 시작하면서 책이나 다른 좋은 글을 읽어 간다면 아주 훌륭한 선순환을 만들어 갈 수 있다고 생각합니다. 이렇게 선 순환 되는 구조가 습관이 되면 결국 좋은 블로그를 만들어 갈 수 있습니다. 

 

        4. 주제에 맞는 제목과 헤드라인을 정하라
         
        
         글을 쓰고 릴리즈 하는 것, 이것도 하나의 마케팅 행위와 같습니다. 나의 글을 다른 사람들이 많이 읽어 줘야 하는 것입니다. 하지만 하루에도 이세상에 수많은 글들이 작성되고 포스팅되고 있습니다. 그래서 이 글들 속에서 내가 쓴 글에 대한 주제를 가장 잘 표현할 수있는 주제를 정하는 것도 아주 중요한 작업 중 하나입니다. 
        
         저도 이 부분에 대해서 초보적인 입장이지만, 중요성은 인식하고 있습니다. 제가 블로그 기록과 로그를 보게 되면, 좋은 제목이 많은 클릭과 방문을 유도하는 것이 분명하기 때문입니다.
        
         
        
        1) 광고성 자극적인 제목은 좋지 않습니다. 
        
        "이웃집 여자 알고보니~~" 이런 제목은 너무 광고 같기 때문에 클릭이 되지 않습니다.
        
         
        
        2) 독자 입장에서 궁금해 할 것을 생각 해보고 제목에 키워드를 포함시켜야 합니다. 
        
        내가 쓰고 있는 이글은 누구를 위한 글이고 그들이 궁금해 할 것 같은 주제가 있을 것입니다. 반대로 독자 입장에서 생각을 한 번 더 해보세요.
        
         
        
        저도 지금도 계속해서 배워 나가고 있습니다. 여러분도 일단 시작 해 보고 개선해 나가세요. ^^`
    }
]

let postId = posts.length

export const getPosts = async () => posts

export const getPost = async (id) => posts.find(post => post.id === id)

export const createPost = async (body) => {
    postId += 1
    const newPost = { id: postId, ...body }
    posts.push(newPost)
    return newPost
}

export const modifyPost = async (id, body) => {
    let modifiedPost
    posts.forEach(post => {
        if (post.id === id){
            post.title = body.title
            post.content = body.content
            modifiedPost = post
        }
    })
    return modifiedPost
}

export const deletePost = async (id) => {
    const index = posts.findIndex(post => post.id === id)
    posts.splice(index, 1)
    return true
}   

