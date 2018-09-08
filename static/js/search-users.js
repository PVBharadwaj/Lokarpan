function myFunction() {

    const users = document.getElementsByClassName("profile-name");
    const titles = document.getElementsByClassName("profile-title");
    const profiles = document.getElementsByClassName("profile-text");
    let searchquery = document.getElementsByClassName('form-control')[0].value;
    searchquery = searchquery.toLocaleUpperCase();

    // console.log(searchquery)

    for (let i = 0; i < users.length; i++) {
        console.log(profiles[i].innerText.toLocaleUpperCase());
        if (users[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1 || titles[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1 || profiles[i].innerText.toLocaleUpperCase().indexOf(searchquery) > -1) {
            users[i].parentElement.parentElement.parentElement.style.display = "";
        } else {
            users[i].parentElement.parentElement.parentElement.style.display = "none";
        }

    }
}