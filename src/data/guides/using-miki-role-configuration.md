---
title: "Using Miki’s Role Management Commands In Your Server!"
thumbnailUrl: "https://cdn.miki.ai/web/landing/guides/title-roles-thing.png"
tags: [
    "tutorial", "roles", "discord"
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
date: "2020-02-16"
---
So, looking to configure some roles in your server? Great! This guide will explain each command involved in configuring and obtaining roles using Miki, as well as go through some Discord features such as setting up permissions within your server. After reading this, you will have the necessary knowledge to set up a variety of different role configurations and know how to opt in or out of available roles. Before we start; make sure you already have Miki in your Discord server if you’d like to follow along and try things out for yourself!

## In this guide we will be showing you

- How the role commands work
- How to prepare your server for role management
- How to use arguments to configure roles

## Role commands

Before we get into configuring roles, let’s take a look at all of the commands you’ll need to know beforehand!

| Commands | Description |
|---|---|
| >configrole `[role_name]` `[arguments]` | Used to configure roles and set their requirements, can only be used by people with permission to manage roles. Role names made up of multiple words must be surrounded with quotation marks |
| >iamlist `[page_number]` | Will display a list of roles obtainable using >iam `[role_name]` as well as their requirements <ul><li><i class="fas fa-star"></i>Minimum level required</li><li><i class="fas fa-hammer"></i> Role required</li><li><i class="fas fa-diamond"></i> Cost of role in Mekos</li></ul> |
| >iam `[role_name]` | will allow you to **opt in** to an optable role, giving you the role. This will only work if you meet the requirements of the role.
| >iamnot `[role_name]` | will allow you to **opt out** of an optable role that you have already obtained, removing the role from you.

## Example of Command Usage

In this example, we will use the role “Blue”, which will be optable and will give the user a blue color role. First, the role will need to be configured using the >configrole command (we will go into further detail on this command later.)

![](https://cdn.miki.ai/web/landing/guides/using-role-config-1.png)

Once the role is configured as optable, it will appear on the >iamlist with its requirement displayed in the form of emotes.

![](https://cdn.miki.ai/web/landing/guides/using-role-config-2.png)
<br>
_This role displays no emotes because it has no requirements._

Now that the role is optable, it can be gained using >iam `[role_name]`

<div class="columns">
    <div class="column">
        <img class="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-3.png"/>
    </div>
    <div class="column">
        <img class="image is-rounded" src="https://cdn.miki.ai/web/landing/guides/using-role-config-4.png"/>
    </div>
</div>

To opt out of the role, use >iamnot `[role_name]`

<div class="columns">
    <div class="column">
        <img class="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-5.png"/>
    </div>
    <div class="column">
        <img class="image is-rounded" src="https://cdn.miki.ai/web/landing/guides/using-role-config-6.png"/>
    </div>
</div>

## Preparing your server

Before a role can be configured, it needs to be created first. To create roles within your server you have to navigate to the role tab within the server settings, here you will be able to create new roles and edit any existing roles.

<img class="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-10.png"/>
<img class="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-11.png"/>
<img class="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-12.png"/>

## Permissions

### What are permissions

Permissions are used within a discord server to give members or bots access to certain features. permissions are given to people through roles, each role can have a different set of permissions, however if a user has multiple roles their permissions will be inherited from their highest role.

Miki needs the "Manage Roles" permission in order to access the Discord servers roles. You can give Miki access to this permission by navigating to Miki’s role in server settings and enabling 'Manage Roles'.

![](https://cdn.miki.ai/web/landing/guides/using-role-config-13.png)

The 'Manage Roles' permission will only give Miki authority to manage roles underneath her role in the role hierarchy, therefore any roles you intend to configure will need to be below her role, you can drag roles up or down the hierarchy to change their position.

## Configuration

Now you're ready to configure some roles! Let's take a look at the commands associated with role management and the different arguments available to use when configuring roles.

### Arguments

There are multiple ways you can configure a role, each of these arguments will change the way the role is obtained by your members.

| Argument | Description |
|---|---|
| -automatic:(true/false)    | This sets whether the command is automatically given to the person once they reach the requirements of the role. |
| -optable:(true/false)      | This sets whether the role is displayed on `>iamlist` and obtained by using `>iam role` if the person meets the requirements. |
| -role-required:(role name) | This is used to define any roles the person must already have to obtain the role. |
| -level-required:(number)   | This sets the minimum local level a person requires to obtain the role. |
| -price:(amount)            | This sets the amount of mekos the person must pay to obtain the role. (Nobody gets the Mekos) |
  
## Recommended ways to use Miki’s role system

Even though you’re completely free to use Miki and her role system; we would like to give you some inspiration of what you can do with these role configurations!

### Roles for level ups

This role configuration will make it so that whenever a user reaches **level 5** on your Discord server, they will get the specific role! This can be used to reward users that are being active, and whenever they level up to the required level, Miki will automatically give this role to the user.

There’s two different arguments you need: **Automatic** and **Level-Required**.

- **Automatic** is needed so that when your discord members are level 5, they will automatically get the role!
- **Level-Required** is needed to lock away the role from people below level 5. It would be unfair if anyone could just get it without being level 5.

To create this role use the following command.

```bash
>configrole <role_name> -automatic:true -level-required:5
```

![](https://cdn.miki.ai/web/landing/guides/using-role-config-7.png)

### Optable roles

This is a very common, and easy way to freely create roles that can be obtained by anyone. This is super easy to use for roles such as hobbies, colours, and similar kinds of roles.

What Optable does is allow people to use this role in >iam and >iamnot, and they will appear in the >iamlist. This is mostly for commands that people should be free to take or not, whichever they want.

To create this role use the following command.

```bash
>configrole <role_name> -optable:true
```

![](https://cdn.miki.ai/web/landing/guides/using-role-config-8.png)

### Twitch subscriber roles

If you’re a creator on Twitch, Patreon, etc. Miki can allow your supporters to have special roles. This can be super convenient, because on occasion you might want to have users have extra rewards on your server, but still have them pick between different ones.

For example, you can have default colours which your Discord members can freely choose, and then for supporters; you can have prettier, hand-picked colours, to let them brag in the chat.

There’s two different arguments you need: **Optable** and **Role-Required**.

- **Optable** allows people to use this role in `>iam` and `>iamnot`, and they will appear in the >iamlist. This is mostly for commands that people should be free to take or not, whichever they want.
- **Role-Required** is used to have another role be a requirement before users can opt-in to this role. This can be any role in your Discord server.

To create this role use the following command.

```bash
>configrole <role_name> -optable:true -role-required:"twitch subscriber"
```

![](https://cdn.miki.ai/web/landing/guides/using-role-config-9.png)

We hope this guide has helped you use Miki’s role system to set up some roles for you and your members to use! Still have some questions? Why not join our discord server, we have an amazing community of Miki users to meet and our staff would be happy to answer any questions!
