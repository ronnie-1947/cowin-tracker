
(async function() {
    'use strict';
    document.querySelector('body').insertAdjacentHTML('afterBegin', `<audio src="http://localhost:7071/alarm.mp3" id="aud_aud"></audio>`)
})();


setInterval(()=>{
const thisurl = window.location.href
window.location.href=thisurl
},1000*3*60)

setInterval(async ()=>{
  const today = new Date()
  const pin = 781381

    // Your code here...
  const a = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${today.getDate()}-0${today.getMonth()+1}-2021`)
  const result = await a.json()
  const centers = result.centers.filter(c=>c.sessions[c.sessions.length-1].min_age_limit==18)
  if(centers.length<1)return
  let success = false
  centers.forEach(c=>{
      const val = c.sessions.some(s=> s.min_age_limit==18&&s.available_capacity>0)
      val?success=true:false
  })

  if(success){
      fetch('http://localhost:7071/playsound')
      await document.querySelector('#aud_aud').play()
  }
}, 1000*5)