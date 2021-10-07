// Styling variables
const background = document.body.style
const content = document.getElementsByClassName("content")[0].style
const stats = document.getElementById("statistics").style
const search = document.getElementById("search_container").style
const modeText = document.getElementById("modeText")
const mode = document.getElementById("dark_btn")
console.log()


// User variables
let darkMode = false
const avatar = document.getElementById('avatar')

const url = 'https://api.github.com/users/';

function getUserData(gitUrl){
    fetch(gitUrl)
    .then(response => response.json())
    .then(data => {

        updateProfile(data)
    })
    .catch(error => {
        throw error;
    })

}


function updateProfile (data){
    avatar.src = data.avatar_url

}    


getUserData(url+"octocat")

// Darkmode Functionality
mode.addEventListener('click', function(){
    if(darkMode == false){
        darkModeProperties()
    }else{
        lightModeProperties()
    }
})


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

