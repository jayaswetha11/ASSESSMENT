const users = [
    { name: "Mojombo", img: "https://github.com/mojombo.png" },
    { name: "Defunkt", img: "https://github.com/defunkt.png" },
    { name: "Pjhyett", img: "https://github.com/pjhyett.png" },
    { name: "Wycats", img: "https://github.com/wycats.png" },
    { name: "Ezmobius", img: "https://github.com/ezmobius.png" },
    { name: "Ivey", img: "https://github.com/ivey.png" },
    { name: "Evanphx", img: "https://github.com/evanphx.png" }
];

const userList = document.getElementById('userList');
const userSearch = document.getElementById('userSearch');

// Function to render the list
function displayUsers(userArray) {
    userList.innerHTML = userArray.map(user => `
        <div class="user-row">
            <img src="${user.img}" alt="${user.name}" class="avatar">
            <span class="username">${user.name}</span>
            <button class="profile-btn">See profile</button>
        </div>
    `).join('');
}

// Initial Render
displayUsers(users);

// Search Filtering Logic
userSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
});