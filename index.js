var screen=document.getElementById("screen").value;

function fact(){
    let i,n,f;
    f=1;
    n=screen.value;
    for(i=1;i<=n;i++){
        f=f*i;
    }
    screen.value=f;
    console.log(f);
}