export default function CacheCountryList() {
    console.log("Caching Data....")
    console.time("cache")
    
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => { return res.json() })
        .then((countryData) => {
            localStorage.setItem("countries", JSON.stringify(countryData));
            location.reload();
        })

    console.timeEnd("cache")
    console.timeLog("cache", "...  Caching done")
}