async function donorName() {
    return document.querySelector('.donor-name').value;
}

async function donorGroup() {
    return document.querySelector('.blood-group').value;
}

async function donorPhone() {
    return document.querySelector('.phone-no').value;
}

async function donorCity() {
    return document.querySelector('.city').value;
}


let resBtn = document.querySelector('#register');

resBtn.addEventListener('click', async ()=>{
       let name = await donorName();
       let group = await donorGroup();
       let phone = await donorPhone();
       let city = await donorCity();

       console.log(name);
       console.log(group);
       console.log(phone);
       console.log(city);

       let name3 = document.querySelector('.donor-detail-name-3');
       name3.innerHTML = `<p class='donor-detail-name-3'><strong>Name :</strong> ${name}</p>`;

       let group3 = document.querySelector('.donor-detail-group-3');
       group3.innerHTML = `<p class="donor-detail-group-3"><strong>Group :</strong> ${group}</p>`;

       let phone3 = document.querySelector('.donor-detail-phone-3');
       phone3.innerHTML = `<p class="donor-detail-phone-3"><strong>Phone No.:</strong> +91 ${phone}</p>`;

       let city3 = document.querySelector('.donor-detail-city-3');
       city3.innerHTML = `<p class="donor-detail-phone-3"><strong>Phone No.:</strong> ${city}</p>`;


       let detail3 = document.querySelector('.donor-detail-3');
       detail3.classList.add('donor-detail-3-add');
})
