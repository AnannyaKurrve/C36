class Form{
    constructor(){}
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0);

        var input=createInput("Name")
        var button=createButton('play')
        var greetings=createElement('h3');
        input.position(130,160);
        button.position(260,200);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updatecount(playerCount)
            greetings.html("hi:)"+name);
            greetings.position(130,160);
        })
    }
}