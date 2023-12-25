const card = document.querySelector(".card-img-container")
// const cardImg = document.querySelector(". img")
const detail = document.querySelector(".details")
peopleName = detail.querySelector(".people-name"),
position = detail.querySelector(".position");
place = detail.querySelector(".location")


const getBtn = document.getElementById("btn")

let url = " https://random-data-api.com/api/v2/users?response_type=json"

getBtn.addEventListener("click", () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // debug data api
            // console.log(data);
            const imgAvatar = data.avatar;
            // debug image
            // console.log(imgAvatar)
             const fullName = data.first_name + " " + data.last_name;
             //debug mendapatkan nama lengkap
            //  console.log(fullName)
             const title = data.employment.title;
            // debug mendapatkan posisi pekerjaan
            // console.log(title);
           
            const city = data.address.city;
            // debug mendapatkan location kota
             // console.log(city);
            const email = data.email;
            // debug email
            // console.log(email)

            const pass = data.password;
            console.log(pass);
            detail.innerHTML = `  
            <h1 class="people-name">${fullName}</h1>
            <p class="position">${title}</p>
            <p class="location">
            <i class="fa-solid fa-location-dot"></i> ${city}
            </p>
             <p class="email">${email}</p>
             <p class="pass">Password: ${pass}</p>`;
            card.innerHTML = `
                <img src="${imgAvatar}" alt="avatar" class="avatar"/>
            `;
            // console.log(fullName)
        }).catch(() => {
            // console.log(`${msg} Please try again later.`);
        });
})
    

    
         