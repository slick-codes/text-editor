const inputArea = document.querySelector('.editor')
const outputArea = document.querySelector('iframe')
const runButton = document.querySelector('.run-button')
const livePreviewToggler = document.querySelector('.live-run')


inputArea.innerHTML =
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  
  <style> 
   .box {
            width: 15em;
            height: 15em;
            background: #fcfc3c;
            margin: 6% auto;
            position: relative;
            border-radius: 0.3em;
            box-shadow: inset 0px 0px 30px 10px yellow;
        }
        
        .eye {
            width: 4.1em;
            height: 4.2em;
            background: white;
            border-radius: 100%;
            position: absolute;
            box-shadow: inset 0px 0px 30px 10px #f2f2f2;
            border: solid 2px black;
            z-index: 6;
        }
        
        .dot {
            position: absolute;
            background: black;
            width: .3em;
            height: 1em;
            border-radius: 1em;
            z-index: 6;
        }
        
        .dot1 {
            left: 4em;
            top: 3.6em;
            transform: rotate(-22deg);
        }
        
        .dot6 {
            left: 8.1em;
            top: 3.6em;
            transform: rotate(-22deg);
        }
        
        .dot3 {
            left: 7em;
            top: 3.6em;
            transform: rotate(22deg);
        }
        
        .dot4 {
            left: 11em;
            top: 3.6em;
            transform: rotate(22deg);
        }
        
        .dot2 {
            left: 5.5em;
            top: 3.2em;
            transform: rotate(0deg);
        }
        
        .dot5 {
            left: 9.5em;
            top: 3.2em;
            transform: rotate(0deg);
        }
        
        .drkeye {
            width: 3.6em;
            height: 4em;
            transform: rotate(12deg);
            position: absolute;
            border-radius: 100%;
            background: white;
        }
        
        .eye.left {
            left: 3.5em;
            top: 4em;
        }
        
        .eye.right {
            left: 7.7em;
            top: 4em;
        }
        
        .eye .puls {
            width: 2em;
            height: 2em;
            border: solid 1px black;
            background: #3fadf2;
            margin: 1.1em auto;
            margin-left: 1em;
            transform: rotate(-39deg);
            border-radius: 100%;
            position: relative;
            overflow: hidden;
        }
        
        .drkpuls {
            width: 1.9em;
            height: 1.7em;
            bottom: .0em;
            right: -.1em;
            position: absolute;
            background: #68b4ff;
            border-radius: 100%;
        }
        
        .dark {
            border-radius: 100%;
            width: 1.1em;
            height: 1.1em;
            margin-top: 0.2em;
            margin-left: 0.22em;
            background: black;
        }
        
        .nose {
            padding: 0.6em;
            height: .5em;
            background: #fcfc3c;
            border: solid 2px black;
            position: absolute;
            border-radius: 100%;
            top: 7em;
            left: 6.99em;
            z-index: 7;
        }
        
        .hidenose {
            padding: 0.4em;
            background: #fcfc3c;
            position: absolute;
            top: 8.3em;
            left: 7.3em;
            border-radius: 100%;
            z-index: 8;
        }
        
        .mouth {
            width: 7em;
            height: 6.8em;
            background: #9a3713;
            border: solid;
            overflow: hidden;
            top: 4.5em;
            padding-bottom: 1.8em;
            position: relative;
            left: 4.1em;
            border-radius: 100%;
        }
        
        .mouthHide {
            width: 10em;
            height: 6.6em;
            background: #fcfc3c;
            border-bottom: solid;
            border-radius: 100%;
            position: absolute;
            top: 2.79em;
            left: 2.7em;
            z-index: 2;
        }
        
        .hidemore {
            width: 4em;
            height: 4em;
            border: ;
            z-index: 5;
            background: #fcfc3f;
            position: absolute;
            top: 5em;
        }
        
        .hidemore.one {
            left: 8.7em;
        }
        
        .cheek {
            background: #fcd73c;
            width: 2em;
            height: 1.27em;
            border: solid #ff7f46;
            position: absolute;
            z-index: 7;
            border-radius: 100%;
        }
        
        .cheekleft {
            left: 3em;
            top: 7.7em;
            transform: rotate(-6deg);
        }
        
        .cheekright {
            left: 9.7em;
            top: 7.7em;
            transform: rotate(6deg);
        }
        
        .teeth {
            height: 2em;
            width: 1em;
            border-radius: 0.1em;
            background: white;
            top: 3.9em;
            z-index: 1;
            position: absolute;
        }
        
        .teeth.two {
            left: 3.8em;
        }
        
        .teeth.one {
            left: 2.3em;
        }
        .chkdrk{
             padding:0.5em;
            border-radius: 100%;
            background:#fcd73c;
            position:absolute;
            top:0.1em;
            
        }
        .cheekleft .chkdrk{
            left:-0.3em;
        }
        .cheekright .chkdrk{
            right:-0.4em;
        }
        .tougue{
            width:2.1em;
            border-radius: 100%;
            height: 1.7em;
            background:#ffc797;
            bottom:1em;
            position:absolute;
        }
        .tougue.one{
            left:3.4em;
            transform:rotate(-14deg);
            bottom:-.7em;
        }
        .tougue.two{
            left:1.5em;
            transform:rotate(14deg);
            bottom:-.7em;
        }
        .mouthHoll{
            width:4.5em;
            height:3.5em;
            background:darkred;
            bottom:-1em;
            position:absolute;
            border-radius:50%;
            z-index: ;
            left:1.3em;
            padding-bottom:1em;
        }
        .hol{
          width:1.2em;
          height:1.5em;
          border-radius:100%;
            background-color:#b2b237;
            position: absolute;
            transform:rotate(8deg);
            overflow: hidden;
            z-index: 14;
            
        }
        .hol.one  {
            top:2em;
            left:2em;
        }
        .hol.two{
            left:1.2em;
            top:4em;
            width:0.8em;
            height:1.2em;
            transform:rotate(20deg);
        }
        .hol.three{
            left:12.2em;
            top:2.3em;
            transform:rotate(20deg);
        }
        .hol.four{
            left:2em;
            width:1.6em;
            height:2em;
            top:11.3em;
            transform:rotate(20deg);
        }
        .hol.five{
            left:2em;
            top:9.6em;
            width:0.8em;
            height:1.2em;
            transform:rotate(20deg);
        }
        .hol.six{
            left:12em;
            top:9.6em;
            height:1.7em;
            transform:rotate(20deg);
        }
        .hol.seven{
            left:11.4em;
    
  </style>
</head>
<body>
    <div class="box">
       
       
        <div class="hol one">
            <div class="insidehol"></div>
        </div>
       
       
        <div class="hol two">
            <div class="insidehol"></div>
        </div>
         
        <div class="hol three">
            <div class="insidehol"></div>
        </div>
       
       
        <div class="hol four">
            <div class="insidehol"></div>
        </div>
       
       
        <div class="hol five">
            <div class="insidehol"></div>
        </div>
       
       
        <div class="hol six">
            <div class="insidehol"></div>
        </div>
       
       
        <div class="hol seven">
            <div class="insidehol"></div>
        </div>
       
       
        <!-- Eye Details    -->
        <div class="dot1 dot"></div>
        <div class="dot2 dot"></div>
        <div class="dot3 dot"></div>
        <div class="eye left">
            <div class="drkeye">
                <div class="puls">
                    <div class="drkpuls">
                        <div class="dark"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dot4 dot"></div>
        <div class="dot5 dot"></div>
        <div class="dot6 dot"></div>
        <div class="eye right">
            <div class="drkeye">
                <div class="puls">
                    <div class="drkpuls">
                        <div class="dark"></div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- Eye Details  End  -->
        <div class="hidemore one"></div>
        <div class="hidemore two"></div>
        <div class="hidenose"></div>
        <div class="nose"></div>
        <div class="mouthHide"></div>
        <div class="mouth">
            <div class="teeth one"></div>
            <div class="teeth two"></div>
            
            <div class="mouthHoll"></div>
            <div class="tougue one"></div>
            <div class="tougue two"></div>
        </div>
        <div class="cheek cheekleft"><div class="chkdrk"></div></div>
        <div class="cheek cheekright"><div class="chkdrk"></div></div>
    </div>
</body>
</html>
`

let isActive = false;

livePreviewToggler.onclick = function () {
    livePreviewToggler.classList[isActive ? 'remove' : 'add']('active')
    isActive = !isActive
}

function renderToDom() {
    outputArea.src = `data: text/html; charset=utf-8, ${encodeURIComponent(editor.getValue())} `
}

var editor = CodeMirror.fromTextArea(inputArea, {
    lineNumbers: true,
    theme: "dracula",
    mode: "text/html",
    htmlMode: true,
    profile: 'xhtml'
});
emmetCodeMirror(editor)


let timeOut = null

editor.on('change', function (event) {
    clearTimeout(timeOut)
    if (isActive) {
        timeOut = setTimeout(renderToDom, 1000)
    }
})

editor.on('blur', function (event) {
    renderToDom()
})


window.onload = renderToDom
runButton.onclick = renderToDom