let url="https://catfact.ninja/fact";

let btn=document.querySelector("#btn");



async function getFacts(url) {

    let res=await axios.get(url);
    console.log(res.data);
    console.log(res.data.fact);
}
getFacts(url);