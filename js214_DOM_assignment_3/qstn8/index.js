// Array of user objects
let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  
  // Function to generate user cards
  function generateUserCards(users) {
    const container = document.getElementById('user-cards-container');
  
    users.forEach(user => {
      // Create a div element for the card
      const card = document.createElement('div');
      card.classList.add('user-card');
  
      // Create and append elements for each user detail
      const name = document.createElement('h2');
      name.textContent = user.name;
  
      const username = document.createElement('p');
      username.textContent = `Username: ${user.username}`;
  
      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;
  
      // Append the details to the card
      card.appendChild(name);
      card.appendChild(username);
      card.appendChild(email);
  
      // Append the card to the container
      container.appendChild(card);
    });
  }
  
  // Call the function to generate the user cards
  generateUserCards(users);
  