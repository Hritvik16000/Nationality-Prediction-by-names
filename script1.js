var res;
  const getData = async () => {
    var name=document.getElementById('input').value;
    var results=document.getElementById('result');
    var URL=`https://api.nationalize.io/?name=${name}`;
    
    console.log(URL);
    
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          const data = await fetch(URL, requestOptions)
           res= await data.json();
           
            var countryData = res.country.map((value)=>{
              
                return ({code:value.country_id,prob:value.probability});
            })
            console.log(countryData);
            results.innerHTML=`This person belongs to ${countryData[0].code},&nbsp;${countryData[1].code}&nbsp; with probability of ${countryData[0].prob},&nbsp;${countryData[1].prob}`;
    } catch (e) {
      console.log(e);
    }
  };
  getData();