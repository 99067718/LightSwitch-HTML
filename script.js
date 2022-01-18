var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'on';
document.body.appendChild(btn);
var AmountClicks = 0;

// schijf hier tussen je code
var onOff = "on";
btn.addEventListener('click', () =>{
    if (onOff == "on"){
        btn.innerText = 'off';
        console.log('light is now off')
        onOff = "off";
        document.querySelector('body').style.backgroundColor = 'black';
        AmountClicks += 1
    }
        
    else {
        btn.innerText = 'on';
        console.log('light is now on')
        onOff = "on";
        document.querySelector('body').style.backgroundColor = 'white';
        AmountClicks += 1
    if (AmountClicks == 20){
        document.querySelector('body').style.backgroundColor = "purple"
        window.open('https://theuselessweb.com/','_blank').focus();
    }
    }


});

// schijf hier tussen je code