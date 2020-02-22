---
title: "Miki’s Permission System"
thumbnailUrl: "https://cdn.miki.ai/web/landing/guides/miki-permissions.png"
tags: [
    "tutorial", "permissions", "customization", "config", "discord"
]
authors:
  [
    {
      name: "Advocatus",
      title: "Writer",
      avatar: "https://cdn.miki.ai/avatars/151506298741981184.png",
    },
    {
      name: "Veld",
      title: "Editor",
      avatar: "https://cdn.miki.ai/avatars/121919449996460033.png",
    },
  ]
date: "2020-02-12"
---

The core of using Miki’s many features is giving her commands; with that comes permission to be able to use her commands. There are three types of things you can do with the permissions functionality: allow, deny and reset. There’s four levels of permissions that you can utilize: guild (server), channel, role and individual user.

The allow permission enables the user to be able to use that command whereas the deny permissions makes it so the command will not work for them at all. Please remember that server owners are above the permission hierarchy and can always use every command - except for Patreon (donator) and NSFW commands (unless applicable).

The guild (server) level is for the entire server, all channels, everywhere. The channel level of permissions is just for the channel that you tell Miki to apply it to. Meaning, if you tell Miki to deny a command for #Channel-1, it will only be disabled for #Channel-1. #Channel-2 will still have that command available for people in your server to use.

The role level of the permissions system isn’t for the guild as a whole or specific to any channel. Instead it allows you to apply permissions to groups of users. For example, if you don’t want to allow users under the age of 18 to be able to use the gambling commands, you can create a role called “No Gambling” and utilize Miki’s permission system to disable all of the gambling commands for that role. No matter which channel they go to on your entire server, they won’t be able to do any gambling!

For the user level of permissions, it is specific to the individual and functions the same as the role level, but is specific to one user in particular.

Much like the hierarchy that exists with the placement of roles in the server settings, there’s a hierarchy for permissions. The lowest tier is guild permissions, these apply for the entire server and all users. Role permissions supersede channel permissions and supersede the guild permissions, with user permissions being the highest level.

For example, if you disable blackjack for your entire server, then that command won’t work at all. But, if it is enabled in the #gambling channel, then the command will work in that channel but not the rest of the server. Furthermore, if you have a role for “No Gambling”, then the blackjack command won’t work for any user with that role, even in the #gambling channel. The role permission always takes the priority, then the permissions for the channel that the user is in. Lastly, the overall guild permissions are used.

What does this mean? If you’re trying to use the command on any other channel, it won’t work. But, it will work in the #gambling channel unless you have the “No Gambling” role. Simple enough!

Now that we’ve talked about how it works, let’s see how to actually use the permission system! There’s a few parts of the structure of the command that need to be included and it’s important to know what each one is, the order it goes in and the information it’s asking for.

Firstly, you start off the command by telling Miki what you’re doing. We’re looking to edit the permissions, so we will be using the `>permissions` command. Next, we need to decide how we are changing the permissions. Are we going to allow, deny or reset a permission? We need to tell Miki what we want to do by simply typing in `allow`, `deny` or `reset`. To change the permissions of a command, the command being changed needs to be declared. We are going to type in the name of the command that is being changed. There doesn’t need to be anything fancy with how we type the name - it’s just simply said. For example, if the command ping is to be disabled, that’s all that is written: `ping`. Next, Miki needs to know the level that the permission will be - this being either guild, channel, role or user. Once we tell Miki how to apply the permission (the entire server, a channel, to a role or an individual) we need to specify where to apply it. This is done simply by telling Miki! Saying the channel or role name or mentioning the user in question is enough information for Miki.

The command structure will look like this:

> permissions &lt;allow/deny/reset> &lt;command name> user &lt;@username>

> permissions &lt;allow/deny/reset> &lt;command name> role &lt;role name>

> permissions &lt;allow/deny/reset> &lt;command name> channel &lt;channel name>

> permissions &lt;allow/deny/reset> &lt;command name> guild

A few visual examples of the command in use:

![](https://cdn-w.miki.ai/landing/guides/localization/permissions-1.png)
![](https://cdn-w.miki.ai/landing/guides/localization/permissions-2.png)

Let’s look at a situation that would involve changing permissions and we will see how the command will be made for those changes to happen.

We talked about this earlier, but let’s say you decide that no one under the age of 18 is allowed to gamble. You really hate `>flip` especially, so you’re going to disable that first! Before you are able to change the permissions, we need to do some setup. A role called `NoFlip` has to be made and added to every user you want to deny the command permission to. So, let’s see how the permissions command will be made.

> permissions

We are changing the permissions on the server, so we are telling Miki that’s what we want to do.

> permissions deny

We wish to disallow someone from being able to do something, so that’s what we need to tell Miki.

> permissions deny flip

The command we want to deny the ability to use is flip, so we are giving that instruction to Miki to be able to act on it.

> permissions deny flip role

We want to deny a group of people from using the command but don’t want them to just use another channel or keep unaffected people from being able to use the command (in any channel on the entire server) so the role method is the best suited for us.

> permissions deny flip role NoFlip

The NoFlip role, that we’ve already added to the server role list and given to everyone we want to not be able to use the command, is what we want Miki to deny using the flip command.

With that, the command has been set up! We just need to hit Enter and send the command to Miki and she’ll work her magic! From now on, no one with the `NoFlip` role will be able to use the command at all in the entire server. Anyone without the role will be free to use that command in any channel they wish.

If you have any questions about permissions or how they work, please feel free to join the [Miki Support server](https://discord.gg/39Xpj7K) and visit the #support channel!
