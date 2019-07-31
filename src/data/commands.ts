export default [
  {
    name: "accounts",
    commands: [
      {
        name: "achievements",
        description: "Displays the list of achievements of an user",
        usages: [
          {
            usage: ">achievements",
            description: "Displays your achievements",
          },
          {
            usage: ">achievements [mention]",
            description:
              "Displays achievements of another user based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user",
              },
            ],
          },
          {
            usage: ">achievements [user id]",
            description:
              "Displays achievements of another user based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user",
              },
            ],
          },
        ],
      },
      {
        name: "backgroundsowned",
        description: "Displays backgrounds you own for '>exp'",
        usages: [
          {
            usage: ">backgroundsowned",
          },
        ],
      },
      {
        name: "buybackground",
        description: "Buy a background for '>exp'",
        usages: [
          {
            usage: ">buybackground <code>",
            parameters: [
              {
                name: "code",
                description: "Code of background you want",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "daily",
        descriptions:
          "Claim your daily mekos. Consecutive claims will result in bonus rewards",
        usages: [
          {
            usage: ">daily",
          },
        ],
      },
      {
        name: "exp",
        description: "Displays an image profile of experience",
        usages: [
          {
            usage: ">exp",
            description: "Displays your experience",
          },
          {
            usage: ">exp [mention]",
            description: "Displays experience of another user based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user",
              },
            ],
          },
          {
            usage: ">exp [user id]",
            description:
              "Displays experience of another user based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user",
              },
            ],
          },
        ],
      },
      {
        name: "give",
        description: "Give mekos to users",
        usages: [
          {
            usage: ">give <mention> [amount]",
            description: "Give mekos to user based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user",
                required: true,
              },
              {
                name: "amount",
                description: "Amount of mekos you want to give",
              },
            ],
          },
          {
            usage: ">give <user id> [amount]",
            description: "Give mekos to user based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user",
              },
              {
                name: "amount",
                description: "Amount of mekos you want to give",
              },
            ],
          },
        ],
      },
      {
        name: "leaderboards",
        description: "Displays the leaderboards",
        usages: [
          {
            usage: "leaderboards [type] [local] [page number]",
            parameters: [
              {
                name: "type",
                description:
                  "What to display. Ex. Type mekos to display top mekos",
              },
              {
                name: "local",
                description: "Type local to display server leaderboard",
              },
              {
                name: "page number",
                description: "Page of the leaderboard",
              },
            ],
          },
        ],
        aliases: ["lb", "leaderboard", "top"],
      },
      {
        name: "mekos",
        description: "Displays mekos of an user",
        usages: [
          {
            usage: ">mekos",
            description: "Displays your mekos",
          },
          {
            usage: ">mekos [mention]",
            description: "Displays mekos of another user based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user",
              },
            ],
          },
          {
            usage: ">mekos [user id]",
            description: "Displays mekos of another user based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user",
              },
            ],
          },
        ],
      },
      {
        name: "profile",
        description: "Displays general profile of an user",
        usages: [
          {
            usage: ">profile",
            description: "Displays your profile",
          },
          {
            usage: ">profile [mention]",
            description: "Displays profile of another user based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user",
              },
            ],
          },
          {
            usage: ">profile [user id]",
            description: "Displays profile of another user based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user",
              },
            ],
          },
        ],
      },
      {
        name: "rep",
        description: "Give reputation points to users",
        usages: [
          {
            usage: ">rep",
            description: "Displays reputation statistics",
          },
          {
            usage: ">rep [mention]... [amount]",
            description: "Give reputation points to user(s) based on mention",
            parameters: [
              {
                name: "mention",
                description: "Mention of user. Can be multiple",
              },
              {
                name: "amount",
                description: "Amount of reputation points you want to give",
              },
            ],
          },
          {
            usage: ">rep [user id]... [amount]",
            description:
              "Give reputation points to user(s) based on Discord ID",
            parameters: [
              {
                name: "user id",
                description: "Discord ID of user. Can be multiple",
              },
              {
                name: "amount",
                description: "Amount of reputation points you want to give",
              },
            ],
          },
        ],
      },
      {
        name: "setbackcolor",
        description: "Sets the back color of '>exp'",
        usages: [
          {
            usage: ">setbackcolor <hexcode>",
            parameters: [
              {
                name: "hexcode",
                description: "Hexcode of the color you want",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "setbackground",
        description: "Sets the background of '>exp'",
        usages: [
          {
            usage: ">setbackcolor <code>",
            parameters: [
              {
                name: "code",
                description: "Code of background",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "setfrontcolor",
        description: "Sets the front color of '>exp'",
        usages: [
          {
            usage: ">setfrontcolor <hexcode>",
            parameters: [
              {
                name: "hexcode",
                description: "Hexcode of the color you want",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "syncname",
        description: "Sync username to database",
        usages: [
          {
            usage: ">syncname",
          },
        ],
      },
    ],
  },
    {
        name: "actions",
        commands: [
            {
                name: "ask",
                description: "The act of asking",
                usages: [
                    {
                        usage: ">ask",
                        description: "Miki will ask you"
                    },
                    {
                        usage: ">ask [text]",
                        description: "Ask for something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to ask"
                            }
                        ]
                    }
                ]
            },
            {
                name: "bite",
                description: "The act of biting",
                usages: [
                    {
                        usage: ">bite",
                        description: "Miki will bite you"
                    },
                    {
                        usage: ">bite [text]",
                        description: "Bite someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to bite"
                            }
                        ]
                    }
                ]
            },
            {
                name: "cake",
                description: "The act of feeding cake",
                usages: [
                    {
                        usage: ">cake",
                        description: "Miki will feed you cake"
                    },
                    {
                        usage: ">cake [text]",
                        description: "Feed cake to someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to feed cake to"
                            }
                        ]
                    }
                ]
            },
            {
                name: "cuddle",
                description: "The act of cuddling",
                usages: [
                    {
                        usage: ">cuddle",
                        description: "Miki will cuddle you"
                    },
                    {
                        usage: ">cuddle [text]",
                        description: "Cuddle someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to cuddle"
                            }
                        ]
                    }
                ]
            },
            {
                name: "glare",
                description: "The act of glaring",
                usages: [
                    {
                        usage: ">glare",
                        description: "Miki will glare at you"
                    },
                    {
                        usage: ">glare [text]",
                        description: "Glare at someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to glare at"
                            }
                        ]
                    }
                ]
            },
            {
                name: "highfive",
                description: "The act of high-fiving",
                usages: [
                    {
                        usage: ">highfive",
                        description: "Miki will high-five you"
                    },
                    {
                        usage: ">highfive [text]",
                        description: "High-five someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to high-five"
                            }
                        ]
                    }
                ]
            },
            {
                name: "kiss",
                description: "The act of kssing",
                usages: [
                    {
                        usage: ">kiss",
                        description: "Miki will kiss you"
                    },
                    {
                        usage: ">kiss [text]",
                        description: "kiss someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to kiss"
                            }
                        ]
                    }
                ]
            },
            {
                name: "lick",
                description: "The act of licking",
                usages: [
                    {
                        usage: ">lick",
                        description: "Miki will lick you"
                    },
                    {
                        usage: ">lick [text]",
                        description: "Lick someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to lick"
                            }
                        ]
                    }
                ]
            },
            {
                name: "pat",
                description: "The act of patting",
                usages: [
                    {
                        usage: ">pat",
                        description: "Miki will pat you"
                    },
                    {
                        usage: ">pat [text]",
                        description: "Pat someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to pat"
                            }
                        ]
                    }
                ]
            },
            {
                name: "slap",
                description: "The act of punching",
                usages: [
                    {
                        usage: ">poke",
                        description: "Miki will punch you"
                    },
                    {
                        usage: ">poke [text]",
                        description: "Punch someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to punch"
                            }
                        ]
                    }
                ]
            },
            {
                name: "poke",
                description: "The act of poking",
                usages: [
                    {
                        usage: ">poke",
                        description: "Miki will poke you"
                    },
                    {
                        usage: ">poke [text]",
                        description: "Poke someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to poke"
                            }
                        ]
                    }
                ]
            },
            {
                name: "punch",
                description: "The act of punching",
                usages: [
                    {
                        usage: ">poke",
                        description: "Miki will punch you"
                    },
                    {
                        usage: ">poke [text]",
                        description: "Punch someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to punch"
                            }
                        ]
                    }
                ]
            },
            {
                name: "slap",
                description: "The act of slapping",
                usages: [
                    {
                        usage: ">slap",
                        description: "Miki will slap you"
                    },
                    {
                        usage: ">slap [text]",
                        description: "Slap someone/something",
                        parameters: [
                            {
                                name: "text",
                                description: "Who/what to slap"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "admin",
        commands: [
            {
                name: "ban",
                description: "Bans an user from the server",
                usages:[
                    {
                        usage: ">ban <mention> [reason]",
                        description: "Bans an user based on mention. Reason is optional",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for ban",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">ban <user id> [reason]",
                        description: "Bans an user based on Discord ID. Reason is optional",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for ban",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "clean",
                description: "Clean Miki's messages",
                usages: [
                    {
                        usage: ">clean <amount>",
                        parameters: [
                            {
                                name: "amount",
                                description: "Amount of message",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "kick",
                description: "Kicks an user from the server",
                usages:[
                    {
                        usage: ">kick <mention> [reason]",
                        description: "Kicks an user based on mention. Reason is optional",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for kick",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">kick <user id> [reason]",
                        description: "Kicks an user based on Discord ID. Reason is optional",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for kick",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "prune",
                description: "Prune messages based on arguments",
                usages: [
                    {
                        usage: ">prune <amount> [mention] [filter]",
                        parameters: [
                            {
                                name: "amount",
                                description: "Amount of message",
                                required: true
                            },
                            {
                                name: "mention",
                                description: "Mention of user"
                            },
                            {
                                name: "filter",
                                description: "Phrase you want to filter out. Must be in quotes"
                            }
                        ]
                    }
                ]
            },
            {
                name: "setevent",
                description: "Enable/Disable a command",
                usages:[
                    {
                        usage: ">setevent <command> 0 [-g]",
                        description: "Disables a command",
                        parameters: [
                            {
                                name: "command",
                                description: "Name of command",
                                required: true
                            },
                            {
                                name: "-g",
                                description: "Add '-g' at end on command to disable serverwide"
                            }
                        ]
                    },
                    {
                        usage: ">setevent <command> 1 [-g]",
                        description: "Enables a command",
                        parameters: [
                            {
                                name: "command",
                                description: "Name of command",
                                required: true
                            },
                            {
                                name: "-g",
                                description: "Add '-g' at end on command to enable serverwide"
                            }
                        ]
                    }
                ],
                aliases: ["setcommand"]
            },
            {
                name: "setmodule",
                description: "Enable/Disable a module",
                usages:[
                    {
                        usage: ">setmodule <module> 0 [-g]",
                        description: "Disables a module",
                        parameters: [
                            {
                                name: "module",
                                description: "Name of module",
                                required: true
                            },
                            {
                                name: "-g",
                                description: "Add '-g' at end on command to disable serverwide"
                            }
                        ]
                    },
                    {
                        usage: ">setevent <module> 1 [-g]",
                        description: "Enables a module",
                        parameters: [
                            {
                                name: "module",
                                description: "Name of module",
                                required: true
                            },
                            {
                                name: "-g",
                                description: "Add '-g' at end on command to enable serverwide"
                            }
                        ]
                    }
                ]
            },
            {
                name: "softban",
                description: "Softbans an user from the server",
                usages:[
                    {
                        usage: ">softban <mention> [reason]",
                        description: "Softbans an user based on mention. Reason is optional",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for softban",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">softban <user id> [reason]",
                        description: "Softbans an user based on Discord ID. Reason is optional",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of user",
                                required: true
                            },
                            {
                                name: "reason",
                                description: "Reason for softban",
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "anime",
        commands: [
            {
                name: "findanime",
                description: "Displays list of anime based on name",
                usages: [
                    {
                        usage: ">findanime <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of anime you want to look for",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "findcharacter",
                description: "Displays list of characters based on name",
                usages: [
                    {
                        usage: ">findcharacter <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of character you want to look for",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "findmanga",
                description: "Displays list of manga based on name",
                usages: [
                    {
                        usage: ">findmanga <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of manga you want to look for",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "getanime",
                description: "Displays top result of anime search",
                usages: [
                    {
                        usage: ">getanime <name>",
                        description: "Displays top result based on name",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of anime you want to look for",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">getanime <id>",
                        description: "Displays top result based on AniList ID",
                        parameters: [
                            {
                                name: "id",
                                description: "AniList ID",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "getcharacter",
                description: "Displays top result of character search",
                usages: [
                    {
                        usage: ">getcharacter <name>",
                        description: "Displays top result based on name",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of character you want to look for",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">getcharacter <id>",
                        description: "Displays top result based on AniList ID",
                        parameters: [
                            {
                                name: "id",
                                description: "AniList ID",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "getmanga",
                description: "Displays top result of manga search",
                usages: [
                    {
                        usage: ">getmanga <name>",
                        description: "Displays top result based on name",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of manga you want to look for",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">getmanga <id>",
                        description: "Displays top result based on AniList ID",
                        parameters: [
                            {
                                name: "id",
                                description: "AniList ID",
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "donator",
        commands: [
            {
                name: "box",
                description: "Displays the box meme",
                usages: [
                    {
                        usage: ">box [mention] [content]",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user"
                            },
                            {
                                name: "content",
                                description: "Message you want to put on box"
                            }
                        ]
                    }
                ]
            },
            {
                name: "disability",
                description: "Displays the disability meme",
                usages: [
                    {
                        usage: ">disability [mention]",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user"
                            }
                        ]
                    }
                ]
            },
            {
                name: "redeemkey",
                description: "Redeem a donator key for donator status",
                usages: [
                    {
                        usage: ">redeemkey <key>",
                        parameters: [
                            {
                                name: "key",
                                description: "Donator key",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "sellkey",
                description: "Sell an extra donator key for 30,000 mekos",
                usages: [
                    {
                        usage: ">sellkey <key>",
                        parameters: [
                            {
                                name: "key",
                                description: "Donator key",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "tohru",
                description: "Displays the Tohru meme",
                usages: [
                    {
                        usage: ">tohru [content]",
                        parameters: [
                            {
                                name: "content",
                                description: "Text of what you want to write"
                            }
                        ]
                    }
                ]
            },
            {
                name: "trapcard",
                description: "Displays the Trap Card meme",
                usages: [
                    {
                        usage: ">trapcard [mention]",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user"
                            }
                        ]
                    }
                ]
            },
            {
                name: "truth",
                description: "Displays the Cold Hard Truth meme",
                usages: [
                    {
                        usage: ">truth [content]",
                        parameters: [
                            {
                                name: "content",
                                description: "Text of what you want to write"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "eventmessages",
        commands: [
            {
                name: "setleavemessage",
                description: "Sets a farewell message for the channel",
                usages: [
                    {
                        usage: ">setleavemessage <text>",
                        parameters: [
                            {
                                name: "text",
                                description: "Text of the message",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "setwelcomemessage",
                description: "Sets a welcome message for the channel",
                usages: [
                    {
                        usage: ">setwelcomemessage <text>",
                        parameters: [
                            {
                                name: "text",
                                description: "Text of the message",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "testmessage",
                description: "Tests out either the welcome or farewell message",
                usages: [
                    {
                        usage: ">testmessage <type>",
                        parameters: [
                            {
                                name: "type",
                                description: "Type of message",
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "fun",
        commands: [
            {
                name: "8ball",
                description: "Push your luck by asking Miki specific questions",
                usages: [
                    {
                        usage: ">8ball [question]",
                        parameters: [
                            {
                                name: "question",
                                description: "The question you want Miki to answer",
                            }
                        ]
                    }
                ]
            },
            {
                name: "bird",
                description: "Posts an image of a bird",
                usages: [
                    {
                        usage: ">bird",
                    }
                ],
                aliases: ["birb"]
            },
            {
                name: "cage",
                description: "Posts an image of Nicholas Cage!",
                usages: [
                    {
                        usage: ">cage",
                    }
                ]
            },
            {
                name: "cat",
                description: "Posts cat pictures in your server",
                usages: [
                    {
                        usage: ">cat",
                    }
                ]
            },
            {
                name: "compliment",
                description: "Wholesome Miki will compliment you",
                usages: [
                    {
                        usage: ">compliment",
                    }
                ]
            },
            {
                name: "dog",
                description: "Posts an image of a dog",
                usages: [
                    {
                        usage: ">dog",
                    }
                ]
            },
            {
                name: "gif",
                description: "Posts a gif from Imgur",
                usages: [
                    {
                        usage: ">gif [search term]",
                        parameters: [
                            {
                                name: "search term",
                                description: "Anything related to the gif you'd like to see"
                            }
                        ]
                    }
                ]
            },
            {
                name: "greentext",
                description: "Posts a short story from 4chan",
                usages: [
                    {
                        usage: ">greentext"
                    }
                ],
                aliases: ["green", "gt"]
            },
            {
                name: "img",
                description: "Posts an image from Imgur",
                usages: [
                    {
                        usage: ">img [search term]",
                        parameters: [
                            {
                                name: "search term",
                                description: "Anything related to the image you'd like to see"
                            }
                        ]
                    }
                ]
            },
            {
                name: "pick",
                description: "Let Miki pick your life choices by giving her a list of things to pick from",
                usages: [
                    {
                        usage: ">pick <choice>...",
                        parameters: [
                            {
                                name: "choice",
                                description: "One of the choices you want miki to make! Use a comma to seperate the choices",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "pun",
                description: "Tells you a random pun",
                usages: [
                    {
                        usage: ">pun"
                    }
                ]
            },
            {
                name: "reminder",
                description: "Let Miki remind you of things",
                usages: [
                    {
                        usage: ">reminder -list",
                        description: "Shows all your open reminders"
                    },
                    {
                        usage: ">reminder -clear <id>",
                        description: "Removes an active reminder",
                        parameters: [
                            {
                                name: "id",
                                description: "The reminder ID; can be obtained from '>reminder -list'",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">reminder <reminder> in <time>",
                        description: "Creates a new reminder",
                        parameters: [
                            {
                                name: "reminder",
                                description: "What you want to be reminded of",
                                required: true
                            },
                            {
                                name: "time",
                                description: "Amount of time",
                                required: true
                            }
                        ]
                    }
                ],
                aliases: ["remind"]
            },
            {
                name: "roll",
                description: "Miki rolls a dice for you!",
                usages: [
                    {
                        usage: ">roll [number]",
                        parameters: [
                            {
                                name: "number",
                                description: "The max Miki can roll; Default=100"
                            }
                        ]
                    },
                    {
                        usage: ">roll [expression]",
                        parameters: [
                            {
                                name: "expression",
                                description: "More advanced rolls; use math in your rolls. (e.x. '>roll 2d4 + 2' rolls two dices with four sides and adds two to the final roll)"
                            }
                        ]
                    }
                ]
            },
            {
                name: "safe",
                description: "Posts a safe image from Safebooru",
                usages: [
                    {
                        usage: ">safe [tags]",
                        description: "Find a random picture that follows the tags",
                        parameters: [
                            {
                                name: "tags",
                                description: "A tag from safebooru; use a - in front of it to exclude the tag. (e.g. -glasses). Separate tags with a space"
                            }
                        ]
                    }
                ]
            },
            {
                name: "ship",
                description: "Check your compatibility with someone",
                usages: [
                    {
                        usage: ">ship <mention>",
                        parameters: [
                            {
                                name: "mention",
                                description: "User you'd like to ship with"
                            }
                        ],
                        required: true
                    },
                    {
                        usage: ">ship <user id>",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of the user you'd like to ship with"
                            }
                        ],
                        required: true
                    }
                ]
            },
        ]
    },
    {
        name: "gambling",
        commands: [
            {
                name: "blackjack",
                description: "Play a game of blackjack against Miki",
                usages: [
                    {
                        usage: ">blackjack new <bet> [ok]",
                        description: "Starts a new blackjack session with Miki",
                        parameters: [
                            {
                                name: "new",
                                constant: true
                            },
                            {
                                name: "bet",
                                description: "Amount of mekos you want to bet",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">blackjack hit",
                        description: "Draw a card",
                        parameters: [
                            {
                                name: "hit",
                                constant: true
                            }
                        ]
                    },
                    {
                        usage: ">blackjack stay",
                        description: "Stand your current score before Miki tries to beat it",
                        parameters: [
                            {
                                name: "stay",
                                constant: true
                            }
                        ]
                    }
                ],
                aliases: ["bj"]
            },
            {
                name: "flip",
                description: "Flip a coin to win mekos!",
                usages: [
                    {
                        usage: ">flip <bet> <side> <ok>",
                        description: "Starts a new game with Miki",
                        parameters: [
                            {
                                name: "bet",
                                description: "Amount of mekos you want to bet",
                                required: true
                            },
                            {
                                name: "side",
                                description: "Side of the coin you want to bet on. Can only be heads or tails",
                                required: true
                            },
                            {
                                name: "ok",
                                description: "You need to add 'ok' if you're planning on betting over 10,000 mekos"
                            }
                        ]
                    }
                ]
            },
            {
                name: "rps",
                description: "Play rock papers scissors against Miki!",
                usages: [
                    {
                        usage: ">flip <bet> <choice> [ok]",
                        description: "Start a new game with Miki",
                        parameters: [
                            {
                                name: "bet",
                                description: "Amount of mekos you want to bet",
                                required: true
                            },
                            {
                                name: "choice",
                                description: "Can only be rock, paper or scissors",
                                required: true
                            },
                            {
                                name: "ok",
                                description: "You need to add 'ok' if you're planning on betting over 10,000 mekos"
                            }
                        ]
                    }
                ]
            },
            {
                name: "slots",
                description: "Play the slot machine with Miki!",
                usages: [
                    {
                        usage: ">slots <bet> [ok]",
                        description: "Starts a new game with Miki",
                        parameters: [
                            {
                                name: "bet",
                                description: "Amount of mekos you want to bet",
                                required: true
                            },
                            {
                                name: "ok",
                                description: "You need to add 'ok' if you're planning on betting over 10,000 mekos"
                            }
                        ]
                    }
                ],
                aliases: ["s"]
            }
        ]
    },
    {
        name: "gaming",
        commands: [
            {
                name: "ctb",
                description: "Shows your osu! catch the beat statistics!",
                usages: [
                    {
                        usage: ">ctb <username>",
                        description: "Get the catch the beat statistics of 'username'!",
                        parameters: [
                            {
                                name: "username",
                                description: "The osu! username you'd like to see stats from",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "mania",
                description: "Shows your osu! mania statistics!",
                usages: [
                    {
                        usage: ">mania <username>",
                        description: "Get the mania statistics of 'username'!",
                        parameters: [
                            {
                                name: "username",
                                description: "The osu! username you'd like to see stats from",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "osu",
                description: "Shows your osu! standard statistics!",
                usages: [
                    {
                        usage: ">osu <username>",
                        description: "Get the osu statistics of 'username'!",
                        parameters: [
                            {
                                name: "username",
                                description: "The osu! username you'd like to see stats from",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "taiko",
                description: "Shows your osu! taiko statistics!",
                usages: [
                    {
                        usage: ">taiko <username>",
                        description: "Get the taiko statistics of 'username'!",
                        parameters: [
                            {
                                name: "username",
                                description: "The osu! username you'd like to see stats from",
                                required: true
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "general",
        commands: [
            {
                name: "avatar",
                description: "Don't want to lose your current avatar while you swap to a new one? Use this command!",
                usages: [
                    {
                        usage: ">avatar",
                        description: "Get your own avatar!"
                    },
                    {
                        description: "Get someone else's avatar!",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of the user"
                            }
                        ]
                    },
                    {
                        description: "Get someone else's avatar!",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of the user"
                            }
                        ]
                    }
                ]
            },
            {
                name: "calc",
                description: "Solve math with Miki's technical calculator",
                usages: [
                    {
                        usage: ">calc <expression>",
                        description: "Calculates a mathematical expression",
                        parameters: [
                            {
                                name: "expression",
                                description: "An example of an expression would be '1+1'",
                                required: true
                            }
                        ]
                    }
                ],
                aliases: [ "calculate" ]
            },
            {
                name: "changelog",
                description: "Gives you a link to Miki's blog! Including news, events and more about Miki!",
                usages: [
                    {
                        usage: ">changelog",
                        description: "Displays the blog link"
                    }
                ]
            },
            {
                name: "donate",
                description: "Support this magnificent bot! We really need all the help to stay alive!",
                usages: [
                    {
                        usage: ">donate",
                        description: "Displays donation information"
                    }
                ],
                aliases: ["patreon"]
            },
            {
                name: "giveaway",
                description: "Creates a giveaway for your community to enter",
                usages: [
                    {
                        usage: ">giveaway <text> [-time:{time}] [-amount:{amount}]",
                        description: "Starts a giveaway",
                        parameters: [
                            {
                                name: "text",
                                description: "Object you want to give away",
                                required: true
                            },
                            {
                                name: "time",
                                description: "Set the time with a shorthand time-only schedule (ex. 2h15m for 2 hours and 15 minutes), Default = 1h",
                            },
                            {
                                name: "amount",
                                description: "Set the amount of winners of the giveaway as a number. Default = 1",
                            }
                        ]
                    }
                ]
            },
            {
                name: "guildinfo",
                description: "Shows information about the current Discord server",
                usages: [
                    {
                        usage: ">guildinfo",
                        description: "Displays information about the guild"
                    }
                ]
            },
            {
                name: "help",
                description: "Shows general help of commands",
                usages: [
                    {
                        usage: ">help",
                        description: "DMs you a list of commands"
                    },
                    {
                        usage: ">help [command name]",
                        description: "Shows more information based on parameter 'command name'",
                        parameters: [
                            {
                                name: "command name",
                                description: "Any command name available for Miki",
                            }
                        ]
                    }
                ]
            },
            {
                name: "info",
                description: "Shows general info about Miki",
                usages: [
                    {
                        usage: ">info",
                        description: "Shows you Miki's credits and version"
                    }
                ],
                aliases: ["about"]
            },
            {
                name: "invite",
                description: "Gets an invite for Miki",
                usages: [
                    {
                        usage: ">invite",
                        description: "Add Miki to your server with this URL!"
                    }
                ]
            },
            {
                name: "ping",
                description: "Gets ping information from Miki",
                usages: [
                    {
                        usage: ">ping",
                        description: "Displays latency based on message timestamps"
                    }
                ],
                aliases: ["lag"]
            },
            {
                name: "prefix",
                description: "Shows your current prefix on the server",
                usages: [
                    {
                        usage: ">prefix",
                        description: "Displays the prefix"
                    }
                ]
            },
            {
                name: "stats",
                description: "Get a link to Miki's low-level statistics",
                usages: [
                    {
                        usage: ">stats",
                        description: "Displays general statistics"
                    }
                ]
            },
            {
                name: "urban",
                description: "Define a word based on UrbanDictionary",
                usages: [
                    {
                        usage: ">urban <word>",
                        parameters: [
                            {
                                name: "word",
                                description: "Word you'd like to know the definition of",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "whois",
                description: "Displays information of an user, such as creation date",
                usages: [
                    {
                        usage: ">whois <mention>",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of the user you'd like to know more about",
                                required: true
                            }
                        ]
                      },
                      {
                        usage: ">whois <user id>",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of the user you'd like to know more about",
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "guild_accounts",
        commands: [
            {
                name: "guildbank",
                description: "Displays information for the bank of your guild. Mekos in the bank can be used to upgrade your guild",
                usages: [
                    {
                        usage: ">guildbank deposit <amount>",
                        description: "Deposit a certain amount of mekos into the guild bank",
                        parameters: [
                            {
                                name: "amount",
                                description: "Amount of mekos",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">guildbank balance",
                        description: "Displays the amount of mekos stored in the bank"
                    }
                ]
            },
            {
                name: "guildconfig",
                description: "Set up your guild the way you'd like it to function",
                usages: [
                    {
                        usage: ">guildconfig visible <boolean>",
                        description: "Configurate whether your guild would be visible on the leaderboards",
                        parameters: [
                            {
                                name: "boolean",
                                description: "Type either yes or no",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">guildconfig expneeded <exp>",
                        description: "Configurate the amount of experience required for guild members to claim '>guildweekly'",
                        parameters: [
                            {
                                name: "exp",
                                description: "Amount of experience",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "guildhouse",
                description: "Displays information of how upgraded your guild is",
                usages: [
                    {
                        usage: ">guildhouse",
                        description: "Displays your current weekly bonus and tier of your guild"
                    }
                ]
            },
            {
                name: "guildnewrival",
                description: "Rivals your guild with another guild",
                usages: [
                    {
                        usage: ">guildnewrival",
                        description: "Matches your guild with a new guild"
                    }
                ]
            },
            {
                name: "guildprofile",
                description: "Displays information about your guild",
                usages: [
                    {
                        usage: ">guildprofile",
                        description: "Displays a profile of your guild"
                    }
                ]
            },
            {
                name: "guildupgrade",
                descriptions: "Upgrade your guild to increase your '>guildweekly' rewards",
                usages: [
                    {
                        usage: ">guildupgrade <tier>",
                        description: "Upgrade your guild to a higher tier",
                        parameters: [
                            {
                                name: "tier",
                                description: "Tier you want to upgrade to",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "guildweekly",
                description: "If you are winning against your rival, you get mekos for the week",
                usages: [
                    {
                        usage: ">guildweekly",
                        description: "Claim your weekly rewards"
                    }
                ],
                aliases: ["weekly"]
            }
        ]
    },
    {
        name: "marriage",
        commands: [
            {
                name: "acceptmarriage",
                description: "Accept a marriage proposal",
                usages: [
                    {
                        usage: ">acceptmarriage <mention>",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of user"
                            }
                        ],
                        required: true
                    },
                    {
                        usage: ">acceptmarriage <user id>",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of user"
                            }
                        ],
                        required: true
                    }
                ]
            },
            {
                name: "buymarriageslot",
                description: "Buy an extra marriage slot using mekos",
                usages:[
                    {
                        usage: ">buymarriageslot",
                        description: "Use mekos to buy a new marriage slot"
                    }
                ]
            },
            {
                name: "cancelmarriage",
                description: "Cancel a marriage proposal you sent",
                usages: [
                    {
                        usage: ">cancelmarriage",
                        description: "Displays all the proposals you sent"
                    },
                    {
                        usage: ">cancelmarriage <number>",
                        description: "Cancel a specific proposal you sent",
                        parameters: [
                            {
                                name: "number",
                                description: "Position of sent proposal",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "declinemarriage",
                description: "Decline a marriage proposal sent by an user",
                usages: [
                    {
                        usage: ">declinemarriage",
                        description: "Displays all the proposals you received"
                    },
                    {
                        usage: ">declinemarriage <number>",
                        description: "Decline a specific proposal you received",
                        parameters: [
                            {
                                name: "number",
                                description: "Position of received proposal",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "divorce",
                description: "Divorce someone you are married to",
                usages: [
                    {
                        usage: ">divorce",
                        description: "Displays all your spouses"
                    },
                    {
                        usage: ">divorce <number>",
                        description: "Divorce a specific person",
                        parameters: [
                            {
                                name: "number",
                                description: "Position of spouse",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "marry",
                description: "Send a proposal to a specific person",
                usages: [
                    {
                        usage: ">marry <mention>",
                        description: "Send a proposal to a specific user",
                        parameters: [
                            {
                                name: "mention",
                                description: "Mention of the user",
                                required: true
                            }
                        ]
                    },
                    {
                        usage: ">marry <user id>",
                        description: "Send a proposal to a specific user",
                        parameters: [
                            {
                                name: "user id",
                                description: "Discord ID of the user",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "showproposals",
                description: "Shows the proposals you sent and received",
                usages: [
                    {
                        usage: ">showproposals",
                        description: "Displays list of proposals"
                    }
                ]
            }
        ]
    },
    {
        name: "nsfw",
        commands: [
            {
                name: "e621",
                description: "Posts an image from e621",
                usages: [
                    {
                        usage: ">e621 [tags]",
                        description: "Find a random picture that follows the tags",
                        parameters: [
                            {
                                name: "tags",
                                description: "A tag from e621; use a - in front of it to exclude the tag. (e.g. -glasses). Separate tags with a space"
                            }
                        ]
                    }
                ]
            },
            {
                name: "gelbooru",
                description: "Posts an image from Gelbooru",
                usages: [
                    {
                        usage: ">gelbooru [tags]",
                        description: "Find a random picture that follows the tags",
                        parameters: [
                            {
                                name: "tags",
                                description: "A tag from Gelbooru; use a - in front of it to exclude the tag. (e.g. -glasses). Separate tags with a space"
                            }
                        ]
                    }
                ],
                aliases: ["gel"]
            },
            {
                name: "rule34",
                description: "Posts an image from Rule 34",
                usages: [
                    {
                        usage: ">rule34 [tags]",
                        description: "Find a random picture that follows the tags",
                        parameters: [
                            {
                                name: "tags",
                                description: "A tag from Rule 34; use a - in front of it to exclude the tag. (e.g. -glasses). Separate tags with a space"
                            }
                        ]
                    }
                ],
                aliases: ["r34"]
            },
            {
                name: "yandere",
                description: "Posts an image from yande.re",
                usages: [
                    {
                        usage: ">yandere [tags]",
                        description: "Find a random picture that follows the tags",
                        parameters: [
                            {
                                name: "tags",
                                description: "A tag from yande.re; use a - in front of it to exclude the tag. (e.g. -glasses). Separate tags with a space"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "pasta",
        commands: [
            {
                name: "createpasta",
                description: "Creates a new pasta",
                usages: [
                    {
                        usage: ">createpasta <name> <content>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of the pasta. Multiple words should be in quotes",
                                required: true
                            },
                            {
                                name: "content",
                                description: "Content of the pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "deletepasta",
                description: "Deletes a pasta if you created it",
                usages: [
                    {
                        usage: ">deletepasta <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of the pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "editpasta",
                description: "Edits a pasta you created",
                usages: [
                    {
                        usage: ">editpasta <name> <new content>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of the pasta. Multiple words should be in quotes",
                                required: true
                            },
                            {
                                name: "new content",
                                description: "New content you want for the pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "hatedpasta",
                description: "Displays list of pastas you hate",
                usages: [
                    {
                        usage: ">hatedpasta"
                    }
                ],
                aliases: ["hatedpastas", "hatepastalist"]
            },
            {
                name: "hatepasta",
                description: "Hate a pasta",
                usages: [
                    {
                        usage: ">hatepasta <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "infopasta",
                description: "Displays information of pasta, such as creation date",
                usages: [
                    {
                        usage: ">infopasta <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "lovedpasta",
                description: "Displays list of pastas you like",
                usages: [
                    {
                        usage: ">lovedpasta"
                    }
                ],
                aliases: ["lovedpastas", "favouritepastas", "lovepastalist"]
            },
            {
                name: "lovepasta",
                description: "Like a pasta",
                usages: [
                    {
                        usage: ">lovepasta <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of pasta"
                            }
                        ]
                    }
                ]
            },
            {
                name: "mypasta",
                description: "Displays all the pasta you created",
                usages: [
                    {
                        usage: ">mypasta"
                    }
                ]
            },
            {
                name: "pasta",
                description: "Displays content of an existing pasta",
                usages: [
                    {
                        usage: ">pasta <name>",
                        parameters: [
                            {
                                name: "name",
                                description: "Name of the pasta",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "searchpasta",
                description: "Search pasta based on term",
                usages: [
                    {
                        usage:">searchpasta <term>",
                        parameters: [
                            {
                                name: "term",
                                description: "What you want to search",
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "reactions",
        commands: [
            {
                name: "confused",
                description: "Display a confused reaction image",
                usages: [
                    {
                        usage: ">confused"
                    }
                ]
            },
            {
                name: "cry",
                description: "Display a crying reaction image",
                usages: [
                    {
                        usage: ">cry"
                    }
                ]
            },
            {
                name: "lewd",
                description: "Display a lewd reaction image",
                usages: [
                    {
                        usage: ">lewd"
                    }
                ]
            },
            {
                name: "pout",
                description: "Display a pouting reaction image",
                usages: [
                    {
                        usage: ">pout"
                    }
                ]
            },
            {
                name: "smug",
                description: "Display a smug reaction image",
                usages: [
                    {
                        usage: ">smug"
                    }
                ]
            },
            {
                name: "stare",
                description: "Display a staring reaction image",
                usages: [
                    {
                        usage: ">stare"
                    }
                ]
            }
        ]
    },
    {
        name: "role management",
        commands: [
            {
                name: "configrole",
                description: "Configurates a role for the server",
                usages: [
                    {
                        usage: ">configrole <role> [arguments]",
                        description: "Set a role to be purchasable, self-assignable and etc",
                        parameters: [
                            {
                                name: "role",
                                description: "Name of role. Must be in quotes",
                                required: true
                            },
                            {
                                name: "-automatic",
                                description: "Sets whether the role is given when the person levels up. Ex. '-automatic:true'"
                            },
                            {
                                name: "-optable",
                                description: "Sets whether the role will be displayed in '>iamlist'. Ex. '-optable:true'"
                            },
                            {
                                name: "-level-required",
                                description: "Sets level requirement to obtain. Ex. '-level-required:10'"
                            },
                            {
                                name: "-role-required",
                                description: "Sets what other role is required to obtain the role. Ex. '-role-required:User'"
                            },
                            {
                                name: "-price",
                                description: "Sets amount of mekos needed to buy the role. Ex. '-price:50000'"
                            }
                        ]
                    }
                ]
            },
            {
                name: "iam",
                description: "Give yourself roles from '>iamlist'",
                usages: [
                    {
                        usage: ">iam <role>",
                        parameters: [
                            {
                                name: "role",
                                description: "Name of role from '>iamlist'",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "iamnot",
                description: "Deassign a role from yourself",
                usages: [
                    {
                        usage: ">iamnot <role>",
                        parameters: [
                            {
                                name: "role",
                                description: "Name of role from '>iamlist'",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "iamlist",
                description: "List of self-assignable roles",
                usages: [
                    {
                        usage: ">iamlist"
                    }
                ]
            }
        ]
    },
    {
        name: "settings",
        commands: [
            {
                name: "listlocale",
                descriptions: "Displays the list of all available languages",
                usages: [
                    {
                        usage: ">listlocale"
                    }
                ]
            },
            {
                name: "setnotifications",
                description: "Configurate Miki notifications for the server",
                usages: [
                    {
                        usage: ">setnotifications <type> <value>",
                        parameters: [
                            {
                                name: "type",
                                description: "Type of notification",
                                required: true
                            },
                            {
                                name: "value",
                                description: "Whether notifications will be displayed",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "setlocale",
                description: "Change the language of the bot to your preference",
                usages: [
                    {
                        usage: ">setlocale <locale>",
                        parameters: [
                            {
                                name: "locale",
                                description: "Language you want to change to",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "setprefix",
                description: "Change the prefix for the server",
                usages: [
                    {
                        usage: ">setprefix <prefix>",
                        parameters: [
                            {
                                name: "prefix",
                                description: "Prefix you want to change to",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "showmodule",
                description: "Shows what commands are enabled in the module for the channel",
                usages: [
                    {
                        usage: ">showmodule <module>",
                        parameters: [
                            {
                                name: "module",
                                description: "Name of module",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                name: "showmodules",
                description: "Show what modules are enabled for the channel",
                usages: [
                    {
                        usage: ">showmodules"
                    }
                ]
            },
            {
                name: "syncavatar",
                description: "Sync your avatar to the database",
                usages: [
                    {
                        usage: ">syncavatar"
                    }
                ]
            }
        ]
    }
]
