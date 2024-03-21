const sidebar = document.querySelector('aside');
const main = document.querySelector('main');
const sidebarCloser = document.getElementById('closerContainer');
const sendChat = document.getElementById('sendChat');
const userQuery = document.getElementById("userQuery");
const sidebarCloserTop = sidebarCloser.children[0];
const sidebarCloserBottom = sidebarCloser.children[1];
const username = "John Wick";

// Adding user query to chatbox
function addResponseToChatBox(message, sender) {
    if (sender.toLowerCase() == "user") sender = "You";
    else if (sender.toLowerCase() == "bot") sender = "ChatGPTT";
    else throw Error("Invalid value for parameter 'sender'");
    let messageBox = document.createElement('div');
    messageBox.classList.add('user-message'); // Add different class for 
    messageBox.innerHTML = `<span><b>${sender}</b></span><p>${message}</p>`;
    document.getElementById('chatDisplay').insertAdjacentElement('beforeend', messageBox);
}

function postUserQuery() {
    let query = userQuery.value;
    addResponseToChatBox(message = query, sender = "user");
    userQuery.value = "";
    getBotResponse();
}

function getBotResponse() {
    setTimeout(() => {
        let botResponse = "This is what GPT said..."; // Add orignal response from GPT
        addResponseToChatBox(botResponse, sender = "bot");
    }, 1000);
}

// Event Listeners
sidebarCloser.addEventListener('mouseenter', () => {
    if (!sidebar.classList.contains('hide')){
        sidebarCloserTop.classList.add('rotate')
        sidebarCloserBottom.classList.add('anti-rotate')
    }
})

sidebar.addEventListener('mouseleave', () => {
    sidebarCloserTop.classList.remove('anti-rotate')
    sidebarCloserTop.classList.remove('rotate')
    sidebarCloserBottom.classList.remove('rotate')
    sidebarCloserBottom.classList.remove('anti-rotate')
})

sidebarCloser.addEventListener('click', () => {
    sidebar.classList.toggle('hide')
    main.classList.toggle('main-fullwidth')
    if (sidebar.classList.contains('hide')) {
        sidebarCloserTop.classList.add('anti-rotate')
        sidebarCloserBottom.classList.add('rotate')
    }
})

sendChat.addEventListener('click', postUserQuery)

userQuery.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') postUserQuery();
})