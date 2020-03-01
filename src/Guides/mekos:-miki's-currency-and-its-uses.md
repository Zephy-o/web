---
title: "Mekos: Miki's currency and its uses"
thumbnailUrl: "https://cdn.miki.ai/web/landing/guides/Mekos/MekosThumbnail.png"
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
When using Miki you will frequently come across the word 'mekos' being used, mekos are the currency used throughout Miki's economy and can be gained and spent in many different ways. In this guide we will be taking a look at:

- How mekos can be gained
- Gambling with mekos
- How mekos can be spent

## **How can mekos be gained?**
Mekos can be consistently gained through the following commands:

 #### >Daily
 - Daily can be used every 24 hours to gain mekos. The base amount of mekos gained through daily is 100, however this will increase by 20 for every consecutive day that you claim your daily.
 - If 48 hours pass since your last daily claim, your streak will end and your daily will reset back to 100 mekos.
 - Donators receive double the amount from daily, meaning they will begin by gaining 200 mekos which will increase by 40 mekos for each consecutive day claimed.
 - The maximum amount you can gain from a daily streak is 2,100 mekos per day (4,200 for Donators), this is achieved after accumulating a streak of 100 days.
 #### >Weekly 
- Weekly can be used once per week per server. Weekly will only work if the server has an active rival and your guild has more experience than its rival. A rival can be gained using `>guildnewrival`, however only people with the `Manage Server` permission can change the rival.
- The amount gained from weekly is dependant on the level of the server's guild and the tier of guild house the guild currently has. The current guild house level and weekly multiplier can be viewed using `>guildhouse`, this will also display the cost of upgrading the guild house to the next tier.
- The guild house can be upgraded using `>guildupgrade house`, upgrading the guild house will increase the weekly multiplier, however only people with the `Manage Server` permission can upgrade this. To upgrade the guild house the guild bank must contain enough mekos, you can view the amount of mekos in the guild bank using `>guildbank balance` and deposit mekos into the guild bank using `>guildbank deposit [number]`.

#### Voting on top.gg
Another way to gain mekos is to vote for Miki on [Top.gg](https://top.gg/bot/miki)
- You can vote for the bot every 12 hours. After voting you will receive a direct message from Miki stating the amount of mekos you have received for voting.
- The base amount of mekos gained from voting is 100, this increases by 100 mekos for each consecutive day of voting up to a maximum of 10,000 mekos per vote after obtaining a 100 day streak. Failing to vote for 24 hours will end the streak.
- Donators will receive double the amount from voting, this means they will begin by gaining 200 mekos, which will increase by 200 for each consecutive vote up to a maximum of 20,000 per vote.

## **How can I gamble with my mekos?**
There are a variety of different games you can play to gamble with your mekos, the following are the gambling commands currently available:

| Commands | Description | Max Bet | Payout |
|---|---|---|---|
| `>blackjack new [Bet_Amount] ok` <br> `>bj new [Bet_Amount] ok` | Play against Miki in a game of blackjack! | 1,000,000 | Double your bet |
| `>slots [Bet_Amount]` <br> `>s [Bet_Amount]` | Try your luck on the slot machine! | 99,999 | Dependant on Payline |
| `>flip [Bet_Amount] [tails/heads]` <br> `>flip [Bet_Amount] [t/h]` | Flip a coin, guess the correct side to win. | 10,000 | Double your bet |
| `>rps [Bet_Amount] [rock/paper/scissors]` <br> `>rps [Bet_Amount] [r/p/s]` | Play a game of Rock Paper Scissors. | 10,000 | Double your bet |

## What can mekos be spent on?

#### Experience card customisation
- There are 38 different backgrounds you can purchase with mekos, these backgrounds can be applied to your experience card, which is viewed using the `>exp` command.
- Using `>buybackground [number]` will display the chosen background along with its price, this will not actually purchase the background unless the purchase is confirmed.
- You can check your owned backgrounds using `>backgroundsowned` and apply a background to your experience card using `>setbackground [number]`.
- You can also change the front and back colors of your experience card using `>setfrontcolor [color hex]` and `>setbackcolor [color hex]`, this costs 250 mekos.

#### Purchasing roles
- Using Miki, it is possible for servers to set up roles to be obtainable by purchasing them with mekos, you can see a list of all the roles a server has available using `>iamlist [page_number]`.
- A role that costs mekos will display with a orange diamond emoji along with the cost. You can purchase the role using `>iam [role_name]`.
- An in-depth guide on setting up purchasable and other kinds of roles for your server can be found [here](https://miki.ai/guides/using-miki-role-configuration)

#### Marriage slots
- Marriage slots can be purchased with mekos. You will begin with 5 slots and can purchase 5 more for a maximum of 10 while Donators can purchase an extra 5 slots on top of this for a maximum of 15.
- Purchasing your first slot will cost 2,500 mekos, however with each slot purchased the price will increase by 2,500.

#### Guild Bank
- Mekos can be donated to a server's guild bank using `>guildbank deposit [number]` and the guild can use these mekos to upgrade their guild house to increase their `>weekly` multiplier.
- You are not able to withdraw mekos from the guild bank once they have been deposited.

#### Giving to others
- You can give mekos to other users using `>give [@user] [amount]`

We hope this guide has been helpful! If you have any further questions regarding any of Miki's features you can visit the [Miki Support server](https://discord.gg/39Xpj7K), where our support staff would be glad to assist you!
