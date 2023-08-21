const user = 
{
    name : "surya" , 
    id : 101 , 

    welcomeMessage : function()
    {
        console.log(`${this.name} , welcome to Invinxcix`);
        console.log(this);
    }
}
user.welcomeMessage()
user.name = "prakash"
console.log(this);
user.welcomeMessage()
