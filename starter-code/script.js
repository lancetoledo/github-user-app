// Styling variables
let darkMode = false

const background = document.body.style
const content = document.getElementsByClassName("content")[0].style
const stats = document.getElementById("statistics").style
const search = document.getElementById("search_container").style
const modeText = document.getElementById("modeText")
const mode = document.getElementById("dark_btn")

const input = document.getElementById('input')
const searchBtn = document.getElementById('search')


mode.addEventListener('click', function(){
    if(darkMode == false){
        darkModeProperties()
    }else{
        lightModeProperties()
    }
})


function darkModeProperties(){
    background.backgroundColor = 'rgb(20,29,47)'
    background.color = "white"
    content.backgroundColor = '#1E2A47'
    stats.backgroundColor = 'rgb(20,29,47)'
    search.backgroundColor = '#1E2A47'
    modeText.innerText = "LIGHT"
    mode.src = "./assets/icon-sun.svg"
    darkMode = true
}

function lightModeProperties(){
    background.backgroundColor = '#F2F2F2'
    background.color = "black"
    content.backgroundColor = 'white'
    stats.backgroundColor = '#F6F8FF'
    search.backgroundColor = 'white'
    modeText.innerText = "DARK"
    dark_btn.src = "./assets/icon-moon.svg"
    darkMode = false
}

// User variables
const avatar = document.getElementById('avatar')
const userName = document.getElementById('name')
const login = document.getElementById('login')
const bio = document.getElementById('bio')
const date = document.getElementById('date')
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
const repo = document.getElementById('repo')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const user_location = document.getElementById('location')
const twitter = document.getElementById('twitter')
const blog = document.getElementById('blog')
const company = document.getElementById('company')
const error = document.getElementById('error')

console.log(date)

const url = 'https://api.github.com/users/';





searchBtn.addEventListener('click', function(){
    if (input.value !== ""){
        getUserData(url+input.value);
    }
})
input.addEventListener("keydown", function(e) {
    if (!e) { 
        var e = window.event; 
    }
    if (e.key == "Enter") { 
        if (input.value !== ""){
            getUserData(url+input.value);
        }
    }
});







function getUserData(gitUrl){
    fetch(gitUrl)
    .then(response => response.json())
    .then(data => {
        if(data.message == "Not Found") {
            userNotFound(data)
        }
        else {
            updateProfile(data)
        }
        
    })
    .catch(error => {
        throw error;
    })

}

function checkAvailable(param1) {
    if((param1 === "") || (param1 === null)){
        return "Not available" 
    }else{
        return param1
    }
}

function userNotFound() {
    error.style.display = "block"
}

// function userNotFound (data) {
//     avatar.src = data.avatar_url
//     userName.innerText = "User Not Found"
//     login.innerText = "Not Available"
//     bio.innerText = 'This profile has no bio'
//     date.innerText = "Not Available"
//     repo.innerText = "-"
//     followers.innerText = "-"
//     following.innerText = "-"
//     user_location.innerText = "Not Available"
//     blog.innerText = "Not Available"
//     blog.href = ""

// }
function updateProfile (data){
    error.style.display = "none"
    avatar.src = data.avatar_url
    userName.innerText = data.name
    login.innerText = '@' + data.login
    bio.innerText = (data.bio == null)? "This profile has no bio" : data.bio
    let dateSplit = data.created_at.split("T").shift().split("-")
    // console.log(dateSplit[0], dateSplit[1], dateSplit[2])
    date.innerText = "Joined" + " " + dateSplit[2] + " " + months[dateSplit[1]-1] + " " + dateSplit[0]
    repo.innerText = data.public_repos
    followers.innerText = data.followers
    following.innerText = data.following
    user_location.innerText = checkAvailable(data.location)
    twitter.innerText = checkAvailable(data.twitter_username)
    blog.innerText = checkAvailable(data.blog)
    blog.href = checkAvailable(data.blog)
    company.innerText = checkAvailable(data.company)
}    


getUserData(url+"octocat")

// Darkmode Functionality




