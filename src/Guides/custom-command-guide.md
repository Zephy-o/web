Mi(ki)Script is Miki's custom command language, specifically written to make it easy to use custom commands. In this guide we will show you how to get started with MiScript.

## Your first script
```lua
say "hello world"
```
As you might realize, this command simply makes Miki say "hello world". There's nothing else happening.

## Message variables
I understand that sometimes you would like some additional information in your discord chats. So the ability to add text from variables provided by Miki is there. 
```lua
say "Hello $[author]"
```
This would for example return
> Hello Veld

## Conditionals
Different responses are also allowed. You can for example add conditional branches. This is shown below.
```lua
if $author = "Veld" then
    say "Hello Veld!"
else
    say "Wait, you're not Veld!"
end
```

## Stop sequences
Since there is a message limit on Discord, I figured that using `if` and `else` over and over again is not a good idea for bigger commands. so I've added `stop` that will stop the script and return the current output.
```lua
say "This message will be shown!"
stop
say "However, this message will be ignored!"
```

# Adding your commands to miki.
So now that you have a script going for yourself. Lets check how to add it in your server!
> Note: this will only work if you have the `MANAGE ROLES` permission in the Discord server.
```
>createcommand "testcommand" say "$[author]! Long time no see!"
```
And if everything goes well, you will see this:<br><br>
![image](https://i.imgur.com/CBVClgq.png)
