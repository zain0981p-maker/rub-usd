const btm1=document.getElementById("btn")
const serch=document.getElementById("serch")
const rel=document.getElementById("result")
const url="https://cbu.uz/uz/arkhiv-kursov-valyut/json/"
//function
async function zusulT1(){
const data=await fetch(url)
const javob=await data.json();
const Text=serch.value.toUpperCase().trim()
if(Text==""){
    rel.textContent="Iltimos nom kiriting"
}

const top=javob.find(x=>x.Ccy===Text);
const natija=`1 ${top.CcyNm_UZ} ~ ${top.Rate} so'm sana:${top.Date}`
rel.textContent=natija
}

serch.addEventListener("input",()=>zusulT1())

// btn.addEventListener("click",()=>zusulT1())