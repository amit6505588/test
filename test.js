console.log('javascript is runing....')

// profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}

url = "https://api.github.com/users";
fetch(url).then((response) => {
  return response.json();
}).then((data) => {
    const profileList = profileIterator(data);

    let dataShow = document.getElementById('dataShow');
    dataShow.addEventListener('click', profileData);
    
    function profileData() {
    
        const userProfile = profileList.next().value;
        let imageSrc = document.getElementById('image');
        let profile = document.getElementById('profile');
    
        if (userProfile != undefined) {
    
            imageSrc.innerHTML = `<img src='${userProfile.avatar_url}'>`
            profile.innerHTML = `<ul>
                                <li>${userProfile.login}</li>
                                <li>${userProfile.id}</li>
                                <li>${userProfile.site_admin}</li>
                                <li>${userProfile.type}</li>
                                </ul>`
        } else {
            alert("user List Completed");
            window.location.reload()
        }
    }
})

