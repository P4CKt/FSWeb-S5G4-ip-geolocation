import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri	 kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

function idCard(dividiv){

	const mDiv =document.createElement("div");
	const imgFlag =document.createElement("img");
	const cardDiv =document.createElement("div");
	const infoIp =document.createElement("h3");
	const landNum =document.createElement("p");
	const locInfo =document.createElement("p");
	const cityName =document.createElement("p");
	const timeZone =document.createElement("p");
	const currencyUnit =document.createElement("p");
	const nIsp =document.createElement("p");
	
	// class
	mDiv.setAttribute("class","card");
	cardDiv.setAttribute("class","card-info");
	infoIp.setAttribute("class","ip");
	landNum.setAttribute("class","ulke");
	
	
	//content
	imgFlag.src=dividiv["ülkebayrağı"];
	infoIp.textContent=dividiv["ip"];
	landNum.textContent=dividiv["landInfo"],["landCode"];
	locInfo.textContent=`Enlem: ${dividiv["enlem"]} Boylam: ${dividiv["boylam"]}`;
	cityName.textContent=`Şehir: ${dividiv["şehir"]}`;
	timeZone.textContent=`Saat dilimi: ${dividiv["saatdilimi"]}`;
	currencyUnit.textContent=`Para birimi: ${dividiv["parabirimi"]}`;
	nIsp.textContent=`ISP: ${dividiv["isp"]}`;
	
	mDiv.appendChild(imgFlag);
	mDiv.appendChild(cardDiv);
	cardDiv.appendChild(infoIp);
	cardDiv.appendChild(landNum);
	cardDiv.appendChild(locInfo);
	cardDiv.appendChild(cityName);
	cardDiv.appendChild(timeZone);
	cardDiv.appendChild(currencyUnit);
	cardDiv.appendChild(nIsp);
	
	
	return mDiv;
	

	}
	
	const cardSpawn =document.querySelector("div.cards");

	const start = async function() {await ipAdresimiAl();
	console.log("Anda mıyız");
	axios.
	get("https://apis.ergineer.com/ipgeoapi/"+benimIP)
	.then((response)=>{cardSpawn.appendChild(idCard(response.data));
	console.log("Sorun Yok");
	})
	.catch((Error)=>{console.log(Error);console.log("Yazıklar Olsun")});

};
start()