let id=prompt("Enter your Intagram User Id")
let arr=["Feching Data...","Connecting to Server...Please Wait",id+" Found...","Password Encryped...","Account Hacked"]

let sleep=async (a)=>{
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  resolve(true)
            },a)
      })
}

let a=1000;
window.onload=(event)=>{

      (async()=>{
      
            for(let b of arr)
            {
                 
                  s.innerHTML=(b)
                 await sleep(a+=500)
              
            }
      })()
}