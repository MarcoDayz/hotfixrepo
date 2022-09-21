// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.

    const container = document.querySelector('#container')

    getUsers()
    //create get user function
    function getUsers() {
       let button = document.querySelector('#btn');//reference the button element
    
       button.addEventListener('click', getFunc)//add an event listener method to that element; with click and callback function
    }
    
    //once button is clicked; it triggers get func
       function getFunc(){
        $('#btn').hide()//hides button once clicked on
        $.get("https://jsonplaceholder.typicode.com/users", getUserData)//request data using jquery get method; include url to API and function to push data to
       }
    
       //getUserData receives data from API
       function getUserData(data){
        //loop through data
    for (let i = 0; i < data.length; i++){
        //create variable once you know where to create a variable to reference
        //may need to console.log data so yoo know what you are accessing prior to making variable
        let userData = data[i];
        makeDivs(userData);//call function passing in data accessed
        }
       }
       //create a make divs function
       function makeDivs(userData){
        // var userName = userData.username;
        // var city = userData.address.city;
        var name = userData.name;//create vars for data you want to access
        var id = userData.id;//create vars for data you want to access
        
        var mainContainer = document.createElement('div');//create the div container
            mainContainer.className = 'user-container'//give it a class
            mainContainer.id = id;
    
            mainContainer.append(`Name: ${name}`);//append the data that was passed in the function to container
    
        container.append(mainContainer);//append main container to container
    
            mainContainer.addEventListener('click', getuserPosts)//when main container is clicked on, getuserposts is used as callback
       }
    
    //getusers passes in e for event object
       function getuserPosts(e) {
        //use get jquery method to request for data at the e target id; accessposts is used as call back func
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, accessPost)
       }
       
       //accesspost func passes in postdata
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

