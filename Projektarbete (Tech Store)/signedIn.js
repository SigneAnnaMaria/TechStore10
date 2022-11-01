function signedInUI() {

    const signedInDiv = document.querySelector(".signedIn")

    // ----- Main box to store my child divs

    const elementContainer = document.createElement("div")
    elementContainer.setAttribute("class", "signed--elementContainer")


    // ----- First div containing greeting of user #

    const userInfo = document.createElement("div")
    userInfo.setAttribute("class", "signed--userInfo")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "signed--h2")
    h2.innerHTML = "Välkommen user1234!"

    const btn = document.createElement("button")
    btn.setAttribute("class", "signed--btn")
    btn.innerHTML = "Logga ut"

    elementContainer.appendChild(userInfo)
    userInfo.appendChild(h2)
    userInfo.appendChild(btn)


    // ----- divider between the two main divs
    const lines = document.createElement("div")
    lines.setAttribute("class", "lines")

    elementContainer.appendChild(lines)


    // ----- second div container
    const purchaseHistory = document.createElement("div")
    purchaseHistory.setAttribute("class", "signed--purchaseHistory")

    const h4 = document.createElement("h4")
    h4.setAttribute("class", "signed--h4")
    h4.innerHTML = "Köp historik"

    const purchase = document.createElement("div")
    purchase.setAttribute("class", "signed--purchase")
    purchase.innerHTML = "Purchase 1" + "<br />" + "Purchase 1"

    const purchase2 = document.createElement("div")
    purchase2.setAttribute("class", "signed--purchase")
    purchase2.innerHTML = "Purchase 2" + "<br />" + "Purchase 2"

    elementContainer.appendChild(purchaseHistory)
    purchaseHistory.appendChild(h4)
    purchaseHistory.appendChild(purchase)
    purchaseHistory.appendChild(purchase2)

    // ----- Attaches my main div containing its children to its parent div in the login.html-file

    signedInDiv.appendChild(elementContainer)
}

signedInUI()