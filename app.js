// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.

    const container = document.querySelector('#container')

    getUsers()
    
    function getUsers() {
       let button = document.querySelector('#btn');
    
       button.addEventListener('click', getFunc)
    }
    
       function getFunc(){
        $('#btn').hide()
        $.get("https://jsonplaceholder.typicode.com/users", getUserData)
       }
    
       function getUserData(data){
    for (let i = 0; i < data.length; i++){
        let userData = data[i];
        makeDivs(userData);
        }
       }
    
       function makeDivs(userData){
        // var userName = userData.username;
        // var city = userData.address.city;
        var name = userData.name;
        var id = userData.id;
    
        var mainContainer = document.createElement('div');
            mainContainer.className = 'user-container'
            mainContainer.id = id;
    
            mainContainer.append(`Name: ${name}`);
    
        container.append(mainContainer);
    
            mainContainer.addEventListener('click', getuserPosts)
       }
    
       function getuserPosts(e) {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, accessPost)
       }
    
       function accessPost(postData){
        $('.btn').hide();
        returnButton()
            for(let j = 0; j < postData.length; j++){
                var bodyPost = postData[j];
                userPosts(bodyPost) 
            }
       }
    
       function userPosts(post){
        $('.user-container').hide()
        var body = post.body
        var title = post.title
        var postContainer = document.createElement('div');
            postContainer.className = 'post-container';
            postContainer.append(`Title: ${title}`);
    
        var postBody = document.createElement('div');
            postBody.className = 'post-body';
            postBody.append(`Post: ${body}`)
            
        container.append(postContainer);
        container.append(postBody)
        
       }
    
    
       function returnButton() {
    
       var returnButton = document.createElement('button');
        returnButton.className = 'returnBtn';
        returnButton.textContent = "Return";
        returnButton.addEventListener('click', function(){
    
            $('.returnBtn').hide();
            $('.post-container').remove();
            $('.post-body').remove();
            $('.user-container').show();
            })
        container.append(returnButton);
       }

