const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle.')
    }
}

export { getPuzzle as default }

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountry(location.country) //or simply: return getCountry(location.country)
//     return country
// }

// const getCountry = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all')

//     if (response.status === 200) {
//         const data = await response.json()
//         return data.find((country) => country.alpha2Code === countryCode)
//     } else {
//         throw new Error('Unable to fetch data.')
//     }
// }


// const getLocation = async () => {
//     const response = await fetch('http://ipinfo.io/json?token=39d7bbdccd40ed')

//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('unable to fetch data')
//     }
// }














// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=39d7bbdccd40ed').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data.')
//         }
//     })
// }




// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data.')
//         }
//     }).then((data) => country = data.find((country) => country.alpha2Code === countryCode))
// }


// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle.')
//         }
//     }).then((data) => data.puzzle)
// }


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country.name)

//         } else if (e.target.readyState === 4) {
//             reject('An error occured.')
//         }
//     })

//     countryRequest.open('GET', )
//     countryRequest.send()
// })