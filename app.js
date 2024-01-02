const url = 'https://api.openweathermap.org/data/2.5/weather?'
const key = '286d84cd419cf27105e894f90b5d510f'

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}
const getResult = (cityName) => {
    /*  console.log(cityName); input ekranının console da görünümünü kontrol eder */
    let query = `${url}q=${cityName}&appid=${key}&units=metric&lang=tr` /* weader tanımlama appid, p ve units url aldığımız kodun elamanları  */
      console.log(query); /* linkin çalışıp çalışmadığının kontrolü*/
    fetch(query) /* url den ver almak için fonksiyon */
        .then(weather => {
            return weather.json()
            /* fetch fonk. asekrondur verileri işlemek için then zinciri kullanılır.
            weather nesnesine aktarılır ve json formatına dönüştürülür  */
        })
        .then(displayResult) /* json formatındaki hava durumu bilgileri displayResult fonk. parametre olarak iletilir */
}
const displayResult = (result) => {
    console.log(result); /*  displayden alınan bilgiler result parametresini ekrana yazdırır. */
    let city = document.querySelector('.city') /* şehir ismi icin tanım */
    city.innerHTML = `${result.name}, ${result.sys.country} ` /* console da verileri çektiğimiz url nin başlıkları kullanılarak 
    result altındaki name (isim),
    result altındaki sys başlığının altındaki country(ülke) başlığına erişildi. */

    let temp = document.querySelector('.temp') /* yukarıdaki başlıklar gibi temp(sıcaklık çekildi) */
    temp.innerHTML = `${Math.round(result.main.temp)}°C ` /* altgr+ virgül kısayoluyla tırnak unutulmamalı */

    let desc = document.querySelector('.desc');
    desc.innerHTML = result.weather[0].description /* weather bir dizi  */

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C/
    ${Math.round(result.main.temp_max)}°C` /* main altındaki temp_min */

}
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);