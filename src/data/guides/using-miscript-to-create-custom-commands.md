---
title: "Using MiScript to create custom commands"
thumbnailUrl: "https://cdn-w.miki.ai/landing/guides/custom-commands/Thumbnail.png"
tags: [
    "tutorial", "scripting", "custom", "commands", "discord"
]
authors: [
    {
     name: "Zephy",
    title: "Writer",
    avatar: "https://cdn.miki.ai/avatars/355969214806360076.png"
    },
    {
    name: "Veld",
    title: "Editor",
    avatar: "https://cdn.miki.ai/avatars/121919449996460033.png"
    }
]
date: "2020-02-22"
---
Mi(ki)Script is Miki's custom command language, specifically written to make it easy to use custom commands. In this guide we will show you how to get started with MiScript.

## Commands
| Commands | Description |
|---|---|
| >createcommand [command name] [script] | Used to create a custom command |
| >removecommand [command name] | Used to delete an existing custom command |

## Your first script
```lua
say "hello world"
```
As you might realize, this command simply makes Miki say "hello world". There's nothing else happening.

## Message variables
sometimes you may want to include some additional information in your discord chats. The ability to add text from variables provided by Miki makes this possible. 
```lua
say "Hello $[author]"
```
This would for example return
> Hello Veld

## Conditionals
Different responses are also allowed, for example you can add conditional branches as shown below.
```lua
if $author = "Veld" then
    say "Hello Veld!"
else
    say "Wait, you're not Veld!"
end
```

## Stop sequences
Since there is a message limit on Discord, using `if` and `else` over and over again is not a good idea for bigger commands. using `stop` will stop the script and return the current output.
```lua
say "This message will be shown!"
stop
say "However, this message will be ignored!"
```

## Adding your commands to miki.
So now that you know how to create a script, Lets take a look at how to add it in your server!
> Note: this will only work if you have the `MANAGE ROLES` permission in the Discord server.
```
>createcommand "testcommand" say "$[author]! Long time no see!"
```
And if everything goes well, you will see this:<br><br>
![image](https://cdn-w.miki.ai/landing/guides/custom-commands/testcommand.png)

## Removing commands
To remove a command you have created, you can use ```>removecommand [command name]```. For example, if you wanted to remove the command we created above you would use ```>removecommand testcommand```. If done correctly, you should see the following:<br><br>
![image](https://cdn-w.miki.ai/landing/guides/custom-commands/RemoveCommand.PNG)
