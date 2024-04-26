const apiUrl = `https://api.github.com/users/Hanane-Abounouh`;

async function user() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await response.json();
    console.log('User Data:', userData);
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

async function fetchGitHubUserRepos(username) {
  try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await response.json();
      return reposData;
  } catch (error) {
      console.error('Error fetching user repositories:', error);
      return null;
  }
}
document.addEventListener('DOMContentLoaded', function () {
 
});

async function UserInfo() {
  const userData = await user();
  const avatar = document.getElementById('avatar');
  const name = document.getElementById('name');
  const bio = document.getElementById('bio');
  const followersCount = document.getElementById('followersCount');
  const followingCount = document.getElementById('followingCount');
  const repoCount = document.getElementById('repoCount');
  const linkedin = document.getElementById('linkedin');
  const nbrForYears = document.getElementById('nbrForYears');
  const cardsContainer = document.querySelector('.cards-container');
  
  // Define the username
  const username = 'Hanane-Abounouh'; // This is the username you want to fetch repositories for

  const reposData = await fetchGitHubUserRepos(username);
  
  if (userData) {
    name.textContent = `${userData.login}`;
    
    bio.textContent = userData.bio || 'No bio available';
    followersCount.textContent = ` ${userData.followers}`;
    followingCount.textContent = ` ${userData.following}`;
    repoCount.textContent = ` ${userData.public_repos}`;
    avatar.src = userData.avatar_url; 

    // const linkedinName = userData.login; 
    // linkedin.href = `https://www.linkedin.com/in/${linkedinName}`; 
    // linkedin.textContent =  `/in/${linkedinName}`; 
  } else {
    name.textContent = 'User does not exist';
    avatar.src = '../img/logo.png';
    linkedin.href = '#'; 
  }
  
  const accountCreationDate = moment(userData.created_at);
  const currentDate = moment();
  const memberYears = currentDate.diff(accountCreationDate, 'years');
  nbrForYears.textContent = `Member for ${memberYears} years`;

  displayUserRepos(reposData);
}





function displayUserRepos(reposData) {
  const sectionToHide = document.getElementById('section-to-hide');

  if (reposData && reposData.length > 0) {
    // Loop through each repository data and create corresponding HTML elements
    reposData.forEach(repo => {
      // Create elements for repository details
      const repoContainer = document.createElement('div');
      repoContainer.className = 'card p-1 border border-gray-400 rounded-lg relative';
      repoContainer.style.height = '21vh'; // Hauteur fixe de 100 pixels
      

      const repoName = document.createElement('span');
      repoName.className = 'text-sm text-blue justify-start  font-semibold';
      repoName.textContent = repo.name;

      const repoType = document.createElement('h6');
      repoType.className = 'h6 rounded-lg absolute right-0 border  border-gray-300 mr-2 ';
      repoType.textContent = repo.private ? 'Private' : 'Public';

      const repoDescription = document.createElement('p');
      repoDescription.className = 'text-black text-sm mt-4 text-left';
      repoDescription.textContent = repo.description || 'No description available';

      const repoLanguage = document.createElement('p');
      repoLanguage.className = 'text-gray-600 mt-2 text-left';
      repoLanguage.textContent = repo.language || 'No language specified';

      // Append elements to the repository container
      repoContainer.appendChild(repoName);
      repoContainer.appendChild(repoType);
      repoContainer.appendChild(repoDescription);
      repoContainer.appendChild(repoLanguage);

      // Append repository container to the section
      sectionToHide.appendChild(repoContainer);
    });
  } else {
    // If no repositories are available, display a message
    const noReposMessage = document.createElement('p');
    noReposMessage.textContent = 'No repositories available';
    sectionToHide.appendChild(noReposMessage);
  }
}




  


UserInfo();











document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement doux vers le haut
    });
});




function toggleContent() {
    console.log("Function triggered."); // Pour confirmer que la fonction est appelée
    
    const sectionToHide = document.getElementById('section-to-hide');
    const additionalContent = document.getElementById('additional-content');
  
    console.log("Section to hide:", sectionToHide);
    console.log("Additional content:", additionalContent);
  
    if (sectionToHide) {
      sectionToHide.classList.add('hidden'); // Masquer "section-to-hide"
      console.log("Section is now hidden.");
    }
  
    if (additionalContent) {
      additionalContent.classList.remove('hidden'); // Afficher "additional-content"
      console.log("Additional content is now visible.");
    }
  }
  
  
  
  


