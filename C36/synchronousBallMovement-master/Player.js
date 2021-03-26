class Player{
    cunstructor(){}
    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(name){
    }
}