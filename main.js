const LinksSocialMedia = {
  github: "DuduhgB",
  youtube: "UCgSD03K5ZzdoSd8Fg6Pjhiw",
  facebook: "joseeduardo.guerreiro.7",
  instagram: "duduh.gb",
  twitter: "dz7_duduh"
}

function changeSocialMediaLins(){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLins() // Tem que colocar a função para que ela seja executada

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

   // fetch Pega o que tiver na URL, then é promessa, then pega a resposta de fetch e transforma em json
  

}

getGitHubProfileInfos()