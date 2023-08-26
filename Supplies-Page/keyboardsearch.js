const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("wrapper");
    const card = document.querySelectorAll(".card");
    const cname = storeItems.getElementsByTagName("h3");


    for (var i = 0; i < cname.length; i++) {
        let match = card[i].getElementsByTagName('h3')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
    }
}