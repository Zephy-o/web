---
title: "Mekos: Miki's Currency and its uses"
thumbnailUrl: 
tags: [
    "tutorial", "currency", "mekos", "discord"
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
date: "2020-03-01"
---
When using Miki you will frequently come across the word 'Mekos' being used, Mekos are the currency used throughout Miki's economy and can be gained and spent in many different ways. In this guide we will be taking a look at:

- How Mekos can be gained
- Gambling with Mekos
- How Mekos can be spent

## **How can Mekos be gained?**
Mekos can be consistently gained through the following commands:

 #### >Daily
 - Daily can be used every 24 hours to gain Mekos. The base amount of mekos gained through daily is 100, however this will increase by 20 for every consecutive day that you claim your daily.
 - If 48 hours pass since your last daily claim, your streak will end and your daily will reset back to 100 Mekos.
 - Donators recieve double the amount from daily, meaning they will begin by gaining 200 Mekos which will increase by 40 Mekos for each consecutive day claimed.
 - The maximum amount you can gain from a daily streak is 2100 Mekos per day (4200 for Donators), this is achieved after accumulating a streak of 100 days.
 #### >Weekly 
- Weekly can be used once per week per server, this command will only work if the server has an active rival and your guild has more experience than its rival. A rival can be gained using `>guildnewrival`, however only people with the `Manage Server` permission can change the rival.
- The amount gained from weekly is dependant on the level of the server's guild and the tier of guild house the guild currently has. The current guild house level and weekly multiplier can be viewed using `>guildhouse`, this will also display the cost of upgrading the guild house to the next tier.
- The guild house can be upgraded using `>guildupgrade house`, upgrading the guild house will increase the weekly multiplier, however only people with the `Manage Server` permission can upgrade this. To upgrade the guild house the guild bank must contain enough Mekos, you can view the amount of Mekos in the guild bank using `>guildbank balance` and deposit Mekos into the guild bank using `>guildbank deposit [number]`.

#### Voting on top.gg
Another way to gain Mekos is to vote for Miki on the following website: https://top.gg/bot/miki
- You can vote for the bot every 12 hours, after voting you will recieve a direct message from Miki stating the amount of Mekos you have recieved for voting.
- The base amount of Mekos gained from voting is 100, this increases by 100 Mekos for each consecutive day of voting up to a maximum of 10k Mekos per vote after obtaining a 100 day streak. Failing to vote for 24 hours will end the streak.
- Donators will recieve double the amount from voting, this means they will begin by gaining 200 mekos, which will increase by 200 for each consecutive vote up to a maximum of 20k per vote.

## **How Can I Gamble With my Mekos?**
There are a variety of different games you can play to gamble with your Mekos, the following are the gambling commands currently available:

| Commands | Description | Max Bet | Payout |
|---|---|---|---|
| `>blackjack new [Bet_Amount] ok` <br> `>bj new [Bet_Amount] ok` | Play against Miki in a game of blackjack! | 1,000,000 | Double your bet |
| `>slots [Bet_Amount]` <br> `>s [Bet_Amount]` | Try your luck on the slot machine! | 99,999 | Dependant on Payline |
| `>flip [Bet_Amount] [tails/heads]` <br> `>flip [Bet_Amount] [t/h]` | Flip a coin, guess the correct side to win. | 10,000 | Double your bet |
| `>rps [Bet_Amount] [rock/paper/scissors]` <br> `>rps [Bet_Amount] [r/p/s]` | Play a game of Rock Paper Scissors. | 10,000 | Double your bet |

## What can Mekos be spent on?

#### Experience card customisation
- There are 38 different backgrounds you can purchase with Mekos, these backgrounds can be applied to your experience card, which is viewed using the `>exp` command.
- Using `>buybackground [number]` will display the chosen background along with its price, this will not actually purchase the background unless the purchase is confirmed.
- You can check your owned backgrounds using `>backgroundsowned` and apply a background to your experience card using `>setbackground [number]`.
- You can also change the front and back colors of your experience card using `>setfrontcolor [color hex]` and `>setbackcolor [color hex]`, this costs 250 Mekos.

#### Purchasing roles
- using Miki, it is possible for servers to set up roles to be obtainable by purchasing them with Mekos, you can see a list of all the roles a server has available using `>iamlist [page_number]`.
- A role that costs Mekos will display with a orange diamond emoji along with the cost, you can purchase the role using `>iam [role_name].
- An in-depth guide on setting up purchasable and other kinds of roles for your server can be found at https://miki.ai/guides/using-miki-role-configuration/

#### Marriage slots
- Marriage slots can be purchased with Mekos, you will begin with 5 slots and can purchase 5 more for a maximum of 10, Donators can purchase an extra 5 slots on top of this for a maximum of 15.
- Purchasing your first slot will cost 2,500 Mekos, however with each slot purchased the price will increase by 2,500.

#### Guild Bank
- Mekos can be donated to a servers guild bank using `>guildbank deposit [number]`, the guild can use these Mekos to upgrade their guild house to increase their `>weekly` multiplier.
- You are not able to withdraw Mekos from the guild bank once they have been deposited.

#### Giving to others
- You can give Mekos to other users using `>give [@User] [Amount]`