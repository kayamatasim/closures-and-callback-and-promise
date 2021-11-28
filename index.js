let asim=new Promise(function(pass,fail){
    if(1==2){
        pass('cool')
    }
    else{
        fail('not cool')
    }
})


asim.then(
    function(responce){
console.log(responce)
    },
    function(error){
        console.log(error)
    }
)