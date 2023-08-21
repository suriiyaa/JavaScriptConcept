const user = 
{
    name : "surya" , 
    id : 101 , 

    welcomeMessage : function()
    {
        console.log(`${this.name} , welcome to Invinxcix`);
    }
}
user.welcomeMessage()
user.name = "prakash"
user.welcomeMessage()
