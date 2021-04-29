var appointmentColumns = document.querySelector(".card-columns");

const hero = document.getElementById('hero');

hero.addEventListener('mouseenter', function(event){
    event.currentTarget.classList.add('old-pic');
    event.currentTarget.classList.remove('new-pic');
})

hero.addEventListener('mouseleave', function(event){
    event.currentTarget.classList.add('new-pic');
    event.currentTarget.classList.remove('old-pic');

})


function addAppointment(appointmentDate, appointmentStartTime, appointmentWith, appointmentWhom, appointmentAddress) {
    //Create a column for each card
    var appointmentColumn = document.createElement("div");
    appointmentColumn.setAttribute("class", "column is-one-fifth card-columns-nested");
    
    //Create Card
    var appointmentCard = document.createElement("div");
    appointmentCard.setAttribute("class", "card");
    
    //Card Header and content
    var appointmentCardHeader = document.createElement("div");
    appointmentCardHeader.setAttribute("class", "card-header");
    
    var appointmentCardHeaderContent = document.createElement("div");
    appointmentCardHeaderContent.setAttribute("class", "card-header-title");
    var appointmentCardContent = document.createElement("div");
    appointmentCardContent.setAttribute("class", "card-content");  
    // Access Appointment Date and Start time for Header Content
    var appointmentHeaderData = `
      <p class="my-3"><span class="has-text-weight-semibold">${appointmentDate}</span></p>
      <p class="my-3"><span class="has-text-weight-semibold">At : </span>${appointmentStartTime}</p>
    `;
    //Pull from arrays for Card Content

    var appointmentCardData = `
      <p class="my-3"><span class="has-text-weight-semibold">With:</span> ${appointmentWith}</p>
      <p class="my-3"><span class="has-text-weight-semibold">For Whom:</span> ${appointmentWhom}</p>
      <p class="my-3"><span class="has-text-weight-semibold">Address:</span> ${appointmentAddress}</p>
    `;
    //Create a card footer with edit and delete buttons
    var cardFooter = document.createElement("footer");
    cardFooter.setAttribute("class", "card-footer");
    editButton = document.createElement("button");
    editButton.setAttribute("class", "card-footer-item edit-btn");
    editButton.textContent = "View Application";
  
    //Append items to page dynamically
    appointmentCardHeaderContent.innerHTML = appointmentHeaderData;
    appointmentCardContent.innerHTML = appointmentCardData;
    appointmentColumns.append(appointmentColumn);
    appointmentCard.append(appointmentCardHeader,appointmentCardContent,cardFooter);
    appointmentCardHeader.append(appointmentCardHeaderContent);
    appointmentColumn.append(appointmentCard);
    cardFooter.append(editButton);
  }

 // addAppointment('27/4/2021', '08:00am',  'Sue', ' Jack', '18 Vanzuilecom Street')