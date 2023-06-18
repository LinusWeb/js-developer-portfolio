
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LinusWeb/js-developer-portfolio/projeto-base/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
