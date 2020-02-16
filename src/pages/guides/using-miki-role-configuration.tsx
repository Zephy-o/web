import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../../components/navbar"
import { FooterComponent } from "../../components/footer"
import { Head } from "../../components/head";
import { Button, Size, Color, Table, TableRow, TableHead, TableHeading, TableBody, TableCell, Container, CopyableCodeBlock } from "@veld/components"
import { AuthorCard } from "../../components/cards/author-card";
import { Icon, IconType } from "../../components/icon";

export default class TestPageDoNotEnter extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head/>
        <NavbarComponent />
        <Container>
                <div className="content">
                    <img src="https://cdn.miki.ai/web/landing/guides/title-roles-thing.png"/>
                    <h1>Using Miki’s Role Management Commands In Your Server!</h1>

                    <p>So, looking to configure some roles in your server? Great! This guide will explain each command involved in configuring and obtaining roles using Miki, as well as go through some Discord features such as setting up permissions within your server. After reading this, you will have the necessary knowledge to set up a variety of different role configurations and know how to opt in or out of available roles. Before we start; make sure you already have Miki in your Discord server if you’d like to follow along and try things out for yourself!</p>

                    <div className="section hero is-small is-dark is-textured">
                        <div className="hero-body">
                            <h2 className="title"><i className="icon fas fa-info"></i> Don't have Miki yet?</h2>
                            <Button className="seperated"
                                href="/invite?ref=miki_ai" 
                                size={Size.LARGE} 
                                color={Color.DARK} 
                                value="Invite Miki here!"
                                icon="fab fa-discord"
                            />
                        </div>
                    </div>

                    <h2> In this guide we will be showing you</h2>
                    <ul>
                        <li>How the role commands work</li>
                        <li>How to prepare your server for role management</li>
                        <li>How to use arguments to configure roles</li>
                    </ul>

                    <h2>Role commands</h2>
                    <p>Before we get into configuring roles, let’s take a look at all of the commands you’ll need to know beforehand!</p>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeading>
                                    Commands
                                </TableHeading>
                                <TableHeading>
                                    Description
                                </TableHeading>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    >configrole <code>[role_name]</code> <code>[arguments]</code>
                                </TableCell>
                                <TableCell>
                                    Used to configure roles and set their requirements, can only be used by people with permission to manage roles. Role names made up of multiple words must be surrounded with quotation marks</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                >iamlist <code>[page_number]</code>
                                </TableCell>
                                <TableCell>
                                Will display a list of roles obtainable using >iam <code>[role_name]</code> as well as their requirements
                                   <ul>
                                        <li>
                                            <i className="fas fa-star"/> : minimum level required
                                        </li>
                                        <li>
                                            <i className="fas fa-hammer"/> : role required
                                        </li>
                                        <li>
                                            <i className="fas fa-diamond"/> : Cost of role in Mekos
                                        </li>
                                   </ul>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    >iam <code>[role_name]</code>
                                </TableCell>
                                <TableCell>
                                    will allow you to <b>opt in</b> to an optable role, giving you the role. This will only work if you meet the requirements of the role.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    >iamnot <code>[role_name]</code>
                                </TableCell>
                                <TableCell>
                                    will allow you to <b>opt out</b> of an optable role that you have already obtained, removing the role from you.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <h2>Example of Command Usage</h2>

                    <p>In this example, we will use the role “Blue”, which will be optable and will give the user a blue color role.
                    First, the role will need to be configured using the >configrole command (we will go into further detail on this command later.)</p>

                    <img src="https://cdn.miki.ai/web/landing/guides/using-role-config-1.png"/>

                    <p>Once the role is configured as optable, it will appear on the >iamlist with its requirement displayed in the form of emotes.</p>

                    <img src="https://cdn.miki.ai/web/landing/guides/using-role-config-2.png"/>
                    <p><i>This role displays no emotes because it has no requirements.</i></p>

                    <p>Now that the role is optable, it can be gained using >iam <code>[role_name]</code></p>
                    
                    <div className="columns">
                        <div className="column">
                            <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-3.png"/>
                        </div>
                        <div className="column">
                            <img className="image is-rounded" src="https://cdn.miki.ai/web/landing/guides/using-role-config-4.png"/>
                        </div>
                    </div>

                    <p>To opt out of the role, use >iamnot <code>[role_name]</code></p>

                    <div className="columns">
                        <div className="column">
                            <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-5.png"/>
                        </div>
                        <div className="column">
                            <img className="image is-rounded" src="https://cdn.miki.ai/web/landing/guides/using-role-config-6.png"/>
                        </div>
                    </div>

                    <h2>Preparing your server</h2>
                    <p>Before a role can be configured, it needs to be created first. To create roles within your server you have to navigate to the role tab within the server settings, here you will be able to create new roles and edit any existing roles.</p>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-10.png"/>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-11.png"/>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-12.png"/>
                    <h2>Permissions</h2>

                    <h3>What are permissions?</h3>
                    <p>Permissions are used within a discord server to give members or bots access to certain features. permissions are given to people through roles, each role can have a different set of permissions, however if a user has multiple roles their permissions will be inherited from their highest role.</p>

                    <p>Miki needs the "Manage Roles" permission in order to access the Discord servers roles. You can give Miki access to this permission by navigating to Miki’s role in server settings and enabling 'Manage Roles'.</p>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-13.png"/>

                    <p>The 'Manage Roles' permission will only give Miki authority to manage roles underneath her role in the role hierarchy, therefore any roles you intend to configure will need to be below her role, you can drag roles up or down the hierarchy to change their position.</p>

                    <h2>Configuration</h2>
                    <p>Now you're ready to configure some roles! Let's take a look at the commands associated with role management and the different arguments available to use when configuring roles.</p>

                    <h3>Arguments</h3>
                    <p>There are multiple ways you can configure a role, each of these arguments will change the way the role is obtained by your members.</p>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeading>
                                    Argument
                                </TableHeading>
                                <TableHeading>
                                    Description
                                </TableHeading>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    -automatic:(true/false)
                                </TableCell>
                                <TableCell>
                                    This sets whether the command is automatically given to the person once they reach the requirements of the role.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                -optable:(true/false)
                                </TableCell>
                                <TableCell>
                                This sets whether the role is displayed on <code>>iamlist</code> and obtained by using <code>>iam role</code> if the person meets the requirements.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                -role-required:(role name)
                                </TableCell>
                                <TableCell>
                                This is used to define any roles the person must already have to obtain the role.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                -level-required:(number)
                                </TableCell>
                                <TableCell>
                                This sets the minimum local level a person requires to obtain the role.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                -price:(amount)
                                </TableCell>
                                <TableCell>
                                This sets the amount of mekos the person must pay to obtain the role (Nobody gets the Mekos)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <h2>Recommended ways to use Miki’s role system</h2>
                    <p>Even though you’re completely free to use Miki and her role system; we would like to give you some inspiration of what you can do with these role configurations!</p>

                    <h3>Roles for level ups</h3>
                    <p>This role configuration will make it so that whenever a user reaches <b>level 5</b> on your Discord server, they will get the specific role! This can be used to reward users that are being active, and whenever they level up to the required level, Miki will automatically give this role to the user.</p>

                    <p>There’s two different arguments you need: <b>Automatic</b> and <b>Level-Required</b>. </p>
                    <ul>
                        <li><b>Automatic</b> is needed so that when your discord members are level 5, they will automatically get the role!</li>
                        <li><b>Level-Required</b> is needed to lock away the role from people below level 5. It would be unfair if anyone could just get it without being level 5.</li>
                    </ul>

                    <p>To create this role use the following command.</p>
                    <CopyableCodeBlock value={">configrole <role_name> -automatic:true -level-required:5"}/>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-7.png"/>

                    <h3>Optable roles</h3>
                    <p>This is a very common, and easy way to freely create roles that can be obtained by anyone. This is super easy to use for roles such as hobbies, colours, and similar kinds of roles.</p>
                    <p>What Optable does is allow people to use this role in >iam and >iamnot, and they will appear in the >iamlist. This is mostly for commands that people should be free to take or not, whichever they want.</p>
                    <p>To create this role use the following command.</p>
                    <CopyableCodeBlock value={">configrole <role_name> -optable:true"}/>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-8.png"/>

                    <h3>Twitch subscriber roles</h3>
                    <p>If you’re a creator on Twitch, Patreon, etc. Miki can allow your supporters to have special roles. This can be super convenient, because on occasion you might want to have users have extra rewards on your server, but still have then pick between different ones.</p>
                    <p>For example, you can have default colours which your Discord members can freely choose, and then for supporters; you can have prettier, hand-picked colours, to let them brag in the chat.</p>

                    <p>There’s two different arguments you need: <b>Optable</b> and <b>Role-Required</b>.</p>
                    <ul>
                        <li><b>Optable</b> allows people to use this role in <code>>iam</code> and <code>>iamnot</code>, and they will appear in the >iamlist. This is mostly for commands that people should be free to take or not, whichever they want.</li>
                        <li><b>Role-Required </b> is used to have another role be a requirement before users can opt-in to this role. This can be any role in your Discord server.</li>
                    </ul>

                    <p>To create this role use the following command.</p>
                    <CopyableCodeBlock value={">configrole <role_name> -optable:true -role-required:\"twitch subscriber\""}/>
                    <img className="image" src="https://cdn.miki.ai/web/landing/guides/using-role-config-9.png"/>

                    <br/>
                    <p>We hope this guide has helped you use Miki’s role system to set up some roles for you and your members to use! Still have some questions? Why not join our discord server, we have an amazing community of Miki users to meet and our staff would be happy to answer any questions!</p>

                    <h2>Guide created by</h2>
                </div>

                <div className="is-flex">
                    <AuthorCard
                        name="Zephy"
                        title="Writer"
                        avatarUrl="https://cdn.miki.ai/avatars/355969214806360076.png"/>
                    <AuthorCard
                        name="Veld"
                        title="Editor"
                        avatarUrl="https://cdn.miki.ai/avatars/121919449996460033.png"/>
                </div>
        </Container>

        <div className="section hero is-small is-dark">
            <div className="hero-body">
                <Container>
                    <h2 className="title"><i className="fad fa-comment-dots"></i> Still not sure about a feature?</h2>
                    <p className="subtitle"> Join the Miki server and 
                        let our experiences Miki volunteers and developers assist you!</p>
                    <Button className="seperated"
                        href="/invite?ref=miki_ai" 
                        size={Size.LARGE} 
                        color={Color.INFO} 
                        value="Get support"
                        icon="fab fa-discord"
                    />
                    <Button className="seperated"
                        isOutlined
                        href="https://github.com/Mikibot/bot/wiki"
                        value="Visit the wiki!"
                        size={Size.LARGE}
                        color={Color.LIGHT}
                        icon="fad fa-books"
                    />
                </Container>
            </div>
        </div>
        
        <FooterComponent />
      </div>
    )
  }
}
